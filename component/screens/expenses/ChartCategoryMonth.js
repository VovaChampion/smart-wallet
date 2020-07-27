import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { PieChart } from 'react-native-chart-kit';
import { connect } from 'react-redux';
import Colors from './lib/Colors';
import { MYCOLORS, FONTS } from '../../lib/Styles';

class ChartCategoryMonth extends Component {

  render () {
    const theMonth = this.props.month;
    
    // take array with colors from Colors
    let colors = Colors;
    
    // get data from initState and create new Array only with Month(date) and expenses for the month(totalSum)
    result = Object.values(this.props.expenses
      .filter(item => item.date.includes(theMonth))
      .reduce((r, {category, sum}) => {
      
      r[category] = {name: category, totalSum: (r[category]?.totalSum||0)+ +sum, color: colors[Math.floor(Math.random() * colors.length)]}
      return r                   
      }, {})).sort((a, b) => (b.totalSum) - (a.totalSum))
    
    return (
      <View style={styles.chart}>
        <View >
          <Text style={styles.title}>Chart of expenses by category</Text>
        </View>
          <PieChart
            data={result}
            accessor="totalSum"
            width={Dimensions.get('window').width-5}
            height={hp("30%")}
            chartConfig={chartConfig}
            paddingLeft="15"
            backgroundColor="transparent"
          />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}
  
export default connect(mapStateToProps)(ChartCategoryMonth)

const styles = StyleSheet.create({
  title:{
    padding:10,
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 18,
    color:MYCOLORS.black,
    fontFamily: FONTS.pr
  }
});

const chartConfig = {
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
}
