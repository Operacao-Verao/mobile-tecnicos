const dataVistoria = [
	{ key: 'desmoronamento', value: 'Desmoronamento' },
	{ key: 'deslizamento', value: 'Deslizamento' },
	{ key: 'esgoto_escoamento', value: 'Esgoto' },
	{ key: 'erosao', value: 'Erosão' },
	{ key: 'inundacao', value: 'Inundação' },
	{ key: 'incendio', value: 'Incêndio' },
	{ key: 'arvores', value: 'Árvores' },
	{ key: 'infiltracao_trinca', value: 'Infiltração' },
	{ key: 'judicial', value: 'Judicial' },
	{ key: 'monitoramento', value: 'Monitoramento' },
	{ key: 'transito', value: 'Trânsito' },
];

const dataAreaAfetada = [
	{ key: 0, value: 'Não especificado' },
	{ key: 1, value: 'Pública' },
	{ key: 2, value: 'Particular' },
];

const dataTipoConstrucao = [
	{ key: 0, value: 'Não especificado' },
	{ key: 1, value: 'Alvenaria' },
	{ key: 2, value: 'Madeira' },
	{ key: 3, value: 'Mista' },
];

const dataTipoTalude = [
	{ key: 0, value: 'Não especificado' },
	{ key: 1, value: 'Natural' },
	{ key: 2, value: 'De Corte' },
	{ key: 3, value: 'Aterro' },
];

const dataVegetacao = [
	{ key: 0, value: 'Nenhuma' },
	{ key: 1, value: 'Rasteira' },
	{ key: 2, value: 'Árvores' },
];

const dataSituacao = [
	{ key: 0, value: 'Não especificado' },
	{ key: 1, value: 'Desabrigados' },
	{ key: 2, value: 'Desalojados' },
];

const dataInterdicao = [
	{ key: 0, value: 'Não' },
	{ key: 1, value: 'Parcial' },
	{ key: 2, value: 'Total' },
];

export {
	dataVistoria,
	dataAreaAfetada,
	dataTipoConstrucao,
	dataTipoTalude,
	dataVegetacao,
	dataSituacao,
	dataInterdicao,
};
