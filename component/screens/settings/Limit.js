import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { MYCOLORS, FONTS } from '../../lib/Styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { updateLimit } from '../../../src/actions/costAction';
import MyPopup from '../../lib/MyPopup';


class Limit extends Component {
  constructor(props){
    super(props)
    this.state = {
      text:'',
      myLimit: this.props.limit.lim,
      openLimit: false,
      modalOpen: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (val) =>{
    let newVal = '';
    let numbers = '0123456789';

    for (var i=0; i < val.length; i++) {
      if(numbers.indexOf(val[i]) > -1 ) {
        newVal = newVal + val[i];
      } else {
        alert("please enter numbers only");
      }
    }
    this.setState({myLimit: newVal})
  }

  submit = () => {
    let lim = {'lim':this.state.myLimit};
    this.props.updateLimit(lim);
    this.props.changeToggle(false);
  }

  //show popup Successful
  showModal = () => {
    this.setState({
      modalOpen: true
    }, () => {
      console.log(this.state.modalOpen)
       this.timeout = setTimeout(() => {
         this.setState({
           modalOpen: false
         })
        }, 1500);
      }
    );
    
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }
  
  render(){   
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Here you can enter your spending limit</Text>
        <View style={styles.item}>
          <TextInput 
            // style={styles.items} 
            keyboardType ="numeric"
            autoCorrect={false}
            onChangeText={ this.handleInputChange }
            value={this.state.myLimit} 
          />
        </View>

        <Button onPress={ this.submit } onPressIn={ this.showModal } title='submit' />
        
        <MyPopup visible={this.state.modalOpen}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>The limit successfully changed</Text>
          </View>
        </MyPopup>  
      </View> 
    )
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLimit: (lim) => { dispatch(updateLimit(lim))}
  }
}

const mapStateToProps = (state) => {
  return {
    limit: state.limit,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Limit)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent:'space-between',
    color:MYCOLORS.black,
    marginTop: 6,
    width:wp('81%'),
    shadowOffset: { width: 1, height: 1 },
    shadowColor: MYCOLORS.black,
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  item: {
    flexDirection: 'row',
    // backgroundColor:MYCOLORS.blue, 
    justifyContent:'space-between',
    color:MYCOLORS.black,
    padding: 10,
    marginBottom:10,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
    // width:'85%',
    // marginLeft:'7%',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: MYCOLORS.black,
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  items: {
    marginRight: 5,
    color:MYCOLORS.black,
    fontFamily: FONTS.pr
  },
  modal: {
    width:wp('70%'),
    height:hp('10%'),
    backgroundColor: MYCOLORS.green,
    elevation: 30,
    padding: 10,
    borderRadius: 10,
  },
  modalText: {
    fontWeight:'bold',
    fontSize:16,
    paddingTop:12,
    textAlign:'center',
    fontFamily: FONTS.pr
  },
  text:{
    padding: 10,
    fontSize:16,
    fontFamily: FONTS.pr
  }
});
