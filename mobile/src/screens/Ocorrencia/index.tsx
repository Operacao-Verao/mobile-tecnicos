// TODO: Usar a requisição do redux pra botar na tela a ocorrência

import React from 'react';
import { Loading } from '../../components/Loading';
import RelatorioComponent from '../../components/RelatorioComponent';
import { OpenStatus } from '../../components/Status';
import { useAppSelector } from '../../redux/hooks/useApp';
import * as S from './styles';
import BackButton from '../../components/BackButton';

const OcorrenciaScreen = () => {
	const loading = useAppSelector((state) => state.ocorrencia.loading);
	const state = useAppSelector((state) => state.ocorrencia.ocorrencia);

	if (loading) {
		return <Loading />;
	}

	return (
		<S.Container>
			<S.OcorrenciaWrapper>
				<S.Row>
					<S.RowWTBetween>
						<BackButton />
						<S.Date>20/05/2023</S.Date>
					</S.RowWTBetween>
					<OpenStatus status={state.status} />
				</S.Row>
				<S.Ocorrencia>
					<S.Card>
						<S.Label>Civil: </S.Label>
						<S.Info>Samantha Zduniak</S.Info>
					</S.Card>
					<S.Card>
						<S.Label>Endereço:</S.Label>
						<S.Info>
							Av. Sete de Setembro, 38 Centro, Franco da Rocha - SP
						</S.Info>
					</S.Card>
					<S.Card>
						<S.Label>Relato: </S.Label>
						<S.Info>{state.relato}</S.Info>
					</S.Card>
				</S.Ocorrencia>
			</S.OcorrenciaWrapper>
			{state.relatorio && <RelatorioComponent />}
		</S.Container>
	);
};

export default OcorrenciaScreen;
