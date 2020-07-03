
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { connect } from 'react-redux';

class Chart extends Component {

  render () {
    const theYear = this.props.year;
    
    // get data from initState and create new Array only with Month(date) and expenses for the month(totalSum)
    result = Object.values(this.props.expenses
      .filter(item => item.date.includes(theYear))
      .sort((a, b) => new Date(a.date) - new Date(b.date)) // sort by date
      .reduce((r, {date, sum}) => {
      const monthYear = date.split(' ').slice(1).join(' ')
      
      // console.log(monthYear)
      r[monthYear] = {date: monthYear, totalSum: (r[monthYear]?.totalSum||0)+ +sum}
      return r                   
      }, {}))
    
    // make it changeable  
    let years = [
      {date:'January 2019'},{date:'February 2019'}, {date:'March 2019'}, {date:'April 2019'},{date:'May 2019'},{date:'June 2019'},{date:'July 2019'},{date:'August 2019'},{date:'September 2019'},{date:'October 2019'}, {date:'November 2019'},{date:'December 2019'},
      {date:'January 2020'},{date:'February 2020'}, {date:'March 2020'}, {date:'April 2020'},{date:'May 2020'},{date:'June 2020'},{date:'July 2020'},{date:'August 2020'},{date:'September 2020'},{date:'October 2020'}, {date:'November 2020'},{date:'December 2020'},
      {date:'January 2021'},{date:'February 2021'}, {date:'March 2021'}, {date:'April 2021'},{date:'May 2021'},{date:'June 2021'},{date:'July 2021'},{date:'August 2021'},{date:'September 2021'},{date:'October 2021'}, {date:'November 2021'},{date:'December 2021'}
    ]
    
    var props = ['date', 'totalSum'];

    // make new array with needed months of the year from year
    // option 1
    let resultArrays = result.filter(o1 => years.some(o2 => o1.date === o2.date));

    /*
    //option 2 
    var resultArrays = result.filter(function(o1){
        // filter items in newLabels
        return year2020.some(function(o2){
            return o1.date === o2.date;          // unique date
        });
    }).map(function(o){
        // use reduce to make objects with only the required properties
        // and map to apply this to the filtered array as a whole
        return props.reduce(function(newo, totalSum){
            newo[totalSum] = o[totalSum];
            return newo;
        }, {});
    });
    */
    // console.log(resultArrays);
    
    // sort "sum" from array
    // let sum = resultArrays.map(elem => elem.totalSum);

    const sum = (() => {
      // get sum from array
      let array = resultArrays.map(elem => elem.totalSum)
      // check if array is not empty
      if (!array?.length) { // explanation: (array === undefined || array.length == 0)
        return [0];
      } else {
        return array;
      }
    })();

    // sort "date" from array and show only month
    let labels = resultArrays.map(elem => elem.date.split(" ")[0]);
   
    const newLine = {
      labels: labels,
      datasets: [{
        data: sum,
        strokeWidth: 2, // optional
      },],
    };
    
    return (
      <View style={styles.chart}>
        <View >
          <Text style={styles.title}>Cost chart</Text>
        </View>

        {/* <ScrollView horizontal={true}> */}
          <BarChart
            data={newLine}
            width={Dimensions.get('window').width-5}
            height={hp("40%")}
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            showValuesOnTopOfBars={true}
            bezier
            style={graphStyle}
            // gridMin={0}
            // withHorizontalLabels={false}
            // yAxisLabel={'$'}
            // withInnerLines={false}
            // fromZero={true}
          />
        {/* </ScrollView> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}
  
export default connect(mapStateToProps)(Chart)


const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign:'center',
  },
});
const graphStyle = {
  marginVertical: 5,
  borderRadius:15,
  borderWidth: 0.5,
  borderColor: 'grey',
};

const chartConfig = {
  barPercentage:0.5,
  backgroundColor: '#CCD1D1',
  backgroundGradientFrom: '#F4F5F5',
  backgroundGradientTo: '#CCD1D1',
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(94, 44, 2, ${opacity})`,
  style: {
    borderRadius: 15,
  },
  propsForBackgroundLines: {
    strokeWidth: 1,
  },
  propsForLabels:{
    fontSize: 10,
    fontWeight:'bold',
    // fontFamily: 'Times New Roman',
  },
}
