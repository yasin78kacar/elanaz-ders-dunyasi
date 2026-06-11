/** Test şıkkının ekranda gösterilecek metni — dönüşüm/trim yok. */
export function secenekGosterim(secenek: string | number): string {
  return String(secenek);
}

/** Eski SvgText / layout kırpması: son karakter düşerse bu true olur. */
export function kirpilmisGorunurMu(ham: string, gorunen: string): boolean {
  const s = String(ham);
  return s.length > 1 && gorunen === s.slice(0, -1);
}
