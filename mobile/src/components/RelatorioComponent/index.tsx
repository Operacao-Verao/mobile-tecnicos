import React from 'react';
import { View } from 'react-native';
import { GravidadeStatus } from '../Status';
import { RelatorioTS } from '../../types/Relatorio';
import * as S from './styles';
import { useFormattedDate } from '../../utils';

type Props = {
	index: number;
	relatorio: RelatorioTS;
};

const RelatorioComponent = ({ relatorio, index }: Props) => {
	const dataGeracao =
		typeof relatorio.dataGeracao === 'string'
			? useFormattedDate(new Date(relatorio.dataGeracao))
			: relatorio.dataGeracao !== undefined
			? useFormattedDate(relatorio.dataGeracao)
			: null;

	const dataAtendimento =
		typeof relatorio.dataAtendimento === 'string'
			? useFormattedDate(new Date(relatorio.dataAtendimento))
			: relatorio.dataAtendimento !== undefined
			? useFormattedDate(relatorio.dataAtendimento)
			: null;

	return (
		<S.Container>
			<S.Row>
				<S.Title>Relatório {index + 1}</S.Title>
				<GravidadeStatus gravidade={relatorio?.gravidade} />
			</S.Row>
			<S.Column>
				<S.Label>Memorando: </S.Label>
				<S.Info>{relatorio?.memorando}</S.Info>
			</S.Column>
			<View>
				<S.Label>Dados da Vistoria:</S.Label>

				<S.CardBadge>
					{relatorio?.dadosVistoria == undefined ? (
						<S.Info>Nenhum</S.Info>
					) : (
						Object.entries(relatorio.dadosVistoria).map(
							([itemName, itemValue]) =>
								itemValue === true && (
									<S.ItemBadge key={itemName}>{itemName}</S.ItemBadge>
								)
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
					<S.Info>
						{relatorio?.areaAfetada === 0
							? 'Não Especificado'
							: relatorio?.areaAfetada === 1
							? 'Pública'
							: 'Particular'}
					</S.Info>
				</S.Column>
				<S.Column>
					<S.Label>Tipo Construção:</S.Label>
					<S.Info>
						{relatorio?.tipoConstrucao === 0
							? 'Não Especificado'
							: relatorio?.tipoConstrucao === 1
							? 'Alvenaria'
							: relatorio?.tipoConstrucao === 2
							? 'Madeira'
							: 'Mista'}
					</S.Info>
				</S.Column>
				<S.Column>
					<S.Label>Tipo Talude:</S.Label>
					<S.Info>
						{relatorio?.tipoTalude === 0
							? 'Não Especificado'
							: relatorio?.tipoTalude === 1
							? 'Natural'
							: relatorio?.tipoTalude === 2
							? 'De Corte'
							: 'Aterro'}
					</S.Info>
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
				<S.Info>{relatorio?.situacaoVitimas}</S.Info>
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
				<S.Info>
					{relatorio?.tipoConstrucao === 0
						? 'Nenhuma'
						: relatorio?.tipoConstrucao === 1
						? 'Rasteira'
						: 'Árvores'}
				</S.Info>
			</S.RowItem>
			<S.RowItem>
				<S.Label>Observação: </S.Label>
				<S.Info>
					{relatorio?.observacoes ? relatorio?.observacoes : 'Não informado'}
				</S.Info>
			</S.RowItem>
			<S.RowItem>
				<S.Label>Data Geração: </S.Label>
				<S.Info>{dataGeracao}</S.Info>
			</S.RowItem>
			<S.RowItem>
				<S.Label>Data Atendimento: </S.Label>
				<S.Info>{dataAtendimento}</S.Info>
			</S.RowItem>
		</S.Container>
	);
};

export default RelatorioComponent;
