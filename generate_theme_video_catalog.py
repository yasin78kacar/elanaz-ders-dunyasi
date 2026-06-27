#!/usr/bin/env python3
import os
from pathlib import Path

SUBJECTS = {
    "math": {"prefix": "Math", "themes": 10},
    "turkce": {"prefix": "Turk", "themes": 10},
    "fen": {"prefix": "Fen", "themes": 10},
    "hayat": {"prefix": "Hayat", "themes": 10},
    "english": {"prefix": "Eng", "themes": 8},
}

def generate_video_sources():
    base_path = Path.home() / "Desktop" / "elanaz-ders-dunyasi" / "assets" / "videos"
    lines = ['/* eslint-disable */', '// Otomatik üretilir — tüm temalar için video mapping\n']
    lines.append('export const ALL_THEME_VIDEO_SOURCES: Record<string, number> = {')
    
    total_count = 0
    for subject_key, subject_data in SUBJECTS.items():
        prefix = subject_data["prefix"]
        themes = subject_data["themes"]
        folder = base_path / subject_key
        
        for tema_num in range(1, themes + 1):
            video_file = folder / f"{prefix}_Tema{tema_num}.mp4"
            if video_file.exists():
                slug = f"{subject_key}-tema{tema_num}"
                require_path = f"../../assets/videos/{subject_key}/{prefix}_Tema{tema_num}.mp4"
                lines.append(f"  '{slug}': require('{require_path}'),")
                total_count += 1
    
    lines.append('};\n')
    lines.append(f'export const ALL_THEME_VIDEO_COUNT = {total_count};')
    return '\n'.join(lines)

def main():
    output = generate_video_sources()
    output_path = Path.home() / "Desktop" / "elanaz-ders-dunyasi" / "src" / "assets" / "allThemeVideos.generated.ts"
    with open(output_path, 'w') as f:
        f.write(output)
    print(f"✅ Generated: {output_path}")
    print(f"📊 Total videos: {output.count('require')}")

if __name__ == "__main__":
    main()
