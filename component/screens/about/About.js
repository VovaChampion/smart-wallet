import React from 'react';
import { StyleSheet, View, Text,  Linking, Button, Image } from 'react-native';
import { MYCOLORS, FONTS } from '../../lib/Styles';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is Budgeting? What is a Budget?</Text>
      <Text style={styles.content}>Budgeting is the process of creating a plan to spend your money. 
          This spending plan is called a budget. Creating this spending plan 
          allows you to determine in advance whether you will have enough money 
          to do the things you need to do or would like to do.</Text>
      <Text style={styles.content}>If you don't have enough money to do everything you would like to do, 
          then you can use this planning process to prioritize your spending and 
          focus your money on the things that are most important to you.</Text>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/familybudget.jpg')}
      />
      <Text style={styles.contact}>If you have any questions or suggestions write here</Text>
      <Button onPress={() => Linking.openURL('mailto:vova.champion@gmail.com?subject=SupportSmartWallet&body=Hi') }
      title="support@sw.com" />  
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:10,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: MYCOLORS.white,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    padding:10,
    color: MYCOLORS.black,
    fontFamily: FONTS.pr
  },
  content: {
    fontSize: 16,
    padding:10,
    color: MYCOLORS.black,
    fontFamily: FONTS.pr
  },
  contact: {
    padding:10,
    color: MYCOLORS.black,
    fontFamily: FONTS.pr
  },
  logo: {
    width: '100%',
    height: 200,
  }
});
