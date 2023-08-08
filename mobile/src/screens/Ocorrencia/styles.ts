import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.background};
	padding: 20px;
`;

export const OcorrenciaWrapper = styled.View`
	gap: 16px;
`;

export const TopBar = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Date = styled.Text`
	color: ${(props) => props.theme.colorGray};
	font-size: 16px;
	border: 1.5px solid #94a3b8;
	border-radius: 9999px;
	padding: 4px 12px 4px 14px;
`;

export const Ocorrencia = styled.View`
	gap: 16px;
	border: 1.5px solid #94a3b8;
	border-radius: 16px;
	padding: 12px;
`;

export const Card = styled.View``;

export const Label = styled.Text`
	color: ${(props) => props.theme.color};
	font-size: 16px;
	font-weight: 600;
`;

export const Info = styled.Text`
	color: ${(props) => props.theme.color};
	font-size: 14px;
`;
