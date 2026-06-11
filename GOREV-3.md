# GOREV-3: Yeni Soru Tipleri Motoru + Geometri Açılışı
**Hazırlayan:** Claude (GM) · **Onay:** Yasin (11 Haziran gece)
**Tahmini süre:** 2-3 saat (Cursor)
**Amaç:** Eylül lansmanının ilk konusu (Geometri) + rakip analizinden çıkan iki yeni soru tipi + sayı şeridi görsel bileşeni.

## Cursor'a Not
Merhaba Cursor. Üç iş paketi var: (A) iki yeni soru tipi motoru, (B) SayiSeridi SVG bileşeni, (C) yeni konu: Geometrik Cisimler (başlangıç içeriğiyle). Mevcut motor ve kurallara (mavi seçim, 2 değiştirme hakkı, yeşil=doğru/kırmızı=yanlış, yanlışta cevap söylenmez-ipucu verilir) dokunma; yeni tipler bu kurallara uyarlanır.

---

## A) YENİ SORU TİPLERİ (motor genişletmesi)

### A1. Eşleştirme (`tip: "eslestirme"`)
JSON şeması:
```json
{
  "id": "geo-e1",
  "tip": "eslestirme",
  "yonerge": "Nesneleri grubuyla eşleştir.",
  "ciftler": [
    { "sol": "Top", "sag": "Yuvarlak" },
    { "sol": "Kitap", "sag": "Köşeli" },
    { "sol": "Portakal", "sag": "Yuvarlak" },
    { "sol": "Hediye kutusu", "sag": "Köşeli" }
  ],
  "sasirtma": false,
  "ipucu": "Köşesi ve kenarı olmayanlar yuvarlaktır."
}
```
UI davranışı:
- Sol sütun: sol öğeler sıralı. Sağ sütun: sağ değerlerin BENZERSİZ kümesi karışık sırada (aynı değer iki kez listelenmez; "Yuvarlak" kutusuna birden çok sol öğe bağlanabilir).
- Çocuk önce soldan bir öğeye dokunur (MAVİ vurgu), sonra sağdan karşılığına dokunur → çizgi/bağ kurulur.
- Kurulan eşleşme tekrar dokununca çözülebilir (cevap kilitlenmeden önce).
- "Kontrol Et" butonu: tüm sollar eşleşince aktifleşir. Doğrular YEŞİL, yanlışlar KIRMIZI yanar; yanlışlarda bağ çözülür, ipucu gösterilir, çocuk yanlışları yeniden eşler (toplam 2 deneme hakkı, sonra soru kilitlenir ve yıldız hesabına "yanlış" yazılır — mevcut kuralla aynı).
- Puanlama: tüm çiftler doğruysa soru doğru sayılır.

### A2. Tablo Boyama (`tip: "tablo-boyama"`)
JSON şeması:
```json
{
  "id": "rit-tb1",
  "tip": "tablo-boyama",
  "yonerge": "2'den başlayarak ileriye doğru ikişer sayalım. Söylediğimiz sayıları tabloda boyayalım.",
  "tabloBaslangic": 1,
  "tabloBitis": 20,
  "dogruHucreler": [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  "sasirtma": false,
  "ipucu": "İkişer sayarken her sayı bir öncekinden 2 fazladır."
}
```
UI davranışı:
- Satır başına 10 hücreli ızgara (1-20 → 2 satır; 1-40 → 4 satır). Hücreye dokun → MAVİ boyanır; tekrar dokun → boya kalkar.
- "Kontrol Et": doğru boyananlar YEŞİL kalır, yanlış boyananlar KIRMIZI yanıp söner ve temizlenir, eksikler boş kalır → ipucu + 2. deneme. 2. denemede de tam değilse kilit.
- Puanlama: küme birebir doğruysa (eksiksiz ve fazlasız) doğru.

İkisi için de: test motoruna entegre (oturum karması içinde çıkabilirler), Anne Paneli cevap anahtarında düzgün gösterim (eşleştirmede çift listesi, tabloda doğru sayı listesi).

---

## B) SAYI ŞERİDİ SVG BİLEŞENİ (`SayiSeridi`)
react-native-svg ile, props:
```ts
{ baslangic: number; adim: number; adimSayisi: number; vurgulananlar?: number[] }
```
- Yatay şerit üzerinde sayılar: baslangic'tan başlayıp adim'la artarak adimSayisi+1 sayı (örn. 0,3,6,9,12,15,18).
- Ardışık sayılar arasında ALTTAN YAY şeklinde ok + üzerinde "+adim" etiketi (Okulistik saha görüntüsündeki stil: sade, tek renk vurgu, dekor yok).
- vurgulananlar listesindeki sayılar dolgulu daire içinde gösterilir.
- Küçük ekranda taşarsa yatay kaydırma (ScrollView) — sayılar asla küçülüp okunmaz hale gelmez.
- Soru şemasına bağlama: mevcut `gorsel` alanına yeni tür ekle: `{ "tur": "sayi-seridi", "baslangic": 0, "adim": 3, "adimSayisi": 6, "vurgulananlar": [9] }`
- Kanıt kullanım: Ritmik Sayma havuzundan 4 mevcut soruya bu görseli ekle (örn. "3'er sayarken 9'dan sonra hangi sayı gelir?" tarzı uygun olanları seç, rapora hangilerini seçtiğini yaz).

---

## C) YENİ KONU: GEOMETRİK CİSİMLER (MAT Tema 1, Konu 1)
Konum: `content/sinif2/matematik/geometrik-cisimler.json` — kazanımKodu: "MAT.2.1.1" (Maarif Tema 1), haritada Ritmik Sayma'dan ÖNCE görünür (kitap sırası: Tema 1 → Tema 2). Konu haritası sıralamasını kitap sırasına çevir: Geometrik Cisimler → (ileride eklenecek Tema 1 konuları) → Sayılar grubu (mevcut 3 konu).
**ÖNEMLİ:** Mevcut konuların ustalık kilidi mantığı korunur ama Geometrik Cisimler İLK konu olduğu için açık başlar; Ritmik Sayma vb. zaten açılmış konular AÇIK KALIR (Elanaz'ın ilerlemesi sıfırlanmaz/kilitlenmez).

### Anlatım (3 sayfa, aynen gir)
**Sayfa 1:** Çevremizdeki her nesnenin bir biçimi vardır. Kimi nesneler yuvarlaktır, kimi nesneler köşelidir. Futbol topunu düşünelim: yüzeyi dümdüz değil, yusyuvarlaktır. Bir de kitabı düşünelim: kenarları ve köşeleri vardır.
**Sayfa 2:** Köşesi ve kenarı OLMAYAN cisimlere YUVARLAK cisimler denir. Top, portakal, misket ve karpuz yuvarlak cisimlerdir. Yuvarlak cisimler yere koyunca yuvarlanabilir.
**Sayfa 3:** Köşesi ve kenarı OLAN cisimlere KÖŞELİ cisimler denir. Kitap, hediye kutusu, buzdolabı ve zekâ küpü köşeli cisimlerdir. Köşeli cisimler yuvarlanmaz, durduğu yerde durur. Haydi, çevrene bak: gördüğün bir yuvarlak ve bir köşeli cisim söyle!

### Başlangıç soruları (18 — PARTI-GEO partileriyle 100+'a çıkacak)
Alıştırmalar (yazılı):
GEO-A1. Köşesi ve kenarı olmayan cisimlere ne denir? → yuvarlak (kabul: "yuvarlak cisim")
GEO-A2. Futbol topu yuvarlak mıdır, köşeli midir? → yuvarlak
GEO-A3. Buzdolabı yuvarlak mıdır, köşeli midir? → köşeli
GEO-A4. Elanaz'ın zekâ küpü köşeli midir? (evet/hayır) → evet
GEO-A5. Portakal hangi gruba girer? (yuvarlak/köşeli) → yuvarlak
GEO-A6. Kitap yuvarlak mıdır, köşeli midir? → köşeli
GEO-A7. 🎭 Tekerlek yuvarlaktır. Peki tekerleğin köşesi var mıdır? (evet/hayır) → hayır (ipucu: Yuvarlak cisimlerin köşesi ve kenarı olmaz — soru seni şaşırtmaya çalıştı!)
GEO-A8. Süt kutusu köşeli midir? (evet/hayır) → evet

Testler (4 şık, ✅ doğru):
GEO-T1. Hangisi yuvarlak bir cisimdir? A) Kitap B) Top ✅ C) Hediye kutusu D) Dolap
GEO-T2. Hangisi köşeli bir cisimdir? A) Portakal B) Misket C) Süt kutusu ✅ D) Tenis topu
GEO-T3. Hangisi yuvarlak cisimdir? A) Dolap B) Masa C) Karpuz ✅ D) Defter
GEO-T4. Elanaz kampta bir termos gördü. Termosun gövdesi yuvarlaktır. Termos hangi gruba girer? A) Köşeli B) Yuvarlak ✅ C) Kare D) Üçgen
GEO-T5. 🎭 Hangisi köşeli DEĞİLDİR? A) Hediye kutusu B) Kitap C) Misket ✅ D) Çamaşır makinesi (ipucu: "DEĞİLDİR" diyor — köşeli OLMAYANI arıyoruz!)
GEO-T6. Top ve portakal için hangisi doğrudur? A) İkisi de köşelidir B) İkisi de yuvarlaktır ✅ C) Top köşeli, portakal yuvarlaktır D) İkisi de karedir
GEO-T7. Kerem'in oyuncak kutusu köşelidir. Kutuda ne vardır? A) Köşe ve kenar ✅ B) Sadece yuvarlaklık C) Tekerlek D) Sap
GEO-T8. 🎭 Kalem kutusu köşelidir ama içindeki misket nasıldır? A) Köşelidir B) Yuvarlaktır ✅ C) Karedir D) Üçgendir (ipucu: Dikkat, soru kutuyu değil İÇİNDEKİ misketi soruyor!)

Eşleştirme (yeni motorun kanıtı, teste karışır):
GEO-E1. Yönerge: "Nesneleri grubuyla eşleştir." Çiftler: Top→Yuvarlak, Kitap→Köşeli, Portakal→Yuvarlak, Hediye kutusu→Köşeli
GEO-E2. Yönerge: "Nesneleri grubuyla eşleştir." Çiftler: Misket→Yuvarlak, Dolap→Köşeli, Karpuz→Yuvarlak, Defter→Köşeli

Tablo boyama (Ritmik Sayma havuzuna eklenir, motorun kanıtı):
RIT-TB1. Yönerge: "2'den başlayarak ileriye doğru ikişer sayalım. Söylediğimiz sayıları tabloda boyayalım." Tablo 1-20, doğrular: 2,4,6,8,10,12,14,16,18,20
RIT-TB2. Yönerge: "5'ten başlayarak ileriye doğru beşer sayalım. Söylediğimiz sayıları tabloda boyayalım." Tablo 1-40, doğrular: 5,10,15,20,25,30,35,40

---

## D) DOĞRULAMA + RAPOR
1. `npm start` → Geometrik Cisimler anlatımını aç, bir oturum çöz (eşleştirme sorusunun çıktığını gör), Ritmik'te tablo boyama ve sayı şeridi görselli soru dene.
2. Konsol özeti: konu başına soru sayıları + yeni tip sayıları.
3. Commit: `GOREV-3: eslestirme + tablo-boyama motoru, SayiSeridi SVG, Geometrik Cisimler konusu`  (push yok)
4. "Claude'a not" raporu: yapılanlar, SayiSeridi'nin bağlandığı 4 ritmik soru ID'si, varsa teknik kararlar/sorunlar.

## Kurallar (değişmedi)
Soru metinleri harfi harfine · cevap anahtarı sadece Anne Paneli · şaşırtmalarda sıcak ton · animasyon yok · offline-first · Türkçe karakter sorunu olursa heredoc.
