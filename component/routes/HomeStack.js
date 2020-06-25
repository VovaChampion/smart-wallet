import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/home/Home';
import Header from '../shared/Header';
import CostDetailsMonth from '../screens/expenses/CostDetailsMonth';
import CostDetailsYear from '../screens/expenses/CostDetailsYear';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Smart Wallet' navigation={navigation} />
      }
    },
  },
  CostDetailsMonth: {
    screen: CostDetailsMonth,
    navigationOptions: ({ navigation }) => ({
      title: 'Expenses for the month',
    }),
  },
  CostDetailsYear: {
    screen: CostDetailsYear,
    navigationOptions: ({ navigation }) => ({
      title: 'Expenses for the year',
    }),
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default HomeStack;


