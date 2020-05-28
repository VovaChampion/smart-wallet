import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import CostsList from '../screens/CostsList';


// style for logo in the header
const styles = StyleSheet.create({
    logo: {
        marginTop:15,
        marginLeft: "70%",
    }
});

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
        title: 'Smart Wallet',
        headerBackground: () =>
            <Image
                style={styles.logo}
                source={require('../../assets/images/wallet_icon.png')}
            />
    }),
  },
  CostsList: {
    screen: CostsList,
    navigationOptions: ({ navigation }) => ({
        title: 'List of expenses',
        headerBackground: () =>
            <Image
                style={styles.logo}
                source={require('../../assets/images/wallet_icon.png')}
            />
    }),
  },
};


  
// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);


