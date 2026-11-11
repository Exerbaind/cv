"""Build ATS-friendly PDF resumes from content.py.

    bun run resume                       # writes public/resume-en.pdf and public/resume-ru.pdf
    python3 scripts/resume/build.py out/ # or into another folder

Single column, plain text flow: every heading, company, role and date sits in
the text layer right before the bullets it belongs to, so parsers read the
document in the same order a person does.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

sys.path.insert(0, str(Path(__file__).resolve().parent))
from content import RESUMES  # noqa: E402

ROOT = Path(__file__).resolve().parents[2]

# Arial ships with macOS and covers Cyrillic. Override with RESUME_FONT_DIR if needed.
FONT_DIRS = [
    Path('/System/Library/Fonts/Supplemental'),
    Path('/Library/Fonts'),
    Path('/usr/share/fonts/truetype/msttcorefonts'),
]
FONTS = {'Body': 'Arial.ttf', 'Body-Bold': 'Arial Bold.ttf', 'Body-Italic': 'Arial Italic.ttf'}

INK = colors.HexColor('#16181d')
MUTED = colors.HexColor('#5b616e')
ACCENT = colors.HexColor('#3f6212')
LINE = colors.HexColor('#d5d8de')

LINK_RE = re.compile(r'\b((?:t\.me|github\.com|vecherly\.online|dsham\.me|pik\.ru)(?:/[\w./-]*[\w/])?)')
EMAIL_RE = re.compile(r'\b([\w.+-]+@[\w-]+\.[\w.]+)\b')


def register_fonts() -> None:
    import os

    dirs = [Path(os.environ['RESUME_FONT_DIR'])] if 'RESUME_FONT_DIR' in os.environ else FONT_DIRS
    for name, filename in FONTS.items():
        path = next((d / filename for d in dirs if (d / filename).exists()), None)
        if path is None:
            sys.exit(f'Font {filename} not found in {", ".join(map(str, dirs))}; set RESUME_FONT_DIR')
        pdfmetrics.registerFont(TTFont(name, str(path)))
    pdfmetrics.registerFontFamily('Body', normal='Body', bold='Body-Bold', italic='Body-Italic',
                                  boldItalic='Body-Bold')


def rich(text: str) -> str:
    """Escape text and turn visible URLs / emails into clickable links (the text stays as is)."""
    text = escape(text)
    text = LINK_RE.sub(lambda m: f'<a href="https://{m.group(1)}" color="#3f6212">{m.group(1)}</a>', text)
    text = EMAIL_RE.sub(lambda m: f'<a href="mailto:{m.group(1)}" color="#3f6212">{m.group(1)}</a>', text)
    return text


def styles() -> dict[str, ParagraphStyle]:
    base = ParagraphStyle('base', fontName='Body', fontSize=8.8, leading=12.2, textColor=INK)
    return {
        'name': ParagraphStyle('name', base, fontName='Body-Bold', fontSize=21, leading=24),
        'role': ParagraphStyle('role', base, fontSize=11.5, leading=15, textColor=ACCENT, spaceBefore=1),
        'contacts': ParagraphStyle('contacts', base, fontSize=8.8, textColor=MUTED, spaceBefore=3),
        'section': ParagraphStyle('section', base, fontName='Body-Bold', fontSize=9.5, leading=12,
                                  textColor=ACCENT, spaceBefore=9),
        'body': base,
        'muted': ParagraphStyle('muted', base, textColor=MUTED),
        'job': ParagraphStyle('job', base, fontSize=9.8, leading=13),
        'dates': ParagraphStyle('dates', base, textColor=MUTED, alignment=TA_RIGHT),
        'bullet': ParagraphStyle('bullet', base, leftIndent=9, firstLineIndent=-9, spaceBefore=1.6),
        'sub': ParagraphStyle('sub', base, fontName='Body-Bold', spaceBefore=4),
    }


def section(title: str, s) -> list:
    return [
        Paragraph(escape(title.upper()), s['section']),
        HRFlowable(width='100%', thickness=0.6, color=LINE, spaceBefore=2, spaceAfter=4),
    ]


def heading_row(left: str, right: str, s, width: float) -> Table:
    t = Table([[Paragraph(left, s['job']), Paragraph(escape(right), s['dates'])]],
              colWidths=[width * 0.72, width * 0.28])
    t.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'BOTTOM'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
    ]))
    return t


def bullet(text: str, s) -> Paragraph:
    return Paragraph('•  ' + rich(text), s['bullet'])


def named(name: str, text: str, s) -> Paragraph:
    return Paragraph(f'•  <b>{escape(name)}</b> – {rich(text)}', s['bullet'])


def story(r: dict, width: float) -> list:
    s = styles()
    sec = r['sections']
    out: list = [
        Paragraph(escape(r['name']), s['name']),
        Paragraph(escape(r['role']), s['role']),
        Paragraph(' · '.join(rich(c) for c in r['contacts']), s['contacts']),
    ]

    out += section(sec['profile'], s)
    out.append(Paragraph(rich(r['profile']), s['body']))

    out += section(sec['skills'], s)
    for label, items in r['skills']:
        out.append(Paragraph(f'<b>{escape(label)}:</b> {rich(items)}', s['body']))

    out += section(sec['experience'], s)
    for i, job in enumerate(r['jobs']):
        head = [
            Spacer(1, 6 if i else 0),
            heading_row(f'<b>{escape(job["company"])}</b> – {escape(job["role"])}', job['dates'], s, width),
        ]
        if job.get('summary'):
            head.append(Paragraph(rich(job['summary']), s['muted']))
        bullets = [bullet(b, s) for b in job['bullets']]
        out.append(KeepTogether(head + bullets[:1]))
        out += bullets[1:]
        if job.get('projects'):
            out.append(Paragraph(escape(r['key_projects']), s['sub']))
            out += [named(n, t, s) for n, t in job['projects']]

    out += section(sec['personal'], s)
    out += [named(n, t, s) for n, t in r['personal']]

    out += section(sec['education'], s)
    for school, dates, details in r['education']:
        out.append(heading_row(f'<b>{escape(school)}</b>', dates, s, width))
        out.append(Paragraph(rich(details), s['muted']))
    out.append(Spacer(1, 3))
    out.append(Paragraph(escape(r['languages']), s['body']))
    return out


def build(r: dict, out_dir: Path) -> Path:
    path = out_dir / r['file']
    doc = SimpleDocTemplate(
        str(path), pagesize=A4,
        leftMargin=15 * mm, rightMargin=15 * mm, topMargin=13 * mm, bottomMargin=12 * mm,
        title=f'{r["name"]} – {r["role"]}', author=r['name'], subject=r['role'],
        keywords=', '.join(i.strip() for _, items in r['skills'][:4] for i in items.split(',')),
        creator='dsham.me', lang=r['lang'],
    )
    # SimpleDocTemplate's frame keeps 6pt padding on each side.
    doc.build(story(r, doc.width - 12))
    return path


def main() -> None:
    out_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / 'public'
    out_dir.mkdir(parents=True, exist_ok=True)
    register_fonts()
    for r in RESUMES:
        path = build(r, out_dir)
        print(f'{path.relative_to(ROOT) if path.is_relative_to(ROOT) else path}')


if __name__ == '__main__':
    main()
