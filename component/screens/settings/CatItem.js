import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { deleteCat } from '../../../src/actions/costAction';


class CatItem extends Component {
  constructor(props){
    super(props)

  }

  removeItem = () =>{
    this.props.deleteCat(this.props.item.id);
  }
  
  render(){
    const item = this.props.item
    // console.log(item);
    

    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.itemDate}>{item.name}</Text>
          <TouchableOpacity onPress={() => this.removeItem(item.id)}> 
            <AntDesign style={styles.delete} name="delete" size={15} color="black" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCat: (id) => { dispatch(deleteCat(id))}
  }
}

export default connect(null, mapDispatchToProps)(CatItem)

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor:'yellow', 
    justifyContent:'space-between',
    color:'black',
    padding: 10,
    marginTop: 6,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
    width:'85%',
    marginLeft:'7%',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  itemSum: {
    marginRight:20,
    // width:30,
  },
  delete: {
    textAlign:'right',
    backgroundColor:'white', 
  },
  itemDate: {
    marginRight: 5,
  }
});