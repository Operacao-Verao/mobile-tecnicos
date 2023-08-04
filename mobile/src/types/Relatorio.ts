import { AfetadosTS } from './Afetados';
import { AnimaisTS } from './Animais';

export type RelatorioTS = {
	enfermos: number;
	gravidade: 'Risco' | 'Desastre' | null;
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
	afetados: AfetadosTS;
	animais: AnimaisTS;
};
