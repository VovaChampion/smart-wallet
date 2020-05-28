import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ListCosts({ removeItem, item }) {
  return (
    <TouchableOpacity>
    <View style={styles.item}>
        <Text style={styles.itemSum}>{item.sum}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
        <TouchableOpacity onPress={() => removeItem(item.key)}> 
            <AntDesign style={styles.delete} name="delete" size={15} color="black" />
        </TouchableOpacity>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    // display:'flex',
    flexDirection: 'row',
    backgroundColor:'yellow', 
    justifyContent:'space-between',
    color:'black',
    padding: 6,
    marginTop: 6,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    width:'70%',
    marginLeft:'15%'
  },
  itemSum: {
    marginRight:20,
  },
  delete: {
    textAlign:'right',
    backgroundColor:'white', 
  },
  itemDate: {
    marginRight: 20
  }
});