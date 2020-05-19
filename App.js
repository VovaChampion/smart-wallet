import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {setJSExceptionHandler} from 'react-native-exception-handler';
import Header from './component/Header';
import Footer from './component/Footer';
import Chart from './component/Chart';
import Costs from './component/Costs';
import ListCosts from './component/ListCosts';
import DismissKeyboard from './component/lib/DismissKeyboard';


export default function App() {
  const [total, setTotal] = useState('0');
  const [expenses, setExpenses] = useState([
    { sum: '200', key: '1' },
    { sum: '100', key: '2' },
    { sum: '500', key: '3' }
  ]);
  
  useEffect(() => {
    const totalSum = expenses.reduce((prev,next) => prev + Number(next.sum),0);
    setTotal(totalSum)
    console.log(totalSum)
  }, [expenses]);

  const pressHandler = (key) => {
    setExpenses(prevExpen => {
      return prevExpen.filter(expenses => expenses.key != key);
    });
  };

  const submitHandler = (sum) => {
    console.log(sum);
    if(sum.length > 1){
      // setState({sum:''});
      setExpenses(prevExpen => {
        return [
          { sum, key: Math.random().toString() },
          ...prevExpen
        ];
      });
      // this.setState({sum:''});
      
    } else {
      Alert.alert('OOPS', 'Number must be over 2 characters long', [
        {sum: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        
        <View style={styles.content}>
          <Costs costs={total} />
        </View>

        <View style={styles.list}>
          <FlatList
            data={expenses}
            renderItem={({ item }) => (
              <ListCosts item={item} pressHandler={pressHandler} />
            )}
          />
        </View>


        <View style={styles.chart}>
          <Chart />
        </View>

        <View style={styles.footer}>
          <Footer submitHandler={submitHandler} />
        </View>
      </View>
      </DismissKeyboard>
 
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
    flex: 1,
    width:wp('100%'),
  },
  chart: {
    flex: 3,
  },
  footer: {
    flex: 1,
    width:wp('100%'),
  },
  list: {
    flex: 1,
    width:wp('100%'),
    backgroundColor:'red'
  },
});

const errorHandler = (e, isFatal) => {
  Alert.alert('Unexpected error occured',
  ` Error: ${(isFatal) ? 'Fatal:' : ''} ${e.name} ${e.message}
  We have reported this to our team! Please close the app and start again!
  `,
  [{
    sum:'OK'
  }]);
}

setJSExceptionHandler(errorHandler, true);