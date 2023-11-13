import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useApp';
import { fetchOcorrencias } from '../../redux/reducers/ocorrenciaReducer';
import { Ocorrencia } from '../../components/OcorrenciaComponent';
import Filter from '../../components/Filter';
import * as S from './styles';

const Home = () => {
	const dispatch = useAppDispatch();
	const token = useAppSelector((state) => state.user.token);
	const state = useAppSelector((state) => state.ocorrencia) || [];

	useEffect(() => {
		dispatch(fetchOcorrencias({ token: token }));
	}, []);

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
						data={item.data}
						endereco={{
							cep: item.endereco.cep,
							bairro: item.endereco.bairro,
							cidade: item.endereco.cidade,
							rua: item.endereco.rua,
							numero: item.endereco.numero,
							casas: item.endereco.casas.map((casa) => ({
								id: casa.id,
								interdicao: casa.interdicao,
								complemento: casa.complemento,
							})),
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
