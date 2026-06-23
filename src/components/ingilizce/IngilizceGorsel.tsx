import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Path, Rect, Text as SvgText } from 'react-native-svg';
import { GuvenliMetin } from '../GuvenliMetin';
import { GEO } from '../nesneler/colors';
import { colors } from '../../theme/colors';
import type { GorselIngilizce } from '../../types/content';

const RENKLER: Record<string, string> = {
  red: '#E53935',
  blue: '#1E88E5',
  yellow: '#FDD835',
  green: '#43A047',
  orange: '#FB8C00',
  pink: '#EC407A',
  purple: '#8E24AA',
  black: '#212121',
  white: '#FAFAFA',
  brown: '#6D4C41',
};

const SAYI_ING: Record<string, string> = {
  '1': 'One',
  '2': 'Two',
  '3': 'Three',
  '4': 'Four',
  '5': 'Five',
  '6': 'Six',
  '7': 'Seven',
  '8': 'Eight',
  '9': 'Nine',
  '10': 'Ten',
};

const NESNE: Record<string, { emoji: string; etiket: string; ing?: string; renk?: string }> = {
  'kirmizi-elma': { emoji: '🍎', etiket: 'Elma', ing: 'Red', renk: 'red' },
  'mavi-gokyuzu': { emoji: '🌤️', etiket: 'Gökyüzü', ing: 'Blue', renk: 'blue' },
  'sari-gunes': { emoji: '☀️', etiket: 'Güneş', ing: 'Yellow', renk: 'yellow' },
  'yesil-yaprak': { emoji: '🍃', etiket: 'Yaprak', ing: 'Green', renk: 'green' },
  'turuncu-portakal': { emoji: '🍊', etiket: 'Portakal', ing: 'Orange', renk: 'orange' },
  'pembe-pamuk-seker': { emoji: '🍬', etiket: 'Pamuk Şeker', ing: 'Pink', renk: 'pink' },
  'mor-uzum': { emoji: '🍇', etiket: 'Üzüm', ing: 'Purple', renk: 'purple' },
  'siyah-kedi': { emoji: '🐱', etiket: 'Kedi', ing: 'Black', renk: 'black' },
  'beyaz-kar': { emoji: '❄️', etiket: 'Kar', ing: 'White', renk: 'white' },
  'kahverengi-ayi': { emoji: '🐻', etiket: 'Ayı', ing: 'Brown', renk: 'brown' },
  'boya-kalemleri': { emoji: '🖍️', etiket: 'Boya Kalemleri', ing: 'Colors' },
  'kirmizi-gul': { emoji: '🌹', etiket: 'Gül', ing: 'Red', renk: 'red' },
  'sari-limon': { emoji: '🍋', etiket: 'Limon', ing: 'Yellow', renk: 'yellow' },
  'mavi-deniz': { emoji: '🌊', etiket: 'Deniz', ing: 'Blue', renk: 'blue' },
  'alfabe-tablosu': { emoji: '🔤', etiket: 'Alphabet', ing: 'Alphabet' },
  'pembe-cicek': { emoji: '🌸', etiket: 'Çiçek', ing: 'Pink', renk: 'pink' },
  'yesil-kurbaga': { emoji: '🐸', etiket: 'Kurbağa', ing: 'Green', renk: 'green' },
  'siyah-sapka': { emoji: '🎩', etiket: 'Şapka', ing: 'Black', renk: 'black' },
  'beyaz-bulut': { emoji: '☁️', etiket: 'Bulut', ing: 'White', renk: 'white' },
  'mor-balon': { emoji: '🎈', etiket: 'Balon', ing: 'Purple', renk: 'purple' },
  'turuncu-top': { emoji: '🟠', etiket: 'Top', ing: 'Orange', renk: 'orange' },
  'kahverengi-agac': { emoji: '🌳', etiket: 'Ağaç', ing: 'Brown', renk: 'brown' },
  'yesil-orman': { emoji: '🌲', etiket: 'Orman', ing: 'Green', renk: 'green' },
  'turuncu-basketbol': { emoji: '🏀', etiket: 'Basketbol', ing: 'Orange', renk: 'orange' },
  'pembe-ucurtma': { emoji: '🪁', etiket: 'Uçurtma', ing: 'Pink', renk: 'pink' },
  'beyaz-tavsan': { emoji: '🐰', etiket: 'Tavşan', ing: 'White', renk: 'white' },
  'mor-uzum-salkimi': { emoji: '🍇', etiket: 'Üzüm', ing: 'Purple', renk: 'purple' },
  'kahverengi-cikolata': { emoji: '🍫', etiket: 'Çikolata', ing: 'Brown', renk: 'brown' },
  'alfabe-kupleri': { emoji: '🧱', etiket: 'ABC', ing: 'A' },
  'renkli-boya-kutusu': { emoji: '🎨', etiket: 'Boya Kutusu', ing: 'Colors' },
  'abc-harfleri': { emoji: '🔤', etiket: 'A B C', ing: 'Bi' },
  'yesil-kirmizi-elma': { emoji: '🍎', etiket: 'Elmalar', ing: 'Green & Red' },
  'mavi-araba': { emoji: '🚗', etiket: 'Araba', ing: 'Blue car', renk: 'blue' },
  'sari-civciv': { emoji: '🐤', etiket: 'Civciv', ing: 'Yellow', renk: 'yellow' },
  'piyano-tuslari': { emoji: '🎹', etiket: 'Piyano', ing: 'Black & White' },
  'portakal-resmi': { emoji: '🍊', etiket: 'Portakal', ing: 'Orange', renk: 'orange' },
  'renk-paleti': { emoji: '🎨', etiket: 'Renk Paleti', ing: 'Colors' },
  'kahverengi-at': { emoji: '🐴', etiket: 'At', ing: 'Brown', renk: 'brown' },
  'ingilizce-tahta': { emoji: '📋', etiket: 'Tahta', ing: 'Ey, Bi, Si' },
  'mor-menekse': { emoji: '💜', etiket: 'Menekşe', ing: 'Purple', renk: 'purple' },
  'sari-mavi-forma': { emoji: '👕', etiket: 'Forma', ing: 'Yellow & Blue' },
  'mavi-gokyuzu-bulut': { emoji: '🌤️', etiket: 'Gökyüzü', ing: 'Blue & White' },
  gokkusagi: { emoji: '🌈', etiket: 'Gökkuşağı', ing: 'Rainbow' },
  // Tema 1B — Numbers and Classroom
  'sayi-1': { emoji: '1️⃣', etiket: '1', ing: 'One' },
  'sayi-2': { emoji: '2️⃣', etiket: '2', ing: 'Two' },
  'sayi-3': { emoji: '3️⃣', etiket: '3', ing: 'Three' },
  kitap: { emoji: '📖', etiket: 'Kitap', ing: 'Book' },
  canta: { emoji: '🎒', etiket: 'Çanta', ing: 'Bag' },
  'kursun-kalem': { emoji: '✏️', etiket: 'Kurşun Kalem', ing: 'Pencil' },
  'tukenmez-kalem': { emoji: '🖊️', etiket: 'Tükenmez Kalem', ing: 'Pen' },
  desk: { emoji: '🪑', etiket: 'Sıra', ing: 'Desk' },
  chair: { emoji: '💺', etiket: 'Sandalye', ing: 'Chair' },
  board: { emoji: '📋', etiket: 'Tahta', ing: 'Board' },
  classroom: { emoji: '🏫', etiket: 'Sınıf', ing: 'Classroom' },
  silgi: { emoji: '🧽', etiket: 'Silgi', ing: 'Eraser' },
  kalemlik: { emoji: '📦', etiket: 'Kalemlik', ing: 'Pencil case' },
  'iki-kitap': { emoji: '📚', etiket: '2 Kitap', ing: 'Two books' },
  'bes-kalem': { emoji: '✏️', etiket: '5 Kalem', ing: 'Five pencils' },
  kapi: { emoji: '🚪', etiket: 'Kapı', ing: 'Door' },
  pencere: { emoji: '🪟', etiket: 'Pencere', ing: 'Window' },
  ogretmen: { emoji: '👩‍🏫', etiket: 'Öğretmen', ing: 'Teacher' },
  'balon-5': { emoji: '🎈', etiket: '5', ing: 'Five' },
  'tisort-10': { emoji: '🔟', etiket: '10', ing: 'Ten' },
  'dort-elma': { emoji: '🍎', etiket: '4 Elma', ing: 'Four' },
  'pasta-7': { emoji: '🎂', etiket: '7', ing: 'Seven' },
  'uc-kitap': { emoji: '📚', etiket: '3 Kitap', ing: 'Three books' },
  'ogretmen-masa': { emoji: '👩‍🏫', etiket: 'Öğretmen', ing: 'Teacher' },
  'alti-top': { emoji: '⚽', etiket: '6', ing: 'Six' },
  'sinif-pencere': { emoji: '🪟', etiket: 'Pencere', ing: 'Window' },
  'acik-kapi': { emoji: '🚪', etiket: 'Kapı', ing: 'Door' },
  'iki-pen': { emoji: '🖊️', etiket: '2 Kalem', ing: 'Two pens' },
  'sinif-ortam': { emoji: '🏫', etiket: 'Sınıf', ing: 'Classroom' },
  'bes-silgi': { emoji: '🧽', etiket: '5 Silgi', ing: 'Five erasers' },
  'one-two': { emoji: '1️⃣2️⃣', etiket: 'One, Two', ing: 'One, Two' },
  'on-kalem': { emoji: '✏️', etiket: '10 Kalem', ing: 'Ten pencils' },
  // Tema 1C — Greetings and Family
  'el-sallayan': { emoji: '👋', etiket: 'Hello', ing: 'Hello' },
  'merhaba-cocuklar': { emoji: '🧒', etiket: 'Merhaba', ing: 'Hi' },
  'sabah-gunes': { emoji: '🌅', etiket: 'Sabah', ing: 'Good morning' },
  'ogle-vakti': { emoji: '☀️', etiket: 'Öğle', ing: 'Good afternoon' },
  'aile-foto': { emoji: '👨‍👩‍👧‍👦', etiket: 'Aile', ing: 'Family' },
  'anne-resmi': { emoji: '👩', etiket: 'Anne', ing: 'Mother' },
  'baba-resmi': { emoji: '👨', etiket: 'Baba', ing: 'Father' },
  'kiz-kardes': { emoji: '👧', etiket: 'Kız Kardeş', ing: 'Sister' },
  'erkek-kardes': { emoji: '👦', etiket: 'Erkek Kardeş', ing: 'Brother' },
  'gece-uyku': { emoji: '🌙', etiket: 'Gece', ing: 'Good night' },
  'aksam-yemegi': { emoji: '🍽️', etiket: 'Akşam', ing: 'Good evening' },
  vedalasan: { emoji: '👋', etiket: 'Veda', ing: 'Goodbye' },
  'bye-bye': { emoji: '✌️', etiket: 'Hoşça kal', ing: 'Bye bye' },
  'park-ayrilma': { emoji: '🏞️', etiket: 'Görüşürüz', ing: 'See you' },
  buyukanne: { emoji: '👵', etiket: 'Nine', ing: 'Grandmother' },
  buyukbaba: { emoji: '👴', etiket: 'Dede', ing: 'Grandfather' },
  'gunduz-gunes': { emoji: '☀️', etiket: 'Gündüz', ing: 'Good morning' },
  'neseli-anne': { emoji: '😊', etiket: 'Anne', ing: 'Mother' },
  'bebek-kardes': { emoji: '👶', etiket: 'Bebek', ing: 'Baby' },
  'baba-ogul': { emoji: '👨‍👦', etiket: 'Baba ve Oğul', ing: 'Father and son' },
  kardesler: { emoji: '👧👦', etiket: 'Kardeşler', ing: 'Sister and brother' },
  'aile-tablosu': { emoji: '🖼️', etiket: 'Ailem', ing: 'My family' },
  'merhaba-kiz': { emoji: '👧', etiket: 'Selam', ing: 'Hi' },
  'aksam-gunes': { emoji: '🌇', etiket: 'Akşam', ing: 'Good evening' },
  'gece-ay': { emoji: '🌙', etiket: 'Gece', ing: 'Good night' },
  'okul-karsilasma': { emoji: '🏫', etiket: 'Okul', ing: 'Hello / Good morning' },
  'gunes-dogusu': { emoji: '🌅', etiket: 'Günaydın', ing: 'Good morning' },
  'anne-portre': { emoji: '👩', etiket: 'Anne', ing: 'Mother' },
  'baba-portre': { emoji: '👨', etiket: 'Baba', ing: 'Father' },
  'kiz-kardes-abla': { emoji: '👧', etiket: 'Kız Kardeş', ing: 'Sister' },
  'erkek-kardes-ali': { emoji: '👦', etiket: 'Erkek Kardeş', ing: 'Brother' },
  'aile-foto-test': { emoji: '👨‍👩‍👧', etiket: 'Aile', ing: 'Family' },
  'okul-ayrilma': { emoji: '🎒', etiket: 'Hoşça kal', ing: 'Goodbye' },
  'gece-yatak': { emoji: '🛏️', etiket: 'İyi geceler', ing: 'Good night' },
  'hi-selam': { emoji: '🙋', etiket: 'Selam', ing: 'Hi' },
  'ogleden-sonra-park': { emoji: '🌤️', etiket: 'Öğleden sonra', ing: 'Good afternoon' },
  gorusuruz: { emoji: '👋', etiket: 'Görüşürüz', ing: 'See you' },
  'buyukanne-resim': { emoji: '👵', etiket: 'Nine', ing: 'Grandmother' },
  'buyukbaba-resim': { emoji: '👴', etiket: 'Dede', ing: 'Grandfather' },
  'neseli-bebek': { emoji: '👶', etiket: 'Bebek', ing: 'Baby' },
  'aksam-yemegi-aile': { emoji: '🍽️', etiket: 'Akşam', ing: 'Good evening' },
  'aile-uyeleri': { emoji: '👨‍👩‍👧‍👦', etiket: 'Ailem', ing: 'My family' },
  'kardes-oyun': { emoji: '👧👦', etiket: 'Kardeşler', ing: 'Brother and Sister' },
  'el-sallayan-kiz': { emoji: '👋', etiket: 'Bye bye', ing: 'Bye bye' },
  'anne-baba': { emoji: '👩‍❤️‍👨', etiket: 'Anne ve Baba', ing: 'Mother and Father' },
  'gunaydin-cocuk': { emoji: '🌅', etiket: 'Günaydın', ing: 'Good morning' },
  'yeni-ogrenci': { emoji: '🧑‍🎓', etiket: 'Merhaba', ing: 'Hello' },
  'sarilan-aile': { emoji: '🤗', etiket: 'Aile', ing: 'I love my family' },
  'uyku-kardes': { emoji: '😴', etiket: 'İyi geceler', ing: 'Good night' },
  'otobus-cocuk': { emoji: '🚌', etiket: 'Hoşça kal', ing: 'Goodbye' },
  // Tema 4 — Short Stories
  'hikaye-kitabi': { emoji: '📖', etiket: 'Hikaye', ing: 'Story' },
  'kirmizi-elma-kucuk': { emoji: '🍎', etiket: 'Elma', ing: 'The Little Red Apple' },
  'kitap-okuyan': { emoji: '📚', etiket: 'Okuma', ing: 'Read a story' },
  'cesur-kopek': { emoji: '🐕', etiket: 'Köpek', ing: 'The Brave Dog' },
  'mutlu-kus': { emoji: '🐦', etiket: 'Kuş', ing: 'The Happy Bird' },
  'agac-resmi': { emoji: '🌳', etiket: 'Ağaç', ing: 'Green Tree' },
  'ciftlik-kopegi': { emoji: '🐶', etiket: 'Köpek', ing: 'Brave Dog' },
  'gunesli-gokyuz': { emoji: '☀️', etiket: 'Sabah', ing: 'Good morning' },
  'sarki-kusu': { emoji: '🎵', etiket: 'Kuş', ing: 'Sing a song' },
  kitaplik: { emoji: '📚', etiket: 'Kitaplık', ing: 'Short Stories' },
  'koyun-surusu': { emoji: '🐑', etiket: 'Koyun', ing: 'Sheep' },
  'ziplayan-kopek': { emoji: '🐕', etiket: 'Köpek', ing: 'Jump' },
  'ucan-kuslar': { emoji: '🕊️', etiket: 'Kuşlar', ing: 'Fly' },
  'uyuyan-kopek': { emoji: '😴', etiket: 'Köpek', ing: 'Sleep' },
  'gulen-cocuk': { emoji: '😊', etiket: 'Mutlu', ing: 'Happy' },
  'orman-hayvanlari': { emoji: '🦊', etiket: 'Hayvanlar', ing: 'Animals' },
  'renkli-sayfa': { emoji: '🎨', etiket: 'Sayfa', ing: 'Story' },
  'sari-mavi-tuy': { emoji: '🐦', etiket: 'Kuş', ing: 'Yellow & Blue' },
  'elma-agaci': { emoji: '🍎', etiket: 'Elma', ing: 'Apple' },
  'kosan-kopek': { emoji: '🐕', etiket: 'Köpek', ing: 'Run' },
  'acik-pencere': { emoji: '🪟', etiket: 'Pencere', ing: 'Hello' },
  'hikaye-dinleyen': { emoji: '👂', etiket: 'Hikaye', ing: 'Short' },
  'kirmizi-elma-sepet': { emoji: '🍎', etiket: 'Elma', ing: 'Red apple' },
  'kopek-yavrusu': { emoji: '🐶', etiket: 'Köpek', ing: 'Little' },
  'kutuphane-sessiz': { emoji: '🤫', etiket: 'Kütüphane', ing: 'Read' },
  'hikaye-kitabi-acik': { emoji: '📖', etiket: 'Hikaye', ing: 'Story' },
  'kitap-okuyan-iki': { emoji: '👧👦', etiket: 'Okuma', ing: 'Read a story' },
  'kisa-masal': { emoji: '📕', etiket: 'Kısa', ing: 'Short' },
  'gulen-elma': { emoji: '🍎', etiket: 'Elma', ing: 'Little' },
  'gunes-dogusu-kus': { emoji: '🌅', etiket: 'Günaydın', ing: 'Good morning' },
  'hikaye-kapak': { emoji: '📘', etiket: 'Hikaye', ing: 'Story' },
  'mavi-kus': { emoji: '🐦', etiket: 'Kuş', ing: 'Blue bird' },
  'mutlu-cocuk-kus': { emoji: '😊', etiket: 'Mutlu', ing: 'Happy' },
  'okuyan-kiz': { emoji: '👧', etiket: 'Okuma', ing: 'Read' },
  'hayvan-korosu': { emoji: '🎶', etiket: 'Hayvanlar', ing: 'Sing' },
  'kitap-okuyan-mutlu': { emoji: '📖', etiket: 'Kitap', ing: 'Read' },
  // Tema 4B — Simple Dialogues
  'konusma-balonlari': { emoji: '💬', etiket: 'Diyalog', ing: 'Dialogue' },
  'el-sallayan-cocuk': { emoji: '👋', etiket: 'Merhaba', ing: 'How are you?' },
  'tesekkur-eden': { emoji: '🙏', etiket: 'Teşekkür', ing: 'Thank you' },
  'rica-eden': { emoji: '🙇', etiket: 'Rica', ing: 'Please' },
  'top-oynayan-ikili': { emoji: '⚽', etiket: 'Oyun', ing: "Let's play!" },
  'elma-uzatan-bakkal': { emoji: '🍎', etiket: 'Bakkal', ing: 'Here you are!' },
  'kapi-calan-ogrenci': { emoji: '🚪', etiket: 'Kapı', ing: 'May I come in?' },
  'ayaga-kalkan-sinif': { emoji: '🧍', etiket: 'Ayağa kalk', ing: 'Stand up!' },
  'oturan-ogrenci': { emoji: '🪑', etiket: 'Otur', ing: 'Sit down!' },
  'hediye-alan-kiz': { emoji: '🎁', etiket: 'Rica ederim', ing: 'You are welcome' },
  'neseli-iki-arkadas': { emoji: '😄', etiket: 'Arkadaşlar', ing: 'Dialogue' },
  'hello-diyen': { emoji: '👋', etiket: 'Merhaba', ing: 'Hello' },
  'goodbye-yazisi': { emoji: '👋', etiket: 'Hoşça kal', ing: 'Goodbye' },
  'uzgun-yuz': { emoji: '😢', etiket: 'Üzgün', ing: 'Sad' },
  'please-kelimesi': { emoji: '🙏', etiket: 'Lütfen', ing: 'Please' },
  'top-firlatilan': { emoji: '🏀', etiket: 'Top', ing: 'Catch the ball!' },
  'kapi-resmi': { emoji: '🚪', etiket: 'Kapı', ing: 'May I come in?' },
  'kirmizi-elma-diyalog': { emoji: '🍎', etiket: 'Elma', ing: 'Can I have an apple?' },
  'iki-konusan-cocuk': { emoji: '🗣️', etiket: 'Konuşma', ing: 'Dialogue' },
  'otur-kalk-oklar': { emoji: '↕️', etiket: 'Otur / Kalk', ing: 'Sit / Stand' },
  'gulumsen-ogretmen': { emoji: '👩‍🏫', etiket: 'Öğretmen', ing: 'Yes, you may' },
  'iyiyim-isareti': { emoji: '👍', etiket: 'İyiyim', ing: 'I am fine' },
  'goz-kirpan': { emoji: '😉', etiket: 'Gülümse', ing: 'Dialogue' },
  'konusma-balonu': { emoji: '💭', etiket: 'Diyalog', ing: 'Simple Dialogues' },
  'karsilasan-arkadaslar': { emoji: '👧👦', etiket: 'Park', ing: 'How are you?' },
  'soru-isareti': { emoji: '❓', etiket: 'Soru', ing: 'How are you?' },
  'rica-eden-kiz': { emoji: '😊', etiket: 'Rica ederim', ing: 'You are welcome' },
  'lutfen-diyen': { emoji: '🙏', etiket: 'Lütfen', ing: 'Please' },
  'bakkal-elma': { emoji: '🏪', etiket: 'Bakkal', ing: 'Please' },
  'esya-uzatan': { emoji: '🤲', etiket: 'Buyurun', ing: 'Here you are!' },
  'kapi-calan': { emoji: '🚪', etiket: 'Kapı', ing: 'May I come in?' },
  'sandalyeye-oturan': { emoji: '🪑', etiket: 'Otur', ing: 'Sit down' },
  'gulumseyen-yuz': { emoji: '😊', etiket: 'Gülümse', ing: 'Smile' },
  'okul-kapisindan-cikan': { emoji: '🏫', etiket: 'Veda', ing: 'Goodbye' },
  'konusma-balonu-dialogue': { emoji: '💬', etiket: 'Diyalog', ing: 'Dialogue' },
  'and-you-sorusu': { emoji: '❓', etiket: 'Ya sen?', ing: 'And you?' },
  'goz-temasi': { emoji: '👀', etiket: 'Göz teması', ing: 'Dialogue' },
  'neseli-arkadas': { emoji: '🤝', etiket: 'Nazik', ing: 'Please & Thank you' },
  'oyuncak-ayi': { emoji: '🧸', etiket: 'Oyuncak', ing: 'Can I have a toy?' },
  'izin-veren-ogretmen': { emoji: '👩‍🏫', etiket: 'İzin', ing: 'Yes, you may' },
  'yukari-ok': { emoji: '⬆️', etiket: 'Yukarı', ing: 'Up' },
  'asagi-ok': { emoji: '⬇️', etiket: 'Aşağı', ing: 'Down' },
  'hello-yazisi': { emoji: '👋', etiket: 'Merhaba', ing: 'Hello / Hi' },
  'ogretmen-masasi-diyalog': { emoji: '📋', etiket: 'Sınıf', ing: 'Simple Dialogues' },
  'mutlu-konusan': { emoji: '😊', etiket: 'Konuşma', ing: 'Simple Dialogues' },
  // Tema 4C — Songs
  'muzik-notalari': { emoji: '🎵', etiket: 'Notalar', ing: 'Song' },
  'sarki-soyleyen-cocuklar': { emoji: '🎤', etiket: 'Şarkı', ing: 'Sing a song' },
  'alfabe-bloklari': { emoji: '🧱', etiket: 'Alfabe', ing: 'Alphabet Song' },
  'z-harfi': { emoji: '🔤', etiket: 'Z', ing: 'Alphabet' },
  'sayi-1-10': { emoji: '🔢', etiket: '1–10', ing: 'Numbers Song' },
  'ziplayan-cocuk': { emoji: '🤸', etiket: 'Zıplama', ing: 'Jump' },
  'ellerini-cirpan': { emoji: '👏', etiket: 'Eller', ing: 'Clap your hands' },
  'on-blok': { emoji: '🔟', etiket: '10', ing: 'Ten' },
  'kirmizi-sari-boya': { emoji: '🖍️', etiket: 'Boya', ing: 'Red & Yellow' },
  'pembe-yesil-elma': { emoji: '🍎', etiket: 'Renkler', ing: 'Pink & Green' },
  'mor-turuncu': { emoji: '🎨', etiket: 'Renkler', ing: 'Purple & Orange' },
  'kulaklik-dinleyen': { emoji: '🎧', etiket: 'Dinleme', ing: 'Songs' },
  'harf-corbasi': { emoji: '🔤', etiket: 'Alfabe', ing: 'Alphabet' },
  'koro-sarki': { emoji: '👥', etiket: 'Koro', ing: 'Sing a song' },
  'gulen-harfler': { emoji: '😊', etiket: 'Harfler', ing: 'Alphabet' },
  'muzik-dinleyen': { emoji: '🎧', etiket: 'Müzik', ing: 'Songs' },
  'dans-eden-arkadas': { emoji: '💃', etiket: 'Dans', ing: 'Dance' },
  'mutlu-cocuk-sarki': { emoji: '😄', etiket: 'Neşe', ing: 'Songs' },
  'muzik-notasi-sembolu': { emoji: '♪', etiket: 'Nota', ing: 'Song' },
  'mikrofon-sarki': { emoji: '🎤', etiket: 'Mikrofon', ing: 'Sing a song' },
  'abc-tablosu': { emoji: '🔤', etiket: 'ABC', ing: 'Alphabet Song' },
  'sarki-soyleyen': { emoji: '🎶', etiket: 'Şarkı', ing: 'Sing a song' },
  'rakam-tahta': { emoji: '🔢', etiket: 'Sayılar', ing: 'Numbers Song' },
  'bes-balon': { emoji: '🎈', etiket: '5', ing: 'Five' },
  ziplayan: { emoji: '🤸', etiket: 'Zıplama', ing: 'Jump' },
  'eller-cirpan': { emoji: '👏', etiket: 'Eller', ing: 'Clap your hands' },
  'gokkusagi-resmi': { emoji: '🌈', etiket: 'Gökkuşağı', ing: 'Colors Song' },
  'kirmizi-sari-kalem': { emoji: '✏️', etiket: 'Kalemler', ing: 'Red & Yellow' },
  'pembe-yesil-balon': { emoji: '🎈', etiket: 'Balonlar', ing: 'Pink & Green' },
  'mavi-deniz-gokyuzu': { emoji: '🌊', etiket: 'Mavi', ing: 'Blue', renk: 'blue' },
  'kelime-nota': { emoji: '🎵', etiket: 'Kelimeler', ing: 'Words' },
  'mor-cicek': { emoji: '💜', etiket: 'Çiçek', ing: 'Purple', renk: 'purple' },
  'sinif-sarki': { emoji: '🏫', etiket: 'Sınıf', ing: 'Sing a song' },
  'nota-alfabe': { emoji: '🎶', etiket: 'Alfabe', ing: 'Alphabet' },
  'z-harfi-kup': { emoji: '🧊', etiket: 'Z', ing: 'Alphabet' },
  'dans-eden': { emoji: '💃', etiket: 'Dans', ing: 'Dance' },
  'muzik-calar': { emoji: '📻', etiket: 'Müzik', ing: 'Songs' },
  'sayilar-1-5': { emoji: '1️⃣2️⃣3️⃣4️⃣5️⃣', etiket: '1–5', ing: 'One to Five' },
  'boya-paleti': { emoji: '🎨', etiket: 'Palet', ing: 'Colors Song' },
  'mutlu-ingilizce-sinif': { emoji: '😊', etiket: 'Sınıf', ing: 'Songs' },
  // Tema 4 — Colors & Feelings
  'mutlu-yuz': { emoji: '😊', etiket: 'Mutlu', ing: 'Happy' },
  'mutlu-cocuk': { emoji: '😄', etiket: 'Mutlu Çocuk', ing: 'Happy' },
  'kizgin-yuz': { emoji: '😠', etiket: 'Kızgın', ing: 'Angry' },
  'kizgin-cocuk': { emoji: '😤', etiket: 'Kızgın Çocuk', ing: 'Angry' },
  'korkmus-yuz': { emoji: '😨', etiket: 'Korkmuş', ing: 'Scared' },
  'korkmus-cocuk': { emoji: '😱', etiket: 'Korkmuş Çocuk', ing: 'Scared' },
  'yorgun-cocuk': { emoji: '😴', etiket: 'Yorgun', ing: 'Tired' },
  'sasirmis-yuz': { emoji: '😲', etiket: 'Şaşırmış', ing: 'Surprised' },
  'sasirmis-cocuk': { emoji: '😮', etiket: 'Şaşırmış Çocuk', ing: 'Surprised' },
  'heyecanli-cocuk': { emoji: '🤩', etiket: 'Heyecanlı', ing: 'Excited' },
  'duygu-kartlari': { emoji: '🎭', etiket: 'Duygu Kartları', ing: 'Feelings' },
  'ac-cocuk': { emoji: '🍽️', etiket: 'Aç', ing: 'Hungry' },
  'susuz-cocuk': { emoji: '🥤', etiket: 'Susuz', ing: 'Thirsty' },
  'sikilmis-cocuk': { emoji: '😑', etiket: 'Sıkılmış', ing: 'Bored' },
  'aglayan-cocuk': { emoji: '😭', etiket: 'Ağla', ing: 'Cry' },
  'sevincli-cocuk': { emoji: '🥳', etiket: 'Sevinç', ing: 'Joy' },
  'nasilsin-sorusu': { emoji: '❓', etiket: 'Nasılsın?', ing: 'How are you?' },
  'parkta-oynayan': { emoji: '🛝', etiket: 'Park', ing: 'Happy' },
  // Tema 4 — Clothes & Seasons
  shirt: { emoji: '👕', etiket: 'Gömlek', ing: 'Shirt' },
  pants: { emoji: '👖', etiket: 'Pantolon', ing: 'Pants' },
  dress: { emoji: '👗', etiket: 'Elbise', ing: 'Dress' },
  skirt: { emoji: '👗', etiket: 'Etek', ing: 'Skirt' },
  shoes: { emoji: '👟', etiket: 'Ayakkabı', ing: 'Shoes' },
  socks: { emoji: '🧦', etiket: 'Çorap', ing: 'Socks' },
  hat: { emoji: '🧢', etiket: 'Şapka', ing: 'Hat' },
  coat: { emoji: '🧥', etiket: 'Kaban', ing: 'Coat' },
  scarf: { emoji: '🧣', etiket: 'Atkı', ing: 'Scarf' },
  gloves: { emoji: '🧤', etiket: 'Eldiven', ing: 'Gloves' },
  't-shirt': { emoji: '👕', etiket: 'Tişört', ing: 'T-shirt' },
  jacket: { emoji: '🧥', etiket: 'Ceket', ing: 'Jacket' },
  boots: { emoji: '👢', etiket: 'Bot', ing: 'Boots' },
  sweater: { emoji: '🧶', etiket: 'Kazak', ing: 'Sweater' },
  umbrella: { emoji: '☂️', etiket: 'Şemsiye', ing: 'Umbrella' },
  'kis-aksesuarlari': { emoji: '🧣', etiket: 'Kış Aksesuarları', ing: 'Winter clothes' },
  'spring-flowers': { emoji: '🌸', etiket: 'İlkbahar', ing: 'Spring' },
  'summer-sun': { emoji: '☀️', etiket: 'Yaz', ing: 'Summer' },
  'autumn-leaves': { emoji: '🍂', etiket: 'Sonbahar', ing: 'Autumn' },
  'winter-snow': { emoji: '❄️', etiket: 'Kış', ing: 'Winter' },
  'spring-jacket': { emoji: '🧥', etiket: 'İlkbahar Ceket', ing: 'Spring jacket' },
  'summer-t-shirt': { emoji: '👕', etiket: 'Yaz Tişört', ing: 'Summer t-shirt' },
  'autumn-scarf': { emoji: '🧣', etiket: 'Sonbahar Atkı', ing: 'Autumn scarf' },
  'winter-gloves': { emoji: '🧤', etiket: 'Kış Eldiven', ing: 'Winter gloves' },
  'winter-boots': { emoji: '👢', etiket: 'Kış Bot', ing: 'Winter boots' },
  'rainy-umbrella': { emoji: '☂️', etiket: 'Yağmurlu Gün', ing: 'Rainy day' },
  'winter-coat': { emoji: '🧥', etiket: 'Kış Kaban', ing: 'Winter coat' },
  'summer-sweater': { emoji: '🧶', etiket: 'Yaz Kazak', ing: 'Summer sweater' },
  'autumn-rain': { emoji: '🌧️', etiket: 'Sonbahar Yağmur', ing: 'Autumn rain' },
  'spring-park-play': { emoji: '🌳', etiket: 'Park Oyunu', ing: 'Play in the park' },
  'summer-swim': { emoji: '🏊', etiket: 'Yüzme', ing: 'Swim' },
  'winter-snowman': { emoji: '⛄', etiket: 'Kardan Adam', ing: 'Make a snowman' },
  'summer-hat': { emoji: '🧢', etiket: 'Yaz Şapkası', ing: 'Summer hat' },
  'winter-outfit': { emoji: '🧥', etiket: 'Kış Kombini', ing: 'Winter outfit' },
  'season-wheel': { emoji: '🔄', etiket: 'Mevsimler', ing: 'Seasons' },
  'season-clothes-match': { emoji: '👕', etiket: 'Mevsim-Giysi', ing: 'Season match' },
  // Tema 3 — Days, Weather and Actions
  '12-aylik-takvim': { emoji: '🗓️', etiket: '12 Aylik Takvim', ing: 'Months' },
  'acik-kitap': { emoji: '📖', etiket: 'Acik Kitap', ing: 'Read' },
  'agustos-sicak': { emoji: '🌡️', etiket: 'Agustos Sicak', ing: 'August' },
  'aralik-kar': { emoji: '⛄', etiket: 'Aralik Kar', ing: 'December' },
  'ates-basinda': { emoji: '🥶', etiket: 'Ates Basinda', ing: 'Cold' },
  'bale-yapan': { emoji: '💃', etiket: 'Bale Yapan', ing: 'Dance' },
  'balik-resmi': { emoji: '🏊', etiket: 'Balik Resmi', ing: 'Swim' },
  'bardak-su': { emoji: '🥤', etiket: 'Bardak Su', ing: 'Drink' },
  'bardaktan-su': { emoji: '🥤', etiket: 'Bardaktan Su', ing: 'Drink' },
  'bulut-resmi': { emoji: '☁️', etiket: 'Bulut Resmi', ing: 'Cloud' },
  'bulut-resmi-test': { emoji: '☁️', etiket: 'Bulut Resmi Test', ing: 'Cloud' },
  'bulutlu-gokyuzu': { emoji: '☁️', etiket: 'Bulutlu Gokyuzu', ing: 'Cloudy' },
  'carsamba-yapragi': { emoji: '🌿', etiket: 'Carsamba Yapragi', ing: 'Wednesday' },
  'cuma-okul': { emoji: '🏫', etiket: 'Cuma Okul', ing: 'Friday' },
  'cumartesi-park': { emoji: '🌳', etiket: 'Cumartesi Park', ing: 'Saturday' },
  'defter-kalem': { emoji: '✏️', etiket: 'Defter Kalem', ing: 'Write' },
  'deftere-yazan': { emoji: '✏️', etiket: 'Deftere Yazan', ing: 'Write' },
  'denizde-yuzen': { emoji: '🏊', etiket: 'Denizde Yuzen', ing: 'Swim' },
  'ekim-ruzgar': { emoji: '🍁', etiket: 'Ekim Ruzgar', ing: 'October' },
  'elma-yiyen': { emoji: '🍽️', etiket: 'Elma Yiyen', ing: 'Eat' },
  'ev-resmi-cizen': { emoji: '🎨', etiket: 'Ev Resmi Cizen', ing: 'Draw' },
  'eylemler-sembolleri': { emoji: '🇬🇧', etiket: 'Eylemler Sembolleri', ing: 'Actions' },
  'eylul-yaprak': { emoji: '🍂', etiket: 'Eylul Yaprak', ing: 'September' },
  'futbol-topu': { emoji: '⚽', etiket: 'Futbol Topu', ing: 'Play' },
  'gece-manzarasi': { emoji: '😴', etiket: 'Gece Manzarasi', ing: 'Sleep' },
  'gokyuzu-bulutlar': { emoji: '☁️', etiket: 'Gokyuzu Bulutlar', ing: 'Cloudy' },
  'gri-bulutlar': { emoji: '☁️', etiket: 'Gri Bulutlar', ing: 'Cloudy' },
  'gunes-bulutlar': { emoji: '☀️', etiket: 'Gunes Bulutlar', ing: 'Weather' },
  'gunes-gozlugu': { emoji: '☀️', etiket: 'Gunes Gozlugu', ing: 'Sunny' },
  'gunes-gozlugu-test': { emoji: '☀️', etiket: 'Gunes Gozlugu Test', ing: 'Sunny' },
  'gunes-resmi': { emoji: '☀️', etiket: 'Gunes Resmi', ing: 'Sun' },
  'gunesli-yagmurlu-semboller': { emoji: '☀️', etiket: 'Gunesli Yagmurlu Semboller', ing: 'Sunny and Rainy' },
  'gunler-panosu': { emoji: '📆', etiket: 'Gunler Panosu', ing: 'Days of the week' },
  'hareketli-karakterler': { emoji: '❄️', etiket: 'Hareketli Karakterler', ing: 'Actions' },
  'hava-durumu-sembolleri': { emoji: '🌤️', etiket: 'Hava Durumu Sembolleri', ing: 'Weather' },
  'hava-durumu-sunucusu': { emoji: '🥤', etiket: 'Hava Durumu Sunucusu', ing: 'Weather' },
  'havaya-ziplayan': { emoji: '🤸', etiket: 'Havaya Ziplayan', ing: 'Jump' },
  'havuz-resmi': { emoji: '🏊', etiket: 'Havuz Resmi', ing: 'Swim' },
  'haziran-karne': { emoji: '🎓', etiket: 'Haziran Karne', ing: 'June' },
  'hizli-kosan-sporcu': { emoji: '🏃', etiket: 'Hizli Kosan Sporcu', ing: 'Run' },
  'ip-atlayan': { emoji: '🤸', etiket: 'Ip Atlayan', ing: 'Jump' },
  'kar-tanesi': { emoji: '❄️', etiket: 'Kar Tanesi', ing: 'Snow' },
  'kar-tanesi-resmi': { emoji: '❄️', etiket: 'Kar Tanesi Resmi', ing: 'Snow' },
  'kardan-adam': { emoji: '❄️', etiket: 'Kardan Adam', ing: 'Snowy' },
  'kardan-adam-kar': { emoji: '❄️', etiket: 'Kardan Adam Kar', ing: 'Snowy' },
  'kartopu-oynayan': { emoji: '❄️', etiket: 'Kartopu Oynayan', ing: 'Snowy' },
  'kartopu-oynayan-iki': { emoji: '❄️', etiket: 'Kartopu Oynayan Iki', ing: 'Snowy' },
  'kasim-yagmur': { emoji: '🌧️', etiket: 'Kasim Yagmur', ing: 'November' },
  'kirmizi-termometre': { emoji: '☀️', etiket: 'Kirmizi Termometre', ing: 'Hot' },
  'kislik-atki': { emoji: '❄️', etiket: 'Kislik Atki', ing: 'Cold' },
  'kitap-okuyan-gozler': { emoji: '📖', etiket: 'Kitap Okuyan Gozler', ing: 'Read' },
  'kitap-okuyan-kiz': { emoji: '📖', etiket: 'Kitap Okuyan Kiz', ing: 'Read' },
  'kosan-bacaklar': { emoji: '🏃', etiket: 'Kosan Bacaklar', ing: 'Run' },
  'kosan-cocuk': { emoji: '🏃', etiket: 'Kosan Cocuk', ing: 'Run' },
  'kosu-bandi': { emoji: '🏃', etiket: 'Kosu Bandi', ing: 'Run' },
  'kosu-havuz': { emoji: '🏃', etiket: 'Kosu Havuz', ing: 'Run / Swim' },
  'mart-cicek': { emoji: '🌸', etiket: 'Mart Cicek', ing: 'March' },
  'mavi-termometre': { emoji: '🇬🇧', etiket: 'Mavi Termometre', ing: 'Cold' },
  'mayis-gunes': { emoji: '☀️', etiket: 'Mayis Gunes', ing: 'May' },
  'mikrofon-tutan': { emoji: '🎤', etiket: 'Mikrofon Tutan', ing: 'Sing' },
  'nisan-yagmur': { emoji: '🌧️', etiket: 'Nisan Yagmur', ing: 'April' },
  'nota-sembolleri': { emoji: '🎤', etiket: 'Nota Sembolleri', ing: 'Sing' },
  'ocak-kar': { emoji: '❄️', etiket: 'Ocak Kar', ing: 'January' },
  'okul-masasi': { emoji: '📖', etiket: 'Okul Masasi', ing: 'Read and Write' },
  'oyuncak-mutlu': { emoji: '⚽', etiket: 'Oyuncak Mutlu', ing: 'Play' },
  'oyuncak-oynayan': { emoji: '⚽', etiket: 'Oyuncak Oynayan', ing: 'Play' },
  'pazar-piknik': { emoji: '🧺', etiket: 'Pazar Piknik', ing: 'Sunday' },
  'pazartesi-okul': { emoji: '🏫', etiket: 'Pazartesi Okul', ing: 'Monday' },
  'pazartesi-takvim': { emoji: '📅', etiket: 'Pazartesi Takvim', ing: 'Monday' },
  'pencereden-bakan': { emoji: '🇬🇧', etiket: 'Pencereden Bakan', ing: 'Weather' },
  'persembe-takvim': { emoji: '📅', etiket: 'Persembe Takvim', ing: 'Thursday' },
  'pirl-pirl-gunes': { emoji: '☀️', etiket: 'Pirl Pirl Gunes', ing: 'Sunny' },
  'pirl-pirl-gunesli-gun': { emoji: '☀️', etiket: 'Pirl Pirl Gunesli Gun', ing: 'Sunny' },
  'plaj-manzarasi': { emoji: '☀️', etiket: 'Plaj Manzarasi', ing: 'Hot' },
  'plaj-resmi': { emoji: '☀️', etiket: 'Plaj Resmi', ing: 'Hot' },
  'resim-cizen': { emoji: '🎨', etiket: 'Resim Cizen', ing: 'Draw' },
  'resim-cizen-eller': { emoji: '🎨', etiket: 'Resim Cizen Eller', ing: 'Draw' },
  'ritim-tutan': { emoji: '💃', etiket: 'Ritim Tutan', ing: 'Dance' },
  'ruzgar-gulu': { emoji: '💨', etiket: 'Ruzgar Gulu', ing: 'Windy' },
  'ruzgar-gulu-donuyor': { emoji: '💨', etiket: 'Ruzgar Gulu Donuyor', ing: 'Windy' },
  'ruzgar-yapraklar': { emoji: '💨', etiket: 'Ruzgar Yapraklar', ing: 'Windy' },
  'saat-resmi': { emoji: '🕐', etiket: 'Saat Resmi', ing: 'Time' },
  'saglikli-yemek': { emoji: '🍽️', etiket: 'Saglikli Yemek', ing: 'Eat' },
  'sali-takvim': { emoji: '📅', etiket: 'Sali Takvim', ing: 'Tuesday' },
  'sapsari-gunes': { emoji: '☀️', etiket: 'Sapsari Gunes', ing: 'Sun' },
  'sarki-soyleyen-agiz': { emoji: '🎤', etiket: 'Sarki Soyleyen Agiz', ing: 'Sing' },
  'semsiye-acan': { emoji: '🌧️', etiket: 'Semsiye Acan', ing: 'Rainy' },
  'semsiye-tutan': { emoji: '🌧️', etiket: 'Semsiye Tutan', ing: 'Rainy' },
  'sicak-corbasi-soguk-dondurma': { emoji: '☀️', etiket: 'Sicak Corbasi Soguk Dondurma', ing: 'Hot and Cold' },
  'simsek': { emoji: '🌧️', etiket: 'Simsek', ing: 'Rainy' },
  'somine-aile': { emoji: '🥶', etiket: 'Somine Aile', ing: 'Cold' },
  'su-icen': { emoji: '🥤', etiket: 'Su Icen', ing: 'Drink' },
  'subat-takvim': { emoji: '📅', etiket: 'Subat Takvim', ing: 'February' },
  'suda-yuzen': { emoji: '🏊', etiket: 'Suda Yuzen', ing: 'Swim' },
  'takvim-yapragi': { emoji: '📅', etiket: 'Takvim Yapragi', ing: 'Day' },
  'temmuz-deniz': { emoji: '🏖️', etiket: 'Temmuz Deniz', ing: 'July' },
  'terleyen-cocuk': { emoji: '🇬🇧', etiket: 'Terleyen Cocuk', ing: 'Hot' },
  'terleyen-dondurma': { emoji: '🇬🇧', etiket: 'Terleyen Dondurma', ing: 'Hot' },
  'titreyen-cocuk': { emoji: '🥶', etiket: 'Titreyen Cocuk', ing: 'Cold' },
  'titreyen-kalin-giyinen': { emoji: '🥶', etiket: 'Titreyen Kalin Giyinen', ing: 'Cold' },
  'top-oynayan-kopek': { emoji: '⚽', etiket: 'Top Oynayan Kopek', ing: 'Play' },
  'ucan-yapraklar': { emoji: '💨', etiket: 'Ucan Yapraklar', ing: 'Windy' },
  'ucurtma': { emoji: '💨', etiket: 'Ucurtma', ing: 'Windy' },
  'ucurtma-ucuran': { emoji: '💨', etiket: 'Ucurtma Ucuran', ing: 'Windy' },
  'yagmur-bulutu': { emoji: '🌧️', etiket: 'Yagmur Bulutu', ing: 'Rain' },
  'yagmur-damlalari': { emoji: '🌧️', etiket: 'Yagmur Damlalari', ing: 'Rainy' },
  'yagmur-damlasi': { emoji: '🌧️', etiket: 'Yagmur Damlasi', ing: 'Rain' },
  'yagmur-semsiye': { emoji: '🌧️', etiket: 'Yagmur Semsiye', ing: 'Rainy' },
  'yastik': { emoji: '😴', etiket: 'Yastik', ing: 'Sleep' },
  'yatakta-uyuyan': { emoji: '😴', etiket: 'Yatakta Uyuyan', ing: 'Sleep' },
  'yaz-gunesi': { emoji: '☀️', etiket: 'Yaz Gunesi', ing: 'Hot' },
  'yemek-masasi': { emoji: '🍽️', etiket: 'Yemek Masasi', ing: 'Eat / Drink' },
  'yemek-yiyen': { emoji: '🍽️', etiket: 'Yemek Yiyen', ing: 'Eat' },
  'ziplayan-kurbaga': { emoji: '🤸', etiket: 'Ziplayan Kurbaga', ing: 'Jump' },
  default: { emoji: '🇬🇧', etiket: 'English' },
};

function nesneBilgi(anahtar?: string) {
  const k = anahtar ?? 'default';
  return NESNE[k] ?? NESNE.default;
}

function RenkNokta({ renk }: { renk: string }) {
  const fill = RENKLER[renk] ?? GEO.mavi;
  return <Circle cx={12} cy={12} r={10} fill={fill} stroke={colors.kenarlik} strokeWidth={1} />;
}

function NesneKart({ anahtar, vurgulu }: { anahtar: string; vurgulu?: boolean }) {
  const n = nesneBilgi(anahtar);
  const arka = vurgulu ? GEO.turuncu + '44' : colors.kart;
  return (
    <View style={[styles.kart, { backgroundColor: arka, borderColor: vurgulu ? GEO.turuncu : colors.kenarlik }]}>
      {n.renk && (
        <View style={styles.renkNokta}>
          <Svg width={24} height={24}>
            <RenkNokta renk={n.renk} />
          </Svg>
        </View>
      )}
      <GuvenliMetin style={styles.emoji} tamGenislik={false}>
        {n.emoji}
      </GuvenliMetin>
      {n.ing && (
        <GuvenliMetin style={styles.ing} tamGenislik>
          {n.ing}
        </GuvenliMetin>
      )}
      <GuvenliMetin style={styles.etiket} tamGenislik>
        {n.etiket}
      </GuvenliMetin>
    </View>
  );
}

type Props = GorselIngilizce;

function SayiBlok({ sayi }: { sayi: string }) {
  const w = 64;
  const h = 76;
  const ing = SAYI_ING[sayi] ?? sayi;
  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Rect x={4} y={4} width={56} height={56} rx={10} fill={GEO.mavi + '33'} stroke={GEO.mavi} strokeWidth={2} />
        <SvgText x={32} y={42} fontSize={28} fill={GEO.metin} fontWeight="bold" textAnchor="middle">
          {sayi}
        </SvgText>
        <SvgText x={32} y={70} fontSize={11} fill={GEO.mavi} fontWeight="bold" textAnchor="middle">
          {ing}
        </SvgText>
      </Svg>
    </View>
  );
}

function SayilarSahne() {
  return (
    <View style={styles.harfSatir}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
        <SayiBlok key={n} sayi={String(n)} />
      ))}
    </View>
  );
}

function SinifEsyalariSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="board" />
      <NesneKart anahtar="canta" />
      <NesneKart anahtar="kursun-kalem" />
      <NesneKart anahtar="tukenmez-kalem" />
      <NesneKart anahtar="kitap" />
      <NesneKart anahtar="desk" />
      <NesneKart anahtar="chair" />
    </View>
  );
}

function SayiEsyalariSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="uc-kitap" vurgulu />
      <NesneKart anahtar="bes-kalem" vurgulu />
      <NesneKart anahtar="desk" vurgulu />
    </View>
  );
}

function HarfBlok({ harf, renk }: { harf: string; renk?: string }) {
  const fill = renk ? (RENKLER[renk] ?? GEO.mavi) : GEO.mavi;
  const w = 72;
  const h = 80;
  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Rect x={4} y={4} width={64} height={72} rx={10} fill={fill} stroke={colors.kenarlik} strokeWidth={2} />
        <SvgText x={36} y={52} fontSize={36} fill={renk === 'white' || renk === 'yellow' ? GEO.metin : '#FFF'} fontWeight="bold" textAnchor="middle">
          {harf}
        </SvgText>
      </Svg>
    </View>
  );
}

function AlfabeSahne() {
  const harfler = ['A', 'B', 'C', 'D', 'E', 'F'];
  const renkler = ['red', 'blue', 'yellow', 'green', 'orange', 'pink'];
  return (
    <View style={styles.harfSatir}>
      {harfler.map((h, i) => (
        <HarfBlok key={h} harf={h} renk={renkler[i]} />
      ))}
    </View>
  );
}

function BoyaKutusuSahne() {
  const renkList = ['red', 'blue', 'yellow', 'green', 'orange', 'pink', 'purple', 'black', 'white', 'brown'];
  return (
    <View style={styles.renkSatir}>
      {renkList.map((r) => (
        <Svg key={r} width={28} height={28}>
          <RenkNokta renk={r} />
        </Svg>
      ))}
    </View>
  );
}

function RenkliHarfSahne() {
  return (
    <View style={styles.harfSatir}>
      <HarfBlok harf="A" renk="red" />
      <HarfBlok harf="B" renk="blue" />
      <HarfBlok harf="C" renk="yellow" />
    </View>
  );
}

function GokkusagiGorsel() {
  const w = 200;
  const h = 100;
  const cx = w / 2;
  const renkler = ['#E53935', '#FB8C00', '#FDD835', '#43A047', '#1E88E5', '#8E24AA'];
  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        {renkler.map((c, i) => (
          <Path
            key={c}
            d={`M ${20 + i * 4} ${h - 10} A ${80 - i * 8} ${80 - i * 8} 0 0 1 ${w - 20 - i * 4} ${h - 10}`}
            stroke={c}
            strokeWidth={6}
            fill="none"
          />
        ))}
        <SvgText x={cx} y={h - 2} fontSize={11} fill={GEO.metin} textAnchor="middle">
          Rainbow
        </SvgText>
      </Svg>
    </View>
  );
}

function SelamlasmaSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="el-sallayan" vurgulu />
      <NesneKart anahtar="merhaba-cocuklar" />
      <NesneKart anahtar="sabah-gunes" />
    </View>
  );
}

function AileSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="anne-resmi" />
      <NesneKart anahtar="baba-resmi" />
      <NesneKart anahtar="kiz-kardes" />
      <NesneKart anahtar="erkek-kardes" />
    </View>
  );
}

function VedalasmaSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="gece-uyku" />
      <NesneKart anahtar="vedalasan" />
      <NesneKart anahtar="park-ayrilma" />
    </View>
  );
}

function ElmaHikayeSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="kirmizi-elma-kucuk" vurgulu />
      <NesneKart anahtar="agac-resmi" />
    </View>
  );
}

function KopekHikayeSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="cesur-kopek" vurgulu />
      <NesneKart anahtar="koyun-surusu" />
    </View>
  );
}

function KusHikayeSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="mutlu-kus" vurgulu />
      <NesneKart anahtar="ucan-kuslar" />
    </View>
  );
}

function ParkDiyalogSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="karsilasan-arkadaslar" vurgulu />
      <NesneKart anahtar="hello-diyen" />
      <NesneKart anahtar="top-oynayan-ikili" />
    </View>
  );
}

function BakkalDiyalogSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="bakkal-elma" vurgulu />
      <NesneKart anahtar="elma-uzatan-bakkal" />
      <NesneKart anahtar="tesekkur-eden" />
    </View>
  );
}

function SinifDiyalogSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="kapi-calan-ogrenci" vurgulu />
      <NesneKart anahtar="ayaga-kalkan-sinif" />
      <NesneKart anahtar="oturan-ogrenci" />
    </View>
  );
}

function AlfabeSarkiSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="alfabe-bloklari" vurgulu />
      <NesneKart anahtar="abc-tablosu" />
      <NesneKart anahtar="z-harfi" />
    </View>
  );
}

function SayilarSarkiSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="sayi-1-10" vurgulu />
      <NesneKart anahtar="ziplayan-cocuk" />
      <NesneKart anahtar="ellerini-cirpan" />
    </View>
  );
}

function RenklerSarkiSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="gokkusagi-resmi" vurgulu />
      <NesneKart anahtar="kirmizi-sari-boya" />
      <NesneKart anahtar="mavi-deniz-gokyuzu" />
    </View>
  );
}

function GiyimSahne1() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="shirt" vurgulu />
      <NesneKart anahtar="pants" />
      <NesneKart anahtar="dress" />
      <NesneKart anahtar="shoes" />
    </View>
  );
}

function GiyimSahne2() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="coat" vurgulu />
      <NesneKart anahtar="scarf" />
      <NesneKart anahtar="gloves" />
      <NesneKart anahtar="umbrella" />
    </View>
  );
}

function GiyimSahne3() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="jacket" vurgulu />
      <NesneKart anahtar="boots" />
      <NesneKart anahtar="sweater" />
      <NesneKart anahtar="hat" />
    </View>
  );
}

function MevsimSahne1() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="spring-flowers" vurgulu />
      <NesneKart anahtar="summer-sun" />
      <NesneKart anahtar="autumn-leaves" />
      <NesneKart anahtar="winter-snow" />
    </View>
  );
}

function MevsimSahne2() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="winter-coat" vurgulu />
      <NesneKart anahtar="summer-t-shirt" />
      <NesneKart anahtar="autumn-scarf" />
      <NesneKart anahtar="rainy-umbrella" />
    </View>
  );
}

function MevsimSahne3() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="spring-park-play" vurgulu />
      <NesneKart anahtar="summer-swim" />
      <NesneKart anahtar="winter-snowman" />
      <NesneKart anahtar="season-wheel" />
    </View>
  );
}

function GunlerAylarSahne1() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="pazartesi-takvim" vurgulu />
      <NesneKart anahtar="sali-takvim" />
      <NesneKart anahtar="carsamba-yapragi" />
      <NesneKart anahtar="persembe-takvim" />
      <NesneKart anahtar="cuma-okul" />
    </View>
  );
}

function GunlerAylarSahne2() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="ocak-kar" vurgulu />
      <NesneKart anahtar="mart-cicek" />
      <NesneKart anahtar="haziran-karne" />
      <NesneKart anahtar="ekim-ruzgar" />
      <NesneKart anahtar="aralik-kar" />
    </View>
  );
}

function GunlerAylarSahne3() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="saat-resmi" vurgulu />
      <NesneKart anahtar="12-aylik-takvim" />
      <NesneKart anahtar="gunler-panosu" />
    </View>
  );
}

function HavaDurumuSahne1() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="pirl-pirl-gunes" vurgulu />
      <NesneKart anahtar="yagmur-damlalari" />
      <NesneKart anahtar="gri-bulutlar" />
    </View>
  );
}

function HavaDurumuSahne2() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="kardan-adam" vurgulu />
      <NesneKart anahtar="ucurtma" />
      <NesneKart anahtar="semsiye-tutan" />
    </View>
  );
}

function HavaDurumuSahne3() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="terleyen-cocuk" vurgulu />
      <NesneKart anahtar="kislik-atki" />
      <NesneKart anahtar="hava-durumu-sembolleri" />
    </View>
  );
}

function EylemlerSahne1() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="kitap-okuyan-kiz" vurgulu />
      <NesneKart anahtar="deftere-yazan" />
      <NesneKart anahtar="resim-cizen" />
    </View>
  );
}

function EylemlerSahne2() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="mikrofon-sarki" vurgulu />
      <NesneKart anahtar="dans-eden" />
      <NesneKart anahtar="oyuncak-oynayan" />
    </View>
  );
}

function EylemlerSahne3() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="yemek-yiyen" vurgulu />
      <NesneKart anahtar="su-icen" />
      <NesneKart anahtar="yatakta-uyuyan" />
    </View>
  );
}

function GrupGorsel({ nesneler, vurgu }: { nesneler?: string[]; vurgu?: Props['vurgu'] }) {
  const vurgular = Array.isArray(vurgu) ? vurgu : vurgu ? [vurgu] : [];
  return (
    <View style={styles.grup}>
      {(nesneler ?? []).map((n) => (
        <NesneKart key={n} anahtar={n} vurgulu={vurgular.includes(n)} />
      ))}
    </View>
  );
}

function AnlatimSahne({ sahne }: { sahne: string }) {
  switch (sahne) {
    case 'ac-anlatim-1':
      return <AlfabeSahne />;
    case 'ac-anlatim-2':
      return <BoyaKutusuSahne />;
    case 'ac-anlatim-3':
      return <RenkliHarfSahne />;
    case 'se-anlatim-1':
      return <SayilarSahne />;
    case 'se-anlatim-2':
      return <SinifEsyalariSahne />;
    case 'se-anlatim-3':
      return <SayiEsyalariSahne />;
    case 'sa-anlatim-1':
      return <SelamlasmaSahne />;
    case 'sa-anlatim-2':
      return <AileSahne />;
    case 'sa-anlatim-3':
      return <VedalasmaSahne />;
    case 'kh-anlatim-1':
      return <ElmaHikayeSahne />;
    case 'kh-anlatim-2':
      return <KopekHikayeSahne />;
    case 'kh-anlatim-3':
      return <KusHikayeSahne />;
    case 'bd-anlatim-1':
      return <ParkDiyalogSahne />;
    case 'bd-anlatim-2':
      return <BakkalDiyalogSahne />;
    case 'bd-anlatim-3':
      return <SinifDiyalogSahne />;
    case 'is-anlatim-1':
      return <AlfabeSarkiSahne />;
    case 'is-anlatim-2':
      return <SayilarSarkiSahne />;
    case 'is-anlatim-3':
      return <RenklerSarkiSahne />;
    case 'ga-anlatim-1':
      return <GunlerAylarSahne1 />;
    case 'ga-anlatim-2':
      return <GunlerAylarSahne2 />;
    case 'ga-anlatim-3':
      return <GunlerAylarSahne3 />;
    case 'hd-anlatim-1':
      return <HavaDurumuSahne1 />;
    case 'hd-anlatim-2':
      return <HavaDurumuSahne2 />;
    case 'hd-anlatim-3':
      return <HavaDurumuSahne3 />;
    case 'ey-anlatim-1':
      return <EylemlerSahne1 />;
    case 'ey-anlatim-2':
      return <EylemlerSahne2 />;
    case 'ey-anlatim-3':
      return <EylemlerSahne3 />;
    case 'ge-anlatim-1':
      return <GiyimSahne1 />;
    case 'ge-anlatim-2':
      return <GiyimSahne2 />;
    case 'ge-anlatim-3':
      return <GiyimSahne3 />;
    case 'mv-anlatim-1':
      return <MevsimSahne1 />;
    case 'mv-anlatim-2':
      return <MevsimSahne2 />;
    case 'mv-anlatim-3':
      return <MevsimSahne3 />;
    case 'rk-anlatim-1':
      return <BoyaKutusuSahne />;
    case 'rk-anlatim-2':
      return <RenkliHarfSahne />;
    case 'rk-anlatim-3':
      return <RenklerSarkiSahne />;
    case 'dg-anlatim-1':
      return <GrupGorsel nesneler={['mutlu-yuz', 'uzgun-yuz', 'kizgin-yuz', 'korkmus-yuz']} />;
    case 'dg-anlatim-2':
      return <GrupGorsel nesneler={['nasilsin-sorusu', 'iyiyim-isareti', 'heyecanli-cocuk', 'yorgun-cocuk']} />;
    case 'dg-anlatim-3':
      return <GrupGorsel nesneler={['korkmus-cocuk', 'sasirmis-cocuk', 'mutlu-cocuk', 'aglayan-cocuk']} />;
    default:
      return <NesneKart anahtar={sahne || 'default'} />;
  }
}

export function IngilizceGorsel(props: Props) {
  const { mod, sahne, nesne: nesneKey, nesneler, vurgu, renk, sayi: sayiDeger } = props;

  if (mod === 'anlatim') return <AnlatimSahne sahne={sahne ?? ''} />;
  if (mod === 'grup') return <GrupGorsel nesneler={nesneler} vurgu={vurgu} />;
  if (mod === 'harf') return <HarfBlok harf={nesneKey ?? sahne ?? 'A'} renk={renk} />;
  if (mod === 'sayi') return <SayiBlok sayi={sayiDeger ?? nesneKey ?? '1'} />;
  if (nesneKey === 'gokkusagi') return <GokkusagiGorsel />;
  if (mod === 'nesne') return <NesneKart anahtar={nesneKey ?? sahne ?? 'default'} vurgulu={!!vurgu} />;
  return <NesneKart anahtar={nesneKey ?? sahne ?? 'default'} />;
}

const styles = StyleSheet.create({
  ortala: { alignItems: 'center' },
  kart: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 2,
    alignItems: 'center',
    minWidth: 88,
    margin: 4,
  },
  emoji: { fontSize: 36, marginBottom: 4 },
  ing: { fontSize: 14, fontWeight: '700', color: GEO.mavi, marginBottom: 2 },
  etiket: { fontSize: 12, color: GEO.metin, textAlign: 'center' },
  renkNokta: { marginBottom: 4 },
  grup: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  harfSatir: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 4 },
  renkSatir: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 6, padding: 8 },
});
