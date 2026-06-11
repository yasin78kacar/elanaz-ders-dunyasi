# GOREV-3E: Geometrik Cisimler'e Görseller (anlatım + sorular)
**Sebep:** Patron tespiti — geometri anlatımı görselsiz gitti, SPEC 6.1 ihlali. Geometri görsel konudur; metinle anlatılmaz, GÖSTERİLİR.
**Tahmini süre:** 1-1,5 saat

## Cursor'a Not
react-native-svg ile basit, CANLI RENKLİ, DEKORSUZ nesne illüstrasyonları çiz (arka plan sahnesi yok, gölge minimum). **RENK KURALI (patron emri):** Soluk/pastel tonlar YOK — doygun, canlı renkler kullan: kırmızı #E53935, turuncu #FB8C00, sarı #FDD835, yeşil #43A047, mavi #1E88E5, mor #8E24AA gibi. Nesneler ekranda "parlasın" ama dikkat dağıtan desen/animasyon olmasın. Mevcut `gorsel` mekanizmasını (GOREV-2'deki 14 görselli soru altyapısı) kullan.

### A) Anlatım sayfalarına görsel (geometrik-cisimler konusu)
- **Sayfa 1 görseli:** Yan yana iki nesne: kırmızı bir top (daire, hafif parlama noktası) ve mavi bir kitap (dikdörtgen, sırt çizgili). Altlarında etiket: "yuvarlak" / "köşeli".
- **Sayfa 2 görseli (yuvarlak cisimler):** 4 nesne yan yana: top, portakal (turuncu daire + yaprak), misket (küçük cam daire), karpuz (yeşil çizgili daire). Etiketli.
- **Sayfa 3 görseli (köşeli cisimler):** 4 nesne: kitap, hediye kutusu (kurdeleli), buzdolabı (dikdörtgen+kapı çizgisi), zar (kare+noktalar). Etiketli.
- **Sayfa 3'e EK kavram görseli (en önemlisi):** Tek bir kutu çizimi üzerinde KÖŞE'lerden birine ok + "köşe" etiketi, KENAR'lardan birine ok + "kenar" etiketi. Çocuk köşe/kenar kavramını ilk kez burada GÖRECEK.
- Anlatım veri şemasına sayfa başına `gorsel` alanı ekle (yoksa).

### B) Sorulara görsel desteği (8 soru)
Geometri havuzundan şu sorulara uygun nesne görseli ekle (soru metni DEĞİŞMEZ, görsel destek olarak gelir):
- GEO-T1 (top), GEO-T2 (süt kutusu), G1-T5 (top), G1-T10 (portakal+misket yan yana), G1-T14 (karpuz), G1-T20 (sıra), G1-T22 (hediye kutusu), GEO-E1 (eşleştirmenin sol öğeleri minik ikonlu: top/kitap/portakal/kutu)
- Eşleştirme motorunda sol öğelerin yanında küçük SVG ikon gösterimi desteği ekle (varsa metin+ikon birlikte).

### C) İçerik standardı güncellemesi (bundan sonrası için)
generate-content düzeninde soru şemasındaki `gorsel` alanının türlerini belgele (yorum satırı yeter): `nesne` (tek/çoklu nesne illüstrasyonu), `sayi-seridi` (mevcut), `onluk-blok` (mevcut GOREV-2 tarzı). Bundan sonra Claude'un brifinglerinde [GÖRSEL: tarif] etiketi gelecek; o tarifleri bu türlerle eşleyeceksin.

### D) Doğrulama + rapor
Telefonda anlatımın 3 sayfasını ve görselli 2 soruyu kontrol et. Commit: `GOREV-3E: geometri anlatim ve soru gorselleri` — push yok. "Claude'a not": eklenen görsel sayısı, teknik karar, sorun.
