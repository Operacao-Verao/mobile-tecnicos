import { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { getAuthDataFromStorage } from '../utils/useStorage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../Routes/tab.routes';
import { Ocorrencia } from '../components/Ocorrencia';
import Filter from '../components/Filter';

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
		<ScrollView className="flex-1 bg-darkBackground">
			<View className="p-5">
				<Text className="font-bold text-2xl text-center text-white">
					Ocorrências Recentes
				</Text>
				<View className="items-end mt-6">
					<Filter />
				</View>
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
			</View>
		</ScrollView>
	);
};

export default Home;
