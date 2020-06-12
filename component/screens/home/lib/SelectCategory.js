import React, { Component } from 'react';
import { Picker, View, Text } from 'react-native';

 
export default class SelectCategory extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedCategory:'house'
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
                    <Picker.Item label="Mortgage" value="mortgage" />
                    <Picker.Item label="Food" value="food" />
                    <Picker.Item label="Car" value="car" />
                    <Picker.Item label="House" value="house" />
                    <Picker.Item label="Internet" value="internet" />
                    <Picker.Item label="Clothes" value="clothes" />
                    <Picker.Item label="Utilities" value="utilities" />
                </Picker>
            </View>
        );
    }
}