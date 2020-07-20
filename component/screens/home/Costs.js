import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, withNavigation} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import moment from 'moment';
import { MYCOLORS, FONTS } from '../../lib/Styles';
import { connect } from 'react-redux';
import SelectMonth from './lib/SelectMonth';
import SelectYear from './lib/SelectYear';

class Costs extends Component {
  constructor(props){
    super(props)
    this.state = {
      month: moment().format("MMMM YYYY"),
      year: moment().format("YYYY")
    }
  }

  handleMonth = (itemValue) => {
    this.setState({month: itemValue});
    // send selected month to parent (HOME)     
    this.props.sendData(itemValue); 
  }

  handleYear = (itemValue) => {
    this.setState({year: itemValue});
    // send selected year to parent (HOME)     
    this.props.sendYear(itemValue); 
  }
  
  render () {
    
    // filter needed elements 
    const filterItems = (arr, query) => {
      return arr.filter(el => el.date.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    }

    // calculate the total amount of all costs
    let totalYear = filterItems(this.props.expenses, this.state.year).reduce((prev,next) => prev + Number(next.sum),0); 
    let totalMonth = filterItems(this.props.expenses, this.state.month).reduce((prev,next) => prev + Number(next.sum),0);
    // console.log(totalYear);
    // console.log(totalMonth);
    

    return (
      <View style={styles.costs}>
        <View style={styles.data}>
          <TouchableOpacity onPress={this.props.showMonthList}>
            <View style={styles.selectDate}>
              <SelectMonth handleMonth={this.handleMonth}/>
            </View>
            {/* toLocaleString() add spaces for the number  */}
            <Text style={styles.total}>{totalMonth.toLocaleString(undefined, {minimumFractionDigits: 2})}</Text>
            {/* <Text style={styles.total}>{totalMonth.toFixed(2)}</Text> */}
          </TouchableOpacity>
        </View>
        <View style={styles.data}>
          <TouchableOpacity onPress={this.props.showYearList}>
            <View style={styles.selectDate}>
              <SelectYear handleYear={this.handleYear}/>
            </View>
            {/* toLocaleString() add spaces for the number  */}
            <Text style={styles.total}>{totalYear.toLocaleString(undefined, {minimumFractionDigits: 2})}</Text>
          </TouchableOpacity>
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
    expenses: state.expenses,
  }
}

export default connect(mapStateToProps)(Costs);

const styles = StyleSheet.create({
  costs: {
    flex:1,
    flexDirection:'row',
    padding:3,
  },
  data: {
    flex:1,
    backgroundColor:MYCOLORS.blue,
    width:wp('50%'),
    margin:2,
    borderRadius:10,
    height: hp('12%'),
    justifyContent:'space-between',
  },
  total:{
    paddingTop:12,
    color:MYCOLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: FONTS.pr
  },
  selectDate:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
  }
});
