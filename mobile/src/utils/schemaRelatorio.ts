import * as yup from 'yup';

export const schemaRelatorio = yup.object({
	memo: yup.string().required('Informe o memorando.'),
	dadoVistoria: yup.string(),
	assunto: yup.string(),
	areaAfetada: yup.string(),
	tipoConstrucao: yup.string(),
	tipoTalude: yup.string(),
	afetados: yup.array(
		yup.object({
			adultos: yup.number(),
			criancas: yup.number(),
			idosos: yup.number(),
			especiais: yup.number(),
			mortos: yup.number(),
			feridos: yup.number(),
			enfermos: yup.number(),
		})
	),
	animais: yup.array(
		yup.object({
			caes: yup.number(),
			gatos: yup.number(),
			aves: yup.number(),
			equinos: yup.number(),
		})
	),
	oficio: yup.string(),
	encaminhamento: yup.string(),
});
