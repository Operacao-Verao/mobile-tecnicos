import { RelatorioTS } from './Relatorio';

export type OcorrenciaTS = {
	id: number;
	acionamento: string;
	data: Date | null;
	num_casas: number;
	status: boolean;
	endereco: {
		cep: string;
		bairro: string;
		cidade: string;
		rua: string;
		numero: number;
		casas: [
			{
				interdicao: number;
				complemento: string;
			}
		];
	};
	tecnico: {
		id: number;
		email: string;
		nome: string;
	};
	relatorios?: [RelatorioTS];
};
