import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.background};
`;

export const Wrapper = styled.ScrollView`
	padding: 20px;
`;

export const Title = styled.Text`
	color: ${(props) => props.theme.color};
	font-family: Poppins_600SemiBold;
	font-size: 24px;
	text-align: center;
	margin-bottom: 20px;
`;

export const Form = styled.View`
	gap: 20px;
	padding-top: 20px;
`;

export const Label = styled.Text`
	color: ${(props) => props.theme.color};
	font-family: Poppins_500Medium;
	margin: 0 0 -8px 4px;
`;

export const SmallLabel = styled.Text`
	color: ${(props) => props.theme.color};
	font-family: Poppins_400Regular;
	font-size: 12px;
	margin: 0 0 -4px 4px;
`;

export const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 20px;
`;

export const Column = styled.View`
	gap: 15px;
`;

export const ButtonImage = styled.TouchableOpacity`
	background-color: ${(props) => props.theme.background};
	border: ${(props) => props.theme.border};
	flex: 1;
	background-color: white;
	padding: 10px;
	border-radius: 6px;
`;

export const Button = styled.TouchableOpacity`
	padding: 20px;
	background-color: #0ea5e9;
	border-radius: 9999px;
`;

export const ButtonTextImage = styled.Text`
	font-family: Poppins_400Regular;
`;

export const ButtonText = styled.Text`
	font-family: Poppins_600SemiBold;
	color: #fff;
	font-weight: 600;
	text-align: center;
`;
