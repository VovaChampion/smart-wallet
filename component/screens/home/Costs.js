import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import moment from 'moment';
import { connect } from 'react-redux';
import SelectMonth from './lib/SelectMonth';

class Costs extends Component {
  constructor(props){
    super(props)
    this.state = {
      month: moment().format("MMMM YYYY")
    }
  }

  handleMonth= (itemValue) => {
    this.setState({month: itemValue});
  }
  
  render () {
      
    let totalSum = this.props.expenses.reduce((prev,next) => prev + Number(next.sum),0);  

    const filterItems = (arr, query) => {
      return arr.filter(el => el.date.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    }
    
    let totalMonth = filterItems(this.props.expenses, this.state.month).reduce((prev,next) => prev + Number(next.sum),0);

    return (
      <View style={styles.costs}>
        <View style={styles.data}>
          {/* <TouchableOpacity onPress={this.showList}> */}
          {/* <TouchableOpacity onPress={() => props.navigate('CostsList')}> */}
            <SelectMonth 
                handleMonth={this.handleMonth}
            />
            {/* <Text style={styles.title}>{this.state.month}</Text> */}
            {/* <Text style={styles.total}>{this.props.costs} SEK</Text> */}
            {/* <Text style={styles.total}>{this.props.total} SEK</Text> */}
            <Text style={styles.total}>{totalMonth}</Text>
          {/* </TouchableOpacity> */}
        </View>
        <View style={styles.data}>
          <Text style={styles.title}>All expenses</Text>
          <Text style={styles.total}>{totalSum}</Text>
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


const mapStateToProps = (state) => {
  return {
    total: state.total,
    expenses: state.expenses
  }
}
  
export default connect(mapStateToProps)(Costs)

const styles = StyleSheet.create({
  costs: {
    flex:1,
    flexDirection:'row',
    // padding:10,
  },
  data: {
    flex:1,
    backgroundColor:'green',
    width:wp('50%'),
    margin:2,
    borderRadius:10,
    height: hp('15%'),
    justifyContent:'space-between',
  },
  title:  {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    // backgroundColor:'yellow',
    padding:7
  },
  total:{
    padding:10,
    color:'red',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});