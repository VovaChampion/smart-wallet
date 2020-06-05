import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, FlatList, Keyboard, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Button, AsyncStorage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Top from './Top';
import Bottom from './Bottom';
import Chart from './Chart';
import Costs from './Costs';
import DismissKeyboard from '../../lib/DismissKeyboard';
// import ListCosts from '../expenses/ListCosts';


export default class Home extends Component {
  constructor(){
      super();
      this.state = {
          total:0,
          expenses:[
              { key: '1', sum: '100', category: 'car', date: '12 April 2020' },
              { key: '2', sum: '200', category: 'food', date: '17 April 2020' },
              { key: '3', sum: '300', category: 'furniture', date: '17 March 2020' },
              { key: '4', sum: '400', category: 'food', date: '8 May 2020' },
          ],
      }
      this.showList = this.showList.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
      this.countTotal = this.countTotal.bind(this);
      this.removeItem = this.removeItem.bind(this);
  }

    showList = () => {
      this.props.navigation.navigate('ExpensesDetail', {
          allExpenses: this.state.expenses });
    }

    removeItem(key) {
        // console.log(key)
        let newExpenses = this.state.expenses.filter(item => item.key !== key)
        this.setState({expenses: newExpenses},this.countTotal);
    }

    componentDidMount(){
        this.countTotal();
    }

    countTotal(){
        const totalSum = this.state.expenses.reduce((prev,next) => prev + Number(next.sum),0);
        this.setState({total: totalSum})
    }

    submitHandler (sum, date, category) {

        // console.log(sum);
        // console.log(date);

        const key = Math.random().toString();
        const obj = {'key':key, 'sum':sum, 'date':date, 'category':category};

        if(sum.length > 1){
          this.setState(prevState => ({ 
              expenses: [obj, ...prevState.expenses]}), this.countTotal)
              // AsyncStorage.setItem('cost', JSON.stringify(this.state.expenses))
        } else {
            Alert.alert('OOPS', 'Number must be over 2 characters long', [
                {sum: 'Understood', onPress: () => console.log('alert closed') }
            ]);
        }

        AsyncStorage.setItem('cost', JSON.stringify(this.state.expenses))
        AsyncStorage.getAllKeys((err, keys) => {
          AsyncStorage.multiGet(keys, (error, stores) => {
            stores.map((result, i, store) => {
              console.log({ [store[i][0]]: store[i][1] });
              return true;
            });
          });
        });
        // if(sum.length > 1){
        //     this.setState(prevState => ({ 
        //         expenses: [obj, ...prevState.expenses]}), this.countTotal)
        //         AsyncStorage.setItem('cost', JSON.stringify(this.state.expenses))
        // } else {
        //     Alert.alert('OOPS', 'Number must be over 2 characters long', [
        //         {sum: 'Understood', onPress: () => console.log('alert closed') }
        //     ]);
        // }
    };  

    render(){

      // hide yellow warning
      console.disableYellowBox = true;
        return (
            <DismissKeyboard>
              <View style={styles.container}>
                <View style={styles.top}>
                  <Top />
                </View>
                
                <View style={styles.content}>
                  <TouchableOpacity onPress={this.showList}>
                    <Costs costs={this.state.total}  />
                  </TouchableOpacity>
                </View>
                
                {/* <View style={styles.list}>
                  <FlatList
                    data={this.state.expenses}
                    renderItem={({ item }) => (
                      <ListCosts item={item} removeItem={this.removeItem} />
                    )}
                  />
                </View> */}
        
                <View style={styles.chart}>
                  <Chart />
                </View>
        
                <View style={styles.bottom}>
                  <Bottom submitHandler={this.submitHandler} />
                </View>
              </View>
              </DismissKeyboard>
         
          );
        }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      top: {
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
      bottom: {
        flex: 1,
        width:wp('100%'),
      },
      list: {
        flex: 1,
        width:wp('100%'),
        backgroundColor:'red',
        display:'flex',
        flexDirection:'row',
        overflow:'scroll'
    }
});
  

// const errorHandler = (e, isFatal) => {
//   Alert.alert('Unexpected error occured',
//   ` Error: ${(isFatal) ? 'Fatal:' : ''} ${e.name} ${e.message}
//   We have reported this to our team! Please close the app and start again!
//   `,
//   [{
//     sum:'OK'
//   }]);
// }

// setJSExceptionHandler(errorHandler, true);


//  check if something is in AsyncStorage

// AsyncStorage.getAllKeys((err, keys) => {
//   AsyncStorage.multiGet(keys, (error, stores) => {
//     stores.map((result, i, store) => {
//       console.log({ [store[i][0]]: store[i][1] });
//       return true;
//     });
//   });
// });

// remove cost from AsyncStorage
  // let keys = ['cost'];
  // AsyncStorage.multiRemove(keys, (err) => {
  //   console.log('Local storage user info removed!');
  // });


//   useEffect(() => {
//     AsyncStorage.getItem('cost').then((value) => {
//       setExpenses({'cost': value});
//     }).done();
//   }, []);

  // useEffect = async () => {
  //       try{
  //           let totalSum = await AsyncStorage.getItem('cost');
  //           setTotal(totalSum)
  //           console.log(totalSum)
  //       }
  //       catch(error){
  //           alert(error);
  //       }
  //   }

//   if(sum.length > 1){
    // setState({sum:''});
    // setExpenses(prevExpen => {
    //   return [
    //     { sum, key: Math.random().toString(), date },
    //     ...prevExpen
    //   ];
    // });
    
    // AsyncStorage.setItem('cost', JSON.stringify(setExpenses(prevExpen => {
    //   return [
    //     { sum, key: Math.random().toString(), date },
    //     ...prevExpen
    //   ];
    // })));

    // const retrieveData = async () => {
  //   try {

  //     const valueString = await AsyncStorage.getItem('cost');
  //     const totalSum = JSON.parse(valueString);
  //     // console.log(valueString);
  //     setTotal(totalSum);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };