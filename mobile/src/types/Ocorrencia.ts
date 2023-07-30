import { RelatorioTS } from './Relatorio';

export type OcorrenciaTS = {
  acionamento: string;
  relato: string;
  num_casas: number;
  status: string;
  data: Date;
  relatorio?: RelatorioTS;
};
