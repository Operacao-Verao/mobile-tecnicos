import React from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../Routes/tab.routes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useApp';
import {
	fetchOneRelatorio,
	setCasaId,
} from '../../redux/reducers/relatorioReducer';
import { setCasaAberta } from '../../redux/reducers/ocorrenciaReducer';

type Props = {
	id: number;
	complemento: string;
	interdicao: 0 | 1;
	index: number;
};

const CasasComponent = ({ id, complemento, interdicao, index }: Props) => {
	const dispatch = useAppDispatch();
	const token = useAppSelector((state) => state.user.token);
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams, 'casas'>>();

	const handleOpenCasa = () => {
		dispatch(setCasaAberta({ id: id }));
		navigation.navigate('casas');
	};

	return (
		<S.Container onPress={handleOpenCasa}>
			<S.Label>Casa {index + 1}</S.Label>

			<S.Row>
				<S.Label>Complemento: </S.Label>
				<S.Info>{complemento ? complemento : 'Não informado'}</S.Info>
			</S.Row>
			<S.Row>
				<S.Label>Interdição: </S.Label>
				<S.Info>
					{interdicao == 0 ? (
						<S.Info>Não Interditado</S.Info>
					) : (
						<S.Info>Interditado</S.Info>
					)}
				</S.Info>
			</S.Row>
		</S.Container>
	);
};

export default CasasComponent;
