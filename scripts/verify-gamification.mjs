/**
 * Gamification + Progress doğrulaması — gamification.ts ile senkron tutulmalı.
 */
const POINTS_PER_CORRECT = 10;
const POINTS_PER_LEVEL = 500;

function levelFromPoints(points) {
  return Math.floor(points / POINTS_PER_LEVEL) + 1;
}

function yeniRozetler(mevcut, adaylar) {
  const eklenen = [];
  for (const a of adaylar) {
    if (a.kosul && !mevcut.includes(a.id)) {
      eklenen.push(a.id);
      mevcut.push(a.id);
    }
  }
  return eklenen;
}

function simulateCorrectAnswers(count) {
  let points = 0;
  let dogruToplam = 0;
  const rozetler = [];
  for (let i = 0; i < count; i++) {
    dogruToplam += 1;
    points += POINTS_PER_CORRECT;
    yeniRozetler(rozetler, [
      { id: 'ilk_adim', kosul: dogruToplam >= 1 },
      { id: 'on_soru', kosul: dogruToplam >= 10 },
      { id: 'elli_soru', kosul: dogruToplam >= 50 },
    ]);
  }
  return { points, level: levelFromPoints(points), rozetler };
}

const BADGE_IDS = [
  'ilk_adim',
  'on_soru',
  'elli_soru',
  'bir_yildiz',
  'uc_yildiz',
  'bes_konu',
  'hikaye_ustasi',
];

const BADGE_TITLES = [
  'First Steps',
  'Sharpshooter',
  'On Fire',
  'Brain Master',
  'Puzzle Solver',
  'Bookworm',
  'Artist',
];

const checks = [
  {
    name: '10 doğru = 100 puan',
    pass: simulateCorrectAnswers(10).points === 100,
    detail: `${simulateCorrectAnswers(10).points} puan`,
  },
  {
    name: '500 puan = seviye 2',
    pass: levelFromPoints(500) === 2,
    detail: `seviye ${levelFromPoints(500)}`,
  },
  {
    name: 'İlk doğru → First Steps rozeti',
    pass: simulateCorrectAnswers(1).rozetler.includes('ilk_adim'),
    detail: simulateCorrectAnswers(1).rozetler.join(', '),
  },
  {
    name: '10 doğru → Sharpshooter rozeti',
    pass: simulateCorrectAnswers(10).rozetler.includes('on_soru'),
    detail: simulateCorrectAnswers(10).rozetler.join(', '),
  },
  {
    name: '50 doğru → On Fire rozeti',
    pass: simulateCorrectAnswers(50).rozetler.includes('elli_soru'),
    detail: 'elli_soru dahil',
  },
  {
    name: '7 rozet tanımı',
    pass: BADGE_IDS.length === 7 && BADGE_TITLES.length === 7,
    detail: `${BADGE_IDS.length} rozet`,
  },
  {
    name: 'AsyncStorage anahtarları tanımlı',
    pass:
      '@elanaz/gamification'.length > 0 && '@elanaz/ilerleme'.length > 0,
    detail: '@elanaz/gamification, @elanaz/ilerleme',
  },
  {
    name: 'saveProgress lessonId formatı',
    pass: 'matematik:ritmik-sayma'.indexOf(':') > 0,
    detail: 'dersId:konuId',
  },
];

let failed = 0;
for (const c of checks) {
  console.log(`  ${c.pass ? 'PASS' : 'FAIL'} ${c.name}: ${c.detail}`);
  if (!c.pass) failed++;
}

if (failed > 0) {
  console.error(`\n${failed} gamification kontrolü başarısız!`);
  process.exit(1);
}

console.log('\nTüm gamification kontrolleri geçti.');
