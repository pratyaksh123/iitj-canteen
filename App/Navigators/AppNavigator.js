import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from '../Containers/HomeScreen/HomeScreen';
import SplashScreen from '../Containers/SplashScreen/SplashScreen';
import SigninScreen from '../Containers/SigninScreen/SigninScreen';
import PastOrdersScreen from '../Containers/PastOrdersScreen/PastOrderScreen';
import ProfileScreen from '../Containers/ProfileScreen/ProfileScreen';
import QueueScreen from '../Containers/QueueScreen/QueueScreen';

const BottomStack = createBottomTabNavigator(
	{
		HomeScreen: HomeScreen,
		PastOrdersScreen: PastOrdersScreen,
		QueueScreen: QueueScreen
	},
	{
		initialRouteName: 'HomeScreen'
	}
);

const Drawer = createDrawerNavigator(
	{
		HomeScreen: BottomStack,
		ProfileScreen: ProfileScreen
	},
	{
		initialRouteName: 'HomeScreen'
	}
);

const StackNavigator = createStackNavigator(
	{
		MainScreen: SplashScreen,
		SigninScreen: SigninScreen,
		HomeScreen: Drawer
	},
	{
		initialRouteName: 'HomeScreen',
		headerMode: 'none'
	}
);

export default createAppContainer(StackNavigator);
