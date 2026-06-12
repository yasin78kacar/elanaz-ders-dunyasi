# GOREV-3H: Yeni Konu — Geometrik Cisim ve Şekillerin Biçimsel Özellikleri (anlatım + 50 görselli soru)
**Onay:** Yasin ✅ (12 Haziran gece) · **Tahmini süre:** 2-2,5 saat

## 🔴 GÖRSEL KURALI (PATRON EMRİ — İSTİSNASIZ)
GOREV-3F/3G ile aynı kural: 50 sorunun TAMAMI canlı renkli SVG görselli. "Değişmezlik" soruları (yer/yön/büyüklük) önce/sonra çizimleriyle gösterilir. nesneler/ kütüphanesi kullanılır ve büyütülür.

## Cursor'a Not
Yeni konu: `content/sinif2/matematik/bicimsel-ozellikler.json` — kazanımKodu "MAT.2.1.4", haritada Şekil Modelleri'nden SONRA; kilit: Şekil Modelleri'nden 1 yıldız. `scripts/gorev-3h-questions.mjs` + generate-content düzeni. Doğrulama bekçisi aktif — 4 benzersiz şık + doğru cevap şıklarda kontrolü otomatik çalışacak. 🎭 → sasirtma:true + ipucu. Doğrulama: 50 soru (25A + 25T). Telefonda anlatım + oturum testi. Commit: `GOREV-3H: Bicimsel Ozellikler (50 gorselli soru)` — push yok. Rapor: "Claude'a not".

---
## ANLATIM (4 sayfa)
**Sayfa 1:** Cisimlerin ve şekillerin yuvarlak ya da köşeli olması, onların biçimsel özelliğidir. [GÖRSEL: solda küre (yuvarlak), sağda küp (köşeli), özellik okları — canlı renkler]
**Sayfa 2:** Davul SİLİNDİRE benzer — yuvarlak bir cisimdir. Zil DAİREYE benzer — yuvarlak bir şekildir. Kutu PRİZMAYA benzer — köşeli bir cisimdir. [GÖRSEL: bateri seti — davul→silindir, zil→daire eşleşme okları]
**Sayfa 3:** En önemli sır: Bir cismin YERİ, YÖNÜ veya BÜYÜKLÜĞÜ değişse de biçimsel özellikleri DEĞİŞMEZ! Küçük top da yuvarlak, kocaman top da yuvarlak. [GÖRSEL: küçük top + büyük top yan yana, "ikisi de yuvarlak!" etiketi]
**Sayfa 4:** Kutuyu ters çevirsen de köşeleri kaybolmaz. Zarı masanın öbür ucuna koysan da küp olmaktan çıkmaz. Biçim, her yerde biçimdir! [GÖRSEL: düz kutu + ters kutu, köşeler kırmızı noktalı, "köşeler hâlâ orada!" etiketi]

---
## Alıştırmalar (G4-A1...G4-A25)
G4-A1. Davul hangi geometrik cisme benzer? → silindir [GÖRSEL: davul]
G4-A2. Zil hangi geometrik şekle benzer? → daire [GÖRSEL: sarı zil]
G4-A3. Topun biçimsel özelliği nedir: yuvarlak mı, köşeli mi? → yuvarlak [GÖRSEL: top]
G4-A4. Hediye kutusunun biçimsel özelliği nedir? (yuvarlak/köşeli) → köşeli [GÖRSEL: kurdeleli kutu]
G4-A5. Küçük bir top ile büyük bir topun ikisi de hangi özelliğe sahiptir? → yuvarlak [GÖRSEL: küçük ve büyük top yan yana]
G4-A6. 🎭 Elanaz zarı ters çevirdi. Zarın köşeleri kayboldu mu? (evet/hayır) (İpucu: Yön değişince biçim özellikleri DEĞİŞMEZ!) → hayır [GÖRSEL: düz zar + ters zar, köşeler işaretli]
G4-A7. Silindirin gövdesi yuvarlak mıdır, köşeli midir? → yuvarlak [GÖRSEL: silindir]
G4-A8. Kürenin köşesi var mıdır? (evet/hayır) → hayır [GÖRSEL: küre]
G4-A9. Küpün köşesi var mıdır? (evet/hayır) → evet [GÖRSEL: köşeleri kırmızı noktalı küp]
G4-A10. 🎭 Kocaman bir karpuz ile küçücük bir misket: ikisi de küreye benzer mi? (evet/hayır) (İpucu: BÜYÜKLÜK değişse de biçim değişmez!) → evet [GÖRSEL: dev karpuz + minik misket]
G4-A11. Üçgenin kaç köşesi vardır? → 3 [GÖRSEL: köşeleri noktalı üçgen]
G4-A12. Karenin kaç kenarı vardır? → 4 [GÖRSEL: kenarları renkli kare]
G4-A13. Dairenin köşesi var mıdır? (evet/hayır) → hayır [GÖRSEL: daire]
G4-A14. Elanaz bateri çaldı. Davulun üst yüzü hangi şekle benzer? → daire [GÖRSEL: üstten davul]
G4-A15. Dikdörtgenin kaç köşesi vardır? → 4 [GÖRSEL: köşeleri noktalı dikdörtgen]
G4-A16. 🎭 Elanaz kitabını çantasına koydu. Kitap çantadayken köşeli olma özelliğini kaybeder mi? (evet/hayır) (İpucu: YER değişince biçim değişmez!) → hayır [GÖRSEL: kitap + çanta]
G4-A17. Konserve kutusunun alt ve üst yüzleri hangi şekle benzer? → daire [GÖRSEL: konserve, alt-üst yüzler vurgulu]
G4-A18. Üçgenin kaç kenarı vardır? → 3 [GÖRSEL: kenarları renkli üçgen]
G4-A19. Hangisinin kenarı yoktur: kare mi, çember mi? → çember [GÖRSEL: yan yana kare ve çember]
G4-A20. Süt kutusunun yüzleri hangi şekle benzer? → dikdörtgen [GÖRSEL: süt kutusu, ön yüzü vurgulu]
G4-A21. 🎭 Top yokuştan aşağı yuvarlandı. Yuvarlanınca topun biçimi değişti mi? (evet/hayır) (İpucu: Hareket etmek biçimi DEĞİŞTİRMEZ!) → hayır [GÖRSEL: yokuştan yuvarlanan top]
G4-A22. Zekâ küpünün her yüzü hangi şekle benzer? → kare [GÖRSEL: zekâ küpü, bir yüzü vurgulu]
G4-A23. Karenin kenarları birbirine göre nasıldır: eşit mi, farklı mı? → eşit [GÖRSEL: kenarları aynı renkte kare]
G4-A24. Çadırın ön yüzü hangi şekle benzer? → üçgen [GÖRSEL: çadır, ön yüzü vurgulu]
G4-A25. Elanaz büyük bir kare, kardeşi Elif küçük bir kare çizdi. İkisi de kare midir? (evet/hayır) → evet [GÖRSEL: büyük kare + küçük kare]

---
## Testler (G4-T1...G4-T25)
G4-T1. Davul hangi cisme benzer? A) Küp B) Silindir ✅ C) Küre D) Üçgen prizma [GÖRSEL: davul; şık ikonları]
G4-T2. Hangisinin köşesi VARDIR? A) Top B) Misket C) Zar ✅ D) Portakal [GÖRSEL: şık ikonları]
G4-T3. Zil hangi şekle benzer? A) Kare B) Üçgen C) Daire ✅ D) Dikdörtgen [GÖRSEL: zil; şık ikonları]
G4-T4. 🎭 Elanaz topunu kocaman bir topla değiştirdi. Yeni topun biçimsel özelliği nedir? A) Artık köşelidir B) Yine yuvarlaktır ✅ C) Kare olmuştur D) Büyüyünce biçimi bozulur (İpucu: BÜYÜKLÜK değişir, BİÇİM değişmez!) [GÖRSEL: küçük top → büyük top]
G4-T5. Üçgenin kaç köşesi vardır? A) 4 B) 2 C) 3 ✅ D) 5 [GÖRSEL: köşeleri noktalı üçgen]
G4-T6. Karenin kenarları nasıldır? A) Hepsi eşittir ✅ B) Hepsi farklıdır C) Üç tanedir D) Yuvarlaktır [GÖRSEL: kare]
G4-T7. Hangisinin kenarı ve köşesi YOKTUR? A) Kare B) Üçgen C) Dikdörtgen D) Daire ✅ [GÖRSEL: şık ikonları]
G4-T8. 🎭 Kutu ters çevrilince ne olur? A) Köşeleri kaybolur B) Yuvarlak olur C) Köşeleri aynen durur ✅ D) Daireye dönüşür (İpucu: YÖN değişince biçim DEĞİŞMEZ!) [GÖRSEL: düz kutu + ters kutu]
G4-T9. Konserve kutusunun üst yüzü hangi şekle benzer? A) Kare B) Daire ✅ C) Üçgen D) Dikdörtgen [GÖRSEL: üstten konserve; şık ikonları]
G4-T10. Hangisi yuvarlak bir CİSİMDİR? A) Daire B) Çember C) Küre ✅ D) Üçgen [GÖRSEL: şık ikonları]
G4-T11. Zekâ küpünün bir yüzü hangi şekle benzer? A) Kare ✅ B) Daire C) Üçgen D) Çember [GÖRSEL: küp, yüzü vurgulu; şık ikonları]
G4-T12. 🎭 Hangisi DOĞRUDUR? A) Büyük top köşelidir B) Küçük zar yuvarlaktır C) Top nereye giderse gitsin yuvarlaktır ✅ D) Kutu ters dönünce yuvarlak olur (İpucu: Biçim özellikleri yer-yön-büyüklükle DEĞİŞMEZ!) [GÖRSEL: farklı konumlarda top]
G4-T13. Dikdörtgenin kaç kenarı vardır? A) 3 B) 4 ✅ C) 5 D) 2 [GÖRSEL: kenarları renkli dikdörtgen]
G4-T14. Çadırın ön yüzü hangi şekle benzer? A) Üçgen ✅ B) Kare C) Daire D) Çember [GÖRSEL: çadır; şık ikonları]
G4-T15. Hangisinin BÜTÜN kenarları eşittir? A) Dikdörtgen B) Kare ✅ C) Üçgen D) Daire [GÖRSEL: şık ikonları]
G4-T16. Süt kutusunun ön yüzü hangi şekle benzer? A) Dikdörtgen ✅ B) Daire C) Üçgen D) Çember [GÖRSEL: süt kutusu; şık ikonları]
G4-T17. 🎭 Elanaz misketini cebine koydu. Misket cepteyken hangi özelliğini KORUR? A) Görünmezliğini B) Yuvarlaklığını ✅ C) Köşelerini D) Cepte özellik kalmaz (İpucu: YER değişti ama misket hâlâ misket!) [GÖRSEL: misket + cep]
G4-T18. Pilin gövdesi nasıldır? A) Köşeli B) Yuvarlak ✅ C) Kare D) Üçgen [GÖRSEL: pil]
G4-T19. Hangisi köşeli bir ŞEKİLDİR? A) Küre B) Silindir C) Üçgen ✅ D) Küp [GÖRSEL: şık ikonları]
G4-T20. Topun üzerinde köşe arayan Elanaz ne bulur? A) 4 köşe B) 3 köşe C) Hiç köşe bulamaz ✅ D) 1 köşe [GÖRSEL: topu inceleyen büyüteç]
G4-T21. Kare ile dikdörtgenin ORTAK özelliği nedir? A) İkisinin de 4 köşesi vardır ✅ B) İkisi de yuvarlaktır C) Kenarları hep eşittir D) İkisinin de 3 kenarı vardır [GÖRSEL: kare + dikdörtgen yan yana]
G4-T22. 🎭 Dev bir küp ile minik bir zar için hangisi DOĞRUDUR? A) Sadece büyük olan küptür B) İkisi de küpe benzer ✅ C) Küçük olan küre sayılır D) Büyüklük biçimi değiştirir (İpucu: BÜYÜKLÜK farklı, BİÇİM aynı!) [GÖRSEL: dev küp + minik zar]
G4-T23. Davulun gövdesi ile pilin gövdesi hangi ortak cisme benzer? A) Küp B) Silindir ✅ C) Küre D) Üçgen prizma [GÖRSEL: davul + pil]
G4-T24. Hangisi yuvarlak bir ŞEKİLDİR? A) Küre B) Daire ✅ C) Silindir D) Küp [GÖRSEL: şık ikonları]
G4-T25. 🎭 Elanaz kare çizdi, sonra kâğıdı ters çevirdi. Kâğıttaki şekil ne oldu? A) Dikdörtgen oldu B) Hâlâ kare ✅ C) Üçgen oldu D) Silindi (İpucu: Kâğıt dönünce şekil DEĞİŞMEZ!) [GÖRSEL: düz kâğıtta kare + ters kâğıtta kare]
