import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function CostItem({ removeItem, item }) {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
          <Text style={styles.itemSum}>{item.sum}</Text>
          <Text style={styles.itemDate}>{item.category}</Text>
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
    flexDirection: 'row',
    backgroundColor:'yellow', 
    justifyContent:'space-between',
    color:'black',
    padding: 10,
    marginTop: 6,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
    width:'85%',
    marginLeft:'7%',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
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