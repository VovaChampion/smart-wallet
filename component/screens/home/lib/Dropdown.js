import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
 
export default class DropdownList extends Component {
  render() {
    let data = [{
      value: 'Car',
    }, {
      value: 'Food',
    }, {
      value: 'Internet',
    }];
 
    return (
      <Dropdown
        style={{width: 200, backgroundColor:'yellow'}}
        label='Selet category'
        data={data}
      />
    );
  }
}