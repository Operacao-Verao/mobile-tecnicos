// TODO: Usar a requisição do redux pra botar na tela as ocorrências

import { useEffect, useState } from 'react';
import { Ocorrencia } from '../../components/OcorrenciaComponent';
import Filter from '../../components/Filter';
import * as S from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useApp';
import { fetchOcorrencias } from '../../redux/reducers/ocorrenciaReducer';
import { OcorrenciaTS } from '../../types/Ocorrencia';

const Home = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.user);
	const state = useAppSelector((state) => state.ocorrencia);
	const [ocorrencias, setOcorrencias] = useState<OcorrenciaTS[]>([]);

	useEffect(() => {
		const getOcorrencias = () => {
			dispatch(fetchOcorrencias({ token: user.token }));
			setOcorrencias(state.ocorrencias);
		};
		getOcorrencias();
	}, []);
	console.log(state.ocorrencias);
	return (
		<S.Container>
			<S.Wrapper>
				<S.Title>Ocorrências Recentes</S.Title>
				<S.ViewFilter>
					<Filter />
				</S.ViewFilter>
				{state.ocorrencias.map((item) => (
					<Ocorrencia
						key={item.id}
						id={item.id}
						acionamento={item.acionamento}
						num_casas={item.num_casas}
						status={item.status}
						data={new Date(item.data)}
						endereco={{
							cep: item.endereco.cep,
							bairro: item.endereco.bairro,
							cidade: item.endereco.cidade,
							rua: item.endereco.rua,
						}}
						tecnico={{
							id: item.tecnico.id,
							email: item.tecnico.email,
							nome: item.tecnico.nome,
						}}
					/>
				))}
			</S.Wrapper>
		</S.Container>
	);
};

export default Home;
