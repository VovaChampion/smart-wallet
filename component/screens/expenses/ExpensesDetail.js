import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, AsyncStorage } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CostItem from './CostItem';


export default function ExpensesDetail(props) {

  // const [expenses, setExpenses] = useState([props.navigation.state.params.allExpenses]);
  const [expenses, setExpenses] = useState(props.navigation.state.params.allExpenses);

  // console.log(expenses)

  // const removeItem = (key) => {
  //   console.log(key)
  //   // setExpenses(prevExpen => {
  //   //   return prevExpen.filter(expenses => expenses.key != key);
      
  //   // });
  //   // AsyncStorage.setItem('cost',JSON.stringify(setExpenses));
  // };


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
        <CostItem item={item} removeItem={props.removeItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width:wp('100%'),
    backgroundColor: '#fff',
    display:'flex',
    flexDirection:'row',
    // justifyContent:'flex-start', 
    // flexWrap: 'wrap',
    // height:hp('10%'),
    overflow:'scroll'
  }
});