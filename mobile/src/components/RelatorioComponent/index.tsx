import React from 'react';
import { View } from 'react-native';
import { GravidadeStatus } from '../Status';
import { useAppSelector } from '../../redux/hooks/useApp';
import { RelatorioTS } from '../../types/Relatorio';
import { Image } from 'expo-image';
import * as S from './styles';

const RelatorioComponent = () => {
	const relatorio = useAppSelector<RelatorioTS | undefined>(
		(state) => state.ocorrencia.ocorrencia.relatorio
	);

	return (
		<S.Container>
			<S.Row>
				<S.Title>Relatório</S.Title>
				<GravidadeStatus gravidade={relatorio?.gravidade} />
			</S.Row>
			<View>
				<Image source={relatorio?.fotos} />
			</View>
			<S.Column>
				<S.Label>Memorando: </S.Label>
				<S.Info>{relatorio?.memorando}</S.Info>
			</S.Column>
			<View>
				<S.Label>Dados da Vistoria:</S.Label>

				<S.CardBadge>
					{relatorio?.dadosVistoria &&
						Object.entries(relatorio.dadosVistoria).map(
							([itemName, itemValue]) =>
								itemValue === true && (
									<S.ItemBadge key={itemName}>{itemName}</S.ItemBadge>
								)
						)}
				</S.CardBadge>
			</View>
			<S.Column>
				<S.Label>Assunto:</S.Label>
				<S.Info>{relatorio?.assunto}</S.Info>
			</S.Column>
			<S.Row>
				<S.Column>
					<S.Label>Área Afetada:</S.Label>
					<S.Info>{relatorio?.areaAfetada}</S.Info>
				</S.Column>
				<S.Column>
					<S.Label>Tipo Construção:</S.Label>
					<S.Info>{relatorio?.tipoConstrucao}</S.Info>
				</S.Column>
				<S.Column>
					<S.Label>Tipo Talude:</S.Label>
					<S.Info>{relatorio?.tipoTalude}</S.Info>
				</S.Column>
			</S.Row>
			<S.Column>
				<S.Label>Afetados: </S.Label>
				<S.Row>
					<S.AfetadosItem>
						Adultos: {relatorio?.afetados?.adultos}
					</S.AfetadosItem>
					<S.AfetadosItem>
						Crianças: {relatorio?.afetados?.criancas}
					</S.AfetadosItem>
					<S.AfetadosItem>Idosos: {relatorio?.afetados?.idosos}</S.AfetadosItem>
					<S.AfetadosItem>
						Deficientes: {relatorio?.afetados?.especiais}
					</S.AfetadosItem>
					<S.AfetadosItem>
						Enfermos: {relatorio?.afetados?.enfermos}
					</S.AfetadosItem>
					<S.AfetadosItem>
						Feridos: {relatorio?.afetados?.feridos}
					</S.AfetadosItem>
				</S.Row>
			</S.Column>
			<S.Column>
				<S.Label>Animais: </S.Label>
				<S.Row>
					<S.AnimaisItem>Cães: {relatorio?.animais?.caes}</S.AnimaisItem>
					<S.AnimaisItem>Gatos: {relatorio?.animais?.gatos}</S.AnimaisItem>
					<S.AnimaisItem>Aves: {relatorio?.animais?.aves}</S.AnimaisItem>
					<S.AnimaisItem>Equinos: {relatorio?.animais?.equinos}</S.AnimaisItem>
				</S.Row>
			</S.Column>
			<S.RowItem>
				<S.Label>Situação: </S.Label>
				<S.Info>{relatorio?.situacao}</S.Info>
			</S.RowItem>
			<S.RowItem>
				<S.Label>Encaminhamento: </S.Label>
				<S.Info>{relatorio?.encaminhamento}</S.Info>
			</S.RowItem>
			<S.RowItem>
				<S.Label>Ofício: </S.Label>
				<S.Info>{relatorio?.oficio}</S.Info>
			</S.RowItem>
			<S.RowItem>
				<S.Label>Vegetação: </S.Label>
				<S.Info>{relatorio?.vegetacao}</S.Info>
			</S.RowItem>
			{relatorio?.observacoes && (
				<S.RowItem>
					<S.Label>Observação: </S.Label>
					<S.Info>{relatorio?.observacoes}</S.Info>
				</S.RowItem>
			)}
		</S.Container>
	);
};

export default RelatorioComponent;
