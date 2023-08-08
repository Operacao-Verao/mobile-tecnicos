import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
	flex-direction: row;
	width: 100%;
	gap: 24px;
	padding-top: 20px;
`;

export const Icon = styled.View`
	align-items: center;
	justify-content: center;
`;

export const Content = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	flex: 1;
`;

export const TextContent = styled.View``;

export const ItemTitle = styled.Text`
	color: #fff;
	font-weight: 600;
	font-size: 16px;
`;

export const ItemSubtitle = styled.Text`
	color: #cbd5e1;
	font-size: 14px;
`;
