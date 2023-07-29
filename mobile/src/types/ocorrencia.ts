import { RelatorioTS } from './relatorio';

export type OcorrenciaTS = {
  acionamento: string;
  relato: string;
  num_casas: number;
  status: string;
  data: Date;
  relatorio?: RelatorioTS;
};
