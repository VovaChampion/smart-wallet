import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MYCOLORS, FONTS } from '../../lib/Styles';
import { connect } from 'react-redux';
import { deleteCost } from '../../../src/actions/costAction';


class CostItem extends Component {
  constructor(props){
    super(props)
  }

  removeItem = () =>{
    this.props.deleteCost(this.props.item.key);
  }
  
  render(){
    const item = this.props.item
    // console.log(parseFloat(this.props.item.sum))
    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.items}>{parseFloat(item.sum).toLocaleString(undefined, {minimumFractionDigits: 2})}</Text>
          <Text style={styles.items}>{item.category}</Text>
          <Text style={styles.items}>{item.date}</Text>
          <TouchableOpacity onPress={() => this.removeItem(item.key)}> 
            <AntDesign style={styles.delete} name="delete" size={15} color={MYCOLORS.black} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCost: (key) => { dispatch(deleteCost(key))}
  }
}

export default connect(null, mapDispatchToProps)(CostItem)

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor:MYCOLORS.blue,  
    justifyContent:'space-between',
    color:MYCOLORS.black,
    padding: 10,
    marginTop: 6,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  items: {
    color:MYCOLORS.black,
    fontFamily: FONTS.pr
  },
  delete: {
    textAlign:'right',
  }
});
