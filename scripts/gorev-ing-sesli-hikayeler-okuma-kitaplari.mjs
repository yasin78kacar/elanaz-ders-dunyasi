/**
 * İngilizce Sesli Hikayeler (30) + Okuma Kitapları (22+) — içerik üretici.
 * Çalıştır: node scripts/gorev-ing-sesli-hikayeler-okuma-kitaplari.mjs
 */
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');

const NESNELER = [
  'kirmizi-elma', 'siyah-kedi', 'mavi-araba', 'sabah-gunes', 'sayi-1',
  'yesil-kurbaga', 'gokkusagi', 'sari-civciv', 'kahverengi-ayi', 'pembe-cicek',
  'el-sallayan', 'aile-foto', 'sinif-ortam', 'mor-balon', 'sayi-2',
  'turuncu-portakal', 'mavi-deniz', 'siyah-kedi', 'beyaz-tavsan', 'turuncu-top',
  'gece-ay', 'classroom', 'sari-gunes', 'park-ayrilma', 'kiz-kardes',
  'kahverengi-agac', 'pembe-ucurtma', 'pasta-7', 'mor-uzum', 'vedalasan',
];

function ingNesne(nesne) {
  return { tur: 'ingilizce', mod: 'nesne', nesne };
}

function ingAnlatim(sahne) {
  return { tur: 'ingilizce', mod: 'anlatim', sahne };
}

const SESLI_HIKAYELER = [
  { id: 'the-little-red-apple', baslik: 'The Little Red Apple', ozet: 'A happy apple on a green tree.', metin: 'Once upon a time, there was a little red apple on a big green tree. The sun was yellow and warm. A bird sang, "Good morning!" The apple smiled. It was a happy day.' },
  { id: 'the-happy-cat', baslik: 'The Happy Cat', ozet: 'A black cat plays in the garden.', metin: 'This is a black cat. Her name is Mimi. She likes to run and jump. She says, "Meow! Hello, friend!" Mimi is very happy today.' },
  { id: 'my-blue-ball', baslik: 'My Blue Ball', ozet: 'Ali plays with his blue ball.', metin: 'Ali has a blue ball. He throws the ball up. The ball goes high. Catch the ball! Ali laughs. "This is fun!" he says.' },
  { id: 'good-morning-sun', baslik: 'Good Morning, Sun', ozet: 'A sunny morning at home.', metin: 'Good morning, sun! Good morning, sky! Elanaz opens her eyes. She washes her face. She eats breakfast. "Good morning, Mum!" she says.' },
  { id: 'one-two-three', baslik: 'One, Two, Three', ozet: 'Counting with friends.', metin: 'One apple. Two books. Three pencils. Can and Zeynep count together. "One, two, three!" they say. Counting is easy and fun!' },
  { id: 'the-green-frog', baslik: 'The Green Frog', ozet: 'A frog by the pond.', metin: 'Look! A green frog sits on a leaf. It says, "Ribbit!" The frog can jump. Splash! It jumps into the water. The frog is happy.' },
  { id: 'a-rainbow-day', baslik: 'A Rainbow Day', ozet: 'Colors in the sky after rain.', metin: 'After the rain, the sky is blue. Look up! There is a rainbow. Red, orange, yellow, green, blue, purple. "How beautiful!" says Ayşe.' },
  { id: 'my-yellow-duck', baslik: 'My Yellow Duck', ozet: 'A little duck in the pond.', metin: 'This is my yellow duck. It swims in the pond. Quack, quack! The duck is small and cute. I love my duck very much.' },
  { id: 'the-brown-bear', baslik: 'The Brown Bear', ozet: 'A friendly bear in the forest.', metin: 'In the forest lives a brown bear. The bear is big but kind. "Hello!" says the bear. The children are not afraid. They wave hello.' },
  { id: 'pink-flowers', baslik: 'Pink Flowers', ozet: 'Flowers in the school garden.', metin: 'In the garden there are pink flowers. They smell sweet. Bees visit the flowers. "Wow, so pretty!" says the teacher. The children draw the flowers.' },
  { id: 'hello-friend', baslik: 'Hello, Friend', ozet: 'Two friends meet at school.', metin: 'Hello! Hi! Two friends meet at the school gate. "How are you?" "I am fine, thank you!" They walk to class together. Friends are wonderful.' },
  { id: 'my-family', baslik: 'My Family', ozet: 'Meet Ali\'s family.', metin: 'This is my family. My mother is kind. My father is tall. I have a sister and a baby brother. We love each other. Family is special.' },
  { id: 'at-school', baslik: 'At School', ozet: 'A day in the classroom.', metin: 'We go to school every day. The teacher says, "Good morning, class!" We open our books. We read and write. School is a happy place.' },
  { id: 'the-red-balloon', baslik: 'The Red Balloon', ozet: 'A balloon flies in the park.', metin: 'Berk has a red balloon. The wind blows. The balloon goes up, up, up! "Come back!" says Berk. His friend helps. They catch the balloon. Hooray!' },
  { id: 'counting-stars', baslik: 'Counting Stars', ozet: 'Stars at night.', metin: 'It is night. The moon is bright. Look at the stars! One star, two stars, three stars. Can you count more? Good night, stars. Sweet dreams!' },
  { id: 'the-orange-cat', baslik: 'The Orange Cat', ozet: 'An orange cat and an orange.', metin: 'The orange cat sits near an orange tree. The cat is sleepy. The oranges are round and orange. "Meow," says the cat. It is a lazy, sunny afternoon.' },
  { id: 'rainy-day', baslik: 'Rainy Day', ozet: 'Playing inside when it rains.', metin: 'It is a rainy day. We cannot play outside. We play games inside. We read books. We draw pictures. Rainy days can be fun too!' },
  { id: 'my-pet-dog', baslik: 'My Pet Dog', ozet: 'A loyal pet dog.', metin: 'I have a pet dog. His name is Max. Max can run fast. He wags his tail. "Good dog!" I say. Max is my best friend.' },
  { id: 'the-white-rabbit', baslik: 'The White Rabbit', ozet: 'A rabbit in the meadow.', metin: 'A white rabbit hops in the meadow. Hop, hop, hop! The rabbit has long ears. It eats a carrot. "Hello, little rabbit!" says Elanaz softly.' },
  { id: 'playing-outside', baslik: 'Playing Outside', ozet: 'Children play in the park.', metin: 'Let us play outside! We run. We jump. We play ball. The sun is warm. "This is great!" we shout. Playing outside makes us happy and strong.' },
  { id: 'good-night-moon', baslik: 'Good Night, Moon', ozet: 'Bedtime wishes.', metin: 'The moon is in the sky. It is time for bed. "Good night, moon. Good night, stars. Good night, Mum and Dad." Elanaz closes her eyes. Sleep well.' },
  { id: 'my-classroom', baslik: 'My Classroom', ozet: 'Objects in the classroom.', metin: 'This is my classroom. There is a board and desks. I have a pencil and a book. The window is open. I like my classroom very much.' },
  { id: 'the-brave-bird', baslik: 'The Brave Bird', ozet: 'A bird learns to fly.', metin: 'A little bird sits in the nest. It is afraid to fly. Mother bird says, "You can do it!" The bird spreads its wings. Fly, fly, fly! The bird is brave.' },
  { id: 'sunny-picnic', baslik: 'Sunny Picnic', ozet: 'A family picnic in the park.', metin: 'It is a sunny day. The family has a picnic. They eat sandwiches and fruit. They sit on a blanket. "What a lovely day!" says Dad. Everyone smiles.' },
  { id: 'my-sister', baslik: 'My Sister', ozet: 'A story about my sister.', metin: 'This is my sister. Her name is Zeynep. She is kind and funny. We play together. We share our toys. I love my sister.' },
  { id: 'the-big-tree', baslik: 'The Big Tree', ozet: 'A tall tree in the garden.', metin: 'In the garden there is a big tree. It is brown and tall. Birds live in the tree. We sit under the tree. The tree gives us shade. Thank you, tree!' },
  { id: 'fly-a-kite', baslik: 'Fly a Kite', ozet: 'Flying a pink kite.', metin: 'The wind is strong today. Ali flies a pink kite. Up goes the kite! Higher and higher! "Look at my kite!" Ali shouts. Flying a kite is exciting.' },
  { id: 'happy-birthday', baslik: 'Happy Birthday', ozet: 'A birthday party.', metin: 'Today is my birthday! Happy birthday to me! There is a cake with candles. One, two, three — blow! My friends sing. "Thank you, everyone!" I say.' },
  { id: 'the-purple-grape', baslik: 'The Purple Grape', ozet: 'Grapes on the vine.', metin: 'On the vine hang purple grapes. They are sweet and juicy. "Yum!" says Can. He shares grapes with his friend. Sharing is nice.' },
  { id: 'see-you-tomorrow', baslik: 'See You Tomorrow', ozet: 'Saying goodbye at school.', metin: 'School is over. "Goodbye, teacher!" "Goodbye, friends!" "See you tomorrow!" The children go home. They had a good day. Tomorrow will be fun too.' },
];

const OKUMA_KITAPLARI = [
  {
    id: 'book-my-mother', baslik: 'My Mother', ozet: 'A book about Mum.',
    sayfalar: [
      { metin: 'This is my mother. Her name is Ayşe. She has kind eyes and a warm smile.' },
      { metin: 'My mother cooks yummy food. She reads stories at night. "I love you, Mum!" I say.' },
      { metin: 'Mother helps me with homework. She hugs me when I am sad. My mother is the best!' },
    ],
    nesneler: ['anne-resmi', 'neseli-anne', 'anne-portre'],
  },
  {
    id: 'book-my-father', baslik: 'My Father', ozet: 'A book about Dad.',
    sayfalar: [
      { metin: 'This is my father. His name is Mehmet. He is tall and strong.' },
      { metin: 'Father plays football with me. He fixes my bike. "Good job!" he says.' },
      { metin: 'On weekends we go to the park. Father pushes me on the swing. I love my father!' },
    ],
    nesneler: ['baba-resmi', 'baba-ogul', 'baba-portre'],
  },
  {
    id: 'book-my-sister', baslik: 'My Sister', ozet: 'A book about my sister.',
    sayfalar: [
      { metin: 'This is my sister. Her name is Elif. She is older than me.' },
      { metin: 'We draw pictures together. She teaches me new words in English.' },
      { metin: 'Sometimes we argue, but we always say sorry. Sisters are special friends.' },
    ],
    nesneler: ['kiz-kardes', 'kiz-kardes-abla', 'kardesler'],
  },
  {
    id: 'book-my-brother', baslik: 'My Brother', ozet: 'A book about my brother.',
    sayfalar: [
      { metin: 'This is my brother. His name is Ali. He is funny and fast.' },
      { metin: 'We play hide and seek. Ali hides behind the big tree.' },
      { metin: 'My brother shares his snacks with me. Brothers are great!' },
    ],
    nesneler: ['erkek-kardes', 'erkek-kardes-ali', 'baba-ogul'],
  },
  {
    id: 'book-at-the-park', baslik: 'At the Park', ozet: 'Fun at the park.',
    sayfalar: [
      { metin: 'We go to the park on Sunday. The grass is green. Children are playing.' },
      { metin: 'I slide down the slide. Whee! My friend pushes me on the swing.' },
      { metin: 'We eat ice cream. "See you next week!" we say. The park is our favourite place.' },
    ],
    nesneler: ['park-ayrilma', 'turuncu-top', 'pembe-ucurtma'],
  },
  {
    id: 'book-in-the-classroom', baslik: 'In the Classroom', ozet: 'Our classroom.',
    sayfalar: [
      { metin: 'Our classroom is big and bright. There are desks and chairs.' },
      { metin: 'The teacher writes on the board. We listen carefully. "Open your books, please."' },
      { metin: 'We raise our hands to speak. We help each other. I like my classroom!' },
    ],
    nesneler: ['sinif-ortam', 'ogretmen-masa', 'board'],
  },
  {
    id: 'book-my-colors', baslik: 'My Colors', ozet: 'Learning colors.',
    sayfalar: [
      { metin: 'Red like an apple. Blue like the sky. Yellow like the sun.' },
      { metin: 'Green like grass. Orange like an orange. Pink like a flower.' },
      { metin: 'Purple, brown, black, and white — so many colors! Colors are everywhere.' },
    ],
    nesneler: ['kirmizi-elma', 'mavi-gokyuzu', 'renk-paleti'],
  },
  {
    id: 'book-my-numbers', baslik: 'My Numbers', ozet: 'Counting from one to ten.',
    sayfalar: [
      { metin: 'One, two, three — let us count! One sun. Two eyes. Three books.' },
      { metin: 'Four chairs. Five pencils. Six balls. Seven days in a week.' },
      { metin: 'Eight, nine, ten! Numbers help us every day. Can you count to ten?' },
    ],
    nesneler: ['sayi-1', 'sayi-2', 'one-two'],
  },
  {
    id: 'book-my-animals', baslik: 'My Animals', ozet: 'Farm and pet animals.',
    sayfalar: [
      { metin: 'A cat says meow. A dog says woof. A duck says quack.' },
      { metin: 'A cow says moo. A bird can sing. Animals are amazing!' },
      { metin: 'I love animals. We must be kind to them. They are our friends.' },
    ],
    nesneler: ['siyah-kedi', 'sari-civciv', 'yesil-kurbaga'],
  },
  {
    id: 'book-my-food', baslik: 'My Food', ozet: 'Yummy food words.',
    sayfalar: [
      { metin: 'For breakfast I eat bread and cheese. I drink milk. Yummy!' },
      { metin: 'For lunch I have soup and fruit. Apples and oranges are healthy.' },
      { metin: 'We say "Thank you" before we eat. Good food makes us strong!' },
    ],
    nesneler: ['kirmizi-elma', 'turuncu-portakal', 'dort-elma'],
  },
  {
    id: 'book-my-toys', baslik: 'My Toys', ozet: 'Toys we love.',
    sayfalar: [
      { metin: 'I have many toys. A ball, a doll, and a toy car.' },
      { metin: 'I share my toys with my friends. We build towers with blocks.' },
      { metin: 'After playing, I put my toys away. "Clean up time!" says Mum.' },
    ],
    nesneler: ['turuncu-top', 'mavi-araba', 'mor-balon'],
  },
  {
    id: 'book-my-clothes', baslik: 'My Clothes', ozet: 'What we wear.',
    sayfalar: [
      { metin: 'I wear a T-shirt and trousers. In winter I wear a coat and a hat.' },
      { metin: 'My shoes are blue. My socks are white. I can dress myself!' },
      { metin: 'When it rains, I take my umbrella. Clothes keep us warm and dry.' },
    ],
    nesneler: ['sari-mavi-forma', 'siyah-sapka', 'siyah-sapka'],
  },
  {
    id: 'book-my-weather', baslik: 'My Weather', ozet: 'Sun, rain, and wind.',
    sayfalar: [
      { metin: 'Today is sunny. The sky is blue. We play outside.' },
      { metin: 'Sometimes it rains. We hear drip, drop on the window.' },
      { metin: 'Wind blows the leaves. Snow is cold and white. Weather changes every day!' },
    ],
    nesneler: ['sabah-gunes', 'mavi-deniz', 'beyaz-kar'],
  },
  {
    id: 'book-my-body', baslik: 'My Body', ozet: 'Parts of the body.',
    sayfalar: [
      { metin: 'I have two eyes to see. I have two ears to hear.' },
      { metin: 'I have one nose to smell. I have ten fingers on my hands.' },
      { metin: 'I brush my teeth every day. My body is wonderful. I take care of it!' },
    ],
    nesneler: ['kitap-okuyan-kiz', 'el-sallayan', 'merhaba-cocuklar'],
  },
  {
    id: 'book-my-school-day', baslik: 'My School Day', ozet: 'From morning to afternoon.',
    sayfalar: [
      { metin: 'Good morning! I put on my bag and go to school.' },
      { metin: 'We have Turkish, Maths, and English. We sing songs too!' },
      { metin: 'School finishes at three. "Goodbye, teacher!" I go home happy.' },
    ],
    nesneler: ['okul-karsilasma', 'sinif-ortam', 'canta'],
  },
  {
    id: 'book-my-friends', baslik: 'My Friends', ozet: 'Friends at school.',
    sayfalar: [
      { metin: 'Zeynep is my friend. Can is my friend too. We sit together.' },
      { metin: 'We help each other in class. "Can I borrow your eraser?" "Sure!"' },
      { metin: 'Friends play, laugh, and learn together. I am lucky to have good friends!' },
    ],
    nesneler: ['merhaba-cocuklar', 'kitap-okuyan-iki', 'el-sallayan'],
  },
  {
    id: 'book-my-house', baslik: 'My House', ozet: 'Rooms in my home.',
    sayfalar: [
      { metin: 'This is my house. It has a kitchen, a living room, and bedrooms.' },
      { metin: 'In the kitchen Mum cooks. In my room I sleep and read.' },
      { metin: 'Home is where my family is. I love my house!' },
    ],
    nesneler: ['acik-kapi', 'gece-yatak', 'aksam-yemegi'],
  },
  {
    id: 'book-my-garden', baslik: 'My Garden', ozet: 'Plants and flowers.',
    sayfalar: [
      { metin: 'We have a small garden. There are flowers and a tree.' },
      { metin: 'I water the plants. Green leaves grow in spring.' },
      { metin: 'Bees visit the flowers. The garden smells wonderful!' },
    ],
    nesneler: ['pembe-cicek', 'kahverengi-agac', 'yesil-yaprak'],
  },
  {
    id: 'book-my-birthday', baslik: 'My Birthday', ozet: 'A special day.',
    sayfalar: [
      { metin: 'Today is my birthday! I am seven years old. Hooray!' },
      { metin: 'My friends come to my party. We eat cake and play games.' },
      { metin: 'I open presents. "Thank you!" I say. Birthdays are the best day!' },
    ],
    nesneler: ['pasta-7', 'mor-balon', 'balon-5'],
  },
  {
    id: 'book-my-feelings', baslik: 'My Feelings', ozet: 'Happy, sad, and more.',
    sayfalar: [
      { metin: 'Sometimes I feel happy. I smile and laugh with my friends.' },
      { metin: 'Sometimes I feel sad. That is okay. A hug helps me feel better.' },
      { metin: 'I can say how I feel. "I am tired." "I am excited!" Feelings are important.' },
    ],
    nesneler: ['neseli-anne', 'merhaba-kiz', 'hi-selam'],
  },
  {
    id: 'book-my-sports', baslik: 'My Sports', ozet: 'Football and more.',
    sayfalar: [
      { metin: 'I like football. I kick the ball. Go, team, go!' },
      { metin: 'We run in PE class. Running makes our hearts strong.' },
      { metin: 'Win or lose, we say "Good game!" Sport is fun and healthy.' },
    ],
    nesneler: ['alti-top', 'turuncu-basketbol', 'turuncu-top'],
  },
  {
    id: 'book-my-transport', baslik: 'My Transport', ozet: 'Cars, buses, and bikes.',
    sayfalar: [
      { metin: 'I go to school by bus. The bus is yellow and big.' },
      { metin: 'Dad drives a blue car. Sometimes I ride my bike in the park.' },
      { metin: 'Planes fly in the sky. Boats sail on the sea. So many ways to travel!' },
    ],
    nesneler: ['mavi-araba', 'mavi-araba', 'mavi-deniz'],
  },
];

const sesliHikayelerJson = {
  hikayeler: SESLI_HIKAYELER.map((h, i) => ({
    id: h.id,
    baslik: h.baslik,
    kazanimKodu: 'ING.2.5.1',
    ozet: h.ozet,
    metin: h.metin,
    ses: `sesli-hikaye-${String(i + 1).padStart(2, '0')}`,
    sureSaniye: 45 + (i % 5) * 10,
    gorsel: ingNesne(NESNELER[i % NESNELER.length]),
  })),
};

const okumaKitaplariJson = {
  kitaplar: OKUMA_KITAPLARI.map((k) => ({
    id: k.id,
    baslik: k.baslik,
    kazanimKodu: 'ING.2.5.2',
    ozet: k.ozet,
    kapakGorsel: ingNesne(k.nesneler[0]),
    sayfalar: k.sayfalar.map((s, pi) => ({
      metin: s.metin,
      gorsel: ingNesne(k.nesneler[pi % k.nesneler.length]),
    })),
  })),
};

writeFileSync(
  join(ROOT, 'content/sinif2/ingilizce/sesli-hikayeler.json'),
  JSON.stringify(sesliHikayelerJson, null, 2) + '\n',
);
writeFileSync(
  join(ROOT, 'content/sinif2/ingilizce/okuma-kitaplari.json'),
  JSON.stringify(okumaKitaplariJson, null, 2) + '\n',
);

console.log(`✓ ${sesliHikayelerJson.hikayeler.length} sesli hikaye`);
console.log(`✓ ${okumaKitaplariJson.kitaplar.length} okuma kitabı`);
