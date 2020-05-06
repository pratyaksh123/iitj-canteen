import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
<<<<<<< HEAD
import { createBottomTabNavigator } from 'react-navigation-tabs';
=======
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
>>>>>>> 7a7f3d9e82d112bcb58c394a952b44f58c10a7aa
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from '../Containers/HomeScreen/HomeScreen';
import SplashScreen from '../Containers/SplashScreen/SplashScreen';
import SigninScreen from '../Containers/SigninScreen/SigninScreen';
import PastOrdersScreen from '../Containers/PastOrdersScreen/PastOrderScreen';
import ProfileScreen from '../Containers/ProfileScreen/ProfileScreen';
import QueueScreen from '../Containers/QueueScreen/QueueScreen';

<<<<<<< HEAD
const BottomStack = createBottomTabNavigator(
	{
		HomeScreen: HomeScreen,
		PastOrdersScreen: PastOrdersScreen,
		QueueScreen: QueueScreen
	},
	{
		initialRouteName: 'HomeScreen'
=======
import React from 'react';
import { View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

const BottomStack = createMaterialBottomTabNavigator(
	{
		PastOrdersScreen: {
			screen: PastOrdersScreen,
			navigationOptions: {
				tabBarLabel: 'PastOrders',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<MaterialCommunityIcons style={{ color: tintColor }} size={25} name={'food'} />
					</View>
				)
			}
		},
		HomeScreen: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarLabel: 'Home',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Ionicon style={{ color: tintColor }} size={25} name={'ios-home'} />
					</View>
				)
			}
		},
		QueueScreen: {
			screen: QueueScreen,
			navigationOptions: {
				tabBarLabel: 'OrderQueue',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<MaterialIcon style={{ color: tintColor }} size={25} name={'queue'} />
					</View>
				)
			}
		}
	},
	{
		initialRouteName: 'HomeScreen',
		barStyle: {
			backgroundColor: '#c2c2d6',
			borderTopLeftRadius: 20,
			borderTopRightRadius: 20,
			overflow: 'hidden'
		}
>>>>>>> 7a7f3d9e82d112bcb58c394a952b44f58c10a7aa
	}
);

const Drawer = createDrawerNavigator(
	{
<<<<<<< HEAD
		HomeScreen: BottomStack,
		ProfileScreen: ProfileScreen
	},
	{
		initialRouteName: 'HomeScreen'
=======
		HomeStack: BottomStack,
		ProfileScreen: ProfileScreen
	},
	{
		initialRouteName: 'HomeStack'
>>>>>>> 7a7f3d9e82d112bcb58c394a952b44f58c10a7aa
	}
);

const StackNavigator = createStackNavigator(
	{
<<<<<<< HEAD
		MainScreen: SplashScreen,
		SigninScreen: SigninScreen,
		HomeScreen: Drawer
	},
	{
		initialRouteName: 'HomeScreen',
=======
		SplashScreen: SplashScreen,
		LoginFlow: SigninScreen,
		MainFlow: Drawer
	},
	{
		initialRouteName: 'SplashScreen',
>>>>>>> 7a7f3d9e82d112bcb58c394a952b44f58c10a7aa
		headerMode: 'none'
	}
);

export default createAppContainer(StackNavigator);
