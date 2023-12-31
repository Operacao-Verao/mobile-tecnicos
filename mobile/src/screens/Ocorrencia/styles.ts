import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.background};
	padding: 20px;
`;

export const OcorrenciaWrapper = styled.View`
	gap: 16px;
`;

export const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const RowWTBetween = styled.View`
	flex-direction: row;
	align-items: center;
	gap: 25px;
`;

export const Date = styled.Text`
	color: ${(props) => props.theme.colorGray};
	text-transform: capitalize;
	font-size: 16px;
	border: 1.5px solid #94a3b8;
	border-radius: 9999px;
	padding: 7px 12px 2px 14px;
	font-family: Poppins_400Regular;
`;

export const Ocorrencia = styled.View`
	gap: 16px;
	border: 1.5px solid #94a3b8;
	border-radius: 16px;
	padding: 12px;
`;

export const Column = styled.View``;

export const Label = styled.Text`
	color: ${(props) => props.theme.color};
	font-size: 16px;
	font-family: Poppins_500Medium;
`;

export const Info = styled.Text`
	color: ${(props) => props.theme.color};
	text-transform: capitalize;
	font-family: Poppins_400Regular;
	font-size: 13px;
`;

export const CasasText = styled.View`
	margin: 15px 0 10px 5px;
	gap: 5px;
`;

export const Button = styled.TouchableOpacity`
	background-color: #0ea5e9;
	padding: 12px;
	margin-top: 30px;
	border-radius: 6px;
`;

export const ButtonText = styled.Text`
	font-family: Poppins_600SemiBold;
	color: #fff;
	text-align: center;
`;
