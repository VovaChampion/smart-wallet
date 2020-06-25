import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CostItem from './CostItem';
import { connect } from 'react-redux';

class CostDetailsMonth extends Component {

  render() {
    
    const theMonth = this.props.navigation.state.params.month;
    const monthCosts = this.props.expenses
      .filter(item => item.date.includes(theMonth))
      .sort((a, b) => new Date(b.date) - new Date(a.date))

    return(
      <View style={styles.list}>
        {/* <Text>{this.props.navigation.state.params.month}</Text> */}
        <FlatList
          //sort by date, (change it in the future) BUT do not recommend creating new Date objects inside the sort method. Have hit production performance issues specifically for that reason. Do not allocate memory (and GC) inside a sort method.
          // data={this.props.expenses.sort((a, b) => new Date(b.date) - new Date(a.date))}
          data={monthCosts}
          renderItem={({ item }) => (
          <CostItem item={item} />
          )}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

export default connect(mapStateToProps)(CostDetailsMonth)

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width:wp('100%'),
    backgroundColor: '#fff',
    display:'flex',
    flexDirection:'row',
    overflow:'scroll'
  }
});