import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { MYCOLORS, FONTS } from '../../lib/Styles';
import DismissKeyboard from '../../lib/DismissKeyboard';
import CatItem from './CatItem';
import AddCategory from './AddCategory';
 
class Settings extends Component {
  constructor(props){
    super(props)
    this.state = {
      openCat: false,
      openC: false,
    }
  }

  toggle(toggler) {
    let togglerStatus = this.state[toggler]; //check the status of the toggle you clicked
    this.setState({
        [toggler]: !togglerStatus // change the status only for the toggle you clicked
    });
  }

  render() {
    
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <Text style={styles.title}>Settings</Text>
          <TouchableOpacity onPress={() => this.toggle('openCat')}> 
            <View style={styles.option}>
              <Text style={styles.title}>Category</Text>
            </View>
          </TouchableOpacity>
          {this.state.openCat && 
            <View style={styles.content}>
              <AddCategory /> 
              <View style={styles.content}>
                <FlatList
                  keyExtractor={(item) => item.id}
                  data={this.props.categories}
                  renderItem={({ item }) => (
                  <CatItem item={item} />
                  )}
                />
              </View>
            </View>
          }
          

          {/* option 2 */}
          {/* <TouchableOpacity onPress={() => this.toggle('openC')}> 
            <Text style={{...styles.title, ...styles.option}}>Category2</Text>
          </TouchableOpacity>
          {this.state.openC && 
            <View style={styles.content}>
              <AddCategory /> 
              <View >
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
              </View>
            </View>
          } */}

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
    fontSize: 16,
    padding:10,
    color: MYCOLORS.black,
    fontFamily: FONTS.pr
  },
  option:{
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
