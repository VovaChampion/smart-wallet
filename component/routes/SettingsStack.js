import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { MYCOLORS } from '../lib/Styles';
import Header from '../shared/Header';
import Settings from '../screens/settings/Settings';

const screens = {
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Your settings' navigation={navigation} />
      }
    },
  },
}

const SettingsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: MYCOLORS.black,
    headerStyle: { backgroundColor: '#eee', height: 80 },
  }
});

export default SettingsStack;
