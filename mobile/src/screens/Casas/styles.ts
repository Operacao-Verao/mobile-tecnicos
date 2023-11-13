import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.background};
	padding: 20px;
	gap: 15px;
`;

export const Title = styled.Text`
	color: ${(props) => props.theme.color};
	font-family: Poppins_600SemiBold;
	font-size: 24px;
	text-align: center;
`;

export const Label = styled.Text`
	color: ${(props) => props.theme.color};
	font-size: 16px;
	font-family: Poppins_500Medium;
`;

export const Column = styled.View`
	gap: 15px;
`;

export const RowWTBetween = styled.View`
	flex-direction: row;
	align-items: center;
	gap: 25px;
`;

export const Button = styled.TouchableOpacity`
	padding: 20px;
	margin-top: 20px;
	margin-bottom: 50px;
	background-color: #0ea5e9;
	border-radius: 8px;
`;

export const ButtonText = styled.Text`
	font-family: Poppins_600SemiBold;
	color: #fff;
	font-weight: 600;
	text-align: center;
`;
