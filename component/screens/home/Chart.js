import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BarChart } from 'react-native-chart-kit';
import { connect } from 'react-redux';
import { MYCOLORS, FONTS } from '../../lib/Styles';

class Chart extends Component {

  render () {
    const theYear = this.props.year;
    
    // get data from initState and create new Array only with Month(date) and expenses for the month(totalSum)
    result = Object.values(this.props.expenses
      // filter by selected year
      .filter(item => item.date.includes(theYear))
      // sort by date
      .sort((a, b) => new Date(a.date) - new Date(b.date)) 
      .reduce((r, {date, sum}) => {
      const monthYear = date.split(' ').slice(1).join(' ')
      r[monthYear] = {date: monthYear, totalSum: (r[monthYear]?.totalSum||0)+ +sum}
      return r                   
      }, {}))
    
    // console.log(result);

    const sum = (() => {
      // get sum from array and make it with 1 decimail
      let array = result.map(elem => elem.totalSum.toFixed(1))
      // check if array is not empty
      if (!array?.length) { // explanation: (array === undefined || array.length == 0)
        return [0];
      } else {
        return array;
      }
    })();

    // sort "date" from array and show only month
    let labels = result.map(elem => elem.date.split(" ")[0]);
   
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
          <Text style={styles.title}>Expenses for the year</Text>
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
  chart:{
    // height:hp('100%'),
    // marginBottom:10
  },
  title: {
    padding:5,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign:'center',
    color:MYCOLORS.black,
    fontFamily: FONTS.pr
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
