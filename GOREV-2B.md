# GOREV-2B.md — Soru Havuzu Takviyesi (100 Soru)
**Gönderen:** Claude (GM) · **Onaylayan:** Yasin (patron)
**Görev:** Aşağıdaki 100 soruyu Matematik / Ritmik Sayma havuzuna ekle (content/sinif2/matematik/ içindeki ilgili JSON'a, mevcut şemaya uygun biçimde dönüştürerek). Soru metinlerine SADIK KAL — yeniden yazma, kısaltma, "iyileştirme" yapma. 🎭 işaretli sorular sasirtma:true (veya şemadaki karşılığı) ile işaretlensin; ipucu metinleri yanlış-cevap geri bildirimi olarak kullanılsın. Ekleme sonrası havuz sayımını doğrula ve "Claude'a not" raporu yaz: kaç soru eklendi, toplam havuz, atlanan/sorunlu madde var mı.
**Kaynak:** PARTI-1 (Claude üretimi, 50) + PARTI-G1 (Gemini üretimi, Claude denetiminden geçmiş ve 5 düzeltme uygulanmış, 50).

---

## BÖLÜM 1 — PARTI-1 (Claude)

### Alıştırmalar (yazılı cevap)
A1. Elanaz 2'şer sayıyor: 2, 4, 6, 8... Sıradaki sayı kaçtır? → 10
A2. 5'er ileriye say: 5, 10, 15, __ → 20
A3. Elanaz'ın kumbarasına her gün 10 lira atılıyor. 10, 20, 30... Dördüncü gün kumbarada kaç lira olur? → 40
A4. 3'er sayıyoruz: 3, 6, 9, 12, __ → 15
A5. Geriye doğru 1'er say: 20, 19, 18, __ → 17
A6. Zeynep ile Elanaz 4'er sayıyor: 4, 8, 12, __ → 16
A7. 2'şer geriye say: 10, 8, 6, __ → 4
A8. Bir elin parmakları 5 tanedir. 3 elde kaç parmak vardır? (5'er say) → 15
A9. 10'ar ileriye say: 40, 50, 60, __ → 70
A10. Merdivenleri 2'şer çıkıyoruz: 2, 4, 6, 8, 10, __ → 12
A11. 5'er geriye say: 30, 25, 20, __ → 15
A12. Elanaz'ın çıkartma defterinde her sayfada 4 çıkartma var. 4, 8, 12... Beşinci sayfada toplam kaç çıkartma sayar? → 20
A13. 3'er geriye say: 18, 15, 12, __ → 9
A14. 1'er ileriye say: 67, 68, 69, __ → 70
A15. Bisikletlerin 2 tekerleği var. 6 bisiklette kaç teker vardır? (2'şer say) → 12
A16. 10'ar geriye say: 100, 90, 80, __ → 70
A17. Eldivenler 5 parmaklı. 4 eldivende kaç parmak yeri var? (5'er say) → 20
A18. 4'er ileriye say: 12, 16, 20, __ → 24
A19. Elanaz ip atlıyor ve 3'er sayıyor: 3, 6, 9... Altıncı atlayışta kaç der? → 18
A20. 2'şer say ve eksik sayıyı bul: 14, 16, __, 20 → 18
A21. 5'er say ve eksik sayıyı bul: 35, __, 45, 50 → 40
A22. 10'ar say ve eksik sayıyı bul: 20, 30, __, 50 → 40
A23. 🎭 Elanaz 2'şer sayarken bir sayıyı yanlış söyledi: 2, 4, 6, 7, 10. Yanlış söylediği sayı hangisi? → 7 (ipucu: 2'şer sayarken hep çift sayılar gelir)
A24. 3'er say ve eksik sayıyı bul: 21, 24, __, 30 → 27
A25. Geriye 4'er say: 24, 20, 16, __ → 12

### Test soruları (4 şıklı, ✅ doğru)
T1. 2'şer sayarken hangisi söylenmez? A) 4 B) 8 C) 7 ✅ D) 10
T2. 5, 10, 15, 20... Bu sayma kaçar kaçar yapılıyor? A) 2'şer B) 5'er ✅ C) 3'er D) 10'ar
T3. Elanaz 10'ar sayıyor. 30'dan sonra hangi sayıyı söyler? A) 31 B) 35 C) 40 ✅ D) 50
T4. 3, 6, 9, 12 dizisinde sıradaki sayı hangisidir? A) 13 B) 14 C) 15 ✅ D) 16
T5. Geriye doğru 5'er sayarken 25'ten sonra hangisi gelir? A) 24 B) 20 ✅ C) 30 D) 15
T6. Hangi dizi 4'er ileriye saymadır? A) 4, 8, 12, 16 ✅ B) 4, 6, 8, 10 C) 4, 5, 6, 7 D) 4, 9, 14, 19
T7. Elanaz'ın sınıfında sıralar 2'şer kişilik. 5 sırada kaç öğrenci oturur? A) 7 B) 10 ✅ C) 12 D) 25
T8. 🎭 Aşağıdakilerden hangisi 5'er saymada YOKTUR? A) 15 B) 35 C) 42 ✅ D) 50 (ipucu: 5'er sayarken sayılar hep 0 ya da 5 ile biter)
T9. 18, 15, 12, 9... Bu sayma nasıl yapılıyor? A) 3'er ileriye B) 3'er geriye ✅ C) 2'şer geriye D) 5'er geriye
T10. Eksik sayı hangisidir? 10, 20, __, 40 A) 25 B) 30 ✅ C) 35 D) 21
T11. Bir yıldızın 5 köşesi var. 3 yıldızda kaç köşe vardır? A) 8 B) 10 C) 15 ✅ D) 20
T12. 2'şer geriye sayarken 12'den sonra hangisi gelir? A) 14 B) 11 C) 10 ✅ D) 8
T13. Hangi dizi yanlıştır? A) 2, 4, 6, 8 B) 5, 10, 15, 20 C) 3, 6, 9, 12 D) 10, 20, 25, 30 ✅
T14. Elanaz 4'er sayarak topladığı kestaneleri sayıyor: 4, 8, 12, 16. Kaç kestanesi var? A) 4 B) 12 C) 16 ✅ D) 20
T15. 🎭 Elanaz'ın 3 kalemi, 2 silgisi ve 1 defteri var. Kalemleri sayarsa kaça kadar sayar? A) 6 B) 5 C) 3 ✅ D) 2 (ipucu: Soruda yalnızca KALEMLER soruluyor, dikkatle oku)
T16. 60, 70, 80, 90... Bu saymada 90'dan sonra hangisi gelir? A) 91 B) 95 C) 100 ✅ D) 110
T17. Hangisi 3'er geriye saymadır? A) 12, 9, 6, 3 ✅ B) 12, 10, 8, 6 C) 3, 6, 9, 12 D) 12, 11, 10, 9
T18. Eksik sayı hangisidir? 16, 20, __, 28 A) 22 B) 24 ✅ C) 26 D) 21
T19. Arabaların 4 tekerleği var. 4'er sayarak 3 arabanın tekerleklerini bul. A) 7 B) 8 C) 12 ✅ D) 16
T20. 1'er geriye sayarken 41'den sonra hangisi gelir? A) 42 B) 40 ✅ C) 39 D) 45
T21. 🎭 Hangisi hem 2'şer hem 5'er saymada söylenir? A) 15 B) 12 C) 10 ✅ D) 4 (ipucu: İki listeyi de düşün — hangi sayı ikisinde de var?)
T22. Elanaz kumbarasındaki paraları 5'er sayıyor: 5, 10, 15, 20, 25. Kaç lirası var? A) 5 B) 20 C) 25 ✅ D) 30
T23. Eksik sayı hangisidir? 9, 12, 15, __ A) 16 B) 17 C) 18 ✅ D) 21
T24. 10'ar geriye sayarken 50'den sonra hangisi gelir? A) 60 B) 45 C) 40 ✅ D) 30
T25. Hangi sayma en hızlı 100'e ulaştırır? A) 1'er B) 2'şer C) 5'er D) 10'ar ✅

## BÖLÜM 2 — PARTI-G1 (Gemini, Claude denetimli — 5 düzeltme uygulandı)

### Alıştırmalar (yazılı cevap)
G-A1. Elanaz ikişer ileriye doğru sayarken 12'den sonra hangi sayıyı söyler? → 14
G-A2. [DÜZELTİLDİ] Bahçedeki 5 kedinin patilerini dörder sayalım: 4, 8, 12, 16... Son kedi için hangi sayıyı söyleriz? → 20
G-A3. Kitaplığın raflarını üçer üçer sayıyoruz: 3, 6, 9... Bir sonraki raf kaçıncı olur? → 12
G-A4. Onar onar geriye doğru sayıyoruz: 90, 80, 70... Sırada hangi sayı var? → 60
G-A5. Elanaz her gün kumbarasına 4 lira atıyor. 4, 8, 12, 16... Beşinci gün kumbarada kaç lira olur? → 20
G-A6. 30'dan başlayıp geriye doğru beşer ritmik sayarken 25'ten sonra hangi sayıyı söyleriz? → 20
G-A7. Masada 8 çift çorap var. Çorapları ikişer ikişer sayarsak en son hangi sayıyı buluruz? → 16
G-A8. Elanaz merdivenleri dörder dörder çıkıyor. 4, 8... Üçüncü adımında hangi basamakta olur? → 12
G-A9. Birer ileriye sayarken 45'ten bir önce gelen sayı hangisidir? → 44
G-A10. Üçer ileriye sayarken 18 ile 24 arasında hangi sayıyı söyleriz? → 21
G-A11. 🎭 [CEVAP TAMAMLANDI] Elanaz 40'tan geriye onar sayıyor. Kerem ise 10'dan ileriye onar sayıyor. İkisinin de söylediği ortak bir sayı yoktur diyebilir miyiz? → Hayır, diyemeyiz (ikisi de 10, 20, 30 ve 40 sayılarını söyler). (ipucu: İki saymayı da yaz, ortak sayıları karşılaştır)
G-A12. Beşer ritmik saymada 35'ten hemen sonra gelen sayı hangisidir? → 40
G-A13. Kutudaki boya kalemlerini dörder sayıyoruz: 12, 16, 20... Bir sonraki saymada kaç kalem olur? → 24
G-A14. 16'dan başlayıp geriye doğru ikişer sayarken söyleyeceğimiz ilk sayı kaçtır? → 14
G-A15. Elanaz'ın 50 tane çıkartması var. Onar onar arkadaşlarına dağıtıyor. Kalana doğru geriye sayalım: 50, 40, 30... Bir sonraki sayı kaçtır? → 20
G-A16. Üçer ritmik sayarken 15'ten önce hangi sayıyı söyleriz? → 12
G-A17. Dörder ileriye ritmik sayarken 28'den sonra gelen sayı hangisidir? → 32
G-A18. Masadaki 7 bardağın içine onar tane boncuk koyduk. Onar sayarsak toplam kaç boncuk olur? → 70
G-A19. 24'ten başlayıp geriye doğru üçer sayarken hangi sayıyı söylemeyiz: 21 mi, 20 mi? → 20
G-A20. Elanaz bisikletlerin tekerleklerini ikişer ikişer sayıyor. 2, 4, 6... 5 tane bisikletin toplam kaç tekerleği vardır? → 10
G-A21. 🎭 Beşer ileriye sayarken her sayının sonu ya 0 ya da 5 ile biter. Buna göre beşer sayarken 44 sayısını söyler miyiz? → Hayır, söylemeyiz. (ipucu: 44 hangi rakamla bitiyor? Kurala uy)
G-A22. Dörder ritmik saymada 36'dan bir önceki sayı kaçtır? → 32
G-A23. 100'den geriye doğru onar sayarken 80'den sonra hangi sayıyı söyleriz? → 70
G-A24. Elanaz 9'dan başlayıp üçer ileriye sayıyor. Söylediği dördüncü sayı kaçtır? → 18
G-A25. İkişer geriye sayarken 20'den hemen önce hangi sayıyı söyleriz? → 18 [NOT: "önce" = sayma dizisinde 20'ye gelmeden söylenen değil, 20'den sonraki adım kastediliyorsa 18 doğru. Cursor: bu soruyu "20'den hemen SONRA hangi sayıyı söyleriz? → 18" olarak ekle — dil tutarlılığı için.]

### Test soruları (4 şıklı, ✅ doğru)
G-T1. Elanaz geriye doğru ikişer sayıyor: 18 - 16 - 14 - ? - 10. Soru işareti yerine hangisi gelmelidir? A) 11 B) 12 ✅ C) 13 D) 15
G-T2. Üçer ritmik saymada 21'den sonra gelen sayı hangisidir? A) 22 B) 23 C) 24 ✅ D) 25
G-T3. Beşer ileriye doğru sayarken hangisini en son söyleriz? A) 35 B) 40 C) 45 ✅ D) 30
G-T4. Elanaz her gün 10 sayfa kitap okuyor. 4 günün sonunda okuduğu sayfa sayıları sırasıyla hangisidir? A) 10-20-30-40 ✅ B) 10-11-12-13 C) 5-10-15-20 D) 10-15-20-25
G-T5. Dörder ileriye doğru sayarken 16 ile 24'ün tam ortasında hangi sayı bulunur? A) 18 B) 20 ✅ C) 22 D) 26
G-T6. [DÜZELTİLDİ] Geriye doğru birer sayarken 70'ten SONRA hangi sayıyı söyleriz? A) 69 ✅ B) 71 C) 60 D) 80
G-T7. 🎭 Elanaz dörder ileriye doğru sayıyor: 4, 8, 12, 16, 20. Aşağıdaki sayılardan hangisi bu saymada DEĞİLDİR? A) 12 B) 16 C) 18 ✅ D) 20 (ipucu: Diziyi tek tek kontrol et)
G-T8. Üçer ritmik sayarken 9'dan başlayıp 4 adım ileri gidersek hangi sayıya ulaşırız? A) 12 B) 15 C) 18 D) 21 ✅
G-T9. İkişer ileriye sayarken aşağıdaki sayılardan hangisini asla söylemeyiz? A) 14 B) 15 ✅ C) 16 D) 18
G-T10. Elanaz'ın tokaları beşerli gruplar halinde duruyor. 5, 10, 15, ?, 25. Boşluğa hangisi gelmelidir? A) 16 B) 20 ✅ C) 22 D) 30
G-T11. 40'tan başlayıp geriye doğru onar sayarken 3. sırada hangi sayıyı söyleriz? (40 dahil) A) 30 B) 20 ✅ C) 10 D) 0
G-T12. [DÜZELTİLDİ: "und"→"ve"] Dörder ritmik sayarken 24'ten hemen önce ve hemen sonra gelen sayılar hangileridir? A) 20 ve 28 ✅ B) 23 ve 25 C) 22 ve 26 D) 18 ve 30
G-T13. Elanaz bahçeden topladığı 12 çiçeği üçerli demetler yapıyor. Demetleri üçer sayarsak hangisini söyleriz? A) 3-6-9-12 ✅ B) 2-4-6-8 C) 4-8-12-16 D) 5-10-15-20
G-T14. 15'ten başlayıp geriye doğru üçer sayarken 9'dan önce hangi sayıyı söyleriz? A) 6 B) 12 ✅ C) 8 D) 10
G-T15. Onar ritmik saymada 60'tan bir sonraki sayı kaçtır? A) 50 B) 61 C) 70 ✅ D) 80
G-T16. Elanaz merdivenleri ikişer ikişer çıkıyor. 6. basamaktan sonra hangi basamağa basar? A) 7 B) 8 ✅ C) 9 D) 10
G-T17. 🎭 Beşer ileriye sayarken 50'ye ulaştık. Onar ileriye sayarken de 50'ye ulaşırız. Bu iki saymada 50'den bir önce söylenen sayılar hakkında hangisi doğrudur? A) İkisinde de 40 söylenir. B) Beşer saymada 45, onar saymada 40 söylenir. ✅ C) İkisinde de 45 söylenir. D) Beşer saymada 40, onar saymada 45 söylenir. (ipucu: İki saymayı ayrı ayrı yaz, 50'den önceki sayılara bak)
G-T18. Dörder ritmik saymada 32'den sonra gelen sayı hangisidir? A) 34 B) 36 ✅ C) 38 D) 40
G-T19. 90'dan geriye doğru onar sayarken 50'den hemen sonra hangisini söyleriz? A) 60 B) 40 ✅ C) 30 D) 70
G-T20. Elanaz her gün kumbarasından 2 lira alıp harcıyor. Kumbarada 20 lira vardı. Geriye doğru sayarsak 3 gün sonra kaç lira kalır? A) 18 B) 16 C) 14 ✅ D) 12
G-T21. Üçer ileriye sayarken 12'den başlayarak 3 sayma yaparsak hangi sayıya geliriz? A) 15 B) 18 C) 21 ✅ D) 24
G-T22. Beşer geriye doğru sayarken 45'ten önce hangi sayıyı söylemiştik? A) 50 ✅ B) 40 C) 35 D) 55
G-T23. Elanaz masadaki 4 kutunun her birine dörder kalem koydu. Kalemleri dörder sayalım: A) 4-8-12-16 ✅ B) 2-4-6-8 C) 4-5-6-7 D) 10-20-30-40
G-T24. Birer ileriye ritmik saymada 89'dan sonra gelen sayı hangisidir? A) 88 B) 90 ✅ C) 91 D) 100
G-T25. İkişer geriye doğru sayarken 10'dan önce hangi sayı gelir? A) 12 ✅ B) 8 C) 9 D) 11

---

## Cursor için kontrol listesi
- [ ] 100 soru JSON şemasına aktarıldı (25+25 alıştırma yazılı, 25+25 test çoktan seçmeli)
- [ ] 🎭 işaretli 8 soru şaşırtma olarak işaretlendi, ipuçları yanlış-geri-bildirimine bağlandı
- [ ] [DÜZELTİLDİ] notları uygulandı, not metinleri JSON'a TAŞINMADI (sadece talimat)
- [ ] Havuz sayımı raporlandı (önceki + eklenen = toplam)
- [ ] Uygulama SDK 54'te açılıp Ritmik Sayma'da yeni soruların geldiği doğrulandı
