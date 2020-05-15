import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {setJSExceptionHandler} from 'react-native-exception-handler';
import Header from './component/Header';
import Footer from './component/Footer';
import Chart from './component/Chart';


export default function App() {
  // const [income, setIncome] = useState('');
  // const [expenses, setExpenses] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      
      <View style={styles.content}>
        <Text>Some text</Text>
      </View>

      <View style={styles.chart}>
        <Chart />
      </View>

      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    // paddingTop:15,
    marginTop:hp('5%'),
    flex: 0.15,
    width:wp('100%'),
  },
  content: {
    flex: 0.3,
    width:wp('100%'),
  },
  chart: {
    flex: 0.4,
  },
  footer: {
    flex: 0.15,
    width:wp('100%'),
  },
});

const errorHandler = (e, isFatal) => {
  Alert.alert('Unexpected error occured',
  ` Error: ${(isFatal) ? 'Fatal:' : ''} ${e.name} ${e.message}
  We have reported this to our team! Please close the app and start again!
  `,
  [{
    text:'OK'
  }]);
}

setJSExceptionHandler(errorHandler, true);
