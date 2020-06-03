import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/home/Home';
import ExpensesDetail from '../screens/expenses/ExpensesDetail';
import Header from '../shared/Header';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
        return {
            headerTitle: () => <Header title='Smart Wallet' navigation={navigation} />
        }
    },
  },
  ExpensesDetail: {
    screen: ExpensesDetail,
    navigationOptions: ({ navigation }) => ({
        title: 'List of expenses',
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


