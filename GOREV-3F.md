# GOREV-3F: Yeni Konu — Geometrik Cisim Modelleri (anlatım + 50 görselli soru)
**Onay:** Yasin ✅ (11 Haziran gece) · **Tahmini süre:** 2-2,5 saat (görseller dahil)

## 🔴 GÖRSEL KURALI (PATRON EMRİ — İSTİSNASIZ)
2. sınıf çocuğu nesne adını bilmeyebilir (zar, teneke, kibrit kutusu) — nesneyi RESMİNDEN tanır. Bu görevde:
1. **50 sorunun TAMAMINDA** sorudaki ana nesnenin canlı renkli SVG'si gösterilir (react-native-svg, GOREV-3E paleti: #E53935 #FB8C00 #FDD835 #43A047 #1E88E5 #8E24AA; dekor yok, arka plan sahnesi yok).
2. Şıklarında NESNE adı geçen testlerde şık yanına küçük nesne ikonu eklenir (örn. G2-T4: süt kutusu/misket/çadır/kibrit kutusu ikonları). Şıklarında CİSİM adı geçenlerde (küp/küre/silindir...) küçük cisim modeli ikonu eklenir.
3. Anlatımın 4 sayfası görselli ([GÖRSEL: ...] tarifleri aşağıda).
4. Ortak SVG kütüphanesi kur: `src/components/nesneler/` altında tekrar kullanılabilir çizimler (zar, top, konserve, kutu, çadır, küre, küp, silindir, prizmalar...) — ileriki konular da kullanacak.

## Cursor'a Not
Yeni konu dosyası: `content/sinif2/matematik/geometrik-cisim-modelleri.json` — kazanımKodu "MAT.2.1.2", haritada Geometrik Cisimler'den SONRA, Sayılar grubundan ÖNCE. Ustalık kilidi: Geometrik Cisimler'den 1 yıldız almadan açılmaz (mevcut kilit mantığı). `scripts/gorev-3f-questions.mjs` + generate-content düzeni. 🎭 → sasirtma:true + ipucu. Doğrulama: konu 50 soru (25 A + 25 T). Telefonda anlatım + bir oturum test. Commit: `GOREV-3F: Geometrik Cisim Modelleri (50 gorselli soru)` — push yok. Rapor: "Claude'a not".

---
## ANLATIM (4 sayfa)
**Sayfa 1:** Geçen konuda cisimleri yuvarlak ve köşeli diye ayırmıştık. Şimdi bu cisimlerin adlarını öğreniyoruz! Çevremizdeki her nesne bir geometrik cisme benzer. [GÖRSEL: yan yana 6 cisim modeli — küp, kare prizma, dikdörtgen prizma, üçgen prizma, silindir, küre — her biri farklı canlı renkte, altlarında adları]
**Sayfa 2:** Zar ve küp şeker KÜP'e benzer. Kibrit kutusu ve ayakkabı kutusu DİKDÖRTGEN PRİZMA'ya benzer. Kolonya kutusu gibi kare yüzlü uzun kutular KARE PRİZMA'ya benzer. [GÖRSEL: üç eşleşme ok işaretiyle: kırmızı zar→küp, turuncu ayakkabı kutusu→dikdörtgen prizma, mavi uzun kare kutu→kare prizma]
**Sayfa 3:** Çadır ve bazı çatılar ÜÇGEN PRİZMA'ya benzer. Konserve kutusu ve teneke kutu SİLİNDİR'e benzer. Futbol topu ve dünya KÜRE'ye benzer. [GÖRSEL: yeşil çadır→üçgen prizma, gri-sarı konserve→silindir, futbol topu→küre]
**Sayfa 4:** Çevremizdeki yapılarda da geometrik cisimler gizlidir! Kale kuleleri silindire, binalar dikdörtgen prizmaya, çatılar üçgen prizmaya benzer. Haydi, odana bak: hangi nesne hangi cisme benziyor? [GÖRSEL: basit şehir silüeti — mor silindir kule, mavi dikdörtgen prizma bina, kırmızı üçgen prizma çatı, sarı küre kubbe — etiketli]

## Alıştırmalar (G2-A1...G2-A25) — hepsi görselli
G2-A1. Zar hangi geometrik cisme benzer? → küp [GÖRSEL: kırmızı zar]
G2-A2. Konserve kutusu hangi geometrik cisme benzer? → silindir [GÖRSEL: konserve kutusu]
G2-A3. Futbol topu hangi geometrik cisme benzer? → küre [GÖRSEL: futbol topu]
G2-A4. Ayakkabı kutusu hangi geometrik cisme benzer? → dikdörtgen prizma [GÖRSEL: turuncu ayakkabı kutusu]
G2-A5. Elanaz'ın kamp çadırı hangi geometrik cisme benzer? → üçgen prizma [GÖRSEL: yeşil kamp çadırı]
G2-A6. Küp şeker hangi geometrik cisme benzer? → küp [GÖRSEL: beyaz küp şeker]
G2-A7. Teneke meyve suyu kutusu hangi geometrik cisme benzer? → silindir [GÖRSEL: meyve suyu tenekesi]
G2-A8. Dünya'mız hangi geometrik cisme benzer? → küre [GÖRSEL: mavi-yeşil dünya küresi]
G2-A9. 🎭 Basketbol topu silindire mi, küreye mi benzer? (İpucu: Top her yönden yusyuvarlaktır — silindirin ise düz iki yüzü vardır!) → küre [GÖRSEL: turuncu basketbol topu]
G2-A10. Kibrit kutusu hangi geometrik cisme benzer? → dikdörtgen prizma [GÖRSEL: kibrit kutusu]
G2-A11. Elanaz'ın boya kalemi kutusu uzun ve kare yüzlüdür. Hangi cisme benzer? → kare prizma [GÖRSEL: uzun kare tabanlı boya kutusu]
G2-A12. Bir kale kulesi hangi geometrik cisme benzer? → silindir [GÖRSEL: mor silindir kule]
G2-A13. Süt kutusu hangi geometrik cisme benzer? → dikdörtgen prizma [GÖRSEL: süt kutusu]
G2-A14. 🎭 Yumurta küreye benzer mi? (evet/hayır) (İpucu: Küre her yönden aynı yuvarlaklıktadır; yumurtanın bir ucu sivri, dikkat!) → hayır [GÖRSEL: yumurta]
G2-A15. Bazı evlerin çatısı hangi geometrik cisme benzer? → üçgen prizma [GÖRSEL: kırmızı üçgen çatılı ev]
G2-A16. Misket hangi geometrik cisme benzer? → küre [GÖRSEL: renkli misket]
G2-A17. Elanaz markette silindire benzeyen bir ürün arıyor. Konserve mi almalı, küp şeker mi? → konserve [GÖRSEL: yan yana konserve ve küp şeker]
G2-A18. Buzdolabı hangi geometrik cisme benzer? → dikdörtgen prizma [GÖRSEL: buzdolabı]
G2-A19. Zekâ küpü hangi cisme benzer? → küp [GÖRSEL: renkli zekâ küpü]
G2-A20. Tuvalet kâğıdı rulosu hangi geometrik cisme benzer? → silindir [GÖRSEL: kâğıt rulosu]
G2-A21. Portakal hangi geometrik cisme benzer? → küre [GÖRSEL: portakal]
G2-A22. Elanaz'ın hediye kutusu her yüzü kare olan bir kutudur. Hangi cisme benzer? → küp [GÖRSEL: sarı kurdeleli küp hediye kutusu]
G2-A23. Pil hangi geometrik cisme benzer? → silindir [GÖRSEL: pil]
G2-A24. Kitap hangi geometrik cisme benzer? → dikdörtgen prizma [GÖRSEL: mavi kitap]
G2-A25. Elanaz parkta üçgen prizmaya benzeyen bir şey gördü. Çadır mı, top mu görmüştür? → çadır [GÖRSEL: yan yana çadır ve top]

## Testler (G2-T1...G2-T25) — hepsi görselli + şık ikonlu
G2-T1. Zar hangi geometrik cisme benzer? A) Küre B) Küp ✅ C) Silindir D) Üçgen prizma [GÖRSEL: mavi zar; şıklarda cisim ikonları]
G2-T2. Hangisi silindire benzer? A) Konserve kutusu ✅ B) Zar C) Futbol topu D) Kitap [GÖRSEL: şıklarda nesne ikonları]
G2-T3. Futbol topu hangi geometrik cisme benzer? A) Silindir B) Küp C) Küre ✅ D) Kare prizma [GÖRSEL: futbol topu; şık ikonları]
G2-T4. Hangisi küreye benzer? A) Süt kutusu B) Misket ✅ C) Çadır D) Kibrit kutusu [GÖRSEL: şıklarda nesne ikonları]
G2-T5. Elanaz'ın kamp çadırı hangi cisme benzer? A) Üçgen prizma ✅ B) Küre C) Silindir D) Küp [GÖRSEL: turuncu çadır; şık ikonları]
G2-T6. 🎭 Hangisi KÜP'e benzeMEZ? A) Zar B) Küp şeker C) Zekâ küpü D) Konserve kutusu ✅ (İpucu: "BenzeMEZ" diyor — küp OLMAYANI arıyoruz!) [GÖRSEL: şıklarda nesne ikonları]
G2-T7. Ayakkabı kutusu hangi geometrik cisme benzer? A) Küre B) Dikdörtgen prizma ✅ C) Silindir D) Üçgen prizma [GÖRSEL: ayakkabı kutusu; şık ikonları]
G2-T8. Hangisi dikdörtgen prizmaya benzer? A) Top B) Portakal C) Kitap ✅ D) Pil [GÖRSEL: şıklarda nesne ikonları]
G2-T9. Teneke kutu ve pil hangi cisme benzer? A) İkisi de silindire ✅ B) İkisi de küpe C) Biri küre, biri küp D) İkisi de üçgen prizmaya [GÖRSEL: yan yana teneke ve pil]
G2-T10. Dünya'mız hangi geometrik cisme benzer? A) Silindir B) Küre ✅ C) Küp D) Dikdörtgen prizma [GÖRSEL: dünya küresi; şık ikonları]
G2-T11. 🎭 Elanaz "Her yüzü kare olan bir kutum var." dedi. Elanaz'ın kutusu hangi cisme benzer? A) Dikdörtgen prizma B) Küp ✅ C) Silindir D) Küre (İpucu: HER yüzü kare olan özel kutunun adı nedir?) [GÖRSEL: her yüzü kare kutu; şık ikonları]
G2-T12. Evlerin üçgen çatısı hangi cisme benzer? A) Küre B) Silindir C) Üçgen prizma ✅ D) Küp [GÖRSEL: üçgen çatılı ev; şık ikonları]
G2-T13. Hangisi küreye benzeyen nesnelerdir? A) Top - Misket ✅ B) Zar - Kutu C) Pil - Konserve D) Çadır - Çatı [GÖRSEL: şıklarda nesne çifti ikonları]
G2-T14. Kale kulesi hangi geometrik cisme benzer? A) Küp B) Silindir ✅ C) Küre D) Kare prizma [GÖRSEL: kale kulesi; şık ikonları]
G2-T15. Elanaz markette süt kutusu aldı. Süt kutusu hangi cisme benzer? A) Dikdörtgen prizma ✅ B) Küre C) Silindir D) Üçgen prizma [GÖRSEL: süt kutusu; şık ikonları]
G2-T16. 🎭 Hangisi SİLİNDİRE benzeMEZ? A) Pil B) Konserve kutusu C) Tuvalet kâğıdı rulosu D) Zar ✅ (İpucu: Silindirin yuvarlak gövdesi vardır — köşeli olan hangisi?) [GÖRSEL: şıklarda nesne ikonları]
G2-T17. Kibrit kutusu hangi geometrik cisme benzer? A) Küre B) Küp C) Dikdörtgen prizma ✅ D) Silindir [GÖRSEL: kibrit kutusu; şık ikonları]
G2-T18. Hangisi üçgen prizmaya benzer? A) Çadır ✅ B) Top C) Konserve D) Misket [GÖRSEL: şıklarda nesne ikonları]
G2-T19. Elanaz'ın kalem kutusu uzun ve kare tabanlı bir kutudur. Hangi cisme benzer? A) Kare prizma ✅ B) Küre C) Silindir D) Üçgen prizma [GÖRSEL: uzun kare tabanlı kalem kutusu; şık ikonları]
G2-T20. Portakal ve karpuz hangi cisme benzer? A) Küpe B) Küreye ✅ C) Silindire D) Üçgen prizmaya [GÖRSEL: yan yana portakal ve karpuz]
G2-T21. 🎭 Kutudaki süt bitince Elanaz kutuyu geri dönüşüme attı. Boş kutu hangi cisme benzer? A) Dikdörtgen prizma ✅ B) Küre C) Hiçbirine — boş kutu cisim değildir D) Silindir (İpucu: Kutu boş da olsa dolu da olsa biçimi DEĞİŞMEZ!) [GÖRSEL: geri dönüşüm kutusuna atılan süt kutusu]
G2-T22. Hangisi küpe benzer? A) Zar ✅ B) Top C) Konserve D) Çadır [GÖRSEL: şıklarda nesne ikonları]
G2-T23. Bina hangi geometrik cisme benzer? A) Küre B) Dikdörtgen prizma ✅ C) Üçgen prizma D) Silindir [GÖRSEL: yüksek bina; şık ikonları]
G2-T24. 🎭 Elanaz dondurma külahını bitirdi, elinde sadece YUVARLAK dondurma topu kaldı. Dondurma topu hangi cisme benzer? A) Küre ✅ B) Silindir C) Küp D) Kare prizma (İpucu: Külah gitti — elimizde kalan TOP neye benzer?) [GÖRSEL: dondurma topu]
G2-T25. Hangisi doğru eşleşmedir? A) Zar → Küre B) Top → Silindir C) Konserve → Silindir ✅ D) Çadır → Küp [GÖRSEL: şıklarda eşleşme ikonları]
