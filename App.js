import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {setJSExceptionHandler} from 'react-native-exception-handler';
import Header from './component/Header';
import Footer from './component/Footer';
import Chart from './component/Chart';
import Coast from './component/Costs';


export default function App() {
  // const [income, setIncome] = useState('');
  // const [expenses, setExpenses] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      
      <View style={styles.content}>
        <Coast />
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
    marginTop:hp('5%'),
    flex: 1,
    width:wp('100%'),
  },
  content: {
    flex: 2,
    width:wp('100%'),
  },
  chart: {
    flex: 3,
  },
  footer: {
    flex: 1,
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
