
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { connect } from 'react-redux';

class Chart extends Component {
    // state = {
    //     labels: [],
    //     sum: [1]
    // }

  render () {
    result = Object.values(this.props.expenses
      .sort((a, b) => new Date(a.date) - new Date(b.date)) // sort by date
      .reduce((r, {date, sum}) => {
      const monthYear = date.split(' ').slice(1).join(' ')
      
      // console.log(monthYear)
      r[monthYear] = {date: monthYear, totalSum: (r[monthYear]?.totalSum||0)+ +sum}
      return r                   
      }, {}))

    //console.log(result);
      
    
    let sum = result.map(elem => elem.totalSum);
    // console.log(sum);

    let labels = result.map(elem => elem.date);
    // console.log(labels);

    let newLabels = ['January 2020', 'February 2020', 'March 2020', 'April 2020', 'May 2020', 'June 2020', 'July 2020','August 2020', 'September 2020']
    
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
          <Text style={styles.chartTop}>Cost chart</Text>
        </View>

        {/* <ScrollView horizontal={true}> */}
          <BarChart
            data={newLine}
            width={Dimensions.get('window').width-5}
            height={hp("40%")}
            // paddingLeft={30}
            // yAxisLabel={'$'}
            chartConfig={chartConfig}
            verticalLabelRotation={20}
            fromZero={true}
            // showValuesOnTopOfBars={true}
            bezier
            style={{
              marginVertical: 8,
              borderRadius:15,
              borderWidth: 0.5,
              borderColor: 'grey',
            }}
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
  chart: {
      // flex: 1,
      // justifyContent: "space-between",
      // position:'relative',
      // bottom:'0%',
      // height:'5%',
      // backgroundColor: '#32CD32',
      // paddingLeft:10
  },
  chartTop:{
    textAlign:'center',
  }
});

const chartConfig = {
  backgroundColor: '#CCD1D1',
  backgroundGradientFrom: '#F4F5F5',
  backgroundGradientTo: '#CCD1D1',
  decimalPlaces: 1, // optional, defaults to 2dp
  // barPercentage: 1,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(94, 44, 2, ${opacity})`,
  style: {
    borderRadius: 15,
    backgroundColor:'red'
  },
  propsForBackgroundLines: {
    strokeWidth: 1,
   
  },

}
