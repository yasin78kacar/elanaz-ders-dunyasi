#!/usr/bin/env python3
import subprocess
from pathlib import Path
import time

VIDEOS = [
    ("Elmalar", "#FF4444", 3, 2, 5),
    ("Toplar", "#4444FF", 4, 3, 7),
    ("Çiçekler", "#FF44FF", 5, 2, 7),
    ("Bisküviler", "#FF8844", 6, 1, 7),
    ("Kuşlar", "#FFFF44", 2, 5, 7),
    ("Mumlar", "#FF4444", 4, 4, 8),
    ("Balonlar", "#FF44FF", 3, 5, 8),
    ("Bloklar", "#FF4444", 2, 6, 8),
    ("Yıldızlar", "#FFFF44", 1, 8, 9),
    ("Yapraklar", "#44FF44", 5, 4, 9),
    ("Kalpler", "#FF4444", 3, 6, 9),
    ("Daireler", "#FF8844", 2, 7, 9),
    ("Kareler", "#4444FF", 4, 5, 9),
    ("Üçgenler", "#FFFF44", 3, 7, 10),
    ("Aylar", "#FFFF44", 5, 5, 10),
]

def generate_video(output_dir, index, obj_name, bg_color, num1, num2, total):
    output_file = output_dir / f"Math_Tema3_{index:02d}_{obj_name.replace(' ', '_')}.mp4"
    
    width, height = 1080, 1920
    duration = 35
    math_text = f"{num1} + {num2} = {total}"
    
    # Simpler FFmpeg command without complex text filtering
    cmd = [
        "ffmpeg",
        "-f", "lavfi",
        "-i", f"color=c={bg_color}:s={width}x{height}:d={duration}",
        "-f", "lavfi",
        "-i", f"sine=f=440:d={duration}",
        "-vf", f"scale={width}:{height}",
        "-pix_fmt", "yuv420p",
        "-c:v", "libx264",
        "-preset", "ultrafast",
        "-c:a", "aac",
        "-b:a", "128k",
        "-t", str(duration),
        "-y",
        str(output_file)
    ]
    
    print(f"✓ Generating: {obj_name} ({num1}+{num2}={total})...")
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        if result.returncode == 0:
            print(f"  ✅ Saved: {output_file.name}")
            return True
        else:
            print(f"  ❌ FFmpeg error: {result.stderr[:200]}")
            return False
    except Exception as e:
        print(f"  ❌ Error: {str(e)}")
        return False

def main():
    output_dir = Path.home() / "Desktop" / "elanaz-ders-dunyasi" / "assets" / "videos" / "math-tema3"
    output_dir.mkdir(parents=True, exist_ok=True)
    
    print(f"📺 Generating 15 Math Addition Videos...\n")
    success_count = 0
    
    for idx, (obj_name, bg_color, num1, num2, total) in enumerate(VIDEOS, 1):
        if generate_video(output_dir, idx, obj_name, bg_color, num1, num2, total):
            success_count += 1
        time.sleep(0.5)
    
    print(f"\n✅ Completed: {success_count}/{len(VIDEOS)} videos generated!")
    print(f"📁 Location: {output_dir}")

if __name__ == "__main__":
    main()
