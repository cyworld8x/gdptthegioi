import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  ScrollView,
  Icon,
  Row,
  Subtitle,
  Text,
  Title,
  View,
  ImageBackground,
  Divider,
  Tile,
  Screen
} from '@shoutem/ui';

import {
  NavigationBar,
} from '@shoutem/ui/navigation';

export default class NewsDetails extends Component {
  static propTypes = {
    restaurant: PropTypes.object,
  };

  render() {
    const { news } = this.props;

    return (
      <Screen styleName="paper full-screen">
        <NavigationBar
          title={news.name}
          styleName="clear hide-title"
          animationName="solidify"
        />

        <ScrollView>
          <ImageBackground
            styleName="large-portrait hero"
            animationName="hero"
            source={{ uri: news.image && news.image.url }}
            key={news.name}
          >
            <Tile animationName="hero">
              <Title>{news.name}</Title>
              <Subtitle>{news.address}</Subtitle>
            </Tile>
          </ImageBackground>

          <Screen styleName="paper">
            <Text styleName="md-gutter multiline">{news.description}</Text>

            <Divider styleName="line" />

            <Row>
              <Icon name="laptop" />
              <View styleName="vertical">
                <Subtitle>Visit webpage</Subtitle>
                <Text numberOfLines={1}>{news.url}</Text>
              </View>
            </Row>

            <Divider styleName="line" />

            <Row>
              <Icon name="pin" />
              <View styleName="vertical">
                <Subtitle>Address</Subtitle>
                <Text numberOfLines={1}>{news.address}</Text>
              </View>
            </Row>

            <Divider styleName="line" />

            <Row>
              <Icon name="email" />
              <View styleName="vertical">
                <Subtitle>Email</Subtitle>
                <Text numberOfLines={1}>{news.mail}</Text>
              </View>
            </Row>

            <Divider styleName="line" />
          </Screen>
        </ScrollView>
      </Screen>
    );
  }
}
