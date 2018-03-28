import React, { Component } from 'react';
import { Image, Dimensions, WebView, ActivityIndicator, ListView, TouchableOpacity, RefreshControl, ScrollView, StyleSheet,Clipboard, Platform, ToastAndroid,AlertIOS } from "react-native";

import {
  Container,
  Header,
  Title,  
  View,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Text,
  Spinner

} from "native-base";

const launchscreenLogo = require("../../../img/version.png");
import styles from "./styles";
class Version extends Component {
    constructor(props) {
        super(props);    
    }
  
  componentDidMount() {
  }

  render() {       
    return (
      <View style={{flex:1,backgroundColor: '#34B089'}} >
        <Header  hasTabs style={{ backgroundColor: '#34B089' }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon style={{ color: "#FFF" }} name="menu" />
            </Button>
          </Left>
            <Body>
              <Text style={{ color: "#FFF", fontWeight:'300' }}>MÓN ĂN NGON</Text>
            </Body>
            <Right >
                <Button
                    transparent
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Icon style={{ color: "#FFF" }} name="md-home" />
                </Button>
            </Right >
          
        </Header>
        <View  style={{flex: 1,backgroundColor:'#34B089'}}>
						<View style={styles.logoContainer}>
							<Image source={launchscreenLogo} style={styles.logo} />
						</View>
						
					</View>
      </View>     
    );
  }
}

export default  Version;



