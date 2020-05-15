import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Footer extends Component {

    plusHandler() {
    alert('You want to add new expenses')
    }

    render () {
        return (
            <View style={styles.footer}>
                <TouchableOpacity onPress={this.plusHandler}>
                    
                    <AntDesign 
                        style={styles.icon} 
                        name="pluscircleo" 
                        size={30} 
                        color="black" 
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        position:"absolute",
        bottom: 0,
        height:60,
        backgroundColor: '#85C1E9',
        width:wp('100%')
    },
    icon: {
        textAlign:'center',
        paddingTop:15
    }
  });