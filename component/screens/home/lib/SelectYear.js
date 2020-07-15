import React, { Component } from 'react';
import { View } from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';

export default class SelectYear extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedYear: moment().format("YYYY")
    }
    this. handleYearChange = this.handleYearChange.bind(this);

  }
  handleYearChange = (itemValue, itemIndex) => {
    this.props.handleYear(itemValue);
    this.setState({selectedYear: itemValue})
  }
  render() {
    return (
      <View>
        <DatePicker
          style={{width: '100%'}}
          date={this.state.selectedYear}
          mode="date"
          format="YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36,
              borderRadius: 8,
            },
            dateText:{
              textAlign: 'center',
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
            }
          }}
          onDateChange={this.handleYearChange}
        />
      </View>
    );
  }
}
