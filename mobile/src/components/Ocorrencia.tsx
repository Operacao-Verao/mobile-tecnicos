import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { OcorrenciaTS } from '../types/Ocorrencia';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../Routes/tab.routes';

export function Ocorrencia(data: OcorrenciaTS) {
	const formattedDate = data.data?.toLocaleString();
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams, 'home'>>();

	const handleNavigate = () => {
		navigation.navigate('ocorrencia');
	};

	return (
		<View className="h-52 border-2 border-slate-200 rounded-lg justify-around space-y-7 p-4 mt-6">
			<View className="flex-row justify-between items-center">
				<Text className="">{formattedDate}</Text>
				<Text className="px-3 py-2 rounded-full bg-green-100 text-green-500 text-right">
					{data.status}
				</Text>
			</View>
			<Text className="text-sm">{data.relato}</Text>
			<View className="flex-row items-center justify-end">
				<TouchableOpacity
					className="bg-sky-500 px-3 py-3 rounded-md"
					onPress={handleNavigate}
				>
					<Text className="font-semibold text-white text-center">
						Ver detalhes
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
