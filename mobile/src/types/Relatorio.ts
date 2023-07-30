import { AfetadosTS } from './Afetados';
import { AnimaisTS } from './Animais';

export type RelatorioTS = {
  enfermos: number;
  gravidade: 'Risco' | 'Desastre';
  relatorio: string;
  encaminhamento: string;
  memorando: string;
  oficio: string;
  processo: string;
  assunto: string;
  observacoes: string;
  areaAfetada: 'Pública' | 'Particular';
  tipoConstrucao: 'Alvenaria' | 'Madeira' | 'Mista';
  tipoTalude: 'Natural' | 'De Corte' | 'Aterro';
  vegetacao: 'NÂO' | 'Rasteira' | 'Presença de Árvores';
  danosMateriais: boolean;
  dataGeracao: Date;
  dataAtendimento: Date;
  afetados: AfetadosTS;
  animais: AnimaisTS;
};
