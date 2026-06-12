/**
 * RN Text son-harf kırpmasını önlemek için minimum genişlik hesabı.
 * Türkçe karakterler (ğ, ş, ü, ö, ı, ç) ve uzun kelimeler için ek pay.
 */
export function etiketMinGenislik(metin: string, fontSize: number): number {
  let birim = 0;
  for (const ch of metin) {
    if (ch === ' ') birim += 0.35;
    else if (/[mwMWğĞşŞöÖ]/.test(ch)) birim += 0.82;
    else if (/[üÜıİçÇ]/.test(ch)) birim += 0.72;
    else if (/[rnzRNZ]/.test(ch)) birim += 0.68;
    else birim += 0.58;
  }
  const sonHarf = metin.slice(-1);
  const sonHarfPayi = /[rnzRNZ]/.test(sonHarf) ? fontSize * 0.35 : 0;
  return Math.ceil(birim * fontSize) + 14 + Math.ceil(sonHarfPayi);
}
