import React, { Component } from 'react';
import { Image, Dimensions, WebView, ActivityIndicator, ListView, SectionList,TouchableOpacity, StyleSheet,FlatList } from "react-native";
import PushNotification from 'react-native-push-notification';
import {
    Button,
    Icon,
    Text, View,
    Badget,
    Toast,
    Spinner
} from 'native-base';
import DateHelper from '../../utilities/dateHelper';
import NotificationHelper from '../../utilities/notificationHelper';
import SinglePost from './singlePost';
import TwinPostRow from './twinPostRow';
import TwinPostColumn from './twinPostColumn';
import styles from './styles';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const logo = require("../../../img/logo.png");

class CategoryTab extends Component {
    //eslint-disable-line
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listPosts: ds,
            refreshing: false,
            isLoading: true,
            page: 1,
            notificationData:{}
        };
        this.arr = [];
        this.placementid = this.props.placementid;
        this.showFacebookAd=this.props.showFacebookAd;
    }

    componentDidMount() {

        this.getPosts(1)
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
                      
                    } 
                }
                 
            });

    }

    onLoadMore() {
        
        
        if (!this.state.refreshing) {
            const newPage = this.state.page + 1;
            this.setState({ refreshing: true, isLoading: false });

            // Toast.show({
            //                                     text: 'Page:'+ newPage,
            //                                     position: 'bottom',
            //                                     type: 'success',
            //                                     duration: 1000
            //                                 }) ;
            this.getPosts(newPage).then(responseJson => {
                responseJson = responseJson==null?[]:responseJson;
                
                this.arr = this.arr.concat(responseJson);     

                this.setState({
                    isLoading: false,
                    refreshing: false,
                    page: newPage,
                    listPosts: this.state.listPosts.cloneWithRows(this.arr),
                }, function () {
                    // do something with new state
                });
            });
        }
        
    }

    getPosts(page) {
        var url = this.props.url + "/" + page;
        
        return fetch(url)
            .then((response) =>response.json())
            .catch((error) => {
                NotificationHelper.Notify('Kết nối không thành công!');
                this.props.navigation.navigate('SplashScreen');
              });
    }
  

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1,backgroundColor: "#34B089"  }}>
                    <Spinner style={{ paddingTop: deviceHeight / 2 }} color='green' />
                </View>
            );
        }

        let pos = 0;
        const { root } = this.props;
        return (
            <View style={styles.container}>
                 <View style={styles.wrapper}>
                <ListView style={{paddingVertical:10}}
                    keyExtractor={post => { return ('FlatItem-' + post.id); }}
                    enableEmptySections={true}
                    dataSource={this.state.listPosts}
                    renderRow={(item) => {
                        pos = pos + 1;
                         
                        let post = item;
                        if (post != null) {

                            if (pos == 1) {
                                return (<SinglePost placementid={this.placementid} showfacebookad = {this.showFacebookAd} post={post.sections[0]} navigation={this.props.navigation} />)
                            } else {
                                if (pos % 4 == 1 || pos % 4 == 2|| pos % 4 == 3) {
                                    return (<TwinPostColumn post={post} navigation={this.props.navigation} />)
                                    {/* return (<CouplePostsColumn navigation={this.props.navigation} post={post}/>) */ }
                                } else {
                                    return (<TwinPostRow post={post} navigation={this.props.navigation} />)
                                }
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
            </View>
        );
    }

}
export default NewsListPage;
