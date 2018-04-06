import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Spinner
} from 'native-base';
import { View,Dimensions,FlatList } from 'react-native';
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

const deviceHeight = Dimensions.get("window").height;
class Home extends Component {
  static propTypes = {
    onButtonPress: PropTypes.func,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      isLoading: true,
      isShowPopup:false,
      categoryid:0,
      listPosts: ds,
      refreshing: false,
      page: 1,
    };
    this.arr = [];
  }

  componentDidMount() {
    this.getCategories();
    this.getNews(true, null);
            
  }

  getCategories() {
    this.setState({
      isLoading: true
    }, function () {
      // do something with new state
    });
    var url = this.props.Settings.ApiUrl + '/category'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
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

  

  getNews(clean, cat) {
    this.setState({
      isLoading: true
    });
    if(this.state.categoryid ==null){
      this.setState({categoryid:0});
    }
    else if(cat != null && this.state.categoryid != cat){
      this.setState({categoryid:cat});
      clean = true;
      this.setState({page:1});
    }
    var url = this.props.Settings.ApiUrl + '/post/'+(this.state.categoryid) + "/"+ this.state.page;
   
    NotificationHelper.Notify(url);
    return fetch(url)
        .then((response) =>response.json()).then(responseJson => {
          responseJson = responseJson==null?[]:responseJson;
         
          this.arr = (clean!=null && clean == true)?responseJson:this.arr.concat(responseJson); 
          if(clean!=null && clean == true){
            NotificationHelper.Notify(""+this.arr.length);
          }
                       
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
                //console.error(error);
                NotificationHelper.Notify('Kết nối không thành công!');
                this.props.navigation.navigate('SplashScreen');
              } 
          }
           
      }).catch((error) => {
            NotificationHelper.Notify('Kết nối không thành công!');
            this.props.navigation.navigate('SplashScreen');
          });
  }

  onLoadMore() {

    NotificationHelper.Notify("A"+this.state.refreshing);
    if (!this.state.refreshing) {
      this.setState({page : this.state.page + 1} );
     
      this.setState({ refreshing: true, isLoading: false });

      this.getNews(false, null);
    }

  }

  // renderRow(rowData, sectionId, index) {
  //   // rowData contains grouped data for one row,
  //   // so we need to remap it into cells and pass to GridRow
  //   const { onButtonPress } = this.props;
  //   if (index %7 == 1) {
  //     return (
  //       <HeadNewsArea post={post}/>
  //     );
  //   }
  
  //   const cellViews = rowData.map((post, id) => {
  //     return (
  //       <TouchableOpacity onPress={() => navigation.navigate('Post', { post: post.sections[0] })} key={post.sections[0].id} styleName="flexible">
  //                   <Card styleName="flexible">
  //                     <Image
  //                       styleName="medium-wide"
  //                       source={{ uri: post.sections[0].image }}
  //                     />
  //                     <View styleName="content">
  //                        <Caption styleName="collapsible" numberOfLines={2}>{post.sections[0].title}</Caption>
  //                        {/* <Subtitle numberOfLines={3}>{post.sections[0].title}</Subtitle> */}
  //                       <View styleName="horizontal">
  //                         {/* <Caption styleName="collapsible" numberOfLines={2}>{post.sections[0].title}</Caption> */}
  //                       </View>
  //                     </View>
  //                   </Card>
  //                 </TouchableOpacity>

  //                  <TouchableOpacity onPress={() => navigation.navigate('Post', { post: post.sections[1] })} key={post.sections[1].id} styleName="flexible">
  //                   <Card styleName="flexible">
  //                     <Image
  //                       styleName="medium-wide"
  //                       source={{ uri: post.sections[1].image }}
  //                     />
  //                     <View styleName="content">
  //                     <Caption styleName="collapsible" numberOfLines={2}>{post.sections[1].title}</Caption>
  //                       {/* <Subtitle numberOfLines={3}>{post.sections[1].title}</Subtitle> */}
  //                       <View styleName="horizontal">
  //                         {/* <Caption styleName="collapsible" numberOfLines={2}>{post.sections[1].title}</Caption> */}
  //                       </View>
  //                     </View>
  //                   </Card>
  //                 </TouchableOpacity>
  //     );
  //   });
  //   return (
  //     <GridRow columns={2}>
  //       {cellViews}
  //     </GridRow>
  //   );
  // }


  render() {
   
    const { onButtonPress } = this.props;
    let pos = 0;
    return (
      <View style={{ flex:1 }}>
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
            onOptionSelected={ (filter) => { 
                                  this.setState({ selectedFilter: filter, page: 1, }); 
                                  this.getNews(true,filter.id) ;  
                                }
                              }
            titleProperty="name"
            valueProperty="id"
          />) : (<Text>Loading...</Text>)}
        />
        <ListView
          keyExtractor={post => { return ('FlatItem-' + post.id); }}
          enableEmptySections={true}
          dataSource={this.state.listPosts}
          renderRow={(item ) => {
            pos = pos + 1;
            let post = item;
            if (post != null) {
              if (pos % 7 == 1) {
                return (<GridRow columns={1}><HeadNewsArea columns={1} placementid={this.placementid} showfacebookad={this.showFacebookAd} post={post.sections[0]} navigation={this.props.navigation} /></GridRow>)
              } else if (post.sections.length >= 2) {

                return (<GridRow columns={2} style={{ flex: 1 }}>

                  <TouchableOpacity onPress={() => navigation.navigate('Post', { post: post.sections[0] })} key={post.sections[0].id} styleName="flexible">
                    <Card styleName="flexible">
                      <Image
                        styleName="medium-wide"
                        source={{ uri: post.sections[0].image }}
                      />
                      <View styleName="content">
                        <Caption styleName="collapsible" numberOfLines={2}>{post.sections[0].title}</Caption>
                        {/* <Subtitle numberOfLines={3}>{post.sections[0].title}</Subtitle> */}
                        <View styleName="horizontal">
                          {/* <Caption styleName="collapsible" numberOfLines={2}>{post.sections[0].title}</Caption> */}
                        </View>
                      </View>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => navigation.navigate('Post', { post: post.sections[1] })} key={post.sections[1].id} styleName="flexible">
                    <Card styleName="flexible">
                      <Image
                        styleName="medium-wide"
                        source={{ uri: post.sections[1].image }}
                      />
                      <View styleName="content">
                        <Caption styleName="collapsible" numberOfLines={2}>{post.sections[1].title}</Caption>
                        {/* <Subtitle numberOfLines={3}>{post.sections[1].title}</Subtitle> */}
                        <View styleName="horizontal">
                          {/* <Caption styleName="collapsible" numberOfLines={2}>{post.sections[1].title}</Caption> */}
                        </View>
                      </View>
                    </Card>
                  </TouchableOpacity>


                </GridRow>

                );

              } else {
                <View></View>
              }

            }
            else {
              <View></View>
            }
          }


          }

          onEndReached={() => {

            //NotificationHelper.Notify("Load more" );
            this.onLoadMore();
          }

          }
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
