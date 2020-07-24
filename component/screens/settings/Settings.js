import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { MYCOLORS, FONTS } from '../../lib/Styles';
import DismissKeyboard from '../../lib/DismissKeyboard';
import CatItem from './CatItem';
import AddCategory from './AddCategory';
import Limit from './Limit';
 
class Settings extends Component {
  constructor(props){
    super(props)
    this.state = {
      openCategory: false,
      openLimit: false,
    }
  }

  toggle(toggler) {
    let togglerStatus = this.state[toggler]; //check the status of the toggle you clicked
    this.setState({
      [toggler]: !togglerStatus // change the status only for the toggle you clicked
    });
  }

  // run changing toggle from child 'Limit'
  changeToggle = (val) => {
    // console.log(val)
    this.setState({
      openLimit: val
    })
  };

  render() {

    return (
      <DismissKeyboard>
        <View style={styles.container}>
          
          <Text style={styles.title}>Settings</Text>
          
          <TouchableOpacity onPress={() => this.toggle('openCategory')}> 
            <View style={styles.option}>
              <Text style={styles.title}>Category</Text>
            </View>
          </TouchableOpacity>
          {this.state.openCategory && 
            <View style={styles.content}>
              <AddCategory /> 
              {/* <View style={styles.content}> */}
                <FlatList
                  keyExtractor={(item) => item.id}
                  data={this.props.categories}
                  renderItem={({ item }) => (
                  <CatItem item={item} />
                  )}
                />
              </View>
            // </View>
          }

          <TouchableOpacity onPress={() => this.toggle('openLimit')}> 
            <View style={styles.option}>
              <Text style={styles.title}>Limit</Text>
            </View>
          </TouchableOpacity>
          {this.state.openLimit && 
            <View style={styles.content}>
              <Limit changeToggle={this.changeToggle}/>
            </View>
          }
        </View>
      </DismissKeyboard>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}
  
export default connect(mapStateToProps)(Settings);


const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:10,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: MYCOLORS.white,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    padding:10,
    color: MYCOLORS.black,
    fontFamily: FONTS.pr
  },
  content: {
    flex:1,
    // backgroundColor:'green',
    fontSize: 16,
    padding:10,
    color: MYCOLORS.black,
    fontFamily: FONTS.pr
  },
  option:{
    marginVertical:5,
    backgroundColor:MYCOLORS.blue,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
    width:wp('80%'),
    shadowOffset: { width: 1, height: 1 },
    shadowColor: MYCOLORS.black,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    alignItems: 'center'
  }
});
