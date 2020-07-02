import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

class CategoryItem extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const item = this.props.item
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.totalSum}</Text>
        <Text style={styles.itemText}>{item.category}</Text>
        <MaterialIcons  name="expand-more" size={15} color="black" />
      </View>
    )
  } 
}

export default CategoryItem

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor:'#5DADE2', 
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
  itemText: {
    marginRight: 5,
  }
});