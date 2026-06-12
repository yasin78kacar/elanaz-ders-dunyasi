# GOREV-4A: Üç Yeni Konu — Sayı Doğrusu + Örüntü + Tahmin Etme (150 soru)
**Onay:** Yasin ✅ (12 Haziran) · **Tahmini süre:** 3-4 saat

## 🔴 GÖRSEL KURALI (PATRON EMRİ — İSTİSNASIZ)
Tüm sorular görselli. Sayı doğrusu soruları SayiSeridi SVG bileşeniyle, örüntü soruları şekil/renk dizileriyle, tahmin soruları kavanoz/kap görselleriyle. Tablet-first responsive: gorselBoyut.ts katsayıları kullanılacak.

## Cursor'a Not
Üç yeni konu JSON dosyası:
- `content/sinif2/matematik/sayi-dogrusu.json` — kazanımKodu "MAT.2.2.3"
- `content/sinif2/matematik/oruntu.json` — kazanımKodu "MAT.2.2.5"  
- `content/sinif2/matematik/tahmin-etme.json` — kazanımKodu "MAT.2.2.6"

Haritada sıra: Sayı Doğrusu → Örüntü → Tahmin Etme (Ritmik Sayma grubundan sonra). Tüm konular açık (kilit yok). `scripts/gorev-4a-questions.mjs` + generate-content düzeni. Şık bekçisi otomatik çalışacak. 5 madde test zorunlu (metin kırpma, şık benzersizlik, sayısal doğruluk, tsc, telefon). Commit: `GOREV-4A: Sayi Dogrusu + Oruntu + Tahmin (150 soru)` — push yok. Rapor: "Claude'a not".

---
**🔴 GÖRSEL KURALI:** Tüm sorular canlı renkli görselli — sayı doğrusu soruları sayı şeridi SVG'siyle, örüntü soruları şekil dizileriyle, tahmin soruları önce/sonra gösterimiyle.
**Format:** A = alıştırma · T = test (✅) · 🎭 = şaşırtma — her konuda 7 şaşırtma

---
# KONU 1: SAYI DOĞRUSU (SD)

## Anlatım (3 sayfa)
**Sayfa 1:** Sayıları sırayla bir doğru üzerinde gösterebiliriz. Bu doğruya SAYI DOĞRUSU denir. Solda küçük sayılar, sağda büyük sayılar olur! [GÖRSEL: 0'dan 20'ye sayı doğrusu, her sayı daire içinde, soldan sağa artan, "küçük←→büyük" okları]
**Sayfa 2:** Sayı doğrusunda bir sayının solundaki sayı ondan KÜÇÜK, sağındaki sayı ondan BÜYÜKTÜR. 7'nin solunda 6 var — 6, 7'den küçük. 7'nin sağında 8 var — 8, 7'den büyük. [GÖRSEL: 5-6-7-8-9 sayı doğrusu, 7 vurgulu, sol ok "küçük", sağ ok "büyük"]
**Sayfa 3:** Sayı doğrusunda iki sayı arasındaki sayıyı da bulabiliriz! 14 ile 16'nın arasında 15 vardır. [GÖRSEL: 12-13-14-15-16-17-18 sayı doğrusu, 14 ve 16 kırmızı, 15 yeşil vurgulu "arasında!"]

## Alıştırmalar (SD-A1...SD-A25)
SD-A1. Sayı doğrusunda 5'in sağındaki sayı kaçtır? → 6 [GÖRSEL: 3-4-5-6-7 sayı doğrusu, 5 vurgulu]
SD-A2. Sayı doğrusunda 12'nin solundaki sayı kaçtır? → 11 [GÖRSEL: 10-11-12-13-14 sayı doğrusu]
SD-A3. 8 ile 10'un arasındaki sayı kaçtır? → 9 [GÖRSEL: 7-8-9-10-11 sayı doğrusu, 8 ve 10 kırmızı]
SD-A4. Sayı doğrusunda hangi sayı 15'ten büyük, 17'den küçüktür? → 16 [GÖRSEL: 14-15-16-17-18]
SD-A5. 🎭 Sayı doğrusunda 0'ın solunda hangi sayı vardır? (İpucu: Sayı doğrusu 0'dan başlar — solunda hiçbir şey yok!) → yok/hiç sayı yok [GÖRSEL: 0-1-2-3 sayı doğrusu, 0'ın solunda boş]
SD-A6. Sayı doğrusunda 39'dan sonra hangi sayı gelir? → 40 [GÖRSEL: 37-38-39-40-41]
SD-A7. 50 ile 52'nin arasındaki sayı kaçtır? → 51 [GÖRSEL: 49-50-51-52-53]
SD-A8. Elanaz sayı doğrusunda 23'ün sağına baktı. Hangi sayıyı gördü? → 24 [GÖRSEL: 21-22-23-24-25]
SD-A9. Sayı doğrusunda 67'den önce hangi sayı gelir? → 66 [GÖRSEL: 64-65-66-67-68]
SD-A10. 🎭 Sayı doğrusunda 100'ün sağında hangi sayı vardır? (İpucu: 2. sınıfta 100'e kadar öğrendik — 100'ün sağı bizim sayı doğrumuzun dışında!) → 101 (kabul: "yok/101") [GÖRSEL: 98-99-100 sayı doğrusu, 100'ün sağı boş/soru işareti]
SD-A11. Sayı doğrusunda 45 ile 47 arasındaki sayı kaçtır? → 46 [GÖRSEL: 44-45-46-47-48]
SD-A12. 72'den büyük, 74'ten küçük sayı kaçtır? → 73 [GÖRSEL: 71-72-73-74-75]
SD-A13. Elanaz sayı doğrusunda 88'in soluna baktı. Ne gördü? → 87 [GÖRSEL: 86-87-88-89-90]
SD-A14. Sayı doğrusunda 19'dan sonra hangi sayı gelir? → 20 [GÖRSEL: 17-18-19-20-21]
SD-A15. 🎭 Sayı doğrusunda 55 solda mı, 57 solda mı? (İpucu: Sayı doğrusunda küçük sayı hep soldadır!) → 55 solda [GÖRSEL: 54-55-56-57-58, 55 solda vurgulu]
SD-A16. 33 ile 35'in arasındaki sayı kaçtır? → 34 [GÖRSEL: 32-33-34-35-36]
SD-A17. Sayı doğrusunda 60'tan önce hangi sayı gelir? → 59 [GÖRSEL: 58-59-60-61-62]
SD-A18. 81'den büyük, 83'ten küçük sayı kaçtır? → 82 [GÖRSEL: 80-81-82-83-84]
SD-A19. Sayı doğrusunda 7'nin komşuları hangi sayılardır? → 6 ve 8 [GÖRSEL: 5-6-7-8-9, 6 ve 8 vurgulu]
SD-A20. 🎭 Sayı doğrusunda 49'un sağındaki sayı kaçtır? (İpucu: 49'dan sonra hangi sayı gelir — dikkat, onluklar değişiyor!) → 50 [GÖRSEL: 47-48-49-50-51]
SD-A21. Elanaz sayı doğrusunda 26 ile 28'in arasını işaretledi. Hangi sayıyı işaretledi? → 27 [GÖRSEL: 25-26-27-28-29]
SD-A22. Sayı doğrusunda 94'ten sonra hangi sayı gelir? → 95 [GÖRSEL: 92-93-94-95-96]
SD-A23. 16 ve 18'in arasındaki sayı kaçtır? → 17 [GÖRSEL: 15-16-17-18-19]
SD-A24. Sayı doğrusunda 41'in solundaki sayı kaçtır? → 40 [GÖRSEL: 39-40-41-42-43]
SD-A25. 🎭 Sayı doğrusunda hem 30'dan büyük hem 32'den küçük olan sayı kaçtır? (İpucu: İki şart birden — ikisini de sağlayan tek sayı hangisi?) → 31 [GÖRSEL: 29-30-31-32-33]

## Testler (SD-T1...SD-T25)
SD-T1. Sayı doğrusunda 8'in sağındaki sayı hangisidir? A) 7 B) 9 ✅ C) 10 D) 6 [GÖRSEL: 6-7-8-9-10 sayı doğrusu]
SD-T2. Sayı doğrusunda hangi sayı 20 ile 22 arasındadır? A) 19 B) 23 C) 21 ✅ D) 20 [GÖRSEL: 19-20-21-22-23]
SD-T3. 45'ten önce gelen sayı hangisidir? A) 46 B) 44 ✅ C) 43 D) 47 [GÖRSEL: 43-44-45-46-47]
SD-T4. 🎭 Sayı doğrusunda 99'un sağındaki sayı hangisidir? A) 98 B) 100 ✅ C) 90 D) 999 (İpucu: 99'dan sonra hangi sayı gelir?) [GÖRSEL: 97-98-99-100 sayı doğrusu]
SD-T5. Elanaz sayı doğrusunda 63 ile 65 arasını işaretledi. Hangi sayıyı işaretledi? A) 62 B) 66 C) 64 ✅ D) 63 [GÖRSEL: 62-63-64-65-66]
SD-T6. Hangi sayı 50'den büyük, 52'den küçüktür? A) 50 B) 52 C) 53 D) 51 ✅ [GÖRSEL: 49-50-51-52-53]
SD-T7. Sayı doğrusunda 7 solda mı, 3 solda mı? A) 7 solda B) 3 solda ✅ C) İkisi aynı yerde D) Sayı doğrusunda solda yoktur [GÖRSEL: 1-2-3-4-5-6-7-8]
SD-T8. 🎭 Sayı doğrusunda 29'un komşuları hangileridir? A) 27 ve 31 B) 28 ve 30 ✅ C) 20 ve 30 D) 29 ve 30 (İpucu: Komşu = bir önceki ve bir sonraki!) [GÖRSEL: 27-28-29-30-31]
SD-T9. Sayı doğrusunda 76'dan sonra hangi sayı gelir? A) 75 B) 77 ✅ C) 78 D) 74 [GÖRSEL: 74-75-76-77-78]
SD-T10. Hangisi sayı doğrusunda en solda durur? A) 45 B) 54 C) 44 ✅ D) 46 [GÖRSEL: 43-44-45-46-47-48-49-50-51-52-53-54, 44 en solda]
SD-T11. 🎭 Sayı doğrusunda 40 ile 42 arasında kaç sayı vardır? A) 2 B) 0 C) 1 ✅ D) 3 (İpucu: 40...41...42 — arada sadece 41 var!) [GÖRSEL: 39-40-41-42-43]
SD-T12. Elanaz'ın sayı doğrusunda 85'in solunda gördüğü sayı hangisidir? A) 86 B) 84 ✅ C) 87 D) 83 [GÖRSEL: 83-84-85-86-87]
SD-T13. Sayı doğrusunda 17'den küçük, 15'ten büyük sayı hangisidir? A) 14 B) 18 C) 16 ✅ D) 15 [GÖRSEL: 14-15-16-17-18]
SD-T14. 🎭 Sayı doğrusunda 39 ile 41 arasındaki sayı hangisidir? A) 38 B) 42 C) 40 ✅ D) 39 (İpucu: Onluk sınırı geçiyor — dikkatli ol!) [GÖRSEL: 38-39-40-41-42]
SD-T15. Hangi sayı sayı doğrusunda 58'in hemen sağındadır? A) 57 B) 59 ✅ C) 60 D) 56 [GÖRSEL: 56-57-58-59-60]
SD-T16. Sayı doğrusunda 91 ile 93 arasındaki sayı hangisidir? A) 90 B) 94 C) 92 ✅ D) 91 [GÖRSEL: 90-91-92-93-94]
SD-T17. 🎭 Elanaz "Sayı doğrusunda 50'nin solunda 49, sağında 51 vardır" dedi. Bu doğru mu? A) Hayır, solda 51 var B) Evet ✅ C) Hayır, sağda 49 var D) İkisi de yanlış (İpucu: Küçük sol, büyük sağ — 49<50<51 doğru mu?) [GÖRSEL: 48-49-50-51-52]
SD-T18. Sayı doğrusunda 72'den önce hangi sayı gelir? A) 73 B) 71 ✅ C) 70 D) 74 [GÖRSEL: 70-71-72-73-74]
SD-T19. Hangi sayı 66 ile 68 arasındadır? A) 65 B) 69 C) 67 ✅ D) 66 [GÖRSEL: 65-66-67-68-69]
SD-T20. Sayı doğrusunda en büyük sayı sağda mı, solda mı durur? A) Solda B) Sağda ✅ C) Ortada D) Her yerde [GÖRSEL: sayı doğrusu genel, sağda büyük ok]
SD-T21. 🎭 Sayı doğrusunda 10 ile 12 arasında kaç TAM sayı vardır? A) 2 B) 3 C) 1 ✅ D) 0 (İpucu: 10...11...12 — arada sadece 11 var, 10 ve 12 arasında DEĞİL!) [GÖRSEL: 9-10-11-12-13]
SD-T22. Elanaz sayı doğrusunda 35'in sağına 2 adım attı. Hangi sayıya geldi? A) 33 B) 36 C) 37 ✅ D) 34 [GÖRSEL: 33-34-35-36-37-38, +2 oku]
SD-T23. Sayı doğrusunda 48 ile 50 arasındaki sayı hangisidir? A) 47 B) 51 C) 49 ✅ D) 48 [GÖRSEL: 47-48-49-50-51]
SD-T24. Sayı doğrusunda 83'ten büyük, 85'ten küçük sayı hangisidir? A) 82 B) 86 C) 84 ✅ D) 83 [GÖRSEL: 82-83-84-85-86]
SD-T25. 🎭 Sayı doğrusunda hem 74'ten büyük hem 76'dan küçük olan KAÇ sayı vardır? A) 2 B) 0 C) 3 D) 1 ✅ (İpucu: Sadece 75 hem 74'ten büyük hem 76'dan küçük!) [GÖRSEL: 73-74-75-76-77]

---
# KONU 2: ÖRÜNTÜ (OR)

## Anlatım (3 sayfa)
**Sayfa 1:** Tekrarlanan veya belirli bir kurala göre devam eden dizilere ÖRÜNTÜ denir. Örüntünün bir KURALI vardır — bu kuralı bulursan bir sonraki terimi tahmin edebilirsin! [GÖRSEL: kırmızı daire, mavi kare, kırmızı daire, mavi kare, kırmızı daire, ? — örüntü kuralı: "sırayla tekrar"]
**Sayfa 2:** Sayı örüntülerinde de kural vardır! 3, 5, 7, 9... Bu örüntünün kuralı: ikişer artıyor! Bir sonraki sayı: 11. [GÖRSEL: 3→5→7→9→? sayı şeridi, her adımda "+2" yay oku]
**Sayfa 3:** Örüntü kuralını bulmak için: ilk iki terime bak, farkı hesapla, devam ettir. 10, 8, 6, 4... Kural: ikişer azalıyor → sonraki: 2! [GÖRSEL: 10→8→6→4→? sayı şeridi, her adımda "-2" yay oku]

## Alıştırmalar (OR-A1...OR-A25)
OR-A1. 2, 4, 6, 8, ... → Sonraki sayı kaçtır? → 10 [GÖRSEL: sayı şeridi +2 oklu]
OR-A2. 5, 10, 15, 20, ... → Sonraki sayı kaçtır? → 25 [GÖRSEL: sayı şeridi +5 oklu]
OR-A3. 30, 27, 24, 21, ... → Sonraki sayı kaçtır? → 18 [GÖRSEL: sayı şeridi -3 oklu]
OR-A4. Kırmızı top, mavi top, kırmızı top, mavi top, ... → Sıradaki hangi renk top gelir? → kırmızı [GÖRSEL: kırmızı-mavi-kırmızı-mavi-? top dizisi]
OR-A5. 🎭 1, 5, 9, 13, ... → Bu örüntünün kuralı nedir? (İpucu: Farkları hesapla: 5-1=?, 9-5=?, kural her seferinde aynı artış!) → dörder artıyor [GÖRSEL: 1→5→9→13→? +4 oklu]
OR-A6. 10, 20, 30, 40, ... → Sonraki sayı kaçtır? → 50 [GÖRSEL: sayı şeridi +10 oklu]
OR-A7. Üçgen, daire, kare, üçgen, daire, kare, ... → Sıradaki şekil hangisidir? → üçgen [GÖRSEL: şekil dizisi]
OR-A8. Elanaz her gün kumbarasına 3 TL koyuyor. Pazartesi 3 TL, Salı 6 TL, Çarşamba 9 TL... Perşembe kaç TL olur? → 12 TL [GÖRSEL: kumbara dizisi]
OR-A9. 50, 45, 40, 35, ... → Sonraki sayı kaçtır? → 30 [GÖRSEL: sayı şeridi -5 oklu]
OR-A10. 🎭 2, 4, 8, 16, ... → Bu örüntünün kuralı nedir? (İpucu: Bu sefer toplama değil — her sayı bir öncekinin KAÇ KATI?) → iki katına çıkıyor [GÖRSEL: 2→4→8→16→? ×2 oklu]
OR-A11. Sarı yıldız, sarı yıldız, mavi ay, sarı yıldız, sarı yıldız, mavi ay, ... → Sıradaki hangisidir? → sarı yıldız [GÖRSEL: yıldız-yıldız-ay-yıldız-yıldız-ay-? dizisi]
OR-A12. 15, 18, 21, 24, ... → Sonraki sayı kaçtır? → 27 [GÖRSEL: sayı şeridi +3 oklu]
OR-A13. 99, 88, 77, 66, ... → Sonraki sayı kaçtır? → 55 [GÖRSEL: sayı şeridi -11 oklu]
OR-A14. Elanaz boncukları dizer: 1 kırmızı, 2 mavi, 1 kırmızı, 2 mavi... Sıradaki boncuk hangi renktir? → kırmızı [GÖRSEL: boncuk dizisi]
OR-A15. 🎭 20, 17, 14, 11, ... → Bu örüntü artıyor mu, azalıyor mu? (İpucu: Her terim bir öncekinden büyük mü küçük mü?) → azalıyor (üçer azalıyor) [GÖRSEL: sayı şeridi -3 oklu]
OR-A16. 4, 8, 12, 16, ... → Sonraki sayı kaçtır? → 20 [GÖRSEL: sayı şeridi +4 oklu]
OR-A17. Büyük kare, küçük kare, büyük kare, küçük kare, ... → Sıradaki hangisidir? → büyük kare [GÖRSEL: büyük-küçük kare dizisi]
OR-A18. 25, 30, 35, 40, ... → Sonraki sayı kaçtır? → 45 [GÖRSEL: sayı şeridi +5 oklu]
OR-A19. 80, 70, 60, 50, ... → Sonraki sayı kaçtır? → 40 [GÖRSEL: sayı şeridi -10 oklu]
OR-A20. 🎭 3, 6, 9, 12, 15, ... → 10. terim kaçtır? (İpucu: Kural üçer artıyor — 1. terim 3, 2. terim 6... 10. terim ne olur?) → 30 [GÖRSEL: 3→6→9→12→15→...→? +3 oklu]
OR-A21. Kırmızı-sarı-mavi-kırmızı-sarı-mavi-kırmızı-... → Sıradaki renk hangisidir? → sarı [GÖRSEL: renk dizisi]
OR-A22. 7, 14, 21, 28, ... → Sonraki sayı kaçtır? → 35 [GÖRSEL: sayı şeridi +7 oklu]
OR-A23. 100, 90, 80, 70, ... → Sonraki sayı kaçtır? → 60 [GÖRSEL: sayı şeridi -10 oklu]
OR-A24. Elanaz şu diziyi buldu: 5, 8, 11, 14, ... Kuralı nedir? → üçer artıyor [GÖRSEL: +3 oklu sayı şeridi]
OR-A25. 🎭 Hangi dizi bir ÖRÜNTÜ DEĞİLDİR? (A) 2,4,6,8 (B) 5,10,15,20 (C) 3,7,2,9 (D) 10,8,6,4 (İpucu: Örüntünün kuralı TUTARLI olmalı — hangi dizide kural yok?) → C (3,7,2,9 kuralsız) [GÖRSEL: dört dizi karşılaştırmalı]

## Testler (OR-T1...OR-T25)
OR-T1. 3, 6, 9, 12, ... → Sonraki sayı hangisidir? A) 13 B) 14 C) 15 ✅ D) 16 [GÖRSEL: +3 oklu sayı şeridi]
OR-T2. Kırmızı, mavi, kırmızı, mavi, ... → Sıradaki hangisidir? A) Kırmızı ✅ B) Mavi C) Yeşil D) Sarı [GÖRSEL: renk dizisi]
OR-T3. 20, 18, 16, 14, ... → Sonraki sayı hangisidir? A) 13 B) 12 ✅ C) 11 D) 10 [GÖRSEL: -2 oklu sayı şeridi]
OR-T4. 🎭 5, 10, 15, 20, ... → Bu örüntünün kuralı hangisidir? A) İkişer artıyor B) Üçer artıyor C) Beşer artıyor ✅ D) Onar artıyor (İpucu: 10-5=?, 15-10=? farkı hesapla!) [GÖRSEL: +5 oklu sayı şeridi]
OR-T5. Üçgen, daire, üçgen, daire, ... → Sıradaki hangisidir? A) Daire B) Kare C) Üçgen ✅ D) Yıldız [GÖRSEL: şekil dizisi]
OR-T6. 10, 20, 30, 40, ... → Sonraki sayı hangisidir? A) 41 B) 45 C) 50 ✅ D) 60 [GÖRSEL: +10 oklu sayı şeridi]
OR-T7. 🎭 16, 13, 10, 7, ... → Bu örüntü ne kadar azalıyor? A) İkişer B) Dörder C) Üçer ✅ D) Beşer (İpucu: 16-13=?, 13-10=? hesapla!) [GÖRSEL: -3 oklu sayı şeridi]
OR-T8. Elanaz her gün 5 TL biriktiriyor. Pazartesi 5 TL, Salı 10 TL oldu. Çarşamba kaç TL olur? A) 12 B) 13 C) 14 D) 15 ✅ [GÖRSEL: kumbara dizisi +5]
OR-T9. 45, 40, 35, 30, ... → Sonraki sayı hangisidir? A) 29 B) 28 C) 27 D) 25 ✅ [GÖRSEL: -5 oklu sayı şeridi]
OR-T10. 🎭 2, 4, 6, 8, 10, ... → 7. terim kaçtır? A) 12 B) 13 C) 14 ✅ D) 16 (İpucu: 1.terim=2, 2.terim=4... 7. terim=2×7=?) [GÖRSEL: +2 oklu sayı şeridi, 7. hücre vurgulu]
OR-T11. Sarı-mavi-sarı-mavi-sarı-... → 6. terim hangi renktir? A) Sarı B) Mavi ✅ C) Yeşil D) Kırmızı [GÖRSEL: renk dizisi, 6. kutu vurgulu]
OR-T12. 6, 12, 18, 24, ... → Sonraki sayı hangisidir? A) 28 B) 29 C) 30 ✅ D) 32 [GÖRSEL: +6 oklu sayı şeridi]
OR-T13. 🎭 Aşağıdaki dizilerden hangisi örüntüdür? A) 1,3,2,5 B) 4,4,4,4 ✅ C) 7,3,9,1 D) 2,5,1,8 (İpucu: Örüntü tutarlı kural ister — hangisi tutarlı?) [GÖRSEL: dört dizi karşılaştırmalı]
OR-T14. 90, 80, 70, 60, ... → Sonraki sayı hangisidir? A) 55 B) 58 C) 50 ✅ D) 45 [GÖRSEL: -10 oklu sayı şeridi]
OR-T15. Büyük-küçük-büyük-küçük yıldız dizisinde 5. yıldız hangisidir? A) Küçük B) Büyük ✅ C) Orta D) Yok [GÖRSEL: büyük-küçük yıldız dizisi]
OR-T16. 🎭 3, 6, 12, 24, ... → Sonraki sayı hangisidir? A) 36 B) 40 C) 48 ✅ D) 30 (İpucu: Bu sefer toplama değil, çarpma — her sayı iki katı!) [GÖRSEL: ×2 oklu sayı şeridi]
OR-T17. 11, 22, 33, 44, ... → Sonraki sayı hangisidir? A) 50 B) 54 C) 55 ✅ D) 56 [GÖRSEL: +11 oklu sayı şeridi]
OR-T18. Elanaz'ın örüntüsü: 8, 6, 4, 2, ... Sonraki sayı hangisidir? A) 1 B) 0 ✅ C) -1 D) 3 [GÖRSEL: -2 oklu sayı şeridi]
OR-T19. 🎭 1, 2, 3, 1, 2, 3, 1, ... → 10. terim hangisidir? A) 1 ✅ B) 2 C) 3 D) 4 (İpucu: Dizi 3'lü tekrar ediyor — 10÷3=3 kalan 1, yani 10. terim dizinin 1. elemanı!) [GÖRSEL: 1-2-3 tekrar dizisi]
OR-T20. 5, 15, 25, 35, ... → Sonraki sayı hangisidir? A) 40 B) 43 C) 45 ✅ D) 50 [GÖRSEL: +10 oklu sayı şeridi]
OR-T21. Kırmızı yıldız-sarı ay-mavi güneş-kırmızı yıldız-... → Sıradaki hangisidir? A) Kırmızı yıldız B) Sarı ay ✅ C) Mavi güneş D) Yeşil kalp [GÖRSEL: şekil dizisi]
OR-T22. 🎭 Örüntü: 100, 95, 90, 85, ... Kaçıncı terimde 70'e ulaşılır? A) 5. B) 6. C) 7. ✅ D) 8. (İpucu: 100,95,90,85,80,75,70 — say bakalım!) [GÖRSEL: -5 oklu sayı şeridi sayımlı]
OR-T23. 8, 16, 24, 32, ... → Sonraki sayı hangisidir? A) 36 B) 38 C) 40 ✅ D) 42 [GÖRSEL: +8 oklu sayı şeridi]
OR-T24. Dizinin kuralı "dörder artıyor" ve ilk terim 4'tür. 5. terim kaçtır? A) 16 B) 18 C) 20 ✅ D) 24 [GÖRSEL: 4→8→12→16→20 +4 oklu]
OR-T25. 🎭 60, 55, 50, 45, ... → Bu dizi kaçıncı terimde 30'a ulaşır? A) 5. B) 6. C) 7. ✅ D) 8. (İpucu: 60,55,50,45,40,35,30 — 7. terim!) [GÖRSEL: -5 oklu sayı şeridi sayımlı]

---
# KONU 3: TAHMİN ETME (TE)

## Anlatım (3 sayfa)
**Sayfa 1:** Tahmin, kesin saymadan önce yaklaşık bir cevap vermektir. "Bu kavanozda kaç misket var?" diye sormadan önce gözlerimizle TAHMİN EDERİZ, sonra sayarız! [GÖRSEL: içinde misketler olan kavanoz + soru balonu "kaç tane?"]
**Sayfa 2:** İyi tahmin nasıl yapılır? Referans sayı kullan! "10 misket nasıl görünür?" önce onu gör, sonra kavanozu onunla karşılaştır. [GÖRSEL: soldaki kapta kesin 10 misket sayılı + sağdaki kapta tahmin edilecek misketler]
**Sayfa 3:** Tahminimiz her zaman tam tutmaz — bu normal! Önemli olan MAKUL bir tahmin yapmak: ne çok fazla ne çok az. Tahmin ettikten sonra sayıp kontrol ederiz. [GÖRSEL: tahmin 20 → gerçek 23, "az tahmin" etiketi; tahmin 30 → gerçek 23, "fazla tahmin" etiketi]

## Alıştırmalar (TE-A1...TE-A25)
TE-A1. Kavanozda yaklaşık kaç misket var: 5 mi, 50 mi, 500 mü? [GÖRSEL: az miktarda misketli kavanoz] → 5
TE-A2. Elanaz 20 tahmin etti, gerçek 25 çıktı. Az mı, fazla mı tahmin etmiş? → az
TE-A3. Sınıfta yaklaşık kaç öğrenci oturur: 3 mü, 30 mu, 300 mü? → 30 [GÖRSEL: sınıf]
TE-A4. 10 misket ne kadar yer kaplar görüyoruz. Büyük kapta yaklaşık kaç misket olabilir? [GÖRSEL: solda 10 misket, sağda büyük dolu kap] → yaklaşık 30-40 (makul aralık kabul)
TE-A5. 🎭 Elanaz "Sınıfımızda 200 öğrenci var" dedi. Bu makul bir tahmin mi? (İpucu: Bir sınıfta kaç sıra, kaç çocuk olabilir — 200 gerçekçi mi?) → hayır, makul değil [GÖRSEL: küçük sınıf + 200 sayısı karşılaştırması]
TE-A6. Elanaz 15 tahmin etti, gerçek 12 çıktı. Az mı, fazla mı tahmin etmiş? → fazla
TE-A7. Bir kitapta yaklaşık kaç sayfa olur: 10 mu, 100 mü, 1000 mi? → 100 [GÖRSEL: kitap]
TE-A8. Bardakta yaklaşık kaç çay kaşığı su var: 3 mü, 30 mu, 300 mü? → 3 [GÖRSEL: bardak]
TE-A9. 🎭 Ali "Bahçedeki ağaçta yaklaşık 1.000.000 elma var" dedi. Bu iyi bir tahmin mi? (İpucu: Bir ağaçta yüzlerce elma olur, milyonlarca değil!) → hayır [GÖRSEL: elmalı ağaç]
TE-A10. Elanaz 40 tahmin etti, gerçek 38 çıktı. Az mı, fazla mı, doğru mu tahmin etmiş? → yaklaşık doğru (fazla ama çok yakın) [GÖRSEL: tahmin 40 vs gerçek 38]
TE-A11. Bir günde yaklaşık kaç kez nefes alırız: 10 mu, 1.000 mi, 100 mü? → 1.000 (yaklaşık) [GÖRSEL: çocuk nefes alıyor]
TE-A12. Sepette yaklaşık kaç elma var: 5 mi, 50 mi? [GÖRSEL: az elmalı sepet] → 5
TE-A13. 🎭 Elanaz kalem kutusundaki kalemleri saymadan önce tahmin etti: "20 kalem var." Açınca 8 çıktı. Elanaz fazla mı, az mı tahmin etmiş? (İpucu: 20 mi çok, 8 mi çok?) → fazla tahmin etmiş [GÖRSEL: kalem kutusu, 20 tahmini vs 8 gerçek]
TE-A14. Sınıf kitaplığında yaklaşık kaç kitap var: 5 mi, 50 mi, 500 mü? [GÖRSEL: kitaplık] → 50
TE-A15. Elanaz bir çuval pirince baktı: "yaklaşık 1.000 tane pirinç tanesi vardır" dedi. Bu makul mu? → evet makul [GÖRSEL: çuval pirinç]
TE-A16. 🎭 Masada 10 boncuk var. Elanaz ikinci masada "yaklaşık 10" dedi ama 35 çıktı. Bu iyi bir tahmin mi? (İpucu: 10 tahmin, 35 gerçek — fark çok büyük, iyi tahmin sayılır mı?) → hayır, iyi tahmin değil [GÖRSEL: 10 boncuklu masa + 35 boncuklu masa]
TE-A17. Tahmin: 25, Gerçek: 24. Bu iyi bir tahmin mi? (evet/hayır) → evet [GÖRSEL: tahmin vs gerçek karşılaştırma]
TE-A18. Tahmin: 10, Gerçek: 80. Bu iyi bir tahmin mi? (evet/hayır) → hayır [GÖRSEL: büyük fark gösterimi]
TE-A19. Elanaz sınıftaki sandalyeleri saymadan önce tahmin etti. Hangi tahmin daha iyi: 25 mi, 200 mü? → 25 [GÖRSEL: sınıf sandalyeleri]
TE-A20. 🎭 "Tahmin her zaman tam doğru olmalıdır." Bu doğru mu? (İpucu: Tahmin = kesin sayma değil, yaklaşık değer!) → hayır, yanlış [GÖRSEL: tahmin balonu vs gerçek sayı]
TE-A21. Elanaz 30 tahmin etti, gerçek 29 çıktı. Değerlendirme nasıl? → çok iyi tahmin [GÖRSEL: tahmin 30 vs gerçek 29]
TE-A22. Büyük çantada yaklaşık kaç kitap var: 3 mü, 30 mu, 300 mü? [GÖRSEL: büyük okul çantası] → 3-5 arası (kabul: 3/4/5)
TE-A23. Tahmin: 50, Gerçek: 20. Fazla mı, az mı tahmin edilmiş? → fazla [GÖRSEL: tahmin 50 vs gerçek 20]
TE-A24. Elanaz kavanozdaki şekerleri tahmin ederken ne yapmalı? → referans sayıyı kullanmalı / önce 10 tanesinin nasıl göründüğünü görmeli [GÖRSEL: kavanoz + referans grup]
TE-A25. 🎭 Aynı büyüklükte iki kavanoz var: birinde büyük misketler, birinde küçük misketler. Hangisinde DAHA ÇOK misket olur? (İpucu: Küçük nesneler daha sık yerleşir!) → küçük misketli kavanos [GÖRSEL: büyük misketli kavanoz + küçük misketli kavanoz]

## Testler (TE-T1...TE-T25)
TE-T1. Elanaz 20 tahmin etti, gerçek 25 çıktı. Nasıl tahmin etmiş? A) Fazla B) Az ✅ C) Doğru D) Hiç [GÖRSEL: tahmin 20 vs gerçek 25]
TE-T2. Bir sınıfta kaç öğrenci olur (makul tahmin)? A) 3 B) 30 ✅ C) 300 D) 3000 [GÖRSEL: sınıf]
TE-T3. Tahmin: 15, Gerçek: 15. Bu nasıl bir tahmin? A) Az B) Fazla C) Tam ✅ D) Kötü [GÖRSEL: tahmin=gerçek]
TE-T4. 🎭 Hangi tahmin en İYİDİR? (Gerçek sayı: 40) A) 5 B) 100 C) 38 ✅ D) 200 (İpucu: Gerçeğe en yakın olan en iyi tahmindir!) [GÖRSEL: dört tahmin karşılaştırmalı]
TE-T5. Elanaz kalem kutusunda 8 kalem olduğunu tahmin etti, 20 çıktı. Nasıl tahmin etmiş? A) Fazla B) Az ✅ C) Doğru D) Makul [GÖRSEL: kalem kutusu]
TE-T6. Büyük çuvaldaki pirinç tanelerini tahmin etmek için ne yapmalıyız? A) Hepsini say B) Referans grup kullan ✅ C) Hiç bakma D) Çuvalı tart [GÖRSEL: pirinç çuvalı + küçük referans grup]
TE-T7. 🎭 "Tahmin ne kadar gerçeğe yakınsa o kadar iyidir." Bu doğru mu? A) Hayır B) Evet ✅ C) Bazen D) Hiçbir zaman (İpucu: Tahminimizin amacı gerçeğe yakın olmak!) [GÖRSEL: yakın tahmin vs uzak tahmin]
TE-T8. Tahmin: 30, Gerçek: 45. Nasıl tahmin edilmiş? A) Tam B) Fazla C) Az ✅ D) Makul değil [GÖRSEL: tahmin 30 vs gerçek 45]
TE-T9. Hangisi makul bir tahmin DEĞİLDİR? A) Sınıfta 28 öğrenci B) Kitapta 150 sayfa C) Kalem kutusunda 10 kalem D) Okulda 1.000.000 öğrenci ✅ [GÖRSEL: dört seçenek]
TE-T10. 🎭 Elanaz büyük kavanozdaki şekerleri tahmin etti: "yaklaşık 100." Gerçek 97 çıktı. Bu iyi tahmin mi? A) Hayır, çok yanlış B) Evet, çok iyi ✅ C) Orta D) Kötü (İpucu: 100 tahmin, 97 gerçek — fark sadece 3!) [GÖRSEL: kavanoz, tahmin 100 vs gerçek 97]
TE-T11. Bir ağaçta yaklaşık kaç yaprak olur? A) 10 B) 1.000 ✅ C) 1.000.000 D) 5 [GÖRSEL: yapraklı ağaç]
TE-T12. Tahmin: 60, Gerçek: 20. Nasıl tahmin edilmiş? A) Az B) Fazla ✅ C) Doğru D) Makul [GÖRSEL: tahmin 60 vs gerçek 20]
TE-T13. 🎭 Küçük kapta 10 boncuk sığıyor. Aynı büyüklükteki 3 kap yan yana konsa toplam kaç boncuk sığar (tahmin)? A) 10 B) 20 C) 30 ✅ D) 100 (İpucu: 3 kap × 10 boncuk = ?) [GÖRSEL: 3 eşit kap yan yana]
TE-T14. Elanaz saymadan önce "yaklaşık 15" dedi, gerçek 14 çıktı. Bu nasıl bir tahmin? A) Kötü B) Fazla ama iyi ✅ C) Az ve kötü D) Hiç [GÖRSEL: tahmin 15 vs gerçek 14]
TE-T15. Hangisi tahmin için doğru bir yaklaşımdır? A) Rastgele söyle B) Referans grup kullan ✅ C) Saymadan cevapla D) Büyük sayı söyle [GÖRSEL: referans grup kullanımı]
TE-T16. 🎭 "Tahmin yaparken hata yapmak normaldir." Doğru mu? A) Hayır B) Evet ✅ C) Sadece küçük hatalar D) Hiçbir zaman hata olmaz (İpucu: Tahmin = kesin değil — hata olabilir, önemli olan makul olmak!) [GÖRSEL: tahmin balonu]
TE-T17. Tahmin: 50, Gerçek: 48. Bu nasıl bir tahmin? A) Kötü B) Az C) Fazla ama çok iyi ✅ D) Yanlış [GÖRSEL: tahmin 50 vs gerçek 48]
TE-T18. Bir fincan çayda yaklaşık kaç yudum su var? A) 1 B) 10 ✅ C) 100 D) 1000 [GÖRSEL: çay fincanı]
TE-T19. 🎭 Aynı büyüklükte iki kutuda biri büyük toplarla, biri küçük toplarla dolu. Hangisinde daha az top vardır? A) Küçük toplarda B) Büyük toplarda ✅ C) İkisinde eşit D) Hiçbirinde (İpucu: Büyük nesneler daha az sığar!) [GÖRSEL: iki kutu karşılaştırması]
TE-T20. Tahmin: 25, Gerçek: 50. Nasıl tahmin edilmiş? A) Fazla B) Az ✅ C) Doğru D) Makul [GÖRSEL: tahmin 25 vs gerçek 50]
TE-T21. Okuldaki tüm öğrencileri tahmin etmek için ne yapabiliriz? A) Rastgele say B) Bir sınıfı say, sınıf sayısıyla çarp ✅ C) Sadece bak D) Sormak yok [GÖRSEL: okul binası + sınıf]
TE-T22. 🎭 Elanaz "Tahmin 10, Gerçek 11 — bu kötü bir tahmin" dedi. Haklı mı? A) Evet, haklı B) Hayır, 1 fark çok iyi tahmin ✅ C) Belki D) Tahmin söylenmez (İpucu: Sadece 1 fark — bu mükemmel tahmin sayılır!) [GÖRSEL: tahmin 10 vs gerçek 11]
TE-T23. Bir kitaplıktaki kitapları tahmin etmek için ne yapmalıyız? A) Hepsini say B) Bir rafa bak, raf sayısıyla çarp ✅ C) Rastgele söyle D) Tartarak bul [GÖRSEL: kitaplık + bir raf yakın plan]
TE-T24. Tahmin: 100, Gerçek: 30. Bu nasıl bir tahmin? A) İyi B) Fazla ✅ C) Az D) Makul [GÖRSEL: tahmin 100 vs gerçek 30]
TE-T25. 🎭 İyi tahmin yapabilmek için en önemli şey nedir? A) Şans B) Referans kullanmak ve deneyim ✅ C) Hep büyük sayı söylemek D) Hiç tahmin etmemek (İpucu: Referans + deneyim = iyi tahmin!) [GÖRSEL: referans grup + tecrübe simgesi]
