# GOREV-2.md — İkinci Sprint Brifingi
**Proje:** Elanaz'ın Ders Dünyası
**Gönderen:** Claude (GM) · **Onaylayan:** Yasin (patron)
**Referans:** SPEC.md v1.0 · Önkoşul: GOREV-1 tamamlandı (✔)

---

## Görevin Özeti
Dört parça: (A) büyük soru havuzu + rastgele seçim, (B) görselli soru desteği,
(C) ilerleme haritası UI, (D) Okuma Köşesi modülü. Patron kararları:
sorular her oturumda değişmeli, bazı sorular renkli resimli olmalı.

## A) Soru Havuzu + Rastgele Seçim
1. İçerik şemasını koru; havuz mantığı ekle: bir konuda N>5 soru varsa,
   her oturumda alıştırma için rastgele 5, test için rastgele 5 soru seç.
   Aynı oturumda tekrar yok; oturumlar arasında karışım değişmeli.
2. Ritmik Sayma havuzunu büyüt: toplam EN AZ 20 alıştırma + 20 test sorusu
   (SPEC 5-6. bölüm standartlarında: hikâyeli, çocuk dilinde, Elanaz adı
   bazı sorularda geçsin; placeholder YASAK).
4. Şaşırtma soruları (patron isteği): her konunun havuzuna 2-3 adet ADİL
   şaşırtmaca soru ekle — tersine ("hangisi YOKTUR?"), fazla-bilgili
   (çeldirici detaylı problem), vurgulu olumsuz ("hangisi DEĞİLDİR?").
   Doz: oturum başına en fazla 1-2 çıkacak şekilde. Yanlışta geri bildirim
   suçlamaz; sıcak "tuzağı fark et, bir daha dikkatle oku" tonu kullanır.
3. Matematik'e 2 yeni konu ekle (MEB 2. sınıf, sıralı): "Sayıları Okuma ve
   Yazma (100'e kadar)" ve "Onluk ve Birlik". Her biri: 2-3 ekran anlatım +
   en az 15 alıştırma + 15 test.

## B) Görselli Soru Desteği
1. Şemadaki `gorsel` alanını işle: anlatım ve soru ekranlarında görsel varsa
   metnin üstünde göster (statik, animasyonsuz).
2. Görseller assets/ altında; ilk etapta BASİT ve renkli SVG/PNG
   illüstrasyonlar üret veya çiz: elma grupları, çıkartmalar, onluk-birlik
   blokları, sayı kartları. Karmaşık sanat değil; net, büyük, renkli.
3. "Onluk ve Birlik" konusunun en az 5 sorusu görselli olsun (örn. blok
   resmi göster, "kaç onluk var?" sor).
4. Telif kuralı: hiçbir görsel internetten kopyalanmaz; hepsi bu projede
   üretilmiş özgün/basit çizimler olur.

## C) İlerleme Haritası UI
1. Her ders için konular bir "yol" üzerinde dikey sıralanır: tamamlanan
   konu renkli + yıldızları görünür (1-3), sıradaki konu aktif, sonrakiler
   kilitli (gri + kilit ikonu).
2. Kilit kuralı (SPEC ustalık prensibi): bir konu, testinden en az 1 yıldız
   alınmadan bir sonraki konuyu açmaz.
3. Animasyon yok; sade, renkli, büyük dokunma alanları.
4. Ders listesi ekranında her dersin yanına küçük ilerleme özeti
   (örn. "2/3 konu" + toplam yıldız).

## D) Okuma Köşesi Modülü
1. Hikâye listesi → hikâye okuma ekranı (sayfalı, ekran başına ~50-60
   kelime, büyük punto) → okuma bitince anlama soruları (kutucuklu test
   motoruyla, 2 değiştirme hakkı aynı şekilde) → yıldız.
2. İçerik şemasına `hikaye` tipi ekle: { baslik, sayfalar[], sorular[] }.
3. İlk hikâye olarak şunu JSON'a aktar (metne sadık kal, değiştirme):

Başlık: "Elanaz ve Kayıp Boya Kalemi"
Sayfa 1: Elanaz o sabah okula neşeyle gitti. Çünkü resim dersi vardı ve
öğretmeni "Bugün hayalinizdeki bahçeyi çizeceğiz" demişti. Elanaz çantasını
açtı. Boya kalemlerini tek tek sıraya dizdi. Kırmızı, sarı, mavi, yeşil...
Ama bir şey eksikti. Turuncu kalemi yoktu!
Sayfa 2: "Olamaz!" dedi Elanaz. "Bahçemdeki portakal ağacını nasıl
boyayacağım?" Yan sırada oturan arkadaşı Zeynep, Elanaz'ın üzüldüğünü
fark etti. "Ne oldu Elanaz?" diye sordu. "Turuncu kalemim kaybolmuş,"
dedi Elanaz. Zeynep biraz düşündü. Sonra gülümsedi. "Kaybolan kalemine
üzülme. Bir sırrım var: kırmızı ile sarıyı karıştırırsan turuncu olur!"
Sayfa 3: Elanaz önce inanamadı. Kâğıdın kenarına önce kırmızı sürdü,
üstüne sarı sürdü. Gerçekten de turuncu olmuştu! Portakal ağacını boyadı.
Resmi o kadar güzel oldu ki öğretmeni resmi sınıf panosuna astı. O gün
Elanaz iki şey öğrendi: Renkler karışınca yeni renkler oluşur. Ve bir
sorun olduğunda üzülmek yerine çözüm aramak gerekir.

Sorular (4 şıklı, doğru şık işaretli; yanlışta ipucu ver, cevabı söyleme):
S1: Elanaz o gün okula neden neşeyle gitti? (Doğru: Resim dersi olduğu için)
S2: Elanaz'ın hangi boya kalemi kayıptı? (Doğru: Turuncu)
S3: Zeynep hangi sırrı söyledi? (Doğru: Kırmızı ile sarı karışınca turuncu olur)
S4: Öğretmen resmi ne yaptı? (Doğru: Sınıf panosuna astı)
S5: Hikâyenin ana fikri nedir? (Doğru: Sorun olunca üzülmek yerine çözüm aramak gerekir)
Yanlış şıkları sen üret: makul, çeldirici ama adil olsun.

## Kabul Kriterleri
- [ ] Aynı konu iki kez açıldığında farklı soru karışımı geliyor
- [ ] Ritmik Sayma havuzu ≥20+20; yeni 2 konu ≥15+15 içerikle dolu
- [ ] Görselli sorular ekranda görseliyle çıkıyor (en az 5 soru)
- [ ] İlerleme haritası: tamamlanan renkli/yıldızlı, sıradaki açık, sonrası kilitli
- [ ] 1 yıldız almadan sonraki konu açılmıyor
- [ ] Okuma Köşesi: hikâye → sorular → yıldız akışı çalışıyor
- [ ] Tüm içerik JSON'dan; koda gömülü soru/hikâye yok
- [ ] Expo Go (SDK 54) ile telefonda çalışıyor

## Yapma Listesi
- Oyun, animasyon, ses
- AI ile dinamik soru üretimi
- 1./3. sınıf içeriği
- Backend/online
- Aralıklı tekrar motoru (Görev 3'e)

## Çalışma Şekli
Kararsızlıkta SPEC.md'ye dön; varsayımları listele. Bitince "Claude'a not"
raporu: yapılanlar, varsayımlar, Görev 3 önerisi.
