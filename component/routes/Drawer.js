import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { MYCOLORS } from '../lib/Styles';

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
{ contentOptions: {
		labelStyle: {
			color: MYCOLORS.black
		},
	},
	drawerPosition: 'right',
}
);

export default createAppContainer(RootDrawerNavigator);
