/** GOREV-ING-TEMA8C — Jobs (Meslekler) */

const KAZANIM = 'ING.2.8.3';

function anl(sahne) {
  return { tur: 'ingilizce', mod: 'anlatim', sahne };
}
function nesne(n, extra = {}) {
  return { tur: 'ingilizce', mod: 'nesne', nesne: n, ...extra };
}
function grup(nesneler, vurgu) {
  return { tur: 'ingilizce', mod: 'grup', nesneler, vurgu };
}

function boslukEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  sorular.push({ id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: String(cevap), ipucu, cevapTipi: 'metin', ...extra });
}
function dyEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  sorular.push({
    id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: cevap, ipucu, cevapTipi: 'metin',
    alternatifCevaplar: cevap === 'Doğru' ? ['Evet', 'evet', 'doğru'] : ['Hayır', 'hayır', 'yanlış'],
    ...extra,
  });
}
function testEkle(sorular, id, soru, cevap, secenekler, ipucu, extra = {}) {
  sorular.push({ id, kazanimKodu: KAZANIM, tip: 'coktanSecmeli', soru, dogruCevap: cevap, secenekler, ipucu, ...extra });
}

function alistirma() {
  const s = [];
  boslukEkle(s, 'ms-a1', 'Meslek kelimesinin İngilizcesi ......... kelimesidir.', 'job', '', { gorsel: nesne('meslekler-panosu') });
  dyEkle(s, 'ms-a2', 'Doktor İngilizcede "Doctor" demektir.', 'Doğru', '', { gorsel: nesne('doktor') });
  boslukEkle(s, 'ms-a3', 'Öğretmen kelimesinin İngilizcesi ......... kelimesidir.', 'teacher', '', { gorsel: nesne('ogretmen') });
  dyEkle(s, 'ms-a4', 'Polis İngilizcede "Police officer" olarak söylenir.', 'Doğru', '', { gorsel: nesne('polis') });
  boslukEkle(s, 'ms-a5', 'İtfaiyeci kelimesinin İngilizcesi ......... kelimesidir.', 'firefighter', '', { gorsel: nesne('itfaiyeci') });
  dyEkle(s, 'ms-a6', 'Aşçı İngilizcede "Chef" demektir.', 'Doğru', '', { gorsel: nesne('asci') });
  boslukEkle(s, 'ms-a7', 'Çiftçi kelimesinin İngilizcesi ......... kelimesidir.', 'farmer', '', { gorsel: nesne('ciftci') });
  dyEkle(s, 'ms-a8', '"Doctor" kelimesi doktor demektir.', 'Doğru', '', { gorsel: nesne('doktor-stetoskop') });
  boslukEkle(s, 'ms-a9', 'Hastaları tedavi eden kişiye "........." deriz.', 'doctor', '', { gorsel: nesne('doktor') });
  dyEkle(s, 'ms-a10', 'Öğretmen okulda ders anlatır.', 'Doğru', '', { gorsel: nesne('ogretmen-masa') });
  boslukEkle(s, 'ms-a11', 'Meslekler kelimesinin İngilizcesi "........." kelimesidir.', 'jobs', '', { gorsel: nesne('meslekler-panosu') });
  dyEkle(s, 'ms-a12', '"Teacher" kelimesi öğretmen demektir.', 'Doğru', '', { gorsel: nesne('ogretmen') });
  boslukEkle(s, 'ms-a13', 'Yangın söndüren kişiye "........." deriz.', 'firefighter', '', { gorsel: nesne('itfaiyeci') });
  dyEkle(s, 'ms-a14', 'Polis güvenliği sağlar.', 'Doğru', '', { gorsel: nesne('polis') });
  boslukEkle(s, 'ms-a15', 'Yemek yapan aşçıya İngilizcede "........." denir.', 'chef', '', { gorsel: nesne('asci') });
  dyEkle(s, 'ms-a16', '"Farmer" kelimesi çiftçi demektir.', 'Doğru', '', { gorsel: nesne('ciftci-traktor') });
  boslukEkle(s, 'ms-a17', 'Okulda bize ders veren "........." dir.', 'teacher', '', { gorsel: nesne('ogretmen') });
  dyEkle(s, 'ms-a18', 'Doktor hastanelerde çalışır.', 'Doğru', '', { gorsel: nesne('hastane-doktor') });
  boslukEkle(s, 'ms-a19', 'İtfaiyeci yangınla mücadele eder, İngilizcesi "........." dir.', 'firefighter', '', { gorsel: nesne('itfaiyeci-arac') });
  dyEkle(s, 'ms-a20', '"Chef" kelimesi aşçı demektir.', 'Doğru', '', { gorsel: nesne('asci-mutfak') });
  boslukEkle(s, 'ms-a21', 'Tarlaya eken kişiye "........." deriz.', 'farmer', '', { gorsel: nesne('ciftci') });
  dyEkle(s, 'ms-a22', 'Tüm meslekler topluma fayda sağlar.', 'Doğru', '', { gorsel: nesne('meslekler-grup') });
  boslukEkle(s, 'ms-a23', 'Gelecekte olmak istediğim meslek "My dream ........." dir.', 'job', '', { gorsel: nesne('hayal-meslek') });
  dyEkle(s, 'ms-a24', '"Police officer" kelimesi polis demektir.', 'Doğru', '', { gorsel: nesne('polis') });
  boslukEkle(s, 'ms-a25', 'Meslek seçerken "What is your ........." diye sorarız.', 'job', '', { gorsel: nesne('meslekler-panosu') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) => testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('ms-t1', 'Doktor kelimesinin İngilizcesi nedir?', 'Doctor', ['Doctor', 'Teacher', 'Chef', 'Farmer'], '', { gorsel: nesne('doktor') });
  e('ms-t2', 'Öğretmenin İngilizcesi hangisidir?', 'Teacher', ['Teacher', 'Doctor', 'Police officer', 'Firefighter'], '', { gorsel: nesne('ogretmen') });
  e('ms-t3', 'Polisin İngilizcesi nedir?', 'Police officer', ['Police officer', 'Doctor', 'Chef', 'Farmer'], '', { gorsel: nesne('polis') });
  e('ms-t4', 'İtfaiyecinin İngilizcesi hangisidir?', 'Firefighter', ['Firefighter', 'Teacher', 'Doctor', 'Chef'], '', { gorsel: nesne('itfaiyeci') });
  e('ms-t5', 'Aşçının İngilizcesi nedir?', 'Chef', ['Chef', 'Doctor', 'Teacher', 'Farmer'], '', { gorsel: nesne('asci') });
  e('ms-t6', 'Çiftçinin İngilizcesi hangisidir?', 'Farmer', ['Farmer', 'Chef', 'Doctor', 'Police officer'], '', { gorsel: nesne('ciftci') });
  e('ms-t7', 'Meslek kelimesinin İngilizcesi nedir?', 'Job', ['Job', 'Sport', 'Toy', 'Shape'], '', { gorsel: nesne('meslekler-panosu') });
  e('ms-t8', 'Hastaları tedavi eden meslek hangisidir?', 'Doctor', ['Doctor', 'Teacher', 'Chef', 'Farmer'], '', { gorsel: nesne('doktor-stetoskop') });
  e('ms-t9', 'Okulda ders anlatan meslek hangisidir?', 'Teacher', ['Teacher', 'Doctor', 'Firefighter', 'Chef'], '', { gorsel: nesne('ogretmen-masa') });
  e('ms-t10', 'Yangın söndüren meslek hangisidir?', 'Firefighter', ['Firefighter', 'Police officer', 'Doctor', 'Teacher'], '', { gorsel: nesne('itfaiyeci-arac') });
  e('ms-t11', '"Jobs" kelimesinin anlamı nedir?', 'Meslekler', ['Oyuncaklar', 'Meslekler', 'Sporlar', 'Renkler'], '', { gorsel: nesne('meslekler-grup') });
  e('ms-t12', 'Yemek yapan meslek hangisidir?', 'Chef', ['Chef', 'Doctor', 'Teacher', 'Farmer'], '', { gorsel: nesne('asci-mutfak') });
  e('ms-t13', 'Tarlaya çalışan meslek hangisidir?', 'Farmer', ['Farmer', 'Chef', 'Doctor', 'Police officer'], '', { gorsel: nesne('ciftci-traktor') });
  e('ms-t14', 'Güvenliği sağlayan meslek hangisidir?', 'Police officer', ['Police officer', 'Chef', 'Teacher', 'Farmer'], '', { gorsel: nesne('polis') });
  e('ms-t15', '"Doctor" kelimesinin Türkçe anlamı nedir?', 'Doktor', ['Öğretmen', 'Doktor', 'Aşçı', 'Çiftçi'], '', { gorsel: nesne('hastane-doktor') });
  e('ms-t16', 'Hangi eşleştirme doğrudur?', 'Teacher = Öğretmen', ['Doctor = Öğretmen', 'Teacher = Öğretmen', 'Chef = Doktor', 'Farmer = Polis'], '', { gorsel: nesne('ogretmen') });
  e('ms-t17', 'Gelecekte olmak istediğimiz işe ne deriz?', 'Dream job', ['Dream toy', 'Dream job', 'Dream sport', 'Dream color'], '', { gorsel: nesne('hayal-meslek') });
  e('ms-t18', 'Hastanede çalışan meslek hangisidir?', 'Doctor', ['Doctor', 'Teacher', 'Chef', 'Firefighter'], '', { gorsel: nesne('hastane-doktor') });
  e('ms-t19', '"What is your job?" ne demektir?', 'Mesleğin ne?', ['Adın ne?', 'Mesleğin ne?', 'Kaç yaşındasın?', 'Nerede yaşıyorsun?'], '', { gorsel: nesne('meslekler-panosu') });
  e('ms-t20', 'Mutfakta çalışan meslek hangisidir?', 'Chef', ['Chef', 'Doctor', 'Teacher', 'Police officer'], '', { gorsel: nesne('asci') });
  e('ms-t21', 'Tüm mesleklerin ortak amacı nedir?', 'Topluma fayda sağlamak', ['Para kazanmak sadece', 'Topluma fayda sağlamak', 'Tatil yapmak', 'Oyun oynamak'], '', { gorsel: nesne('meslekler-grup') });
  e('ms-t22', '"Firefighter" hangi meslektir?', 'İtfaiyeci', ['Polis', 'İtfaiyeci', 'Doktor', 'Öğretmen'], '', { gorsel: nesne('itfaiyeci') });
  e('ms-t23', 'Okulda öğrencilere ders veren kişi kimdir?', 'Teacher', ['Doctor', 'Teacher', 'Chef', 'Farmer'], '', { gorsel: nesne('ogretmen') });
  e('ms-t24', '"Farmer" kelimesi ne demektir?', 'Çiftçi', ['Aşçı', 'Çiftçi', 'Doktor', 'Polis'], '', { gorsel: nesne('ciftci') });
  e('ms-t25', 'Meslekler konusunda İngilizcede hangi kelimeyi kullanırız?', 'Jobs', ['Toys', 'Jobs', 'Sports', 'Shapes'], '', { gorsel: nesne('meslekler-panosu') });
  return s;
}

export function meslekler(karistir) {
  return {
    id: 'meslekler',
    baslik: 'Jobs',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        { metin: 'Sınıfta meslek panosu vardı. Doctor, Teacher, Police officer! Her meslek farklı bir iş yapıyordu. "What is your job?" diye sordular birbirlerine.', gorsel: anl('ms-anlatim-1') },
        { metin: 'İtfaiyeci Firefighter yangını söndürdü. Aşçı Chef lezzetli yemek yaptı. Çiftçi Farmer tarlaya ekti. Jobs kelimesi tüm meslekleri kapsıyordu.', gorsel: anl('ms-anlatim-2') },
        { metin: 'Elanaz "I want to be a doctor!" dedi. Berk "My dream job is teacher!" diye cevap verdi. Meslekleri İngilizce öğrenmek geleceğe hazırlıyordu.', gorsel: anl('ms-anlatim-3') },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
