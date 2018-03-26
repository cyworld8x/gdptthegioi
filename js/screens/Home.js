import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Dimensions } from 'react-native';
import {
  ImageBackground,
  ListView,
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
  View,
  GridRow,
  Card,
  Image,
  Caption,
  NavigationBar as NavigationBarStatic
} from '@shoutem/ui';

import {
  NavigationBar,
} from '@shoutem/ui/navigation';

import { connect } from 'react-redux';

import styles from '../themes/styles';
import { navigatePush } from '../api/navigatorReducer';

class Home extends Component {
  static propTypes = {
    onButtonPress: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      filters: [
        { name: 'Danh mục', value: 'Filter' },
        { name: 'Sport', value: 'Sport' },
        { name: 'Food', value: 'Food' },
      ],
    }
  }

  getNews() {
    return require('../../assets/data/restaurants.json');
  }
  renderRow(rowData, sectionId, index) {
    // rowData contains grouped data for one row,
    // so we need to remap it into cells and pass to GridRow
    const { onButtonPress } = this.props;
    if (index === '0') {
      return (
        <TouchableOpacity onPress={() => onButtonPress(rowData[0])} key={index}>
          <ImageBackground
            styleName="large"
            source={{ uri: rowData[0].image.url }}
          >
            <Tile>
              <Title styleName="md-gutter-bottom">{rowData[0].name}</Title>
              <Subtitle styleName="sm-gutter-horizontal">{rowData[0].address}</Subtitle>
            </Tile>
          </ImageBackground>
          <Divider styleName="line" />
        </TouchableOpacity>
      );
    }
  
    const cellViews = rowData.map((restaurant, id) => {
      return (
        <TouchableOpacity onPress={() => onButtonPress(restaurant)} key={id} styleName="flexible">
          <Card styleName="flexible">
            <Image
              styleName="medium-wide"
              source={{ uri: restaurant.image.url  }}
            />
            <View styleName="content">
              <Subtitle numberOfLines={3}>{restaurant.name}</Subtitle>
              <View styleName="horizontal">
                <Caption styleName="collapsible" numberOfLines={2}>{restaurant.address}</Caption>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      );
    });
    return (
      <GridRow columns={2}>
        {cellViews}
      </GridRow>
    );
  }
  // renderRow(restaurant) {
  //   const { onButtonPress } = this.props;

  //   return (
  //     <TouchableOpacity onPress={() => onButtonPress(restaurant)}>
  //       <ImageBackground
  //         styleName="large-banner"
  //         source={{ uri: restaurant.image.url }}
  //       >
  //         <Tile>
  //           <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
  //           <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
  //         </Tile>
  //       </ImageBackground>
  //       <Divider styleName="line" />
  //     </TouchableOpacity>
  //   );
  // }


  render() {
    const { onButtonPress } = this.props;
    const restaurants = this.getNews();
  // Group the restaurants into rows with 2 columns, except for the
  // first restaurant. The first restaurant is treated as a featured restaurant
  let isFirstArticle = true;
  const groupedData = GridRow.groupByRows(restaurants, 2, () => {
    if (isFirstArticle) {
      isFirstArticle = false;
      return 2;
    }
    return 1;
  });
    return (
      <Screen >
        <NavigationBarStatic
            styleName = "inline"
            leftComponent={(
              <Button>
                <Icon name="sidebar" />
              </Button>
            )}
            centerComponent={<Title>TITLE</Title>}
            rightComponent={  <DropDownMenu
              options={this.state.filters}
              selectedOption={this.state.selectedFilter ? this.state.selectedFilter : this.state.filters[0]}
              onOptionSelected={(filter) => this.setState({ selectedFilter: filter })}
              titleProperty="name"
              valueProperty="value"
            />}
          />
        <NavigationBar  child={true} >  </NavigationBar>
      
        <ListView
         data={groupedData}
         renderRow={this.renderRow}
          // data={this.getNews()}
          // renderRow={news => this.renderRow(news)}
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
)(Home);
