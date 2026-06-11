import type { Soru } from '../types/content';
import { TestQuestion } from './TestQuestion';
import { MatchingQuestion } from './MatchingQuestion';
import { TableColoringQuestion } from './TableColoringQuestion';

interface Props {
  soru: Soru;
  onAnswer: (cevap: string, dogruMu: boolean) => void;
}

export function SessionQuestion({ soru, onAnswer }: Props) {
  if (soru.tip === 'eslestirme') {
    return <MatchingQuestion soru={soru} onAnswer={onAnswer} />;
  }
  if (soru.tip === 'tablo-boyama') {
    return <TableColoringQuestion soru={soru} onAnswer={onAnswer} />;
  }
  return <TestQuestion soru={soru} onAnswer={onAnswer} />;
}
