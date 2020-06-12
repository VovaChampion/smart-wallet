import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CostItem from './CostItem';
import { connect } from 'react-redux';

class CostDetails extends Component {

    render() {
        return(
            <View style={styles.list}>
                <FlatList
                    data={this.props.expenses}
                    renderItem={({ item }) => (
                    // <CostItem item={item} removeItem={this.removeItem} />
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

export default connect(mapStateToProps)(CostDetails)

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