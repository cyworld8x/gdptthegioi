import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  CardStack,
  NavigationBar,
} from '@shoutem/ui/navigation';

import { navigatePop } from '../api/navigatorReducer';
import NewsList from './NewsList';
import Home from './home/index';
import NewsDetails from './NewsDetails';
import SplashScreen from '../screens/splash/index';
class News extends Component {
  static propTypes = {
    onNavigateBack: PropTypes.func.isRequired,
    navigationState: PropTypes.object,
    scene: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.renderNavBar = this.renderNavBar.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(props) {
    const { route } = props.scene;
    let Screen = SplashScreen;
    switch (route.key) {
      case 'SplashScreen':
        Screen = SplashScreen;
        break;
      case 'NewsList':
        Screen = NewsList;
        break;
    }
    //console.error(route);
    return (<Screen {...route.props} />);
  }

  renderNavBar(props) {
    const { onNavigateBack } = this.props;

    return (
      <NavigationBar.View
        {...props}        
        onNavigateBack={onNavigateBack}
      />
    );
  }

  render() {
    const { navigationState, onNavigateBack } = this.props;

    return (
      <CardStack              
        navigationState={navigationState}
        onNavigateBack={onNavigateBack}
        renderNavBar={this.renderNavBar}
        renderScene={this.renderScene}
      />
    );
  }
}

export default connect(
  state => ({ navigationState: state.Navigator.navigationState }),
  { onNavigateBack: navigatePop }
)(News);
