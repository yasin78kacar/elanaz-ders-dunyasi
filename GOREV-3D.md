# GOREV-3D: Onluk-Birlik +50 ve Sayıları Okuma-Yazma +50 (PARTI-G2 + G3)
**Üretim:** Gemini (Claude denetimli; 4 düzeltme + 25 alıştırma Claude tamamlaması) · **Onay:** Yasin ✅
**Tahmini süre:** 25-35 dk

## Cursor'a Not
GOREV-3B/3C düzeninin aynısı. `scripts/gorev-3d-questions.mjs` oluştur:
- `GO-A*` / `GO-T*` → onluk-birlik (alistirma/test)
- `GS-A*` / `GS-T*` → sayilari-okuma-yazma (alistirma/test)
- 🎭 → `sasirtma: true`, parantezdeki ipucu → `ipucu`
- Okunuş cevaplarında büyük/küçük harf duyarsız karşılaştırma kullanılmalı ("Altmış beş" = "altmış beş").
Doğrulama hedefi: Onluk-Birlik 131, Sayıları Okuma-Yazma 132. Telefonda iki konudan birer oturum çöz. Commit: `GOREV-3D: G2+G3 partileri +100 soru` — push yok. "Claude'a not" raporu: toplamlar + sorun.

---
# BÖLÜM 1: ONLUK-BİRLİK (GO, 50 soru)

## Alıştırmalar
GO-A1. Elanaz, masanın üzerindeki boncukları onarlı gruplayınca 4 onluk ve 3 birlik elde etti. Masada kaç boncuk vardır? → 43
GO-A2. Kalem kutumda bulunan 57 kalemi onluk ve birliklerine ayırırsam kaç onluk, kaç birlik olur? → 5 onluk, 7 birlik
GO-A3. Bir yumurta kolisinde 2 onluk ve 0 birlik kadar yumurta vardır. Kolideki toplam yumurta sayısı kaçtır? → 20
GO-A4. Elanaz'ın misket torbasında 6 onluk ve 8 birlik misket vardır. Torbada kaç misket bulunur? → 68
GO-A5. 🎭 7 birlik ve 3 onluktan oluşan sayı kaçtır? (İpucu: Sayıyı yazarken önce onlukları, sonra birlikleri düşünmelisin.) → 37
GO-A6. Sınıf kitaplığımızda 85 kitap var. Bu kitaplar kaç onluk ve kaç birlikten oluşur? → 8 onluk, 5 birlik
GO-A7. Bir ataç kutusundan 9 onluk ve 9 birlik ataç çıktı. Kutuda toplam kaç ataç vardır? → 99
GO-A8. Elanaz'ın hikâye kitabı 4 onluk ve 2 birlik sayfadan oluşuyor. Kitap kaç sayfadır? → 42
GO-A9. Bahçemizdeki ağaçlardan 63 tane elma topladık. Bu elmaları onarlı kasalara koyarsak kaç onluk ve kaç birlik elde ederiz? → 6 onluk, 3 birlik
GO-A10. 1 onluk ve 5 birlikten oluşan boya kalemlerinin üzerine 2 birlik daha eklersek yeni sayı kaç olur? → 17
GO-A11. Elanaz'ın tokalarını saydığımızda 3 onluk ve 4 birlik çıktı. Elanaz'ın toplam kaç tokası vardır? → 34
GO-A12. Bir fırıncı sabah 72 ekmek sattı. Fırıncı kaç onluk ve kaç birlik ekmek satmıştır? → 7 onluk, 2 birlik
GO-A13. 🎭 4 onluk ve 5 birlikten oluşan sayıdan hangi seçenekteki birlik sayısını çıkarırsak geriye sadece 4 onluk kalır? (İpucu: Sadece birliklerin yok olmasını istiyoruz.) → 5 birlik
GO-A14. Bir oyuncakçıda 8 onluk ve 1 birlik kadar oyuncak araba vardır. Bu dükkanda kaç oyuncak araba bulunur? → 81
GO-A15. Elanaz'ın annesi pazardan 2 onluk ve 6 birlik kadar çilek aldı. Annem kaç çilek almıştır? → 26
GO-A16. Kumbaramdan çıkan paraları saydığımda 94 kuruş buldum. Bu para kaç onluk ve kaç birlikten oluşur? → 9 onluk, 4 birlik
GO-A17. Bir çiçekçi 5 onluk ve 5 birlik gülü demet yaptı. Çiçekçide toplam kaç gül vardır? → 55
GO-A18. 🎭 6 onluk ve 2 birlikten oluşan sayı hangisi DEĞİLDİR: 62 mi, 26 mı? (İpucu: Vurgulu olumsuz soruya dikkat et, yanlış olan sayıyı arıyoruz.) → 26
GO-A19. Elanaz panoya 1 onluk ve 9 birlik kadar yıldız yapıştırdı. Panoda kaç yıldız oldu? → 19
GO-A20. Koleksiyonumdaki 48 pulu onluk ve birliklerine ayırırsam nasıl yazarım? → 4 onluk, 8 birlik
GO-A21. Bir çikolata kutusunda 3 onluk ve 2 birlik çikolata vardır. Kutuda toplam kaç çikolata bulunur? → 32
GO-A22. Sayı boncuğunda 7 onluk ve 6 birlik gösteren Elanaz, toplam kaç sayısını modellemiştir? → 76
GO-A23. Sınıftaki 29 öğrenciyi onarlı sıralara oturtursak kaç onluk grup ve kaç açıkta kalan birlik öğrenci olur? → 2 onluk, 9 birlik
GO-A24. 8 onluk ve 0 birlikten oluşan sayının adı nedir? → Seksen
GO-A25. Elanaz 5 onluk, arkadaşı ise 1 birlik kadar şeker getirdi. İkisinin toplam kaç şekeri oldu? → 51

## Testler
GO-T1. Elanaz 3 onluk ve 5 birlik boncukla kolye yaptı. Kolyede kaç boncuk vardır? A) 53 B) 35 ✅ C) 30 D) 50
GO-T2. Kalem kutusunda 42 kalemi olan Ali, bu kalemi onluk ve birliklerine nasıl ayırır? A) 2 onluk, 4 birlik B) 4 onluk, 0 birlik C) 4 onluk, 2 birlik ✅ D) 2 onluk, 2 birlik
GO-T3. Bir koli yumurtada 2 onluk ve 8 birlik yumurta vardır. Kolide toplam kaç yumurta bulunur? A) 28 ✅ B) 82 C) 20 D) 80
GO-T4. 🎭 6 birlik ve 4 onluktan oluşan sayı aşağıdakilerden hangisidir? (İpucu: Önce birliklerin mi yoksa onlukların mı söylendiğine çok dikkat etmelisin.) A) 64 B) 46 ✅ C) 60 D) 40
GO-T5. Elanaz'ın misket torbasında 74 misket vardır. Bu misketlerin onluk ve birlik dağılımı hangisidir? A) 4 onluk, 7 birlik B) 7 onluk, 4 birlik ✅ C) 7 onluk, 0 birlik D) 4 onluk, 4 birlik
GO-T6. Bir ataç kutusundan 5 onluk ve 0 birlik ataç çıktı. Kutudaki ataç sayısı kaçtır? A) 5 B) 50 ✅ C) 55 D) 15
GO-T7. Kitaplığımızdaki kitapları sayınca 8 onluk ve 3 birlik bulduk. Kitaplıkta kaç kitap vardır? A) 38 B) 80 C) 83 ✅ D) 30
GO-T8. Bir boncuk kutusunda 1 onluk ve 7 birlik boncuk vardır. Kutuda kaç boncuk vardır? A) 71 B) 17 ✅ C) 10 D) 70
GO-T9. Bahçeden topladığımız 92 elma kaç onluk ve kaç birlikten oluşur? A) 2 onluk, 9 birlik B) 9 onluk, 2 birlik ✅ C) 9 onluk, 0 birlik D) 2 onluk, 2 birlik
GO-T10. 3 onluk ve 6 birlikten oluşan boya kalemlerine 3 birlik daha eklersek hangi sayıyı buluruz? A) 36 B) 63 C) 39 ✅ D) 93
GO-T11. 🎭 Elanaz 5 onluk ve 2 birlik tokaya sahiptir. Arkadaşı ise Elanaz'ın tokalarının onluk ve birliğinin yerini karıştırarak bir sayı söylüyor. Arkadaşının söylediği sayı kaçtır? (İpucu: Çocukların sıkça yaptığı gibi onluk ve birliği ters çevirerek düşünmelisin.) A) 52 B) 25 ✅ C) 50 D) 20
GO-T12. Bir fırıncı sabah 61 ekmek sattı. Fırıncı kaç onluk ve kaç birlik ekmek satmıştır? A) 1 onluk, 6 birlik B) 6 onluk, 1 birlik ✅ C) 6 onluk, 0 birlik D) 1 onluk, 1 birlik
GO-T13. Bir dükkandaki oyuncak ayıları saydığımızda 8 onluk ve 7 birlik çıktı. Toplam oyuncak ayı sayısı kaçtır? A) 78 B) 80 C) 87 ✅ D) 70
GO-T14. Elanaz'ın annesi pazardan 4 onluk ve 9 birlik kadar çilek aldı. Annem kaç çilek almıştır? A) 49 ✅ B) 94 C) 40 D) 90
GO-T15. Kumbaramdan çıkan paraları saydığımda 23 kuruş buldum. Bu para kaç onluk ve kaç birlikten oluşur? A) 3 onluk, 2 birlik B) 2 onluk, 3 birlik ✅ C) 2 onluk, 0 birlik D) 3 onluk, 3 birlik
GO-T16. Bir çiçekçi 6 onluk ve 6 birlik gülü demet yaptı. Çiçekçide toplam kaç gül vardır? A) 60 B) 66 ✅ C) 6 D) 16
GO-T17. 🎭 8 onluk ve 4 birlikten oluşan sayı hakkında hangi ifade YANLIŞTIR? (İpucu: Soruda olumsuz bir ifade arandığını unutma, şıkları tek tek incele.) A) Bu sayı 84'tür. B) Bu sayı 48'dir. ✅ C) Sayıda 8 tane onluk grup vardır. D) Sayıda 4 tane açıkta kalan birlik vardır.
GO-T18. Elanaz panoya 7 onluk ve 1 birlik yıldız yapıştırdı. Panoda kaç yıldız oldu? A) 17 B) 70 C) 71 ✅ D) 11
GO-T19. Koleksiyonumdaki 59 pulu onluk ve birliklerine ayırırsam hangi seçeneğe ulaşırım? A) 9 onluk, 5 birlik B) 5 onluk, 9 birlik ✅ C) 5 onluk, 0 birlik D) 9 onluk, 9 birlik
GO-T20. Bir çikolata kutusunda 1 onluk ve 2 birlik çikolata vardır. Kutuda toplam kaç çikolata bulunur? A) 21 B) 10 C) 12 ✅ D) 20
GO-T21. Sayı boncuğunda 3 onluk ve 9 birlik gösteren Elanaz, toplam hangi sayıyı modellemiştir? A) 93 B) 30 C) 39 ✅ D) 90
GO-T22. Sınıftaki 45 öğrenciyi onarlı gruplara ayırırsak kaç onluk grup ve kaç açıkta kalan birlik öğrenci olur? A) 5 onluk, 4 birlik B) 4 onluk, 5 birlik ✅ C) 4 onluk, 0 birlik D) 5 onluk, 5 birlik
GO-T23. 9 onluk ve 0 birlikten oluşan sayının doğru yazılışı hangisidir? A) 9 B) 90 ✅ C) 99 D) 19
GO-T24. Elanaz 2 onluk, arkadaşı ise 2 birlik kadar şeker getirdi. İkisinin toplam kaç şekeri oldu? A) 22 ✅ B) 20 C) 40 D) 2
GO-T25. 87 sayısında kaç onluk ve kaç birlik bulunur? A) 7 onluk, 8 birlik B) 8 onluk, 7 birlik ✅ C) 8 onluk, 0 birlik D) 7 onluk, 7 birlik

---
# BÖLÜM 2: SAYILARI OKUMA-YAZMA (GS, 50 soru)

## Alıştırmalar
GS-A1. "altmış dört" sayısının rakamla yazılışı nedir? → 64
GS-A2. 31 sayısının okunuşu nedir? → otuz bir
GS-A3. "kırk yedi" sayısının rakamla yazılışı nedir? → 47
GS-A4. 86 sayısının okunuşu nedir? → seksen altı
GS-A5. Elanaz "on dokuz" tane çıkartma saydı. Rakamla kaç çıkartma saymıştır? → 19
GS-A6. 70 sayısının okunuşu nedir? → yetmiş
GS-A7. "doksan üç" sayısının rakamla yazılışı nedir? → 93
GS-A8. 12 sayısının okunuşu nedir? → on iki
GS-A9. Elanaz "yirmi sekiz" boncuk saydı. Rakamla kaç boncuktur? → 28
GS-A10. 55 sayısının okunuşu nedir? → elli beş
GS-A11. "seksen iki" sayısının rakamla yazılışı nedir? → 82
GS-A12. 46 sayısının okunuşu nedir? → kırk altı
GS-A13. 🎭 "doksan" sayısının rakamla yazılışı nedir? (İpucu: Bu sayıda birlik yok — 9'un yanına ne gelir, dikkat!) → 90
GS-A14. "otuz üç" sayısının rakamla yazılışı nedir? → 33
GS-A15. 67 sayısının okunuşu nedir? → altmış yedi
GS-A16. "elli bir" sayısının rakamla yazılışı nedir? → 51
GS-A17. 78 sayısının okunuşu nedir? → yetmiş sekiz
GS-A18. "kırk dört" sayısının rakamla yazılışı nedir? → 44
GS-A19. 95 sayısının okunuşu nedir? → doksan beş
GS-A20. 🎭 "yüz" sayısının rakamla yazılışı nedir? (İpucu: Bu, öğrendiğimiz tek üç basamaklı sayı — kaç tane sıfır var?) → 100
GS-A21. "yirmi" sayısının rakamla yazılışı nedir? → 20
GS-A22. 89 sayısının okunuşu nedir? → seksen dokuz
GS-A23. "on bir" sayısının rakamla yazılışı nedir? → 11
GS-A24. 36 sayısının okunuşu nedir? → otuz altı
GS-A25. Elanaz tahtaya "yetmiş altı" yazdı. Bu sayının rakamla yazılışı nedir? → 76

## Testler
GS-T1. Elanaz "otuz sekiz" tane boncuk saydı. Bu sayının rakamla yazılışı hangisidir? A) 83 B) 38 ✅ C) 30 D) 80
GS-T2. Kalem kutusunda 65 kalemi olan Ali, bu sayının okunuşunu nasıl yazar? A) Altmış beş ✅ B) Elli altı C) Altmış D) Beş
GS-T3. Bir koli yumurtada "yirmi dokuz" yumurta vardır. Rakamla yazılışı hangisidir? A) 92 B) 20 C) 29 ✅ D) 90
GS-T4. 🎭 Okunuşu "yetmiş üç" olan sayının rakamla doğru yazılışı hangisidir? (İpucu: Duyduğun sayıları yan yana ekleyip 703 yazma hatasına düşmemelisin.) A) 73 ✅ B) 37 C) 703 D) 307
GS-T5. Elanaz'ın misket torbasında 54 misket vardır. Bu sayının okunuşu hangisidir? A) Kırk beş B) Elli dört ✅ C) Elli D) Dört
GS-T6. Bir ataç kutusundan "seksen bir" ataç çıktı. Sayının rakamla gösterimi hangisidir? A) 18 B) 80 C) 81 ✅ D) 10
GS-T7. Kitaplığımızdaki kitapları sayınca "92" bulduk. Bu sayının doğru okunuşu hangisidir? A) Yirmi dokuz B) Doksan iki ✅ C) Doksan D) İki
GS-T8. Elanaz bugün kitabından "on altı" sayfa okudu. Rakamla yazılışı hangisidir? A) 61 B) 10 C) 16 ✅ D) 60
GS-T9. Bahçeden topladığımız "elli" elmayı rakamla nasıl gösteririz? A) 5 B) 50 ✅ C) 55 D) 15
GS-T10. Okunuşu "kırk bir" olan sayının rakamla yazılışı aşağıdakilerden hangisidir? A) 14 B) 40 C) 41 ✅ D) 401
GS-T11. 🎭 Elanaz tahtaya "otuz altı" yazdı. Arkadaşı sayının rakamlarının yerini değiştirerek yeni bir sayı söyledi. Arkadaşı hangi sayıyı söylemiştir? (İpucu: 36'nın rakamlarının yeri değişince hangi sayı olur?) A) Otuz altı B) Altmış üç ✅ C) Otuz D) Altmış
GS-T12. Bir fırıncı sabah "yetmiş beş" ekmek sattı. Sayının rakamla yazılışı hangisidir? A) 57 B) 75 ✅ C) 70 D) 50
GS-T13. Bir dükkandaki oyuncak ayıları saydığımızda "84" çıktı. Sayının okunuşu hangisidir? A) Kırk sekiz B) Seksen dört ✅ C) Seksen D) Dört
GS-T14. Elanaz'ın annesi pazardan "yirmi iki" çilek aldı. Rakamla yazılışı hangisidir? A) 22 ✅ B) 20 C) 2 D) 12
GS-T15. Kumbaramdan çıkan paraları saydığımda "91" kuruş buldum. Sayının okunuşu hangisidir? A) On dokuz B) Doksan bir ✅ C) Doksan D) Bir
GS-T16. Bir çiçekçi "otuz dört" gülü demet yaptı. Rakamla yazılışı hangisidir? A) 43 B) 30 C) 34 ✅ D) 40
GS-T17. 🎭 Okunuşu "altmış sekiz" olan sayı hakkında hangi ifade YANLIŞTIR? (İpucu: Soruda olumsuz bir ifade arandığını unutma, şıkları dikkatli incele.) A) Rakamla 68 olarak yazılır. B) Rakamla 86 olarak yazılır. ✅ C) Okunuşu altmış sekiz şeklindedir. D) İki basamaklı bir sayıdır.
GS-T18. Elanaz panoya "yedi" tane yıldız yapıştırdı. Bu sayının rakamla yazılışı hangisidir? A) 70 B) 7 ✅ C) 17 D) 77
GS-T19. Koleksiyonumda "elli dokuz" pul var. Bu sayının rakamla yazılışı hangisidir? A) 95 B) 50 C) 59 ✅ D) 509
GS-T20. Bir çikolata kutusunda "13" çikolata vardır. Bu sayının okunuşu hangisidir? A) Otuz bir B) On üç ✅ C) On D) Üç
GS-T21. Sayı boncuğunda "kırk dokuz" gösteren Elanaz, hangi rakamları yan yana yazmalıdır? A) 94 B) 40 C) 49 ✅ D) 409
GS-T22. Sınıftaki "25" öğrencinin okunuşu aşağıdakilerden hangisinde doğru verilmiştir? A) Elli iki B) Yirmi beş ✅ C) Yirmi D) Beş
GS-T23. Okunuşu "seksen altı" olan sayının rakamla doğru yazılışı hangisidir? A) 68 B) 80 C) 86 ✅ D) 806
GS-T24. 🎭 Okunuşu "kırk" olan sayıya 1 birlik eklersek yeni sayı hangisi OLMAZ? (İpucu: Vurgulu olumsuz soru köküne dikkat et, yanlış seçeneği bulmalısın.) A) 41 B) Kırk bir C) 14 ✅ D) Kırkın bir fazlası
GS-T25. Elanaz "yetmiş iki" sayfalık kitabın adını okudu. Rakamla yazılışı hangisidir? A) 27 B) 72 ✅ C) 70 D) 20
