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
	};
	tecnico: {
		id: number;
		email: string;
		nome: string;
	};
	relatorio?: RelatorioTS;
};
