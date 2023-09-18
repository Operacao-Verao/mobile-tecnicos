import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import * as S from './styles';

interface SettingsItemProps extends TouchableOpacityProps {
	ItemTitle: string | undefined;
	ItemSubtitle: string | undefined;
	IconColor: string;
	hasRight?: boolean;
	FeatherIcon?: boolean;
	ItemIcon?: keyof typeof MaterialIcons.glyphMap;
	ItemIconFeather?: keyof typeof Feather.glyphMap;
}

const SettingsItem = ({
	ItemTitle = '',
	ItemSubtitle = '',
	IconColor = 'white',
	ItemIcon,
	hasRight = false,
	FeatherIcon = false,
	ItemIconFeather,
	...rest
}: SettingsItemProps) => {
	return (
		<S.Button {...rest}>
			<S.Icon>
				{FeatherIcon ? (
					<Feather name={ItemIconFeather} size={24} color={IconColor} />
				) : (
					<MaterialIcons name={ItemIcon} size={24} color={IconColor} />
				)}
			</S.Icon>
			<S.Content>
				<S.TextContent>
					<S.ItemTitle>{ItemTitle}</S.ItemTitle>
					<S.ItemSubtitle>{ItemSubtitle}</S.ItemSubtitle>
				</S.TextContent>
				{hasRight && (
					<MaterialIcons name="chevron-right" size={24} color={IconColor} />
				)}
			</S.Content>
		</S.Button>
	);
};

export default SettingsItem;
