import React, { Component } from 'react';
import Navigator from './component/routes/Drawer';
import { AppLoading} from 'expo';
import { Provider } from 'react-redux';
import { store } from './src/store';

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
