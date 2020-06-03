import React, { Component } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import DismissKeyboard from './DismissKeyboard';

export default class MyPopup extends Component {

    render() {
        return (
            
            <Modal 
                animationType="fade"
                transparent={true}
                visible={this.props.visible}
                >
                    <DismissKeyboard>
                        <View style={styles.modal}>
                            {this.props.children}
                        </View>
                    </DismissKeyboard>
            </Modal>

        )
    }
}

const styles = StyleSheet.create({
    modal: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
});