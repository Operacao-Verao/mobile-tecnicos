import {
	PayloadAction,
	SerializedError,
	createAsyncThunk,
	createSlice,
} from '@reduxjs/toolkit';

import { api } from '../../lib/axios';
import { OcorrenciaTS } from '../../types/Ocorrencia';

type CredentialsTS = {
	token: string | null;
	id?: number;
	status?: string;
};

type State = {
	ocorrencia: OcorrenciaTS;
	ocorrencias: OcorrenciaTS[];
	casaAberta: number;
	loading: boolean;
	error: SerializedError | null;
};

const initialState: State = {
	ocorrencia: {
		id: 0,
		acionamento: '',
		num_casas: 3,
		status: true,
		data: null,
		endereco: {
			cep: '',
			bairro: '',
			cidade: '',
			rua: '',
			numero: 0,
			casas: [
				{
					id: 0,
					interdicao: 0,
					complemento: '',
					relatorios: [
						{
							ocorrencia_id: 0,
							casa_id: 0,
							afetados: {
								adultos: 0,
								criancas: 0,
								idosos: 0,
								especiais: 0,
								mortos: 0,
								feridos: 0,
								enfermos: 0,
							},
							situacaoVitimas: 0,
							enfermos: 0,
							gravidade: 0,
							relatorio: '',
							encaminhamento: '',
							memorando: '',
							oficio: '',
							processo: '',
							assunto: '',
							observacoes: '',
							areaAfetada: 0,
							tipoConstrucao: 0,
							tipoTalude: 0,
							vegetacao: 0,
							danosMateriais: false,
							dataGeracao: undefined,
							dataAtendimento: undefined,
							interdicao: 0,
							fotos: [
								{
									url: '',
								},
							],
							dadosVistoria: {
								desmoronamento: false,
								deslizamento: false,
								esgoto_escoamento: false,
								erosao: false,
								inundacao: false,
								incendio: false,
								arvores: false,
								infiltracao_trinca: false,
								judicial: false,
								monitoramento: false,
								transito: false,
							},
							animais: {
								caes: 0,
								gatos: 0,
								aves: 0,
								equinos: 0,
							},
						},
					],
				},
			],
		},
		tecnico: {
			id: 0,
			email: '',
			nome: '',
		},
	},
	ocorrencias: [],
	casaAberta: 0,
	loading: false,
	error: null,
};

export const fetchOcorrencias = createAsyncThunk(
	'ocorrencias/ver',
	async ({ token }: CredentialsTS) => {
		try {
			const response = await api.get('/ocorrencias/ver', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			let ocorrencias = response.data;
			return ocorrencias;
		} catch (error) {
			return 'Erro: ' + error;
		}
	}
);

export const fetchOneOcorrencia = createAsyncThunk(
	'ocorrencias/ver/{id}',
	async ({ id, token }: CredentialsTS) => {
		try {
			const response = await api.get(`ocorrencias/ver/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.status === 200) {
				let ocorrencia = response.data;
				return ocorrencia;
			}
		} catch (error) {
			return 'Erro: ' + error;
		}
	}
);

export const fetchFilterOcorrencia = createAsyncThunk(
	'ocorrencias/filtrar/{status}',
	async ({ status, token }: CredentialsTS) => {
		try {
			const response = await api.get(`ocorrencias/ver/${status}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			let ocorrencias = response.data;
			return ocorrencias;
		} catch (error) {
			console.log('deu erro');
			return 'Erro: ' + error;
		}
	}
);

export const slice = createSlice({
	name: 'ocorrencia',
	initialState,
	reducers: {
		setCasaAberta: (state, action) => {
			const { id } = action.payload;
			state.casaAberta = id;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOcorrencias.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(
				fetchOcorrencias.fulfilled,
				(state, action: PayloadAction<OcorrenciaTS[]>) => {
					state.error = null;
					state.loading = false;
					state.ocorrencias = action.payload;
				}
			)
			.addCase(fetchOcorrencias.rejected, (state, action) => {
				state.error = action.error;
				state.loading = false;
			})
			.addCase(fetchOneOcorrencia.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(
				fetchOneOcorrencia.fulfilled,
				(state, action: PayloadAction<OcorrenciaTS>) => {
					state.error = null;
					state.loading = false;
					state.ocorrencia = action.payload;
				}
			)
			.addCase(fetchOneOcorrencia.rejected, (state, action) => {
				state.error = action.error;
				state.loading = false;
			})
			.addCase(fetchFilterOcorrencia.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(
				fetchFilterOcorrencia.fulfilled,
				(state, action: PayloadAction<OcorrenciaTS[]>) => {
					state.error = null;
					state.loading = false;
					state.ocorrencias = action.payload;
				}
			)
			.addCase(fetchFilterOcorrencia.rejected, (state, action) => {
				state.error = action.error;
				state.loading = false;
			});
	},
});

export const { setCasaAberta } = slice.actions;
export default slice.reducer;
