import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	flex: 1;
	background-color: ${(props) => props.theme.background};
	padding: 20px;
	border: ${(props) => props.theme.border};
	border-radius: 8px;
	gap: 12px;
`;
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

export const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 20px;
`;
