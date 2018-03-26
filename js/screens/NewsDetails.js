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
  Badge
} from 'native-base';
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
            <Badge rounded style={{ marginTop:15,marginLeft:15,marginRight:15, backgroundColor: '#b8c4c9' }}>
              <Text  style={{justifyContent: 'center', marginTop: 3, color: '#f7f7f7'}} >Các bài khác trong mục</Text>
            </Badge>
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
