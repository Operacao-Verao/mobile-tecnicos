import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface SettingsItemProps extends TouchableOpacityProps {
	ItemTitle: string;
	ItemSubtitle: string;
	ItemIcon: keyof typeof MaterialIcons.glyphMap;
}

const SettingsItem = ({
	ItemTitle = '',
	ItemSubtitle = '',
	ItemIcon,
	...rest
}: SettingsItemProps) => {
	return (
		<TouchableOpacity className="flex-row w-full space-x-6 pt-5">
			<View className="items-center justify-center">
				<MaterialIcons name={ItemIcon} size={24} color="white" />
			</View>
			<View className="flex-row items-center justify-between flex-1">
				<View>
					<Text className="text-darkTextColor font-semibold text-base">
						{ItemTitle}
					</Text>
					<Text className="text-slate-300 text-sm">{ItemSubtitle}</Text>
				</View>
				<MaterialIcons name="chevron-right" size={24} color="white" />
			</View>
		</TouchableOpacity>
	);
};

export default SettingsItem;
