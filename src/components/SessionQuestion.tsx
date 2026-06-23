import { memo } from 'react';
import type { Soru } from '../types/content';
import { TestQuestion } from './TestQuestion';
import { MatchingQuestion } from './MatchingQuestion';
import { TableColoringQuestion } from './TableColoringQuestion';

interface Props {
  soru: Soru;
  konuId?: string;
  onAnswer: (cevap: string, dogruMu: boolean) => void;
}

export const SessionQuestion = memo(function SessionQuestion({ soru, konuId, onAnswer }: Props) {
  if (soru.tip === 'eslestirme') {
    return <MatchingQuestion soru={soru} konuId={konuId} onAnswer={onAnswer} />;
  }
  if (soru.tip === 'tablo-boyama') {
    return <TableColoringQuestion soru={soru} konuId={konuId} onAnswer={onAnswer} />;
  }
  return <TestQuestion soru={soru} konuId={konuId} onAnswer={onAnswer} />;
});
