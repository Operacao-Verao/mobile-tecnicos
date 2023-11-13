import React from 'react';

import { RootStackParams } from '../../Routes/tab.routes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useApp';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { OpenStatus } from '../../components/Status';
import BackButton from '../../components/BackButton';
import RelatorioComponent from '../../components/RelatorioComponent';
import { Loading } from '../../components/Loading';
import { useFormattedDate } from '../../utils';
import * as S from './styles';
import CasasComponent from '../../components/CasasComponent';

const OcorrenciaScreen = () => {
	const dispatch = useAppDispatch();
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams, 'relatorio'>>();
	const loading = useAppSelector((state) => state.ocorrencia.loading);
	const ocorrencia = useAppSelector((state) => state.ocorrencia.ocorrencia);
	const casas = useAppSelector(
		(state) => state.ocorrencia.ocorrencia.endereco.casas
	);
	const date = useFormattedDate(ocorrencia.data);

	const handleCreate = () => {
		navigation.navigate('relatorio');
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<S.Container>
			<S.OcorrenciaWrapper>
				<BackButton />
				<S.Row>
					<S.RowWTBetween>
						<S.Date>{date}</S.Date>
					</S.RowWTBetween>
					<OpenStatus status={ocorrencia.status} />
				</S.Row>
				<S.Ocorrencia>
					<S.Column>
						<S.Label>Endereço:</S.Label>
						<S.Info>
							{ocorrencia.endereco.rua}, {ocorrencia.endereco.bairro},{' '}
							{ocorrencia.endereco.cidade} - {ocorrencia.endereco.numero}
						</S.Info>
						<S.Info>{ocorrencia.endereco.cep}</S.Info>
					</S.Column>
					<S.Column>
						<S.Label>Casas Afetadas:</S.Label>
						<S.Info>{ocorrencia.num_casas}</S.Info>
					</S.Column>
				</S.Ocorrencia>
			</S.OcorrenciaWrapper>
			<S.CasasText>
				<S.Label>Casas Afetadas</S.Label>
				<S.Info>(Clique em uma casa para visualizar)</S.Info>
			</S.CasasText>
			{casas.map((item, index) => (
				<CasasComponent
					key={item.id}
					id={item.id}
					index={index}
					complemento={item.complemento}
					interdicao={item.interdicao}
				/>
			))}
		</S.Container>
	);
};

export default OcorrenciaScreen;
