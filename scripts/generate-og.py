"""Generate public/og-default.jpg (1200x630) — BrewWorth default social image.

Usage: python3 scripts/generate-og.py   (requires Pillow)
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og-default.jpg"
FONTS = Path("/usr/share/fonts/truetype/sand-box/google")
SERIF = FONTS / "Lora" / "Lora-VariableFont_wght.ttf"
SANS = FONTS / "Source Sans 3" / "SourceSans3-VariableFont_wght.ttf"

ESPRESSO = (42, 26, 18)
ROAST = (61, 35, 20)
CREMA = (196, 148, 96)
CREAM = (246, 239, 230)
LATTE = (235, 224, 210)
MUTED = (201, 180, 160)


def font(path, size, weight):
    f = ImageFont.truetype(str(path), size)
    try:
        f.set_variation_by_axes([weight])
    except Exception:
        pass
    return f


img = Image.new("RGB", (W, H), ESPRESSO)
# vertical gradient espresso -> roast
grad = Image.new("RGB", (W, H))
gd = ImageDraw.Draw(grad)
for y in range(H):
    t = y / H
    c = tuple(int(ESPRESSO[i] * (1 - t) + ROAST[i] * t) for i in range(3))
    gd.line([(0, y), (W, y)], fill=c)
img = grad

# soft crema glow behind the cup
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(glow).ellipse((760, 90, 1180, 510), fill=(196, 148, 96, 70))
glow = glow.filter(ImageFilter.GaussianBlur(80))
img = Image.alpha_composite(img.convert("RGBA"), glow)

d = ImageDraw.Draw(img)

# espresso cup illustration (top view: saucer, cup, crema)
cx, cy = 970, 315
d.ellipse((cx - 175, cy - 175, cx + 175, cy + 175), fill=LATTE)          # saucer
d.ellipse((cx - 160, cy - 160, cx + 160, cy + 160), outline=MUTED, width=3)
d.rounded_rectangle((cx + 105, cy - 22, cx + 185, cy + 22), radius=22, fill=CREAM)  # handle
d.ellipse((cx - 118, cy - 118, cx + 118, cy + 118), fill=CREAM)          # cup rim
d.ellipse((cx - 100, cy - 100, cx + 100, cy + 100), fill=(92, 52, 28))   # coffee
d.ellipse((cx - 86, cy - 86, cx + 86, cy + 86), fill=CREMA)              # crema
d.ellipse((cx - 52, cy - 60, cx + 40, cy + 30), fill=(214, 172, 124))    # crema highlight
# small bean accents
for bx, by, r in [(760, 120, 0), (1130, 540, 1), (800, 520, 1)]:
    d.ellipse((bx - 22, by - 15, bx + 22, by + 15), fill=(110, 66, 38))
    d.arc((bx - 18, by - 12, bx + 18, by + 12), 200 if r else 20, 340 if r else 160, fill=ESPRESSO, width=3)

# left text block
x = 80
d.rounded_rectangle((x, 150, x + 64, 156), radius=3, fill=CREMA)
d.text((x, 175), "BrewWorth", font=font(SERIF, 112, 600), fill=CREAM)
d.text((x, 318), "Honest picks for better", font=font(SERIF, 44, 400), fill=LATTE)
d.text((x, 372), "home coffee.", font=font(SERIF, 44, 400), fill=LATTE)
d.text(
    (x, 460),
    "Espresso machines · Grinders · Pour-over · Travel",
    font=font(SANS, 26, 500),
    fill=MUTED,
)
d.text((x, 540), "brew.theworthguide.com", font=font(SANS, 24, 600), fill=CREMA)

img.convert("RGB").save(OUT, "JPEG", quality=88, optimize=True, progressive=True)
print(f"wrote {OUT} {Image.open(OUT).size}")
