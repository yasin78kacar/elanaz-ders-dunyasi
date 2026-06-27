#!/usr/bin/env python3
"""Generate allThemeVideos.generated.ts from video files in assets/videos/."""
from __future__ import annotations

import sys
from pathlib import Path

SUBJECTS = {
    "math": {"prefix": "Math", "themes": 10},
    "turkce": {"prefix": "Turk", "themes": 10},
    "fen": {"prefix": "Fen", "themes": 10},
    "hayat": {"prefix": "Hayat", "themes": 10},
    "english": {"prefix": "Eng", "themes": 8},
}

SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
VIDEOS_DIR = PROJECT_ROOT / "assets" / "videos"
GENERATED_FILE = PROJECT_ROOT / "src" / "assets" / "allThemeVideos.generated.ts"


def slugify(subject: str, theme_num: int) -> str:
    return f"{subject}-tema-{theme_num}"


def escape_for_ts(value: str) -> str:
    return value.replace("\\", "\\\\").replace("'", "\\'")


def generate_video_sources() -> tuple[list[str], dict[str, dict[int, str | None]], list[str]]:
    entries: list[str] = []
    per_subject: dict[str, dict[int, str | None]] = {}
    missing: list[str] = []

    for subject, config in SUBJECTS.items():
        prefix = config["prefix"]
        theme_count = config["themes"]
        subject_dir = VIDEOS_DIR / subject
        per_subject[subject] = {}

        for theme_num in range(1, theme_count + 1):
            filename = f"{prefix}_Tema{theme_num}.mp4"
            file_path = subject_dir / filename
            slug = slugify(subject, theme_num)

            if file_path.is_file():
                rel = f"../../assets/videos/{subject}/{escape_for_ts(filename)}"
                entries.append(
                    f"  '{escape_for_ts(slug)}': require('{rel}'),"
                )
                per_subject[subject][theme_num] = slug
            else:
                per_subject[subject][theme_num] = None
                missing.append(f"{subject}/{filename}")

    return entries, per_subject, missing


def write_generated_file(entries: list[str]) -> None:
    subject_union = " | ".join(f"'{s}'" for s in SUBJECTS)
    generated = f"""/* eslint-disable */
// Otomatik üretilir — npm run catalog-all-theme-videos

export type ThemeSubject = {subject_union};

export const ALL_THEME_VIDEO_SOURCES: Record<string, number> = {{
{chr(10).join(entries)}
}};

export const ALL_THEME_VIDEO_COUNT = {len(entries)};
"""
    GENERATED_FILE.parent.mkdir(parents=True, exist_ok=True)
    GENERATED_FILE.write_text(generated, encoding="utf-8")


def main() -> int:
    entries, per_subject, missing = generate_video_sources()
    write_generated_file(entries)

    print("catalog-all-theme-videos:")
    for subject, themes in per_subject.items():
        found = sum(1 for slug in themes.values() if slug is not None)
        expected = SUBJECTS[subject]["themes"]
        print(f"  {subject}: {found}/{expected}")
    print(f"  toplam: {len(entries)}/{sum(s['themes'] for s in SUBJECTS.values())}")
    if missing:
        print(f"  eksik ({len(missing)}): {', '.join(missing)}")
    print(f"  → {GENERATED_FILE.relative_to(PROJECT_ROOT)}")
    print("  not: math-tema3 alt klasörü ayrı (catalog-math-tema3-videos)")

    return 1 if missing else 0


if __name__ == "__main__":
    sys.exit(main())
