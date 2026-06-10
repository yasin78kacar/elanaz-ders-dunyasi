# GOREV-1.md — Cursor İlk Sprint Brifingi
**Proje:** Elanaz'ın Ders Dünyası (React Native + Expo)
**Gönderen:** Claude (GM) · **Onaylayan:** Yasin (patron)
**Referans:** SPEC.md v1.0 (aynı klasörde — önce onu oku)

---

## Görevin Özeti
SPEC.md 9. bölümün (İlk Sprint) çalışan ilk sürümünü kur. Hedef: Expo Go'da baştan sona akan tek bir konu deneyimi.

## Hedef
Bu klasörde yeni bir Expo projesi kur. Aşağıdaki 6 parça çalışır halde:

1. **Navigasyon iskeleti:** Ana ekran → ders listesi (Türkçe, Matematik, Hayat Bilgisi, İngilizce, Görsel Sanatlar, Okuma Köşesi, Zekâ ve Dikkat) → konu listesi → konu akışı. Başlık dinamik: {cocukAdi}'ın Ders Dünyası (config'den, şimdilik "Elanaz").
2. **İçerik şeması (JSON):** content/ klasöründe: sinif → ders → unite → konu → { anlatim, alistirma[], test[] }. Her öğede kazanimKodu (string), opsiyonel gorsel. Soru tipleri: coktanSecmeli (test), yazili (alıştırma).
3. **Örnek içerik:** Matematik / "Ritmik Sayma" — kısa hikâyeli anlatım (≤50 kelime/ekran, çocuk diliyle), 5 yazılı alıştırma, 5 çoktan seçmeli test. Placeholder yazma; SPEC 5. ve 6. bölüm standartlarında gerçek içerik yaz.
4. **Soru motoru v1:**
   - Test: kutucuklu çoktan seçmeli. Seçim işareti MAVİ (kırmızı DEĞİL). Soru başına en fazla 2 seçim değişikliği; hak sayısı ekranda ("Değiştirme hakkın: 2"); bitince kilitlenir.
   - Alıştırma: cevap alanına dokununca klavye (sayısalda numerik), kısa cevap.
   - Geri bildirim: doğruda yeşil + sıcak tebrik; yanlışta kırmızı + ipucu (doğru cevabı SÖYLEME). Cevap anahtarı çocuk tarafında asla görünmez.
5. **İlerleme kaydı (lokal):** AsyncStorage. Konu başına: tamamlandı mı, test skoru, yıldız (1-3), her sorunun kaydı (soruId, verilenCevap, dogruMu, tarih).
6. **Anne Paneli v1:** Ana ekranda "Anne" butonu → 4 haneli PIN (tahmin edilebilir PIN'e izin verme) → panel: çözülen soru sayısı, doğru/yanlış dağılımı, yanlış sorular listesi (soru + verilen cevap + doğru cevap). Doğru cevaplar YALNIZCA burada görünür.

## Kabul Kriterleri (hepsi)
- [ ] Expo Go'da açılıyor, çökmüyor
- [ ] Ana ekran → Matematik → Ritmik Sayma → anlatım → 5 alıştırma → 5 test → sonuç (yıldız) akışı kesintisiz
- [ ] 2 değişiklik hakkı çalışıyor ve görünüyor
- [ ] Yanlışta doğru şık gösterilmiyor, ipucu var
- [ ] Anne Paneli PIN'siz açılmıyor; sonuçlar ve cevap anahtarları içinde
- [ ] İçerik tamamen JSON'dan (koda gömülü soru yok)

## Yapma Listesi
- Oyun, animasyon, ses
- 1. veya 3. sınıf içeriği
- Online/backend (tamamen offline)
- İlerleme haritası UI'ı (Görev 2'de; bu sprintte sadece veri katmanı)
- Store/dağıtım

## Çalışma Şekli
- Kararsızlıkta SPEC.md'ye dön; SPEC'te yoksa varsayım yap ve listele.
- İş bitince "Claude'a not" raporu yaz: ne yapıldı, varsayımlar, Görev 2 önerisi.
