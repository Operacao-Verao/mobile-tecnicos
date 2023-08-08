import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { GravidadeStatus } from '../Status';
import { useAppSelector } from '../../redux/hooks/useApp';
import { RelatorioTS } from '../../types/Relatorio';
import { Image } from 'expo-image';
import * as S from './styles';

const RelatorioComponent = () => {
	const state = useAppSelector<RelatorioTS | undefined>(
		(state) => state.ocorrencia.ocorrencia.relatorio
	);

	return (
		<S.Container>
			<S.Row>
				<S.Title>Relatório</S.Title>
				<GravidadeStatus status={state?.gravidade} />
			</S.Row>
			<View>
				<Image source={state?.foto} />
			</View>
			<S.Column>
				<S.Label>Memorando: </S.Label>
				<S.Info>{state?.memorando}</S.Info>
			</S.Column>
			<View>
				<S.Label>Dados da Vistoria:</S.Label>

				<S.CardBadge>
					{state?.dadoVistoria &&
						Object.entries(state.dadoVistoria).map(
							([itemName, itemValue]) =>
								itemValue === true && (
									<S.ItemBadge key={itemName}>{itemName}</S.ItemBadge>
								)
						)}
				</S.CardBadge>
			</View>
			<S.Column>
				<S.Label>Assunto:</S.Label>
				<S.Info>{state?.assunto}</S.Info>
			</S.Column>
			<S.Row>
				<S.Column>
					<S.Label>Área Afetada:</S.Label>
					<S.Info>{state?.areaAfetada}</S.Info>
				</S.Column>
				<S.Column>
					<S.Label>Tipo Construção:</S.Label>
					<S.Info>{state?.tipoConstrucao}</S.Info>
				</S.Column>
				<S.Column>
					<S.Label>Tipo Talude:</S.Label>
					<S.Info>{state?.tipoTalude}</S.Info>
				</S.Column>
			</S.Row>
			<S.Column>
				<S.Label>Afetados: </S.Label>
				<S.Row>
					<S.AfetadosItem>Adultos: {state?.afetados?.adultos}</S.AfetadosItem>
					<S.AfetadosItem>Crianças: {state?.afetados?.criancas}</S.AfetadosItem>
					<S.AfetadosItem>Idosos: {state?.afetados?.idosos}</S.AfetadosItem>
					<S.AfetadosItem>
						Deficientes: {state?.afetados?.especiais}
					</S.AfetadosItem>
					<S.AfetadosItem>Enfermos: {state?.afetados?.enfermos}</S.AfetadosItem>
					<S.AfetadosItem>Feridos: {state?.afetados?.feridos}</S.AfetadosItem>
				</S.Row>
			</S.Column>
			<S.Column>
				<S.Label>Animais: </S.Label>
				<S.Row>
					<S.AnimaisItem>Cães: {state?.animais?.caes}</S.AnimaisItem>
					<S.AnimaisItem>Gatos: {state?.animais?.gatos}</S.AnimaisItem>
					<S.AnimaisItem>Aves: {state?.animais?.aves}</S.AnimaisItem>
					<S.AnimaisItem>Equinos: {state?.animais?.equinos}</S.AnimaisItem>
				</S.Row>
			</S.Column>
			<S.RowItem>
				<S.Label>Situação: </S.Label>
				<S.Info>{state?.situacao}</S.Info>
			</S.RowItem>
			<S.RowItem>
				<S.Label>Encaminhamento: </S.Label>
				<S.Info>{state?.encaminhamento}</S.Info>
			</S.RowItem>
			<S.RowItem>
				<S.Label>Ofício: </S.Label>
				<S.Info>{state?.oficio}</S.Info>
			</S.RowItem>
			<S.RowItem>
				<S.Label>Vegetação: </S.Label>
				<S.Info>{state?.vegetacao}</S.Info>
			</S.RowItem>
			{state?.observacoes && (
				<S.RowItem>
					<S.Label>Observação: </S.Label>
					<S.Info>{state?.observacoes}</S.Info>
				</S.RowItem>
			)}
		</S.Container>
	);
};

export default RelatorioComponent;
