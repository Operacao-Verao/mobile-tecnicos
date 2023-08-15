import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: #fff;
	height: 208px;
	color: #f8fafc;
	border-radius: 8px;
	border: ${(props) => props.theme.border};
	justify-content: space-around;
	gap: 28px;
	padding: 16px;
	margin-top: 24px;
`;

export const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Address = styled.Text`
	font-family: Poppins_500Medium;
	text-transform: capitalize;
	font-size: 13px;
`;

export const SmallText = styled.Text`
	font-family: Poppins_400Regular;
	font-size: 13px;
`;

export const Button = styled.TouchableOpacity`
	background-color: #0ea5e9;
	padding: 12px;
	border-radius: 6px;
`;

export const ButtonText = styled.Text`
	font-family: Poppins_600SemiBold;
	color: #fff;
	text-align: center;
`;
