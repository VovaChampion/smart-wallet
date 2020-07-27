import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { MYCOLORS, FONTS } from '../../lib/Styles';
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
          <Text style={styles.items}>{item.name}</Text>
          <TouchableOpacity onPress={() => this.removeItem(item.id)}> 
            <AntDesign style={styles.delete} name="delete" size={15} color={MYCOLORS.black} />
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
    backgroundColor:MYCOLORS.blue, 
    justifyContent:'space-between',
    color:MYCOLORS.black,
    padding: 10,
    marginTop: 6,
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
  delete: {
    // textAlign:'right',
  },
  items: {
    marginRight: 5,
    color:MYCOLORS.black,
    fontFamily: FONTS.pr
  }
});
