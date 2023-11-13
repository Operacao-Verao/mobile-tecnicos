import { AfetadosTS } from './Afetados';
import { AnimaisTS } from './Animais';
import { dadosVistoriaTS } from './DadosVistoria';

export type RelatorioTS = {
	ocorrencia_id: number | undefined;
	casa_id: number | undefined;
	enfermos: number | undefined;
	interdicao: number | undefined; // Não (0), parcial (1) ou total (2)
	situacaoVitimas: number | undefined; // Não especificado (0), desabrigados (1) ou desalojados (2)
	gravidade?: number; // Nenhum (0), risco (1) ou desastre (2)
	relatorio: string;
	encaminhamento: string;
	memorando: string;
	oficio: string;
	processo: string;
	assunto: string;
	observacoes: string;
	areaAfetada: number | undefined; // Não especificado (0), publica (1) ou particular (2)
	tipoConstrucao: number | undefined; // Não especificado (0), alvenaria (1), madeira (2) ou mista (3)
	tipoTalude: number | undefined; // Não especificado (0), natural (1), de corte (2) ou aterro (3)
	vegetacao: number | undefined; // Nenhuma (0), rasteira (1) ou árvores (2)
	danosMateriais: boolean | undefined;
	dataGeracao: string | Date | undefined;
	dataAtendimento: string | Date | undefined;
	afetados?: AfetadosTS;
	animais?: AnimaisTS;
	dadosVistoria: dadosVistoriaTS;
	fotos: {
		url: string;
	}[];
};
