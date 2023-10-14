import { AfetadosTS } from './Afetados';
import { AnimaisTS } from './Animais';
import { dadosVistoriaTS } from './DadosVistoria';

export type RelatorioTS = {
	ocorrencia_id: number;
	casa_id: number;
	enfermos: number | undefined;
	interdicao: number; // Não (0), parcial (1) ou total (2)
	situacaoVitimas: number; // Inespecificado (0), desabrigados (1) ou desalojados (2)
	gravidade?: number; // Nenhum (0), risco (1) ou desastre (2)
	relatorio: string;
	encaminhamento: string;
	memorando: string;
	oficio: string;
	processo: string;
	assunto: string;
	observacoes: string;
	areaAfetada: number; // Inespecificado (0), publica (1) ou particular (2)
	tipoConstrucao: number; // Inespecificado (0), alvenaria (1), madeira (2) ou mista (3)
	tipoTalude: number; // Inespecificado (0), natural (1), de corte (2) ou aterro (3)
	vegetacao: number; // Nenhuma (0), rasteira (1) ou árvores (2)
	danosMateriais: boolean;
	dataGeracao: string | null;
	dataAtendimento: string | null;
	afetados?: AfetadosTS;
	animais?: AnimaisTS;
	dadosVistoria: dadosVistoriaTS;
	fotos: {
		url: string;
	};
};
