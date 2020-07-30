import React, { Component } from 'react';
import { View } from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';
import { MYCOLORS } from '../../../lib/Styles';

export default class SelectDate extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedDate: moment().format("DD MMMM YYYY")
    }
    this. handleDateChange = this.handleDateChange.bind(this);

  }
  handleDateChange = (itemValue, itemIndex) => {
    this.props.handleDate(itemValue);
    this.setState({selectedDate: itemValue})
  }
  render() {
    return (
      <View>
        <DatePicker
          style={{width: '100%'}}
          date={this.state.selectedDate}
          mode="date"
          placeholder="select date"
          format="DD MMMM YYYY"
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
              color: MYCOLORS.black,
              fontSize: 18,
            }
          }}
          onDateChange={this.handleDateChange}
        />
      </View>
    );
  }
}