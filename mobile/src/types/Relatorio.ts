import { AfetadosTS } from './Afetados';
import { AnimaisTS } from './Animais';
import { dadoVistoriaTS } from './DadoVistoria';

export type RelatorioTS = {
	enfermos: number;
	gravidade: 'Risco' | 'Desastre' | null;
	dadoVistoria: dadoVistoriaTS;
	relatorio: string;
	encaminhamento: string;
	memorando: string;
	oficio: string;
	processo: string;
	assunto: string;
	observacoes: string;
	areaAfetada: 'Pública' | 'Particular' | null;
	tipoConstrucao: 'Alvenaria' | 'Madeira' | 'Mista' | null;
	tipoTalude: 'Natural' | 'De Corte' | 'Aterro' | null;
	vegetacao: 'NÂO' | 'Rasteira' | 'Presença de Árvores' | null;
	danosMateriais: boolean;
	dataGeracao: Date | null;
	dataAtendimento: Date | null;
	interdicao: 'Sim' | 'Não';
	situacao: 'Desabrigados' | 'Desalojados' | null;
	foto: string | null;
	afetados?: AfetadosTS;
	animais?: AnimaisTS;
};
