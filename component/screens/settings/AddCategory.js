import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { MYCOLORS, FONTS } from '../../lib/Styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { addCat } from '../../../src/actions/costAction';


class AddCategory extends Component {
  constructor(props){
    super(props)
    this.state = {
      text:''
    }
  }

  addItem(){
    let text = this.state.text.toLowerCase();
    const id = Math.random().toString();
    const cat = { 'id':id, 'name':text };
    
    // category must be over 2 characters long 
    if(text.length > 2){
      // category must be uniq 
      if (!this.props.categories.some(e => e.name === text)) {
        this.props.addCat(cat);
        this.setState({text:''});
      } else {
        Alert.alert('Oops', 'This category already exists', [
          {text: 'Ok', onPress: () => console.log('alert closed') }
        ]);
      }
    } else {
    Alert.alert('Oops', 'Category must be over 2 characters long', [
      {text: 'Ok', onPress: () => console.log('alert closed') }
    ]);}
  }

  changeHandler = (val) => {
    this.setState({text:val});
  };
  
  render(){   
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input} 
          placeholder='new category ...'
          onChangeText={this.changeHandler} 
          value={this.state.text} 
        />
        <Button onPress={() => this.addItem(this.state.text)} title='add new category' />
      </View>
    )
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCat: (cat) => { dispatch(addCat(cat))}
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent:'space-between',
    color:MYCOLORS.black,
    padding: 10,
    marginTop: 6,
    width:wp('81%'),
    marginLeft:hp('2%'),
    // borderColor: '#bbb',
    // borderWidth: 1,
    // borderRadius: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: MYCOLORS.black,
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});