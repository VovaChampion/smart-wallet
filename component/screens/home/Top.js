import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity} from 'react-native';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather, Entypo } from '@expo/vector-icons';
import { MYCOLORS, FONTS } from '../../lib/Styles';


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
          {/* <Picker
              selectedValue={this.state.dashboardName}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => this.setState.dashboardName(itemValue)}>
              <Picker.Item label="Family" value="Family" />
              <Picker.Item label="Work" value="Work" />
          </Picker> */}
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
    color: MYCOLORS.black,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: FONTS.pr
  },
  icons:{
    paddingLeft:20,
    flexDirection:'row',
  },
  // picker: {
  //   height:5,
  //   width:'auto',
  //   color: '#fff',
  // }
});
