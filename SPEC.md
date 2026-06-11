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
- **Okuma Köşesi:** 2. sınıf seviyesinde ÖZGÜN kısa hikâyeler + her hikâyenin sonunda okuduğunu anlama soruları. Piyasadaki hikâye setlerinin (okumayı sevdiren setler tarzı) uygulama içi karşılığı. ⚠️ Telifli kitaplar (Küçük Kara Balık vb.) uygulamaya KONULMAZ; tüm hikâyeler bize ait özgün metinler olur. Hikâyeler Elanaz'ın ilgi alanlarına göre kişiselleştirilebilir.
- **Zekâ ve Dikkat:** Örüntü tamamlama, farklı olanı bulma, dikkat ve odaklanma soruları. Oyun değil, soru formatında — 2. kuralla uyumlu. MEB dersi değil, ayrı bölüm olarak sunulur. Derslerle aynı motoru kullanır: alıştırmalar + kendi testleri (kutucuklu format). Zorluk seviyeleri 2. sınıf yaş grubuna göre kademelendirilir; sonuçları Anne Paneli'nde ayrı başlıkta raporlanır.

### 4.2 Müfredat kaynağı
- MEB **Türkiye Yüzyılı Maarif Modeli** müfredatı esas alınır (2. sınıflar bu modele geçti).
- **Faz 1 görevi:** Güncel 2. sınıf kazanım listelerinin resmî MEB kaynaklarından indirilip `curriculum/` klasörüne konması ve her içeriğin bir kazanım koduna bağlanması. (Büyük doküman analizi = Gemini Pro'ya uygun iş.)

### 4.3 İçerik tipleri (her konu için üçlü yapı)
1. **Ders (konu anlatımı):** Kısa, hikâyeli, çocuğun dilinde. Okulda anlamadıysa bile buradan öğrenebilmeli.
2. **Alıştırma (pratik):** Anlatımın hemen ardından, düşük baskılı sorular. Yanlışta ceza yok, açıklamalı geri bildirim var.
3. **Test (değerlendirme):** Konu sonu mini test. Sonuç, ustalık takibine işlenir.

### 4.4 Soru Havuzu Hedefi ve Üretim Hattı (patron emri — 10 Haziran)
- **Hedef:** Konu başına 100+ soru; ders genelinde binlerce. Eylül 2026 hedefi: toplam 3.000-5.000 onaylı soru.
- **Üretim hattı:** Claude (GM) ve Gemini parti parti soru üretir (50-100'lük JSON paketleri) → Claude kalite denetimi yapar (seviye, doğruluk, format) → Yasin onaylar → Cursor havuza ekler. AI'lar üretir ama HER soru denetimden geçer; doğruluk pazarlık konusu değildir.
- **Kalite standardı:** Her parti SPEC 5-6. bölüm kurallarına uyar; şablon tekrarı (aynı sorunun sayı değişmiş kopyaları) parti başına %20'yi aşamaz; her partide 2-3 şaşırtma sorusu bulunur.

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

- **Hikâyeli sorular:** "5+3 kaç eder?" yerine "Elanaz'ın 5 çıkartması vardı, teyzesi 3 tane daha verdi..." — kazanım aynı, ambalaj farklı. Sorularda çocuğun kendi adı geçer.
- **Çeşitlilik:** Aynı oturumda soru tipleri değişir (eşleştirme, boşluk doldurma, çoktan seçmeli) — monotonluk kırılır.
- **İlerleme hissi (✅ karar):** İlerleme haritası + yıldız. Her ders bir "yol"dur; konular yol üzerinde sırayla açılır, tamamlanan konu haritada renklenir. Test başarısına göre konu başına 1-3 yıldız kazanılır (ustalık eşiğiyle bağlantılı). Rozet/günlük seri Faz 1.5+ adayı.
- **Şaşırtma soruları (patron isteği — 10 Haziran):** Soru havuzlarına ara sıra dikkat ödüllendiren şaşırtmaca sorular serpiştirilir: tersine sorular ("hangisi YOKTUR?"), fazla-bilgili problemler (çeldirici detay içeren), vurgulu olumsuz sorular ("hangisi DEĞİLDİR?"). Doz: 10 soruda en fazla 1-2. Kural: şaşırtmaca ADİL olur — kandırmaz, dikkatli okumayı ödüllendirir. Yanlışta geri bildirim suçlamaz; sıcak bir "tuzağı fark et, bir daha dikkatle oku" mesajı verir.
- **Cevap formatı (✅ patron kararı — 10 Haziran):**
  - **Testlerde:** Çoktan seçmeli kutucuklar. Çocuk kutuya dokununca kutuda işaret belirir. Seçimini **her soru için en fazla 2 kez değiştirebilir** (2 iptal hakkı); sonrasında seçim kilitlenir. Değişiklik hakkı ekranda görünür (örn. "Değiştirme hakkın: 2").
  - **Alıştırmalarda (test dışı sorular):** Yazarak cevap. Sorunun altındaki cevap alanına dokununca tabletin klavyesi açılır, çocuk cevabı yazar (sayı veya kısa kelime).
  - ✅ Renk kararı (onaylandı): Seçim işareti mavi/turuncu (nötr); kırmızı yalnızca "yanlış cevap", yeşil yalnızca "doğru cevap" geri bildiriminde kullanılır.

## 6.1 Görsel Tasarım Prensipleri (MEB kitap analizi sonucu — 10 Haziran)

> "Animasyon yok" kuralı "görsel yok" demek DEĞİLDİR. Bu yaş grubunda görsel, öğretimin ana aracıdır.

- **Ekran başına az metin:** Bir ekranda ~30-50 kelimeyi geçme; satır araları geniş, punto büyük.
- **Durağan görsel desteği:** Her konu anlatımında ve uygun sorularda illüstrasyon/nesne resmi (statik). Örn: basamak kavramında onluk-birlik bloklar renkli görsellerle.

## SPEC GÜNCELLEMESİ v1.1 (11 Haziran 2026 — patron onaylı değişiklikler)
1. **Terminoloji düzeltmesi:** "Basamak değeri 2. sınıfta kullanılmaz" kuralı İPTAL. Resmî Maarif 2. sınıf Matematik kitabı (Sayılarda Çözümleme, s.72+) "basamak", "basamak adı" ve "basamak değeri" kavramlarını açıkça öğretiyor. Yeni kural: onluk/birlik dili temel kalır; basamak değeri kitaptaki tanımıyla Sayılarda Çözümleme konusunda öğretilir ve sorulara dahil edilir.
2. **Müfredat referansı:** Tüm içerik üretimi resmî MEB Maarif kitaplarına bağlanır → MUFREDAT-MAT2.md ve MUFREDAT-2SINIF-TUM.md (4 ders, 9 PDF, docs/kaynak/). Konu sırası = kitap sırası. Eylül lansman önceliği: her dersin 1. tema/alanı.
3. **Çeldirici kuralı:** Okunuş/yazılış sorularında kavram-yanılgısı çeldiricileri (örn. "doksan dört" için 904) serbest — doğru cevap her zaman 1-100 evreninde kalır (patron onayı: 11 Haziran).
4. **Ünite sınavı katmanı:** Kitaplardaki "Tema Değerlendirme" karşılığı olarak 10 soruluk ünite sınavı eklenir (Görev 4). Konu testi 5 soruda kalır.
5. **Rakip-üstü 5 kalem hedefi (v2.0 vizyonu):** (1) konu başına 100+ soru, (2) yanlışın kök nedenine inen geri bildirim + kazanıma ek alıştırma, (3) tam kişiselleştirme, (4) konu testi + ünite sınavı + aralıklı tekrar motoru + Anne Paneli haftalık önerisi, (5) zengin oyunsuz soru tipleri (eşleştirme, tablo boyama, kelime avı, D/Y+kontrol, sayı şeridi görselleri, açık uçlu gerçek yaşam problemleri).
- **Soru biçim çeşitliliği görsellerle zenginleşir:** Eşleştirme okları, konuşma balonlu sorular, boşluk doldurma bulutları — hepsi durağan görsel + dokunma ile çözülür, animasyonsuz.
- **İçerik şemasına etkisi:** JSON şemasına her anlatım/soru için opsiyonel `gorsel` alanı eklenir.
- **Doğrulama görevi:** MEB Maarif Modeli 2. sınıf kitaplarının kendisi (tymm.meb.gov.tr resmî PDF'leri) indirilip ünite yapıları birebir çıkarılacak — ikinci el özetlere güvenilmez. (Gemini Pro'ya uygun büyük doküman işi.)
- **İngilizce dersi notu:** MEB yaklaşımında bu seviyede İngilizce dinleme/kelime odaklıdır, gramer yoktur. Sesli içerik Faz 1 kapsamı dışında olduğundan İngilizce Faz 1'de görsel-kelime eşleştirme ağırlıklı işlenir; ses desteği (telaffuz) Faz 1.5 kararı olarak açılır.

## 7. Teknik Çerçeve

- **Stack:** React Native + Expo (mevcut bilgi birikimi)
- **İçerik deposu:** Kod içinde değil; JSON/SQLite tabanlı içerik paketi. Şema: `sınıf → ders → ünite → konu → {anlatım, alıştırma[], test[]}` + her öğede MEB kazanım kodu.
- **Offline-first:** İnternet olmadan tam çalışır (çocuk cihazında bağlantı garantisi yok).
- **Tek cihaz, tek çocuk profili (Faz 1):** Çoklu profil Faz 2'ye ertelendi.
- **Anne Paneli (şifreli — Faz 1, patron kararı):**
  - Ana ekranda "Anne" butonu; girişi PIN ile korunur (çocuk erişemez).
  - Panel içeriği: hangi derste hangi konuları çalıştı, kaç soru çözdü, doğru/yanlış dağılımı, hangi soruları yanlış yaptı, günlük/haftalık özet.
  - **Cevap anahtarları yalnızca bu panelde görünür** — çocuk tarafında asla gösterilmez; çocuk yalnızca kendi cevabının doğru/yanlış olduğunu ve açıklamalı geri bildirimi görür.

## 8. Kapsam DIŞI (Faz 1)

- Oyunlar ve animasyonlar (patron kuralı)
- 1. ve 3. sınıf içerikleri
- Store yayını / başka kullanıcılar (önce Elanaz'da kanıtlanır)
- Sesli anlatım (değerlendirilebilir ama Faz 1'de yok)
- AI ile dinamik soru üretimi (içerik elle/denetimli üretilir — doğruluk pazarlık konusu değil)

## 9. İlk Sprint (Cursor'a gidecek ilk iş paketi)

1. Expo projesi iskeleti: sınıf/ders/konu navigasyonu (boş içerikle)
2. İçerik şeması (JSON) + 1 örnek konu: Matematik / "Doğal Sayılar — Ritmik Sayma" (anlatım + 5 alıştırma + 5 test sorusu)
3. Soru gösterim motoru: çoktan seçmeli tip (ilk tip olarak)
4. Doğru/yanlış geri bildirim ekranı (açıklamalı)
5. Basit ilerleme kaydı (lokal)
6. Anne Paneli iskeleti: PIN girişi + çözülen soru sayısı / doğru-yanlış listesi (basit ilk sürüm)

**Kabul kriteri:** Elanaz (veya Yasin) uygulamayı açıp örnek konuyu baştan sona — anlatım → alıştırma → test → sonuç — akıcı şekilde tamamlayabilmeli; anne PIN ile panele girip bu oturumun sonuçlarını görebilmeli.

## 10. Açık Kararlar Listesi (patron onayı bekleyenler)

| # | Karar | Seçenekler | Durum |
|---|-------|-----------|-------|
| 1 | İlerleme/ödül mekanizması | ✅ KARAR (GM inisiyatifi, patron onaylı "kendiliğinden gelişir"): İlerleme haritası + yıldız. Rozet/seri ileride eklenebilir. | ✔ |
| 2 | Cevap formatı | ✅ KARAR: Testler = kutucuklu çoktan seçmeli (2 değiştirme hakkı) · Alıştırmalar = klavyeyle yazma | ✔ |
| 3 | Uygulamalı dersler | ✅ KARAR: Görsel Sanatlar dahil; Müzik ve Beden Eğitimi hariç | ✔ |
| 4 | Uygulama adı | ✅ KARAR: **"Elanaz'ın Ders Dünyası"** | ✔ |
