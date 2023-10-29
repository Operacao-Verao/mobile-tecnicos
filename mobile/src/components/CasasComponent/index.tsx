import React from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../Routes/tab.routes';
import { useAppDispatch } from '../../redux/hooks/useApp';
import { setCasaId } from '../../redux/reducers/relatorioReducer';

type Props = {
	id: number;
	complemento: string;
	interdicao: 0 | 1;
	index: number;
};

const CasasComponent = ({ id, complemento, interdicao, index }: Props) => {
	const dispatch = useAppDispatch();
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams, 'casas'>>();

	const handleOpenCasa = () => {
		dispatch(setCasaId(id));
		navigation.navigate('casas');
	};

	return (
		<S.Container onPress={handleOpenCasa}>
			<S.Label>Casa {index + 1}</S.Label>

			<S.Row>
				<S.Label>Complemento: </S.Label>
				<S.Info>{complemento}</S.Info>
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
