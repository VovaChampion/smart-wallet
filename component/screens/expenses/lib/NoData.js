import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NoDate(props) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>There is no data for {props.date}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    marginTop: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  title:{
    padding:20,
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 18,
  }
});
