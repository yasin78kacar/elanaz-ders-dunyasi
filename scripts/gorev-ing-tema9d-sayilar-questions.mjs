/** GOREV-ING-TEMA9D — Numbers 11-20 (Sayılar) */
const KAZANIM = 'ING.2.9.4';
const anl = (sahne) => ({ tur: 'ingilizce', mod: 'anlatim', sahne });
const nesne = (n, extra = {}) => ({ tur: 'ingilizce', mod: 'nesne', nesne: n, ...extra });
const bosluk = (s, id, soru, cevap, g) => s.push({ id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: String(cevap), ipucu: '', cevapTipi: 'metin', gorsel: nesne(g) });
const dy = (s, id, soru, cevap, g) => s.push({ id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: cevap, ipucu: '', cevapTipi: 'metin', alternatifCevaplar: cevap === 'Doğru' ? ['Evet', 'evet', 'doğru'] : ['Hayır', 'hayır', 'yanlış'], gorsel: nesne(g) });
const test = (s, id, soru, cevap, sec, g) => s.push({ id, kazanimKodu: KAZANIM, tip: 'coktanSecmeli', soru, dogruCevap: cevap, secenekler: sec, ipucu: '', gorsel: nesne(g) });

function alistirma() {
  const s = [];
  bosluk(s, 'sy-a1', 'On bir kelimesinin İngilizcesi ......... kelimesidir.', 'eleven', 'sayi-11');
  dy(s, 'sy-a2', 'On iki İngilizcede "Twelve" demektir.', 'Doğru', 'sayi-12');
  bosluk(s, 'sy-a3', 'On üç kelimesinin İngilizcesi ......... kelimesidir.', 'thirteen', 'sayi-13');
  dy(s, 'sy-a4', 'On dört İngilizcede "Fourteen" olarak söylenir.', 'Doğru', 'sayi-14');
  bosluk(s, 'sy-a5', 'On beş kelimesinin İngilizcesi ......... kelimesidir.', 'fifteen', 'sayi-15');
  dy(s, 'sy-a6', 'On altı İngilizcede "Sixteen" demektir.', 'Doğru', 'sayi-16');
  bosluk(s, 'sy-a7', 'On yedi kelimesinin İngilizcesi ......... kelimesidir.', 'seventeen', 'sayi-17');
  dy(s, 'sy-a8', 'On sekiz İngilizcede "Eighteen" olarak yazılır.', 'Doğru', 'sayi-18');
  bosluk(s, 'sy-a9', 'On dokuz kelimesinin İngilizcesi ......... kelimesidir.', 'nineteen', 'sayi-19');
  dy(s, 'sy-a10', 'Yirmi İngilizcede "Twenty" demektir.', 'Doğru', 'sayi-20');
  bosluk(s, 'sy-a11', 'Sayı kelimesinin İngilizcesi ......... kelimesidir.', 'number', 'sayilar-1-20');
  dy(s, 'sy-a12', '11\'den sonra 12 gelir.', 'Doğru', 'sayi-12');
  bosluk(s, 'sy-a13', 'On beşten sonra on altı gelir. İngilizcesi ......... kelimesidir.', 'sixteen', 'sayi-16');
  dy(s, 'sy-a14', 'Yirmi iki tane elma "Twenty apples" demektir.', 'Doğru', 'yirmi-elma');
  bosluk(s, 'sy-a15', 'Saymak eyleminin İngilizcesi ......... kelimesidir.', 'count', 'sayma-oyunu');
  dy(s, 'sy-a16', '13 ile 14 ardışık sayılardır.', 'Doğru', 'sayi-13-14');
  bosluk(s, 'sy-a17', '17 sayısının İngilizcesi ......... kelimesidir.', 'seventeen', 'sayi-17');
  dy(s, 'sy-a18', '10\'dan büyük sayılar "teen" ile biter.', 'Doğru', 'teen-sayilar');
  bosluk(s, 'sy-a19', '18 sayısının İngilizcesi ......... kelimesidir.', 'eighteen', 'sayi-18');
  dy(s, 'sy-a20', '20 en büyük iki basamaklı sayımızdır.', 'Doğru', 'sayi-20');
  bosluk(s, 'sy-a21', 'Sayıları sırayla saymaya "Count the ........." deriz.', 'numbers', 'sayilar-1-20');
  dy(s, 'sy-a22', '19\'dan sonra 20 gelir.', 'Doğru', 'sayi-19-20');
  bosluk(s, 'sy-a23', '14 sayısının İngilizcesi ......... kelimesidir.', 'fourteen', 'sayi-14');
  dy(s, 'sy-a24', '11 ve 12 özel kelimelerdir (eleven, twelve).', 'Doğru', 'sayi-11-12');
  bosluk(s, 'sy-a25', 'Bir ile yirmi arası sayılara "Numbers 1 ........." deriz.', 'to 20', 'sayilar-1-20');
  return s;
}

function testSorular(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, g) => test(s, id, soru, cevap, karistir(sec), g);
  e('sy-t1', '11 sayısının İngilizcesi nedir?', 'Eleven', ['Ten', 'Eleven', 'Twelve', 'Thirteen'], 'sayi-11');
  e('sy-t2', '12 sayısının İngilizcesi nedir?', 'Twelve', ['Eleven', 'Twelve', 'Thirteen', 'Fourteen'], 'sayi-12');
  e('sy-t3', '13 sayısının İngilizcesi nedir?', 'Thirteen', ['Twelve', 'Thirteen', 'Fourteen', 'Fifteen'], 'sayi-13');
  e('sy-t4', '14 sayısının İngilizcesi nedir?', 'Fourteen', ['Thirteen', 'Fourteen', 'Fifteen', 'Sixteen'], 'sayi-14');
  e('sy-t5', '15 sayısının İngilizcesi nedir?', 'Fifteen', ['Fourteen', 'Fifteen', 'Sixteen', 'Seventeen'], 'sayi-15');
  e('sy-t6', '16 sayısının İngilizcesi nedir?', 'Sixteen', ['Fifteen', 'Sixteen', 'Seventeen', 'Eighteen'], 'sayi-16');
  e('sy-t7', '17 sayısının İngilizcesi nedir?', 'Seventeen', ['Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'], 'sayi-17');
  e('sy-t8', '18 sayısının İngilizcesi nedir?', 'Eighteen', ['Seventeen', 'Eighteen', 'Nineteen', 'Twenty'], 'sayi-18');
  e('sy-t9', '19 sayısının İngilizcesi nedir?', 'Nineteen', ['Eighteen', 'Nineteen', 'Twenty', 'Eleven'], 'sayi-19');
  e('sy-t10', '20 sayısının İngilizcesi nedir?', 'Twenty', ['Nineteen', 'Twenty', 'Ten', 'Fifteen'], 'sayi-20');
  e('sy-t11', '"Number" kelimesinin anlamı nedir?', 'Sayı', ['Renk', 'Sayı', 'Hayvan', 'Yemek'], 'sayilar-1-20');
  e('sy-t12', '10\'dan sonra hangi sayı gelir?', 'Eleven', ['Nine', 'Ten', 'Eleven', 'Twenty'], 'sayi-11');
  e('sy-t13', '19\'dan sonra hangi sayı gelir?', 'Twenty', ['Eighteen', 'Nineteen', 'Twenty', 'Eleven'], 'sayi-20');
  e('sy-t14', 'Saymak İngilizcede nedir?', 'Count', ['Count', 'Color', 'Run', 'Sing'], 'sayma-oyunu');
  e('sy-t15', '13-19 arası sayılar hangi son ek ile biter?', '-teen', ['-ty', '-teen', '-th', '-ing'], 'teen-sayilar');
  e('sy-t16', '15 elma İngilizcede nasıl söylenir?', 'Fifteen apples', ['Five apples', 'Fifteen apples', 'Fifty apples', 'Five teen apples'], 'sayi-15');
  e('sy-t17', 'En büyük sayı hangisidir?', 'Twenty', ['Eleven', 'Fifteen', 'Twenty', 'Thirteen'], 'sayi-20');
  e('sy-t18', '12\'den sonra hangi sayı gelir?', 'Thirteen', ['Eleven', 'Twelve', 'Thirteen', 'Twenty'], 'sayi-13');
  e('sy-t19', '17 kaçtır?', 'Seventeen', ['Seven', 'Seventeen', 'Seventy', 'Eleven'], 'sayi-17');
  e('sy-t20', '1\'den 20\'ye kadar sayılara ne denir?', 'Numbers 1 to 20', ['Colors', 'Numbers 1 to 20', 'Animals', 'Food'], 'sayilar-1-20');
  e('sy-t21', '14 ve 16 arasında hangi sayı vardır?', 'Fifteen', ['Thirteen', 'Fourteen', 'Fifteen', 'Seventeen'], 'sayi-15');
  e('sy-t22', '18 sayısı İngilizcede nasıl yazılır?', 'Eighteen', ['Eight', 'Eighteen', 'Eighty', 'Eightth'], 'sayi-18');
  e('sy-t23', 'Hangi sayı "twelve" dir?', '12', ['11', '12', '13', '20'], 'sayi-12');
  e('sy-t24', 'Hangi sayı "fifteen" dir?', '15', ['14', '15', '16', '50'], 'sayi-15');
  e('sy-t25', 'Sınıfta 20 öğrenci var. İngilizcede nasıl söylenir?', 'Twenty students', ['Ten students', 'Twenty students', 'Two students', 'Twelve students'], 'sinif-20-ogrenci');
  return s;
}

export function sayilar1120(karistir) {
  return {
    id: 'sayilar-11-20',
    baslik: 'Numbers 11-20',
    kazanimKodu: KAZANIM,
    anlatim: { ekranlar: [
      { metin: 'Sınıfta sayıları öğreniyorlardı. "Eleven, twelve, thirteen!" diye saydılar. 11\'den 20\'ye kadar her sayının İngilizce adı vardı.', gorsel: anl('sy-anlatim-1') },
      { metin: 'Tahtada sayılar yazılıydı. "Fourteen, fifteen, sixteen!" Berk de saydı. Saymak İngilizcede de eğlenceliydi.', gorsel: anl('sy-anlatim-2') },
      { metin: '17, 18, 19, 20! Son sayıya ulaştılar. "We can count to twenty in English!" dediler. Sayılar her yerdeydi.', gorsel: anl('sy-anlatim-3') },
    ]},
    alistirma: alistirma(),
    test: testSorular(karistir),
  };
}
