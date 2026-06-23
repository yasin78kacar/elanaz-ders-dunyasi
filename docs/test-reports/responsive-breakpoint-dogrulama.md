# Responsive Breakpoint Doğrulama Raporu

Tarih: 2026-06-23

> `deviceLayout.ts` mantığı dört hedef genişlikte doğrulandı. Mockup ekran görüntüleri `docs/test-screenshots/` altında.
> Ortam: Xcode/Android SDK bu makinede yok; Expo Go simülatörü yerine otomatik doğrulama + Playwright mockup PNG kullanıldı.

## 390px — Telefon

![390px mockup](./test-screenshots/responsive-390.png)

| Kontrol | Sonuç | Detay |
|---------|-------|-------|
| Tier | ✓ | beklenen phone, alınan phone |
| Grid kolon | ✓ | beklenen 2, alınan 2 |
| Font sm | ✓ | 14px |
| Font lg | ✓ | 16px |
| Buton yüksekliği | ✓ | 52px |
| Buton tıklanabilir | ✓ | 52px ≥ 44px |
| Flow ölçek | ✓ | 1.5× |
| Görsel küçük | ✓ | 72px (hedef 72px) |
| Görsel orta | ✓ | 120px (hedef 120px) |
| Görsel büyük | ✓ | 220px (hedef 220px) |
| Görsel taşma | ✓ | görünen 340px (maxWidth 340px, width:100% ile sınırlı) |
| Grid kart genişliği | ✓ | 165px/kart |
| Spacing çarpanı | ✓ | 10→10 (1×) |

**Genel:** GEÇTİ

## 768px — 9.7" tablet

![768px mockup](./test-screenshots/responsive-768.png)

| Kontrol | Sonuç | Detay |
|---------|-------|-------|
| Tier | ✓ | beklenen tabletSmall, alınan tabletSmall |
| Grid kolon | ✓ | beklenen 3, alınan 3 |
| Font sm | ✓ | 18px |
| Font lg | ✓ | 22px |
| Buton yüksekliği | ✓ | 68px |
| Buton tıklanabilir | ✓ | 68px ≥ 44px |
| Flow ölçek | ✓ | 2× |
| Görsel küçük | ✓ | 144px (hedef 144px) |
| Görsel orta | ✓ | 240px (hedef 240px) |
| Görsel büyük | ✓ | 400px (hedef 400px) |
| Görsel taşma | ✓ | görünen 618px (maxWidth 618px, width:100% ile sınırlı) |
| Grid kart genişliği | ✓ | 220px/kart |
| Spacing çarpanı | ✓ | 10→15 (1.5×) |

**Genel:** GEÇTİ

## 834px — 11" tablet

![834px mockup](./test-screenshots/responsive-834.png)

| Kontrol | Sonuç | Detay |
|---------|-------|-------|
| Tier | ✓ | beklenen tabletMedium, alınan tabletMedium |
| Grid kolon | ✓ | beklenen 3, alınan 3 |
| Font sm | ✓ | 20px |
| Font lg | ✓ | 24px |
| Buton yüksekliği | ✓ | 74px |
| Buton tıklanabilir | ✓ | 74px ≥ 44px |
| Flow ölçek | ✓ | 2.5× |
| Görsel küçük | ✓ | 180px (hedef 180px) |
| Görsel orta | ✓ | 300px (hedef 300px) |
| Görsel büyük | ✓ | 480px (hedef 480px) |
| Görsel taşma | ✓ | görünen 742px (maxWidth 742px, width:100% ile sınırlı) |
| Grid kart genişliği | ✓ | 240px/kart |
| Spacing çarpanı | ✓ | 10→16 (1.6×) |

**Genel:** GEÇTİ

## 1024px — 13" tablet

![1024px mockup](./test-screenshots/responsive-1024.png)

| Kontrol | Sonuç | Detay |
|---------|-------|-------|
| Tier | ✓ | beklenen tabletLarge, alınan tabletLarge |
| Grid kolon | ✓ | beklenen 4, alınan 4 |
| Font sm | ✓ | 22px |
| Font lg | ✓ | 26px |
| Buton yüksekliği | ✓ | 80px |
| Buton tıklanabilir | ✓ | 80px ≥ 44px |
| Flow ölçek | ✓ | 3× |
| Görsel küçük | ✓ | 216px (hedef 216px) |
| Görsel orta | ✓ | 360px (hedef 360px) |
| Görsel büyük | ✓ | 576px (hedef 576px) |
| Görsel taşma | ✓ | görünen 890px (maxWidth 890px, width:100% ile sınırlı) |
| Grid kart genişliği | ✓ | 221px/kart |
| Spacing çarpanı | ✓ | 10→17 (1.7×) |

**Genel:** GEÇTİ
