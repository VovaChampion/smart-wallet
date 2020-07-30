import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { PieChart } from 'react-native-chart-kit';
import { connect } from 'react-redux';
import Colors from './lib/Colors';

class ChartCategoryYear extends Component {

  render () {
    // take array with colors from Colors
    let colors = Colors;
    const theYear = this.props.year;

    //to generate 100 colors
    // var colors = [];
    // while (colors.length < 500) {
    //     do {
    //         var color = Math.floor((Math.random()*1000000)+1);
    //     } while (colors.indexOf(color) >= 0);
    //     colors.push("#" + ("000000" + color.toString(16)).slice(-6));
    // }
    
    // get data from initState and create new Array only with Month(date) and expenses for the month(totalSum)
    result = Object.values(this.props.expenses
      .filter(item => item.date.includes(theYear))
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
export default connect(mapStateToProps)(ChartCategoryYear)

const styles = StyleSheet.create({
  title:{
    padding:10,
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 18
  }
});

const chartConfig = {
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
}

