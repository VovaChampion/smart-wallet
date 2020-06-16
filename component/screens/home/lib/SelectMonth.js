import React, { Component } from 'react';
import { View } from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';

export default class SelectMonth extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedMonth: moment().format("MMMM YYYY")
    }
    this. handleMonthChange = this.handleMonthChange.bind(this);

  }
  handleMonthChange = (itemValue, itemIndex) => {
    this.props.handleMonth(itemValue);
    this.setState({selectedMonth: itemValue})
  }
  render() {
    return (
      <View>
        <DatePicker
          style={{width: '100%'}}
          date={this.state.selectedMonth}
          mode="date"
          format="MMMM YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              // display:'none',
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
              fontSize: 20,
              fontWeight: 'bold',
            }
          }}
          onDateChange={this.handleMonthChange}
        />
      </View>
    );
  }
}