import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Header({ title, navigation }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={30} onPress={openMenu} style={styles.icon} />
      <View style={styles.headerTitle}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/wallet_icon.png')}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: wp('100%'),
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    right: 5,
  },
  headerTitle:{
    flexDirection:'row',
    alignItems:'flex-end',
  },
  logo: {
    width:26,
    height:26,
    marginHorizontal:10
  }
});
