import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	gap: 16px;
	border: 1.5px solid #94a3b8;
	border-radius: 16px;
	padding: 12px;
	margin-top: 20px;
	margin-bottom: 40px;
`;

export const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 8px 0;
	flex-wrap: wrap;
`;

export const RowItem = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 8px 0;
	flex-wrap: wrap;
`;

export const Column = styled.View`
	padding: 8px 0;
	gap: 4px;
`;

export const Title = styled.Text`
	color: ${(props) => props.theme.color};
	font-family: Poppins_500Medium;
	font-size: 18px;
`;

export const Label = styled.Text`
	color: ${(props) => props.theme.color};
	font-family: Poppins_500Medium;
	font-size: 14px;
`;

export const Info = styled.Text`
	color: ${(props) => props.theme.color};
	font-family: Poppins_400Regular;
	font-size: 13px;
`;

export const CardBadge = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	gap: 8px;
	padding: 8px 0;
`;

export const ItemBadge = styled.Text`
	color: #334155;
	font-family: Poppins_400Regular;
	background-color: #f1f5f9;
	font-size: 14px;
	text-transform: capitalize;
	border-radius: 9999px;
	padding: 4px 8px 4px 8px;
`;

export const AfetadosItem = styled.Text`
	color: ${(props) => props.theme.color};
	font-family: Poppins_400Regular;
	font-size: 13px;
	width: 33%;
`;

export const AnimaisItem = styled.Text`
	color: ${(props) => props.theme.color};
	font-size: 13px;
	width: 25%;
`;
