import React, { Component } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, AsyncStorag } from 'react-native';
import { Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyPopup from '../../lib/MyPopup';
import { MYCOLORS, FONTS } from '../../lib/Styles';
import moment from 'moment';
import SelectCategory from './lib/SelectCategory';
import SelectDate from './lib/SelectDate';


export default class Bottom extends Component {
  constructor(props){
    super(props)
    this.state = {
      sum:'',
      modalOpen: false,
      date: moment().format("DD MMMM YYYY"),
      category:'food'
    }

    this.submitForm = this.submitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(value) {
    let lastValid = this.state.sum;
    // the validation for number -> the second comma not to be allowed to enter
    // var validNumber = new RegExp(/^\d*\.?\d*$/); // for dot
    var validNumber = new RegExp(/^\d*\,?\d*$/); // for comma
      if (validNumber.test(value)) {
        lastValid = value;
      } else {
        value = this.state.sum;
      }
    this.setState({ sum: lastValid });
  }

  submitForm(){
    // make number with . instead of ,
    const mySum = this.state.sum.replace(/,/g, '.')
    // leave only two decimails after ,
    const newSum = Number(mySum).toFixed(2)
    // send data to Redux-persist
    this.props.submitHandler(newSum, this.state.date, this.state.category);
    // console.log(newSum, this.state.date, this.state.category)
    
    this.setState({ modalOpen: false });
  }

  handleCategory = (itemValue) => {
    this.setState({category: itemValue});
  }

  handleDate = (itemValue) => {
    this.setState({date: itemValue});
  }

  render () {
    return ( 
      <View style={styles.footer}>
        {/* Open modal-form "add a new expense" + clear form */}
        <TouchableOpacity onPress={() => 
          this.setState({ 
            modalOpen: true, 
            sum:'',
            date: moment().format("DD MMMM YYYY"),
            category:'food',
          })}>
          <AntDesign 
            style={styles.icon} 
            name="pluscircleo" 
            size={30} 
            color={MYCOLORS.black} 
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
              keyboardType ="decimal-pad"
              autoCorrect={false}
              placeholder='add expenses'
              onChangeText={ this.handleInputChange }
              value={this.state.sum} 
            />

            <View style={styles.category}>
              <SelectCategory 
                handleCategory={this.handleCategory} 
              />  
            </View>
            <View style={styles.selectDate}>
              <SelectDate 
                handleDate={this.handleDate}
              />
            </View>

            <Button onPress={this.submitForm} title='Add your sum' />
          </View>
        </MyPopup>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor:MYCOLORS.blue,
    width:wp('100%'),
    height:'100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  icon: {
    textAlign:'center',
  },
  input: {
    fontFamily: FONTS.pr,
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
    height:hp('60%') ,
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
  category: {
    margin:10,
  },
  selectDate: {
    marginVertical:15,
  }
});
  