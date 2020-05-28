import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, FlatList, Keyboard, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Button, AsyncStorage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import {setJSExceptionHandler} from 'react-native-exception-handler';
import Header from '../Header';
import Footer from '../Footer';
import Chart from '../Chart';
import Costs from '../Costs';
import DismissKeyboard from '../lib/DismissKeyboard';
import ListCosts from '../ListCosts';


export default class Home extends Component {
  constructor(){
      super();
      this.state = {
          total:0,
          expenses:[
              { key: '1', sum: '100',  date: '12 April 2020' },
              { key: '2', sum: '200', date: '17 April 2020' },
              { key: '3', sum: '300', date: '17 March 2020' },
              { key: '4', sum: '400', date: '8 May 2020' },
          ],
      }
      this.showList = this.showList.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
      this.countTotal = this.countTotal.bind(this);
      this.removeItem = this.removeItem.bind(this);
  }

    showList = () => {
        this.props.navigation.navigate('CostsList', {
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

    submitHandler (sum, date) {

        // console.log(sum);
        // console.log(date);

        const key = Math.random().toString();
        const obj = {'key':key, 'sum':sum, 'date':date};

        if(sum.length > 1){
            this.setState(prevState => ({ 
                expenses: [obj, ...prevState.expenses]}), this.countTotal)
        } else {
            Alert.alert('OOPS', 'Number must be over 2 characters long', [
                {sum: 'Understood', onPress: () => console.log('alert closed') }
            ]);
        }
    };  

    render(){
        return (
            <DismissKeyboard>
              <View style={styles.container}>
                <View style={styles.header}>
                  <Header />
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
        
                <View style={styles.footer}>
                  <Footer submitHandler={this.submitHandler} />
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
      header: {
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