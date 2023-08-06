import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import OcorrenciaScreen from '../screens/OcorrenciaScreen';

export type RootStackParams = {
	bottomBar: any;
	home: any;
	login: any;
	ocorrencia: any;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParams>();

const TabRoutes = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: '#0ea5e9',
				tabBarStyle: {
					height: 60,
					paddingTop: 5,
					paddingBottom: 10,
					borderTopWidth: 0,
				},
			}}
		>
			<Tab.Screen
				name="home"
				component={Home}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="home" color={color} size={32} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabRoutes;

export function AppRoutes() {
	return (
		<NavigationContainer independent>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<>
					<Stack.Screen name="login" component={Login} />
					<Stack.Screen
						name="bottomBar"
						component={TabRoutes}
						options={{ headerShown: false }}
					/>
					<Stack.Screen name="ocorrencia" component={OcorrenciaScreen} />
				</>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
