import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather, Entypo } from '@expo/vector-icons';


export default class Header extends Component {
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
                
                <Text style={styles.title}>Expenses: {this.state.dashboardName} </Text> 
                {/* <Picker
                    selectedValue={this.state.dashboardName}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => this.setState.dashboardName(itemValue)}>
                    <Picker.Item label="Family" value="Family" />
                    <Picker.Item label="Work" value="Work" />
                </Picker> */}
                <View style={styles.icons}>
                    <TouchableOpacity onPress={this.editHandler}>
                        <Feather name="edit" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.plusHandler}>
                        <Entypo name="plus" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                    

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerTop: {
        backgroundColor:'#85C1E9',
        paddingTop:20,
        height:80,
        flexDirection:'row', 
        flexWrap:'wrap',
        justifyContent: 'center',
    },
    title:  {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    icons:{
        paddingLeft:10,
        flexWrap:'wrap',
    },
    picker: {
        height:5,
        width:'auto',
        color: '#fff',
    }
  });