import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { View,Dimensions, Spinner } from 'react-native';
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
  GridRow,
  Card,
  Image,
  Caption,
  NavigationBar 
} from '@shoutem/ui';

import { WebView, ActivityIndicator, ListView} from "react-native";

import NotificationHelper from '../../utilities/notificationHelper';

import { connect } from 'react-redux';

import styles from '../../themes/styles';
import { navigatePush } from '../../api/navigatorReducer';
import PushNotification from 'react-native-push-notification';
import HeadNewsArea from '../home/HeadNewsArea';
class Home extends Component {
  static propTypes = {
    onButtonPress: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      isLoading: true,
      isShowReloading:false,
      isShowPopup:false,
      catogoryid:0,
      listPosts: ds,
      refreshing: false,
      page: 1,
    };
    this.arr = [];
  }

  componentDidMount() {
    this.getCategories();
    this.getNews()
            .then(responseJson => {
                responseJson = responseJson==null?[]:responseJson;
                
                this.arr = this.arr.concat(responseJson);                
                this.setState({
                    isLoading: false,
                    refreshing: false,
                    listPosts: this.state.listPosts.cloneWithRows(this.arr),
                    notificationData: this.arr!=null && this.arr.length>0? this.arr[0].sections[0]:null
                }, function () {     
                    
                    // do something with new state
                });
                if(this.arr!=null && this.arr.length>0){
                   
                    
                    try {
                        let notificationId = Number(this.props.categoryid) % 3;
                        PushNotification.cancelLocalNotifications({id: notificationId});
                        PushNotification.localNotificationSchedule({
                            id: notificationId,
                            foreground: false, // BOOLEAN: If the notification was received in foreground or not 
                            userInteraction: false, // BOOLEAN: If the notification was opened by the user from the notification area or not 
                            message: this.state.notificationData.title, // STRING: The notification message 
                            data: {navigation: this.props.navigation, routeName:'Post',post:this.state.notificationData},
                            playSound: false, 
                            date: new Date(Date.now()+(8*60*60*1000)),
                        });
                    }
                    catch (error) {
                      console.error(error);
                      NotificationHelper.Notify('Kết nối không thành công!');
                      this.props.navigation.navigate('SplashScreen');
                    } 
                }
                 
            });
  }

  getCategories() {

    var url = this.props.Settings.ApiUrl + '/category'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          isShowReloading: true,
          categories: responseJson,
        }, function () {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
        NotificationHelper.Notify('Kết nối không thành công!');
        this.props.navigation.navigate('SplashScreen');
      });
  }

  

  getNews() {
    
    if(this.state.catogoryid ==null){
      this.state.catogoryid = 0;
    }
    var url = this.props.Settings.ApiUrl + '/post/'+(this.state.catogoryid) + "/"+ this.state.page;
    
    return fetch(url)
        .then((response) =>response.json())
        .catch((error) => {
            NotificationHelper.Notify('Kết nối không thành công!');
            this.props.navigation.navigate('SplashScreen');
          });
  }

  onLoadMore() {


    if (!this.state.refreshing) {
      this.setState({page : this.state.page + 1} );
      this.setState({ refreshing: true, isLoading: false });

      // Toast.show({
      //                                     text: 'Page:'+ newPage,
      //                                     position: 'bottom',
      //                                     type: 'success',
      //                                     duration: 1000
      //                                 }) ;
      this.getNews().then(responseJson => {
        responseJson = responseJson == null ? [] : responseJson;

        this.arr = this.arr.concat(responseJson);

        this.setState({
          isLoading: false,
          refreshing: false,
          listPosts: this.state.listPosts.cloneWithRows(this.arr),
        }, function () {
          // do something with new state
        });
      });
    }

  }

  renderRow(rowData, sectionId, index) {
    // rowData contains grouped data for one row,
    // so we need to remap it into cells and pass to GridRow
    const { onButtonPress } = this.props;
    if (index === '0') {
      return (
        <HeadNewsArea post={post}/>
      );
    }
  
    const cellViews = rowData.map((restaurant, id) => {
      return (
        <TouchableOpacity onPress={() => onButtonPress(restaurant)} key={id} styleName="flexible">
          <Card styleName="flexible">
            <Image
              styleName="medium-wide"
              source={{ uri: restaurant.image }}
            />
            <View styleName="content">
              <Subtitle numberOfLines={3}>{restaurant.title}</Subtitle>
              <View styleName="horizontal">
                <Caption styleName="collapsible" numberOfLines={2}>{restaurant.title}</Caption>
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


  render() {

    const { onButtonPress } = this.props;
    let pos = 0;
    return (
      <View >
        <NavigationBar
          styleName="inline"
          leftComponent={(
            <Button>
              <Icon name="sidebar" />
            </Button>
          )}
          centerComponent={<Title>TITLE</Title>}
          rightComponent={!this.state.isLoading ? (<DropDownMenu
            options={this.state.categories}
            selectedOption={this.state.selectedFilter ? this.state.selectedFilter : this.state.categories[0]}
            onOptionSelected={(filter) => { this.setState({ selectedFilter: filter, categoryid: filter.valueProperty, page: 1 }) }}
            titleProperty="name"
            valueProperty="id"
          />) : (<Text>Loading...</Text>)}
        />


        <ListView style={{ paddingVertical: 10 }}
          keyExtractor={post => { return ('FlatItem-' + post.id); }}
          enableEmptySections={true}
          dataSource={this.state.listPosts}
          renderRow={(item) => {
            pos = pos + 1;
            let post = item;
            if (post != null) {

              if (pos == 1) {
                return (<HeadNewsArea placementid={this.placementid} showfacebookad={this.showFacebookAd} post={post.sections[0]} navigation={this.props.navigation} />)
              } else {

                return (<TouchableOpacity onPress={() => navigation.navigate('Post', { post: post.sections[0] })}>
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
                </TouchableOpacity>);

              }
            }
            else {
              <View></View>
            }


          }


          }

          onEndReached={this.onLoadMore.bind(this)}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onButtonPress: (news) => {
    dispatch(navigatePush({
      key: 'NewsDetails',
      title: 'Details',
    }, { news }));
  }
});
function mapStateToProps(state) {
  return { 
   Settings: state.Settings
  };
}
export default connect(
  mapStateToProps, mapDispatchToProps
	
)(Home);
