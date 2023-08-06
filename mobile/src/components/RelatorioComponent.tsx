import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { GravidadeStatus } from './Status';
import { useAppSelector } from '../redux/hooks/useApp';
import { RelatorioTS } from '../types/Relatorio';
import { Image } from 'expo-image';

const RelatorioComponent = () => {
	const state = useAppSelector<RelatorioTS | undefined>(
		(state) => state.ocorrencia.ocorrencia.relatorio
	);

	return (
		<ScrollView className="space-y-4 border-[1.5px] border-slate-400 rounded-2xl p-3 mt-5 mb-10">
			<View className="flex-row justify-between items-center">
				<Text className="text-lg font-semibold">Relatório</Text>
				<GravidadeStatus status={state?.gravidade} />
			</View>
			<View>
				<Image source={state?.foto} />
			</View>
			<View className="">
				<Text className="text-base font-semibold">Memorando: </Text>
				<Text className="text-sm">{state?.memorando}</Text>
			</View>
			<View className="">
				<Text className="text-base font-semibold mb-2">Dados da Vistoria:</Text>

				<View className="flex-row flex-wrap gap-2">
					{state?.dadoVistoria &&
						Object.entries(state.dadoVistoria).map(
							([itemName, itemValue]) =>
								itemValue === true && (
									<Text
										className="text-sm capitalize bg-slate-100 rounded-full px-2 py-1"
										key={itemName}
									>
										{itemName}
									</Text>
								)
						)}
				</View>
			</View>
			<View>
				<Text className="text-base font-semibold">Assunto: </Text>
				<Text className="text-sm">{state?.assunto}</Text>
			</View>
			<View className="flex-row justify-between items-center">
				<View>
					<Text className="text-base font-semibold">Área Afetada:</Text>
					<Text className="text-sm">{state?.areaAfetada}</Text>
				</View>
				<View>
					<Text className="text-base font-semibold">Tipo Construção:</Text>
					<Text className="text-sm">{state?.tipoConstrucao}</Text>
				</View>
				<View>
					<Text className="text-base font-semibold">Tipo Talude:</Text>
					<Text className="text-sm">{state?.tipoTalude}</Text>
				</View>
			</View>
			<View>
				<Text className="text-base font-semibold">Afetados: </Text>
				<View className="flex-row flex-wrap space-y-[2px] items-center">
					<Text className="text-sm w-1/3">
						Adultos: {state?.afetados?.adultos}
					</Text>
					<Text className="text-sm w-1/3">
						Crianças: {state?.afetados?.criancas}
					</Text>
					<Text className="text-sm w-1/3">
						Idosos: {state?.afetados?.idosos}
					</Text>
					<Text className="text-sm w-1/3">
						Deficientes: {state?.afetados?.especiais}
					</Text>
					<Text className="text-sm w-1/3">
						Enfermos: {state?.afetados?.enfermos}
					</Text>
					<Text className="text-sm w-1/3">
						Feridos: {state?.afetados?.feridos}
					</Text>
				</View>
			</View>
			<View>
				<Text className="text-base font-semibold">Animais: </Text>
				<View className="flex-row flex-wrap space-y-[2px] items-center">
					<Text className="text-sm w-1/4">Cães: {state?.animais?.caes}</Text>
					<Text className="text-sm w-1/4">Gatos: {state?.animais?.gatos}</Text>
					<Text className="text-sm w-1/4">Aves: {state?.animais?.aves}</Text>
					<Text className="text-sm w-1/4">
						Equinos: {state?.animais?.equinos}
					</Text>
				</View>
			</View>
			<View className="flex-row items-center">
				<Text className="text-base font-semibold">Situação: </Text>
				<Text className="text-sm">{state?.situacao}</Text>
			</View>
			<View className="flex-row items-center">
				<Text className="text-base font-semibold">Encaminhamento: </Text>
				<Text className="text-sm">{state?.encaminhamento}</Text>
			</View>
			<View className="flex-row items-center">
				<Text className="text-base font-semibold">Ofício: </Text>
				<Text className="text-sm">{state?.oficio}</Text>
			</View>
			<View className="flex-row items-center">
				<Text className="text-base font-semibold">Vegetação: </Text>
				<Text className="text-sm">{state?.vegetacao}</Text>
			</View>
			{state?.observacoes && <Text>{state?.vegetacao}</Text>}
		</ScrollView>
	);
};

export default RelatorioComponent;
