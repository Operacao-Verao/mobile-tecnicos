import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as S from './styles';

interface SettingsItemProps extends TouchableOpacityProps {
	ItemTitle: string;
	ItemSubtitle: string;
	ItemIcon: keyof typeof MaterialIcons.glyphMap;
	IconColor: string;
}

const SettingsItem = ({
	ItemTitle = '',
	ItemSubtitle = '',
	ItemIcon,
	IconColor,
	...rest
}: SettingsItemProps) => {
	return (
		<S.Button>
			<S.Icon>
				<MaterialIcons name={ItemIcon} size={24} color={IconColor} />
			</S.Icon>
			<S.Content>
				<S.TextContent>
					<S.ItemTitle>{ItemTitle}</S.ItemTitle>
					<S.ItemSubtitle>{ItemSubtitle}</S.ItemSubtitle>
				</S.TextContent>
				<MaterialIcons name="chevron-right" size={24} color={IconColor} />
			</S.Content>
		</S.Button>
	);
};

export default SettingsItem;
