import React, { Component } from "react";

import { ActivityIndicator, StyleSheet, Dimensions,  Image} from 'react-native';
import { 
  View
} from "native-base";

import {
  ImageBackground,
  Tile,
  Text,
  Title,
  Subtitle,
  TouchableOpacity,
  Screen,
  Divider,
  DropDownMenu,
  Button,
  Icon, 
} from '@shoutem/ui';
export default class HeadNewsArea extends Component{
    constructor(props)
    {
        super(props);
        
    }

    render(){
        const  news  = this.props.post;
        
        const  navigation  = this.props.navigation;
        return (<TouchableOpacity onPress={() => onButtonPress(news)}>
        <ImageBackground
          styleName="large-banner"
          source={{ uri: news.image }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">{news.title}</Title>
            <Subtitle styleName="sm-gutter-horizontal">{news.title}</Subtitle>
          </Tile>
        </ImageBackground>
        <Divider styleName="line" />
      </TouchableOpacity>);
    }
}