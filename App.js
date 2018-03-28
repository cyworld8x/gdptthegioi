import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Examples } from '@shoutem/ui';

import StorageReducer from './js/api/storageReducer';
import News from './js/screens/News';
import SplashScreen from './js/screens/splash/index';
//import { Font, AppLoading } from 'expo';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(StorageReducer);

export default class App extends Component {

   state = {
    fontsAreLoaded: false,
  };

  async componentWillMount() {
    // await Font.loadAsync({
    //   'Rubik-Black': require('./assets/fonts/Rubik-Black.ttf'),
    //   'Rubik-BlackItalic': require('./assets/fonts/Rubik-BlackItalic.ttf'),
    //   'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
    //   'Rubik-BoldItalic': require('./assets/fonts/Rubik-BoldItalic.ttf'),
    //   'Rubik-Italic': require('./assets/fonts/Rubik-Italic.ttf'),
    //   'Rubik-Light': require('./assets/fonts/Rubik-Light.ttf'),
    //   'Rubik-LightItalic': require('./assets/fonts/Rubik-LightItalic.ttf'),
    //   'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
    //   'Rubik-MediumItalic': require('./assets/fonts/Rubik-MediumItalic.ttf'),
    //   'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
    //   'rubicon-icon-font': require('./assets/fonts/rubicon-icon-font.ttf'),
    // });

    this.setState({ fontsAreLoaded: true });
  }
  render() {
    // if (!this.state.fontsAreLoaded) {
    //   return <AppLoading />;
    // }
    return (
      //<Examples />
      <Provider store={store}>
        <SplashScreen />
      </Provider>
    );
  }
}


