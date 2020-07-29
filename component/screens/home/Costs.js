import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, withNavigation} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import moment from 'moment';
import { MYCOLORS, FONTS } from '../../lib/Styles';
import { connect } from 'react-redux';
import Emoji from 'react-native-emoji';
import SelectMonth from './lib/SelectMonth';
import SelectYear from './lib/SelectYear';
import ProgressBar from './lib/ProgressBar';

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

    // Limit: good is upto 90%, so so is between 90%-110%, bad is more than 110%
    var limit = this.props.limit.lim;
    var limitMin = limit*0.9;
    var limitMax = limit*1.1; 
    
    selectEmoji = () => {
      if(totalMonth <= limitMin) {
        return <Emoji name=":grinning:" style={{fontSize: 65}} />
      } else if (totalMonth <= limitMax) {
        return <Emoji name=":neutral_face:" style={{fontSize: 65}} />
      } else {
        return <Emoji name=":pensive:" style={{fontSize: 65}} />
      }
    }

    return (
      <View style={styles.costs}>
        <View style={styles.dataMonth}>
          <TouchableOpacity onPress={this.props.showMonthList}>
            <View style={styles.selectDate}>
              <SelectMonth handleMonth={this.handleMonth}/>
            </View>
            {/* toLocaleString() add spaces for the number  */}
            <Text style={[styles.total, totalMonth <= limitMin ? {color:MYCOLORS.white} : (totalMonth <= limitMax ? {color:MYCOLORS.orange} : {color:MYCOLORS.red}) ]}>{totalMonth.toLocaleString(undefined, {minimumFractionDigits: 2})}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.emoji}>
          { selectEmoji() }
        </View>

        <View style={styles.dataYear}>
          <TouchableOpacity onPress={this.props.showYearList}>
            <View style={styles.selectDate}>
              <SelectYear handleYear={this.handleYear}/>
            </View>
            {/* toLocaleString() add spaces for the number  */}
            <Text style={[styles.total, {color: MYCOLORS.white}]}>{totalYear.toLocaleString(undefined, {minimumFractionDigits: 2})}</Text>
          </TouchableOpacity>
        </View> 
        
        {/* <View style={styles.dataYear}>
          <ProgressBar />
        </View> */}
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
    limit: state.limit
  }
}

export default connect(mapStateToProps)(Costs);

const styles = StyleSheet.create({
  costs: {
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    padding:3,
  },
  dataMonth: {
    backgroundColor:MYCOLORS.blue,
    width:wp('75%'),
    marginLeft:2,
    marginTop:2,
    marginBottom:2,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    borderColor: MYCOLORS.blue,
    height: hp('12%'),
    justifyContent:'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
  },
  emoji:{
    alignItems:'center',
    marginTop:2,
    width:wp('22%'),
    height: hp('12%'),
    borderColor: MYCOLORS.blue,
    backgroundColor:MYCOLORS.blue,
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
  },
  dataYear: {
    backgroundColor:MYCOLORS.blue,
    width:wp('97%'),
    margin:2,
    borderRadius:10,
    height: hp('12%'),
    justifyContent:'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
  },
  total:{
    paddingTop:12,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: FONTS.pr
  },
  selectDate:{
    paddingRight:5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
  }
});
