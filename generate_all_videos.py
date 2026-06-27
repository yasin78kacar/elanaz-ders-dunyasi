#!/usr/bin/env python3
import subprocess
from pathlib import Path

SUBJECTS = {
    "math": {"name": "Matematik", "folder": "math", "themes": 10, "colors": ["#FF4444", "#FF6644", "#FF8844", "#FFAA44", "#FFCC44", "#CCFF44", "#88FF44", "#44FF44", "#44FF88", "#44FFCC"], "prefix": "Math"},
    "turkce": {"name": "Türkçe", "folder": "turkce", "themes": 10, "colors": ["#4444FF", "#6644FF", "#8844FF", "#AA44FF", "#CC44FF", "#FF44CC", "#FF44AA", "#FF4488", "#FF4466", "#FF4444"], "prefix": "Turk"},
    "fen": {"name": "Fen Bilimleri", "folder": "fen", "themes": 10, "colors": ["#44FF44", "#66FF44", "#88FF44", "#AAFF44", "#CCFF44", "#FFFF44", "#FFDD44", "#FFBB44", "#FF9944", "#FF7744"], "prefix": "Fen"},
    "hayat": {"name": "Hayat Bilgisi", "folder": "hayat", "themes": 10, "colors": ["#FF44FF", "#FF66FF", "#FF88FF", "#FFAAFF", "#FFCCFF", "#FF44CC", "#FF44AA", "#FF4488", "#FF4466", "#FF4444"], "prefix": "Hayat"},
    "english": {"name": "English", "folder": "english", "themes": 8, "colors": ["#44CCFF", "#44AAFF", "#4488FF", "#4466FF", "#4444FF", "#6644FF", "#8844FF", "#AA44FF"], "prefix": "Eng"}
}

def generate_video(output_dir, theme_num, color, prefix):
    output_file = output_dir / f"{prefix}_Tema{theme_num}.mp4"
    cmd = ["ffmpeg", "-f", "lavfi", "-i", f"color=c={color}:s=1080x1920:d=35", "-f", "lavfi", "-i", "sine=f=440:d=35", "-vf", "scale=1080:1920", "-pix_fmt", "yuv420p", "-c:v", "libx264", "-preset", "ultrafast", "-c:a", "aac", "-b:a", "128k", "-t", "35", "-y", str(output_file)]
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        return result.returncode == 0
    except:
        return False

def main():
    base_path = Path.home() / "Desktop" / "elanaz-ders-dunyasi" / "assets" / "videos"
    total_videos = sum(s["themes"] for s in SUBJECTS.values())
    print(f"\n🎬 MEGA VIDEO GENERATION\n📊 Total: {total_videos} videos\n")
    
    global_count = 0
    for subject_key, subject_data in SUBJECTS.items():
        subject_name = subject_data["name"]
        folder_name = subject_data["folder"]
        num_themes = subject_data["themes"]
        colors = subject_data["colors"]
        prefix = subject_data["prefix"]
        
        output_dir = base_path / folder_name
        output_dir.mkdir(parents=True, exist_ok=True)
        
        print(f"📚 {subject_name} ({num_themes} themes)")
        success = 0
        for theme_num in range(1, num_themes + 1):
            color = colors[theme_num - 1]
            if generate_video(output_dir, theme_num, color, prefix):
                success += 1
                print(f"  ✅ Tema {theme_num}")
            else:
                print(f"  ❌ Tema {theme_num}")
            global_count += 1
        print(f"  → {success}/{num_themes} ✓\n")
    
    print(f"✅ COMPLETED: {global_count} videos generated!")

if __name__ == "__main__":
    main()
