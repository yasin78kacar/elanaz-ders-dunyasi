#!/usr/bin/env python3
"""HTML mockup dosyalarından PNG ekran görüntüsü alır."""
from pathlib import Path
from playwright.sync_api import sync_playwright

WIDTHS = [390, 768, 834, 1024]
OUT_DIR = Path(__file__).resolve().parent.parent / "docs" / "test-screenshots"

for w in WIDTHS:
    html = OUT_DIR / f"responsive-{w}.html"
    if not html.exists():
        raise SystemExit(f"Eksik: {html} — önce verify-responsive-breakpoints.mjs çalıştırın")

with sync_playwright() as p:
    browser = p.chromium.launch()
    for w in WIDTHS:
        html = OUT_DIR / f"responsive-{w}.html"
        png = OUT_DIR / f"responsive-{w}.png"
        page = browser.new_page(viewport={"width": w, "height": 1200})
        page.goto(html.as_uri(), wait_until="networkidle")
        height = page.evaluate("document.body.scrollHeight")
        page.set_viewport_size({"width": w, "height": min(height + 20, 2000)})
        page.screenshot(path=str(png), full_page=True)
        page.close()
        print(f"PNG: {png}")
    browser.close()
