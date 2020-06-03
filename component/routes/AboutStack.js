import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import Header from '../shared/Header';
import About from '../screens/about/About';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='About Smart Wallet' navigation={navigation} />
      }
    },
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 },
  }
});

export default AboutStack;