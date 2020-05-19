import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function ListCosts({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.sum}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    color:'black',
    padding: 6,
    marginTop: 6,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  }
});