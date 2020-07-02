import React, { Component } from 'react';
import { Picker, View } from 'react-native';
import { connect } from 'react-redux';

 
class SelectCategory extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedCategory:"food",
    }
  }

  handleCategoryChange = (itemValue, itemIndex) => {
    this.props.handleCategory(itemValue);
    this.setState({selectedCategory: itemValue})
  }

  render() {

    return (
      <View>
        <Picker
          selectedValue={this.state.selectedCategory}
          style={{ height: 100, width: 300, marginTop:-20 }}
          itemStyle={{height: 120}}
          onValueChange={this.handleCategoryChange}
        >
          {this.props.categories.map((item, index) => {
            return (<Picker.Item label={item.name} value={item.name} key={index}/>) 
          })}
          {/* <Picker.Item label="Mortgage" value="mortgage" />
          <Picker.Item label="Food" value="food" />
          <Picker.Item label="Car" value="car" />
          <Picker.Item label="House" value="house" />
          <Picker.Item label="Internet" value="internet" />
          <Picker.Item label="Clothes" value="clothes" />
          <Picker.Item label="Utilities" value="utilities" />
          <Picker.Item label="Vacation" value="vacation" /> */}
        </Picker>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}
  
export default connect(mapStateToProps)(SelectCategory);