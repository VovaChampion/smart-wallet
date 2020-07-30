import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity} from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { MYCOLORS } from '../../lib/Styles';


export default class Top extends Component {
  constructor(){
    super()
    this.state = {
        dashboardName:'Family'
    }
  }
  plusHandler() {
    alert('You want to add new expenses')
  }

  editHandler() {
    alert('You want to edit name')
  }

  render () {
    return (
      <View style={styles.headerTop}>
        <View style={styles.icons}>
          <Text style={styles.title}>Expenses: {this.state.dashboardName} </Text> 
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={this.editHandler}>
            <Feather name="edit" size={30} color={MYCOLORS.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.plusHandler}>
            <Entypo name="plus" size={30} color={MYCOLORS.black} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTop: {
    flex:1,
    backgroundColor:MYCOLORS.blue,
    height:'100%',
    flexDirection:'row', 
    flexWrap:'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  title:  {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons:{
    paddingLeft:20,
    flexDirection:'row',
  },
});
