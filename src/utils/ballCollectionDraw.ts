/** Top toplama animasyonu zaman çizelgesi (ms). */
export const BALL_ANIM_DURATION_MS = 10_000;
export const GREEN_START_MS = 2_000;
export const GREEN_STAGGER_MS = 1_000;
export const GREEN_ENTER_MS = 1_000;
export const EQUATION_START_MS = 5_000;

export const BLUE_COUNT = 4;
export const GREEN_COUNT = 3;

const BLUE = '#2E6BE6';
const GREEN = '#2E9E5B';
const BG = '#FFF8F0';
const TEXT = '#1A2B4A';

export interface BallLayout {
  cx: number;
  cy: number;
  r: number;
}

export interface BallCollectionScene {
  width: number;
  height: number;
  blueBalls: BallLayout[];
  greenBalls: BallLayout[];
  equationY: number;
}

/** Sabit viewBox 400×280 — responsive ölçekleme bileşende yapılır. */
const VIEW_W = 400;
const VIEW_H = 280;

export function buildBallCollectionScene(): BallCollectionScene {
  const r = 26;
  const blueY = 88;
  const greenY = 168;
  const blueXs = [72, 136, 200, 264];
  const greenXs = [104, 200, 296];

  return {
    width: VIEW_W,
    height: VIEW_H,
    blueBalls: blueXs.map((cx) => ({ cx, cy: blueY, r })),
    greenBalls: greenXs.map((cx) => ({ cx, cy: greenY, r })),
    equationY: 248,
  };
}

export function greenBallProgress(ballIndex: number, timeMs: number): number {
  const start = GREEN_START_MS + ballIndex * GREEN_STAGGER_MS;
  if (timeMs < start) return 0;
  const t = Math.min(1, (timeMs - start) / GREEN_ENTER_MS);
  return easeOutBack(t);
}

export function equationOpacity(timeMs: number): number {
  if (timeMs < EQUATION_START_MS) return 0;
  const t = Math.min(1, (timeMs - EQUATION_START_MS) / 400);
  return easeOutCubic(t);
}

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

function easeOutBack(t: number): number {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2;
}

/** HTML canvas 2D bağlamına kare çizer. */
export function drawBallCollectionFrame(
  ctx: CanvasRenderingContext2D,
  scene: BallCollectionScene,
  timeMs: number,
): void {
  const { width, height } = scene;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = BG;
  ctx.fillRect(0, 0, width, height);

  for (const ball of scene.blueBalls) {
    drawCircle(ctx, ball.cx, ball.cy, ball.r, BLUE, 1);
  }

  scene.greenBalls.forEach((ball, i) => {
    const p = greenBallProgress(i, timeMs);
    if (p <= 0) return;
    const scale = 0.2 + 0.8 * p;
    drawCircle(ctx, ball.cx, ball.cy, ball.r * scale, GREEN, p);
  });

  const eqAlpha = equationOpacity(timeMs);
  if (eqAlpha > 0) {
    ctx.save();
    ctx.globalAlpha = eqAlpha;
    ctx.fillStyle = TEXT;
    ctx.font = 'bold 36px system-ui, -apple-system, Segoe UI, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('4 + 3 = 7', width / 2, scene.equationY);
    ctx.restore();
  }
}

function drawCircle(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  fill: string,
  alpha: number,
): void {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,0,0,0.12)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
}

export const BALL_COLLECTION_COLORS = { BLUE, GREEN, BG, TEXT };
