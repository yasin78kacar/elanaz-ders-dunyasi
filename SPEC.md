# SPEC.md — "Elanaz'ın Ders Dünyası" (2. Sınıf Eğitim Uygulaması)
**Versiyon:** 1.0 — KİLİTLİ (10 Haziran 2026). Tüm açık kararlar kapandı; değişiklikler bundan sonra versiyon notuyla yapılır.
**Uygulama adı notu:** İsim, aktif çocuk profiline bağlı dinamik metin olarak kodlanır ("{çocuk_adı}'ın Ders Dünyası") — Elif fazında uygulama otomatik "Elif'in Ders Dünyası" olur, kod değişmez.
**Tarih:** 10 Haziran 2026
**Roller:** Yasin = patron (son karar) · Claude = genel müdür (plan/spec) · Cursor = execution hub (kod) · Gemini = büyük bağlam analizi (manuel, gerektiğinde)

---

## 1. Kuzey Yıldızı (Misyon)

> Hiçbir çocuk "matematik dersini" sevmez — ama her çocuk merak etmeyi ve başarmayı sever.
> Bu uygulama dersi "ders gibi" sunmaz: çocuk matematik (ve diğer dersleri) çalışırken keyif alır,
> keyif alırken farkında olmadan MEB kazanımlarını tamamlar.

Her tasarım kararı şu soruyla test edilir: **"Bu, Elanaz'ın yarın akşam uygulamayı kendi isteğiyle açmasını sağlar mı?"**

## 2. Kullanıcılar ve Yol Haritası

| Faz | Kullanıcı | Sınıf | Durum |
|-----|-----------|-------|-------|
| 1 | Elanaz | 2. sınıf (Eylül 2026) | **Şimdi yapılıyor** |
| 2 | Elif | 1. sınıf | Elanaz'ın programı bitince |

**Mimari sonuç:** Uygulama 1. günden "sınıf seçilebilir" iskelet üzerine kurulur. İçerik (ders, soru, test) koddan tamamen ayrı, veri olarak tutulur. Elif fazı = yeni kod değil, yeni içerik paketi.

## 3. Değiştirilemez Kurallar (Patron Kararları)

1. **Kullanım anı:** Okul ödevleri bittikten SONRA, kalan boş zamanda kullanılır. Uygulama günlük rutinin ödülüdür, yükü değil.
2. **Oyun yok:** Balon patlatma, araba kovalamaca tarzı oyunlaştırılmış dolgu içerik yok. Animasyon yok.
3. **Eğlence içerikten gelir:** Keyif kaynağı oyun değil; merak uyandıran sorular, hikâyeli anlatım, ilerleme hissi ve başarma duygusudur.
4. **Katı sınıf disiplini:** Her ders, her soru, her test %100 MEB 2. sınıf seviyesinde. 1. veya 3. sınıf içeriği karışmaz. Ne kolaya kaçılır ne zorlaştırılır.

## 4. Kapsam

### 4.1 Dersler (MEB 2. sınıf) — patron kararıyla kesinleşti
- Türkçe (okuma, okuduğunu anlama, yazım)
- Matematik (öncelikli ders — pilot içerik buradan başlar)
- Hayat Bilgisi
- İngilizce
- Görsel Sanatlar (bilgi/kültür ağırlıklı işlenir: renkler, sanatçılar, eser tanıma, "hangisi sıcak renktir?" tarzı sorular — çizim yaptırma yok)
- **Kapsam dışı:** Müzik, Beden Eğitimi

### 4.1.1 Ders dışı bölümler (patron isteği — 10 Haziran)
- **Okuma Köşesi:** 2. sınıf seviyesinde ÖZGÜN kısa hikâyeler + her hikâyenin sonunda okuduğunu anlama soruları. ⚠️ Telifli kitaplar uygulamaya KONULMAZ; tüm hikâyeler bize ait özgün metinler veya kamu malı masalların kendi cümlelerimizle uyarlamalarıdır. Hikâyeler Elanaz'ın ilgi alanlarına göre kişiselleştirilebilir.
- **Zekâ ve Dikkat:** Örüntü tamamlama, farklı olanı bulma, dikkat ve odaklanma soruları. Oyun değil, soru formatında. MEB dersi değil, ayrı bölüm. Derslerle aynı motoru kullanır: alıştırmalar + kendi testleri (kutucuklu format). Sonuçları Anne Paneli'nde ayrı başlıkta raporlanır.

### 4.2 Müfredat kaynağı
- MEB **Türkiye Yüzyılı Maarif Modeli** müfredatı esas alınır.
- **Faz 1 görevi:** Güncel 2. sınıf kazanım listelerinin resmî MEB kaynaklarından indirilip `curriculum/` klasörüne konması ve her içeriğin bir kazanım koduna bağlanması.

### 4.3 İçerik tipleri (her konu için üçlü yapı)
1. **Ders (konu anlatımı):** Kısa, hikâyeli, çocuğun dilinde.
2. **Alıştırma (pratik):** Anlatımın hemen ardından, düşük baskılı sorular. Yanlışta ceza yok, açıklamalı geri bildirim var.
3. **Test (değerlendirme):** Konu sonu mini test. Sonuç, ustalık takibine işlenir.

## 5. Pedagojik Prensipler (özel okul kalitesi katmanı)

| Prensip | Uygulamadaki karşılığı |
|---------|------------------------|
| Ustalık bazlı ilerleme | Konu, test başarısı eşiği geçilmeden "tamamlandı" sayılmaz |
| Aralıklı tekrar | Eski konulardan sorular ileriki günlere otomatik serpiştirilir |
| Somuttan soyuta | Matematik soruları önce nesne/hikâye ile, sonra sembolik (5+3) formda |
| Anlamlı hata geri bildirimi | "Yanlış" yerine: neden yanlış, doğru düşünme yolu ne |
| Uyarlanabilir zorluk | Üst üste doğrularda soru havuzunun zor ucuna kayış (2. sınıf sınırı içinde) |
| Sık küçük değerlendirme | Uzun sınav yok; her gün 5-10 soruluk kısa turlar |

## 6. Eğlence Tasarımı ("oyunsuz keyif" nasıl sağlanır)

- **Hikâyeli sorular:** "5+3 kaç eder?" yerine "Elanaz'ın 5 çıkartması vardı, teyzesi 3 tane daha verdi..." — kazanım aynı, ambalaj farklı.
- **Çeşitlilik:** Aynı oturumda soru tipleri değişir — monotonluk kırılır.
- **İlerleme hissi (✅ karar):** İlerleme haritası + yıldız. Her ders bir "yol"dur; konular yol üzerinde sırayla açılır. Test başarısına göre konu başına 1-3 yıldız. Rozet/günlük seri Faz 1.5+ adayı.
- **Cevap formatı (✅ patron kararı):**
  - **Testlerde:** Çoktan seçmeli kutucuklar. Seçimini her soru için en fazla 2 kez değiştirebilir; sonrasında kilitlenir. Hak sayısı ekranda görünür.
  - **Alıştırmalarda:** Yazarak cevap; cevap alanına dokununca klavye açılır.
  - ✅ Renk kararı: Seçim işareti mavi/turuncu (nötr); kırmızı yalnızca "yanlış", yeşil yalnızca "doğru" geri bildiriminde.

## 6.1 Görsel Tasarım Prensipleri

> "Animasyon yok" kuralı "görsel yok" demek DEĞİLDİR. Bu yaş grubunda görsel, öğretimin ana aracıdır.

- **Ekran başına az metin:** ~30-50 kelime; satır araları geniş, punto büyük.
- **Durağan görsel desteği:** Her konu anlatımında ve uygun sorularda statik illüstrasyon/nesne resmi.
- **İçerik şemasına etkisi:** JSON şemasına opsiyonel `gorsel` alanı.
- **Doğrulama görevi:** MEB Maarif Modeli 2. sınıf kitap PDF'leri (tymm.meb.gov.tr) indirilip ünite yapıları birebir çıkarılacak.
- **İngilizce notu:** Bu seviyede kelime/görsel odaklı, gramer yok. Ses desteği Faz 1.5 kararı.

## 7. Teknik Çerçeve

- **Stack:** React Native + Expo
- **İçerik deposu:** Kod içinde değil; JSON tabanlı içerik paketi. Şema: `sınıf → ders → ünite → konu → {anlatım, alıştırma[], test[]}` + MEB kazanım kodu.
- **Offline-first:** İnternet olmadan tam çalışır.
- **Tek cihaz, tek çocuk profili (Faz 1).**
- **Anne Paneli (şifreli — Faz 1):**
  - Ana ekranda "Anne" butonu; PIN korumalı.
  - İçerik: çalışılan konular, çözülen soru sayısı, doğru/yanlış dağılımı, yanlış yapılan sorular, günlük/haftalık özet.
  - **Cevap anahtarları yalnızca bu panelde görünür.**

## 8. Kapsam DIŞI (Faz 1)

- Oyunlar ve animasyonlar
- 1. ve 3. sınıf içerikleri
- Store yayını / başka kullanıcılar
- Sesli anlatım
- AI ile dinamik soru üretimi

## 9. İlk Sprint

1. Expo projesi iskeleti: sınıf/ders/konu navigasyonu
2. İçerik şeması (JSON) + 1 örnek konu: Matematik / "Ritmik Sayma"
3. Soru gösterim motoru: çoktan seçmeli tip
4. Doğru/yanlış geri bildirim ekranı (açıklamalı)
5. Basit ilerleme kaydı (lokal)
6. Anne Paneli iskeleti: PIN + temel rapor

**Kabul kriteri:** Uygulama açılıp örnek konu baştan sona — anlatım → alıştırma → test → sonuç — akıcı tamamlanabilmeli; anne PIN ile panele girip sonuçları görebilmeli.

## 10. Kapanan Kararlar

| # | Karar | Sonuç |
|---|-------|-------|
| 1 | İlerleme mekanizması | İlerleme haritası + yıldız |
| 2 | Cevap formatı | Testler = kutucuklu çoktan seçmeli (2 değiştirme hakkı) · Alıştırmalar = klavyeyle yazma |
| 3 | Uygulamalı dersler | Görsel Sanatlar dahil; Müzik ve Beden Eğitimi hariç |
| 4 | Uygulama adı | "Elanaz'ın Ders Dünyası" |
