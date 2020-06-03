import React, { Component } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Modal, AsyncStorag } from 'react-native';
import { Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MyPopup from '../../lib/MyPopup';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';


export default class Bottom extends Component {
    constructor(props){
        super(props)
        this.state = {
            sum:'',
            modalOpen: false,
            date: moment().format("DD MMMM YYYY")
        }

        this.submitForm = this.submitForm.bind(this);
    }

    changeHandler = (val) => {
        let newVal = '';
        let numbers = '0123456789';

        for (var i=0; i < val.length; i++) {
            if(numbers.indexOf(val[i]) > -1 ) {
                newVal = newVal + val[i];
            }
            else {
                // your call back function
                alert("please enter numbers only");
            }
        }
        this.setState({ sum: newVal });
    };

    handleChange(value) {
        this.setState({date: value})
    }

    submitForm(){
        this.props.submitHandler(this.state.sum, this.state.date);
        this.setState({ modalOpen: false });
    }

    render () {
        return (
            <View style={styles.footer}>

                <TouchableOpacity onPress={() => this.setState({ modalOpen: true })}>
                    <AntDesign 
                        style={styles.icon} 
                        name="pluscircleo" 
                        size={30} 
                        color="black" 
                    />
                </TouchableOpacity>

                <MyPopup visible={this.state.modalOpen}>
                    <View style={styles.modal}>
                        <TouchableOpacity onPress={() => this.setState({ modalOpen: false })}>
                            <AntDesign 
                                // style={{...styles.icon, ...styles.iconClose}} 
                                style={styles.iconClose}
                                name="close" 
                                size={30} 
                                color="black" 
                            />
                        </TouchableOpacity>
                        <TextInput 
                            style={styles.input} 
                            keyboardType ="numeric"
                            
                            autoCorrect={false}
                            placeholder='add expenses'
                            onChangeText={this.changeHandler} 
                            value={this.state.sum} 
                        />

                        <DatePicker
                                style={{width: 200}}
                                date={this.state.date}
                                mode="date"
                                placeholder="select date"
                                format="DD MMMM YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                }}
                                onDateChange={(date) => {this.setState({date: date})}}
                            />
                        {/* <TextInput 
                            style={styles.inputHide} 
                            value={this.state.monthYear} 
                        /> */}

                        <Button style={styles.button} onPress={this.submitForm} title='Add your sum' />
                    </View>
                </MyPopup>
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
    },
    input: {
        marginBottom:10,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: 'white',
        borderRadius: 10,
        height:40,
    },
    inputHide:{
        display:'none',
    },
    modal: {
        width:wp('90%'),
        height:hp('50%') ,
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#D3D3D3',
        elevation: 20,
        padding: 10,
        borderRadius: 10,
    },
    iconClose: {
        textAlign:'right',
        paddingBottom:20,
    },
    button: {
        // color:'green',
        // shadowColor: 'rgba(0, 0, 0, 1)',
        // shadowOpacity: 0.8,
        // elevation: 6,
        // shadowRadius: 15 ,
        // shadowOffset : { width: 1, height: 13},
    }
});

  