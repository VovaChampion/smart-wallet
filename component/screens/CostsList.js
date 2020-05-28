import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, AsyncStorage } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ListCosts from '../ListCosts';

export default function CostsList(props) {
  // const [expenses, setExpenses] = useState([
  //   { sum: '200', key: '1', monthYear: '12 April 2020' },
  //   { sum: '100', key: '2', monthYear: '17 April 2020' },
  //   { sum: '500', key: '3', monthYear: '8 May 2020' }
  // ]);

  // const [expenses, setExpenses] = useState([props.navigation.state.params.allExpenses]);
  const [expenses, setExpenses] = useState(props.navigation.state.params.allExpenses);

  // console.log(expenses)

  const removeItem = (key) => {
    // console.log(key)
    setExpenses(prevExpen => {
      return prevExpen.filter(expenses => expenses.key != key);
      
    });
    AsyncStorage.setItem('cost',JSON.stringify(setExpenses));
  };


  // dislayCost = async () => {
    //     try{
    //         let cost = await AsyncStorage.getItem('cost');
    //         alert(cost);
    //     }
    //     catch(error){
    //         alert(error);
    //     }
    // }

  // _keyExtractor = (item, index) => item.key.toString();

  // console.log(props.navigation.state.params.allExpenses);
  // console.log(props.navigation.state.params.allExpenses[0].date);
  
  return (
    <View style={styles.list}>
      <FlatList
        data={expenses}
        renderItem={({ item }) => (
        <ListCosts item={item} removeItem={removeItem} />
        )}
        // _keyExtractor={this._keyExtractor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  list: {
    flex: 1,
    width:wp('100%'),
    // backgroundColor:'red',
    display:'flex',
    flexDirection:'row',
    // justifyContent:'flex-start', 
    // flexWrap: 'wrap',
    // height:hp('10%'),
    overflow:'scroll'
  }
});