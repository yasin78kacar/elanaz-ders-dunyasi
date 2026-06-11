# GOREV-3C: Geometrik Cisimler +50 Soru (PARTI-GEO1, patron onaylı)
**Onay:** Yasin ✅ (11 Haziran gece) · **Tahmini süre:** 20-30 dk

## Cursor'a Not
GOREV-3B düzeninin aynısı: aşağıdaki 50 onaylı soruyu Geometrik Cisimler havuzuna ekle.

1. `scripts/gorev-3c-questions.mjs` oluştur:
   - `G1-A*` → geometrik-cisimler, tip "alistirma" (evet/hayır soruları kabul cevaplarıyla)
   - `G1-T*` → geometrik-cisimler, tip "test" (✅ = dogruCevap)
   - 🎭 → `sasirtma: true`, parantezdeki ipucu → `ipucu`
2. generate-content ile geometrik-cisimler.json'u güncelle (mevcut 18 + eşleştirmeler KORUNUR).
3. Doğrulama: konu toplamı 68+ olmalı (18 başlangıç + 50). Konsola alistirma/test/eslestirme kırılımını yazdır.
4. Telefonda bir oturum çöz, commit: `GOREV-3C: Geometrik Cisimler +50 (patron onayli)` — push yok.
5. "Claude'a not" raporu: toplamlar, sorun varsa.

Kurallar: soru metinleri harfi harfine · 100 üstü çeldirici yok bu partide · heredoc gerekirse kullan.

---
# ONAYLI SORULAR (PARTI-GEO1)

## Alıştırmalar (G1-A1...G1-A25)
G1-A1. Köşesi ve kenarı olan cisimlere ne denir? → köşeli (kabul: "köşeli cisim")
G1-A2. Basketbol topu yuvarlak mıdır, köşeli midir? → yuvarlak
G1-A3. Elanaz'ın boya kutusu köşelidir. Kutunun köşesi var mıdır? (evet/hayır) → evet
G1-A4. Karpuz hangi gruba girer? (yuvarlak/köşeli) → yuvarlak
G1-A5. Televizyon yuvarlak mıdır, köşeli midir? → köşeli
G1-A6. Misket yuvarlak mıdır, köşeli midir? → yuvarlak
G1-A7. Elanaz'ın matematik kitabı köşeli midir? (evet/hayır) → evet
G1-A8. Yuvarlak cisimler yere konunca yuvarlanabilir mi? (evet/hayır) → evet
G1-A9. 🎭 Köşeli cisimler yuvarlanır mı? (evet/hayır) → hayır (ipucu: Dikkat! Köşeli cisimler köşelerine takılır, durduğu yerde durur.)
G1-A10. Portakal ve mandalina aynı grupta mıdır? (evet/hayır) → evet
G1-A11. Buzdolabının köşesi var mıdır? (evet/hayır) → evet
G1-A12. Tenis topunun kenarı var mıdır? (evet/hayır) → hayır
G1-A13. Elanaz markette bir konserve kutusu ve bir kavun gördü. Hangisi yuvarlaktır? → kavun
G1-A14. Hediye kutusu hangi gruba girer? (yuvarlak/köşeli) → köşeli
G1-A15. 🎭 Yumurta köşeli midir? (evet/hayır) → hayır (ipucu: Yumurtanın köşesi ve kenarı yoktur — biçimi yuvarlağa benzer, şaşırtmaya gelme!)
G1-A16. Çamaşır makinesi yuvarlak mıdır, köşeli midir? → köşeli
G1-A17. Elanaz'ın kalem kutusunda kaç köşe olduğunu saymak istiyor. Kalem kutusu köşeli bir cisim midir? (evet/hayır) → evet
G1-A18. Dünya'mızın biçimi neye benzer: yuvarlak bir cisme mi, köşeli bir cisme mi? → yuvarlak
G1-A19. Defterin kenarı var mıdır? (evet/hayır) → evet
G1-A20. 🎭 Bir cismin hem köşesi hem kenarı yoksa o cisim hangi gruba girer? → yuvarlak (ipucu: Köşe YOK + kenar YOK = yuvarlak. "Yok" kelimelerine dikkat!)
G1-A21. Elanaz'ın süt bardağı yuvarlak, peçete kutusu köşelidir. Hangisi yuvarlanabilir? → süt bardağı (kabul: "bardak")
G1-A22. Saksıdaki domates yuvarlak mıdır, köşeli midir? → yuvarlak
G1-A23. Ayakkabı kutusunun kenarı var mıdır? (evet/hayır) → evet
G1-A24. Elanaz iki cisim seçti: zar ve bilye. Hangisi köşelidir? → zar
G1-A25. Çevrendeki nesnelerden biri: masa. Masa köşeli midir? (evet/hayır) → evet

## Testler (G1-T1...G1-T25)
G1-T1. Hangisi yuvarlak bir cisimdir? A) Defter B) Karpuz ✅ C) Kutu D) Televizyon
G1-T2. Hangisi köşeli bir cisimdir? A) Misket B) Portakal C) Zar ✅ D) Balon
G1-T3. Yuvarlak cisimlerde ne YOKTUR? A) Renk B) Köşe ve kenar ✅ C) Büyüklük D) Ağırlık
G1-T4. Elanaz pikniğe karpuz ve kutu meyve suyu getirdi. Hangisi yuvarlaktır? A) Kutu meyve suyu B) Karpuz ✅ C) İkisi de köşeli D) Hiçbiri
G1-T5. Hangisi yuvarlanabilir? A) Kitap B) Buzdolabı C) Top ✅ D) Dolap
G1-T6. 🎭 Hangisi yuvarlak DEĞİLDİR? A) Misket B) Portakal C) Zekâ küpü ✅ D) Tenis topu (ipucu: "DEĞİLDİR" — yuvarlak OLMAYANI arıyoruz!)
G1-T7. Köşeli cisimler için hangisi doğrudur? A) Köşesi ve kenarı vardır ✅ B) Yuvarlanır C) Köşesi yoktur D) Hepsi yumuşaktır
G1-T8. Hangisinin kenarı vardır? A) Bilye B) Balon C) Ayakkabı kutusu ✅ D) Yumurta
G1-T9. Elanaz'ın sınıfındaki yazı tahtası hangi gruba girer? A) Yuvarlak B) Köşeli ✅ C) Hem yuvarlak hem köşeli D) Hiçbiri
G1-T10. Aşağıdaki çiftlerden hangisi AYNI gruptadır? A) Top - Kitap B) Portakal - Misket ✅ C) Zar - Balon D) Kutu - Karpuz
G1-T11. 🎭 Saat kulesindeki saat yusyuvarlaktır. Saatin köşesi var mıdır? A) Vardır B) Yoktur ✅ C) Bazen vardır D) Saatlerde köşe olmaz ama kenar olur (ipucu: Yuvarlaksa ne köşesi ne kenarı olur — D şıkkı tuzak!)
G1-T12. Hangisi köşeli bir cisimdir? A) Kavun B) Süt kutusu ✅ C) Bilye D) Mandalina
G1-T13. Kerem'in topu masadan düşünce yuvarlandı. Topun yuvarlanmasının sebebi nedir? A) Köşeli olması B) Yuvarlak olması ✅ C) Ağır olması D) Renkli olması
G1-T14. Hangisinin köşesi YOKTUR? A) Defter B) Masa C) Karpuz ✅ D) Kutu
G1-T15. Elanaz market poşetine yuvarlak cisimler koyuyor. Hangisini koymalı? A) Makarna kutusu B) Portakal ✅ C) Peçete kutusu D) Kibrit kutusu
G1-T16. 🎭 Hangisi köşeli cisim ÇİFTİDİR? A) Top - Zar B) Kitap - Kutu ✅ C) Misket - Defter D) Karpuz - Kavun (ipucu: İKİSİ DE köşeli olmalı — tek tek kontrol et!)
G1-T17. Hangisi doğrudur? A) Yuvarlak cisimlerin köşesi vardır B) Köşeli cisimler yuvarlanır C) Köşeli cisimlerin kenarı vardır ✅ D) Topun kenarı vardır
G1-T18. Elanaz'ın kumbarasında biriken paralar yuvarlaktır. Madeni paranın köşesi var mıdır? A) Vardır B) Yoktur ✅ C) Sadece 1 liranın vardır D) Paralar köşelidir
G1-T19. Hangisi yuvarlak bir cisimdir? A) Çamaşır makinesi B) Futbol topu ✅ C) Televizyon D) Kalem kutusu
G1-T20. Sınıftaki hangi eşya köşelidir? A) Sıra ✅ B) Bilye C) Balon D) Top
G1-T21. 🎭 Elanaz "Kenarı olmayan bir cisim buldum." dedi. Elanaz hangi cismi bulmuş olabilir? A) Kitap B) Kutu C) Portakal ✅ D) Defter (ipucu: Kenarı OLMAYAN = yuvarlak grup!)
G1-T22. Hangisi yuvarlanmaz? A) Misket B) Top C) Hediye kutusu ✅ D) Bilye
G1-T23. Manavdaki hangi meyve köşeli kutuda satılır ama kendisi yuvarlaktır? A) Çilek kutudaki çilekler köşelidir B) Kutudaki portakallar yuvarlaktır ✅ C) Muz yuvarlaktır D) Kutular yuvarlaktır
G1-T24. Hangisi köşeli cisimlerin özelliğidir? A) Yuvarlanmak B) Köşesi ve kenarı olmak ✅ C) Köşesiz olmak D) Hep küçük olmak
G1-T25. 🎭 Bir kutunun İÇİNE bilye koyduk. Kutu ve bilye için hangisi doğrudur? A) İkisi de köşelidir B) İkisi de yuvarlaktır C) Kutu köşeli, bilye yuvarlaktır ✅ D) Kutu yuvarlak, bilye köşelidir (ipucu: Her cismi AYRI AYRI düşün — iç içe olmaları grubunu değiştirmez!)

## Denetim notları (Yasin için)
- Cisim adı (küp, silindir, küre, prizma) bilinçli olarak YOK — kitapta bu konuda yalnızca yuvarlak/köşeli + köşe/kenar dili var; cisim adları Konu 2'de gelecek.
- Şaşırtmalar: 3 alıştırma + 4 test = 7 (%14, kural max %20 içinde). Tümü adil tip (vurgulu olumsuz, ters yön, iç içe nesne).
- G1-T23 biraz uzun bir muhakeme sorusu — BTD tarzı "gerçek yaşam" denemesi; istersen çıkarırım.
- Elanaz kişiselleştirmesi: 11 soruda.
