import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import SettingsStack from './SettingsStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
	Home: {
		screen: HomeStack,
	},
	About: {
		screen: AboutStack,
	},
	Settings: {
		screen: SettingsStack,
	}
},
	{drawerPosition: 'right'},
);

export default createAppContainer(RootDrawerNavigator);