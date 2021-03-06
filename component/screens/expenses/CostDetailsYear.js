import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';
import { MYCOLORS } from '../../lib/Styles';
import CostItem from './CostItem';
import CategoryItem from './CategoryItem';
import { connect } from 'react-redux';
import ChartCategoryYear from './ChartCategoryYear';
import MyPopup from '../../lib/MyPopup';
import NoData from '../expenses/lib/NoData';

class CostDetailsYear extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedCategory: 'car',
      modalOpen: false,
    }
    this.showMore = this.showMore.bind(this);
  }
  showMore(item){
    const { open, modalOpen } = this.state;
    this.setState({ 
      modalOpen: !modalOpen,
      selectedCategory: item.category })
  }

  render() {
    const theYear = this.props.navigation.state.params.year;

    // get data from initState and create new Array only with Category and expenses for this category(totalSum)
    result = Object.values(this.props.expenses
      .filter(item => item.date.includes(theYear))
      .reduce((r, {category, sum}) => {
      r[category] = {category, totalSum: (r[category]?.totalSum||0)+ +sum}
      return r                   
      }, {}))
      .sort((a, b) => (b.totalSum) - (a.totalSum)) // sort by totalSum
    
    return(
      <View style={styles.container}>
        {!result?.length ? 
        <View style={styles.container}>
          <NoData date={theYear} /> 
        </View>
        : 
        <View style={styles.container}>
          <ChartCategoryYear year={theYear}/>
          <View style={styles.category}>
            <FlatList
              keyExtractor={(item) => item.category}
              data={result}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => this.showMore(item)}>
                  <CategoryItem item={item}/>
                </TouchableOpacity>
              )}
            />
          </View>
          <MyPopup visible={this.state.modalOpen}>
            <View style={styles.modal}>
              <TouchableOpacity onPress={() => this.setState({ modalOpen: false })}>
                  <AntDesign 
                    // style={{...styles.icon, ...styles.iconClose}} 
                    style={styles.iconClose}
                    name="close" 
                    size={30} 
                    color={MYCOLORS.black} 
                  />
                </TouchableOpacity>
              <FlatList
                //sort by date, (change it in the future) BUT do not recommend creating new Date objects inside the sort method. Have hit production performance issues specifically for that reason. Do not allocate memory (and GC) inside a sort method.
                data={this.props.expenses
                  .filter(item => item.category.includes(this.state.selectedCategory))
                  .sort((a, b) => new Date(b.date) - new Date(a.date))}
                renderItem={({ item }) => (
                <CostItem item={item} />
                )}
              />
            </View>
          </MyPopup>
        </View>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

export default connect(mapStateToProps)(CostDetailsYear)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list:{
    //flex make the list scrollable
    flex: 2,
    width:wp('100%'),
    display:'flex',
    flexDirection:'row',
    overflow:'scroll',
    padding:10
  },
  category: {
    padding:10
  },
  modal: {
    width:wp('90%'),
    height:hp('70%') ,
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#D3D3D3',
    elevation: 20,
    padding: 10,
    borderRadius: 10,
  },
  iconClose: {
    textAlign:'right',
    paddingBottom:20,
  },
});
