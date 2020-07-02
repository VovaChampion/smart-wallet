
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { PieChart } from 'react-native-chart-kit';
import { connect } from 'react-redux';
import Colors from './lib/Colors';

class ChartCategoryYear extends Component {
  // state = {
  //   theYear: [{date:'January 2020'}],
  // }

  render () {

    // take array with colors from Colors
    let colors = Colors;

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
      
      .reduce((r, {category, sum}) => {
      // const monthYear = date.split(' ').slice(1).join(' ')
      
      // console.log(monthYear)
      r[category] = {name: category, totalSum: (r[category]?.totalSum||0)+ +sum, color: colors[Math.floor(Math.random() * colors.length)]}
      return r                   
      }, {})).sort((a, b) => (b.totalSum) - (a.totalSum))

    // console.log(result)
    
    // make it changeable  
    //let year2020 = [{date:'January 2020'},{date:'February 2020'}, {date:'March 2020'}, {date:'April 2020'},{date:'May 2020'},{date:'June 2020'},{date:'July 2020'},{date:'August 2020'},{date:'September 2020'},{date:'October 2020'}, {date:'November 2020'},{date:'December 2020'}]
    
      // this.setState({theYear:year2020});

    // let year2020 = [{date:'January 2020'},{date:'February 2020'}, {date:'March 2020'}, {date:'April 2020'},{date:'May 2020'},{date:'June 2020'},{date:'July 2020'},{date:'August 2020'},{date:'September 2020'},{date:'October 2020'}, {date:'Nowember 2020'},{date:'December 2020'}]
    
    //var props = ['date', 'totalSum'];

    // make new array with needed months of the year from year
    // option 1
    //let resultArrays = result.filter(o1 => year2020.some(o2 => o1.date === o2.date));
    
    // sort "sum" from array
    //let sum = result.map(elem => elem.totalSum);
    //console.log(sum);

    // sort "date" from array and show only month
    //let labels = result.map(elem => elem.category);
    //console.log(labels);
    
    return (
      <View style={styles.chart}>
        <View >
          <Text style={styles.chartTop}>Chart with expenses by catagory</Text>
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
  chart: {
    // backgroundColor: '#32CD32',
  },
  chartTop:{
    paddingTop:10,
    textAlign:'center',
  }
});

const chartConfig = {
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
}
