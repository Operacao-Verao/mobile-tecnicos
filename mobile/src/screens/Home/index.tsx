import { useEffect } from 'react';

import { getAuthDataFromStorage } from '../../utils/useStorage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../Routes/tab.routes';
import { Ocorrencia } from '../../components/OcorrenciaComponent';
import Filter from '../../components/Filter';
import * as S from './styles';

const Home = () => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams, 'login'>>();
	const date = new Date();

	useEffect(() => {
		const fetchAuthData = async () => {
			const authData = await getAuthDataFromStorage();
			if (!authData?.token) {
				navigation.navigate('bottomBar', { screen: 'login' });
			}
		};

		fetchAuthData();
	}, []);

	return (
		<S.Container>
			<S.Wrapper>
				<S.Title>Ocorrências Recentes</S.Title>
				<S.ViewFilter>
					<Filter />
				</S.ViewFilter>
				<Ocorrencia
					acionamento={'acionamento'}
					relato={
						'Enchente na vilinha com deslizamento em duas casas no mesmo número'
					}
					num_casas={3}
					status={'Em Aberto'}
					data={date}
				/>
				<Ocorrencia
					acionamento={'acionamento'}
					relato={
						'Enchente na vilinha com deslizamento em duas casas no mesmo número'
					}
					num_casas={3}
					status={'Em Aberto'}
					data={date}
				/>
				<Ocorrencia
					acionamento={'acionamento'}
					relato={
						'Enchente na vilinha com deslizamento em duas casas no mesmo número'
					}
					num_casas={3}
					status={'Em Aberto'}
					data={date}
				/>
				<Ocorrencia
					acionamento={'acionamento'}
					relato={
						'Enchente na vilinha com deslizamento em duas casas no mesmo número'
					}
					num_casas={3}
					status={'Em Aberto'}
					data={date}
				/>
			</S.Wrapper>
		</S.Container>
	);
};

export default Home;
