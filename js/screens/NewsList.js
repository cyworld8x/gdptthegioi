import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  ImageBackground,
  ListView,
  Tile,
  Title,
  Subtitle,
  TouchableOpacity,
  Screen,
  Divider,
} from '@shoutem/ui';

import {
  NavigationBar,
} from '@shoutem/ui/navigation';
import { connect } from 'react-redux';

import { navigatePush } from '../api/navigatorReducer';

class NewsList extends Component {
  static propTypes = {
    onButtonPress: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  getNews() {
    return require('../../assets/data/restaurants.json');
  }

  renderRow(news) {
    const { onButtonPress } = this.props;

    return (
      <TouchableOpacity onPress={() => onButtonPress(news)}>
        <ImageBackground
          styleName="large-banner"
          source={{ uri: news.image.url }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">{news.name}</Title>
            <Subtitle styleName="sm-gutter-horizontal">{news.address}</Subtitle>
          </Tile>
        </ImageBackground>
        <Divider styleName="line" />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Screen>
        <NavigationBar title="All News" />
          <ListView
            data={this.getNews()}
            renderRow={news => this.renderRow(news)}
          />
      </Screen>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onButtonPress: (news) => {
    dispatch(navigatePush({
      key: 'NewsDetails',
      title: 'Details',
    }, { news }));
  },
});

export default connect(
	undefined,
	mapDispatchToProps
)(NewsList);
