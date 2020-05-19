import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import moment from 'moment';
// import YearMonthForm from './Month';

export default class Costs extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     costs:'0'
        // }
    }

    render () {
        const month = moment().format("MMMM YYYY");;
        return (
            <View style={styles.costs}>
                <View style={styles.data}>
                    {/* <YearMonthForm /> */}
                    <Text style={styles.title}>{month}</Text>
                    <Text style={styles.total}>{this.props.costs} SEK</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.title}>All expenses</Text>
                </View>
                {/* <View style={styles.icons}>
                    <TouchableOpacity onPress={this.editHandler}>
                        <Feather name="edit" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.plusHandler}>
                        <Entypo name="plus" size={30} color="white" />
                    </TouchableOpacity>
                </View> */}  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    costs: {
        flex:1,
        flexDirection:'row',
        padding:10,
    },
    data: {
        flex:2,
        backgroundColor:'green',
        width:wp('50%'),
        margin:2,
        borderRadius:10,
        height: hp('10%'),
    },
    title:  {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    total:{
        padding:10,
        // paddingTop:10,
        // paddingBottom:10,
        color:'red',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
  });