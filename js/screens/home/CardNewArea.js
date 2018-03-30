import React, { Component } from "react";

import { ActivityIndicator, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import {
  Icon,
  View,
  Text

} from "native-base";
import styles from './styles';
import DateHelper from '../../utilities/dateHelper';

const logo = require("../../../img/logo.png");
export default class CardNewArea extends Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        const  post  = this.props.post;
        
        const  navigation  = this.props.navigation;
        return (  <TouchableOpacity onPress={() => navigation.navigate('Post', { post: post.sections[0] })}>
        <ImageBackground
          styleName="large-banner"
          source={{ uri: post.sections[0].image }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">{post.sections[0].title}</Title>
            <Subtitle styleName="sm-gutter-horizontal">{post.sections[0].title}</Subtitle>
          </Tile>
        </ImageBackground>
        <Divider styleName="line" />
      </TouchableOpacity>
       
       );
    }
}