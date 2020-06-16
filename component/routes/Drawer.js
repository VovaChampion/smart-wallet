import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
	Home: {
		screen: HomeStack,
	},
	About: {
		screen: AboutStack,
	}
},
	{drawerPosition: 'right'},
);

export default createAppContainer(RootDrawerNavigator);