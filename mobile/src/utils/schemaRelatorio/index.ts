import * as yup from 'yup';

export const schemaRelatorio = yup.object({
	memorando: yup.string().required('Informe o memorando'),
	enfermos: yup.number(),
	relatorio: yup.string().required('Informe o relatorio'),
	processo: yup.string().required('Informe o processo'),
	assunto: yup.string().required('Informe o assunto'),
	interdicao: yup.number(),
	areaAfetada: yup.number(),
	tipoConstrucao: yup.number(),
	tipoTalude: yup.number(),
	situacaoVitimas: yup.number(),
	vegetacao: yup.number(),
	oficio: yup.string().required('Informe o oficio'),
	encaminhamento: yup.string().required('Informe o encaminhamento'),
	observacoes: yup.string(),
	danosMateriais: yup.bool(),
	dataGeracao: yup.date(),
	dataAtendimento: yup.date(),
	dadosVistoria: yup.object({
		desmoronamento: yup.bool(),
		deslizamento: yup.bool(),
		esgoto_escoamento: yup.bool(),
		erosao: yup.bool(),
		inundacao: yup.bool(),
		incendio: yup.bool(),
		arvores: yup.bool(),
		infiltracao_trinca: yup.bool(),
		judicial: yup.bool(),
		monitoramento: yup.bool(),
		transito: yup.bool(),
	}),
	afetados: yup.object({
		adultos: yup.number(),
		criancas: yup.number(),
		idosos: yup.number(),
		especiais: yup.number(),
		mortos: yup.number(),
		feridos: yup.number(),
		enfermos: yup.number(),
	}),
	animais: yup.object({
		caes: yup.number(),
		gatos: yup.number(),
		aves: yup.number(),
		equinos: yup.number(),
	}),
	fotos: yup.object({
		url: yup.string(),
	}),
});
