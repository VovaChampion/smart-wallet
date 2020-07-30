import React, { Component } from 'react';
import Navigator from './component/routes/Drawer';
import { AppLoading} from 'expo';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { setCustomView, setCustomText } from 'react-native-global-props';
import { MYCOLORS, FONTS } from './component/lib/Styles';

const customViewProps = {
  style: {
    backgroundColor: MYCOLORS.white
  }
};

const customTextProps = {
  style: {
    fontFamily: Platform.OS === 'ios' ? FONTS.ios : FONTS.android,
    color:MYCOLORS.black,
  }
};

// Calling the functions and passing the custom props into their respective params
setCustomView(customViewProps);
setCustomText(customTextProps);


export default class App extends Component {
  state = {
    isReady:true
  }

  render() {
    if(!this.state.isReady){
      return <AppLoading />
    }
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  } 
}
