import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, FlatList, Keyboard, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Button, AsyncStorage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Top from './Top';
import Bottom from './Bottom';
import Chart from './Chart';
import Costs from './Costs';
import DismissKeyboard from '../../lib/DismissKeyboard';
import { connect } from 'react-redux';
import { addCost } from '../../../src/actions/costAction';
import moment from 'moment';
import { MYCOLORS, FONTS } from '../../lib/Styles';


class Home extends Component {
  constructor(){
    super();
    this.state = {
      month: moment().format("MMMM YYYY"),
      year: moment().format("YYYY")
    }

    this.submitHandler = this.submitHandler.bind(this);
    this.getData = this.getData.bind(this);
    this.getYear = this.getYear.bind(this);
  }

  getData = (val) => {
    this.setState({month: val}); 
  }

  getYear = (val) => {
    this.setState({year: val}); 
  }
  showMonthList = () => {
    this.props.navigation.navigate('CostDetailsMonth', {
      month: this.state.month });
    // this.getData()
  }

  showYearList = () => {
    this.props.navigation.navigate('CostDetailsYear', {
      year: this.state.year });
  }

  submitHandler (sum, date, category) {

    const key = Math.random().toString();
    const cost = {'key':key, 'sum':sum, 'date':date, 'category':category};
    
    if(sum.length > 1){
      this.props.addCost(cost);
        // AsyncStorage.setItem('cost', JSON.stringify(this.state.expenses))
    } else {
      Alert.alert('OOPS', 'Number must be over 2 characters long', [
        {sum: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }

      // AsyncStorage.setItem('cost', JSON.stringify(this.state.expenses))
      // AsyncStorage.getAllKeys((err, keys) => {
      //   AsyncStorage.multiGet(keys, (error, stores) => {
      //     stores.map((result, i, store) => {
      //       // console.log({ [store[i][0]]: store[i][1] });
      //       return true;
      //     });
      //   });
      // });
      // if(sum.length > 1){
      //     this.setState(prevState => ({ 
      //         expenses: [obj, ...prevState.expenses]}), this.countTotal)
      //         AsyncStorage.setItem('cost', JSON.stringify(this.state.expenses))
      // } else {
      //     Alert.alert('OOPS', 'Number must be over 2 characters long', [
      //         {sum: 'Understood', onPress: () => console.log('alert closed') }
      //     ]);
      // }
  };  

  render(){
    // hide yellow warning
    console.disableYellowBox = true;
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          {/* <View style={styles.top}>
            <Top />
          </View> */}
          
          <View style={styles.cost}>
            <Costs showMonthList={this.showMonthList} showYearList={this.showYearList} sendData={this.getData} sendYear={this.getYear} />
          </View>

          {/* <View style={styles.list}>
            <FlatList
              data={this.props.expenses}
              renderItem={({ item }) => (
                <View>
                  <Text>{item.sum}</Text>
                  <Text>{item.category}</Text>
                  <Text>{item.date}</Text>
                </View>
              )}
            />
          </View> */}
  
          <View style={styles.chart}>
            <Chart year={this.state.year}/>
          </View>
  
          <View style={styles.bottom}>
            <Bottom submitHandler={this.submitHandler} />
          </View>
        </View>
      </DismissKeyboard>
      
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height:hp('100%'),
      // backgroundColor: MYCOLORS.white,
      alignItems: 'center',
      justifyContent: 'center'
    },
    // top: {
    //   flex: 1,
    //   width:wp('100%'),
    // },
    cost: {
      flex: 2,
      width:wp('100%'),
    },
    chart: {
      flex: 3.5,
    },
    bottom: {
      flex: 1,
      width:wp('100%'),
      backgroundColor:'pink'
    }
  });

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCost: (cost) => { dispatch(addCost(cost))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
