import React, { Component } from "react";
import { Image, View, StatusBar,NetInfo,ProgressBar,Modal,Dimensions,TouchableOpacity,WebView,Linking } from "react-native";

import { Container, Button, H3, Text, Header, Title,Spinner,Icon } from "native-base";
import PushNotification from 'react-native-push-notification';
import styles from "./styles";
import { connect } from 'react-redux';
import { loadingDataStorage, saveSettings } from '../../api/actionCreators';

const launchscreenLogo = require("../../../assets/images/version.png");
import StoragePosts from '../../api/storagePosts';
import Home from '../home/index';
import NetInfoHelper from '../../utilities/netInfoHelper'
import NotificationHelper from '../../utilities/notificationHelper'
import EncryptHelper from '../../utilities/encryptHelper'

const deviceHeight = Dimensions.get("window").height;

const deviceWidth = Dimensions.get("window").width;
class SplashScreen extends Component {
	// eslint-disable-line
    constructor(props){
		super(props);
		this.state= {
			isLoadingDataStorage:true,
			isLoadingSetting:true,
			isShowPopup:false,			
			networkError:false
		};
		this.loadingServerSettings = this.loadingServerSettings.bind(this);
	}
	componentDidMount() {
		try {
			let notificationId = 9999;
			PushNotification.cancelLocalNotifications({ id: notificationId });
			PushNotification.localNotificationSchedule({
				id: notificationId,
				message: "Bạn ơi! Có nhiều bài mới đang chờ bạn khám phá!", // (required) 
				date: new Date(Date.now()+60*60*1000*24) // in 60 secs 
			});

		}
		catch (error) {

		}
			
		StoragePosts.getPosts().then((data)=> {
			let posts = JSON.parse(data);
			posts = posts!=null? posts:[];
			
			this.props.loadingDataStorage(posts);
			this.setState({
				isLoadingDataStorage: false,
			});		

		});

		this.loadingServerSettings();
		
	}

	loadingServerSettings()
	{

		StoragePosts.loadingSettings().then((settings)=> {
			
			if(settings==null){
  				settings = {
 					ApiUrl : 'http://api.gdptthegioi.net',
 					WebsiteUrl : 'http://gdptthegioi.net'
  				}
  			}
  			if(settings.ApiUrl==null){
 				settings.ApiUrl = 'http://api.gdptthegioi.net';
  			}
  			if(settings.WebsiteUrl==null){
 				settings.WebsiteUrl = 'http://gdptthegioi.net';
			  }
			
  			fetch(settings.ApiUrl+ '/info')
  					.then((response) => response.json())
					.then((responseJson) => {

						if (responseJson != null) {
							this.setState({
							isLoadingDataStorage: false,
							});	
							
							var settings = JSON.parse(EncryptHelper.decode_base(responseJson.key)); 
							
							var serverSettings = settings;
							
							StoragePosts.saveSettings(responseJson.key);
							this.props.saveSettings(settings);
							
							if(serverSettings.ShowNotification!=null && serverSettings.ShowNotification== true){
								if(serverSettings.Notification.Reopened ==true || 
									(serverSettings.Notification.Reopened ==false && 
											(settings.Notification.Version==null ||   settings.Notification.Version != serverSettings.Notification.Version) )){
									setTimeout(() => {
										this.setState({											
											isShowPopup:true,
											Notification:serverSettings.Notification
										});
									}, 1000);
								}else{
									setTimeout(() => {
										this.setState({
											isLoadingSetting: false
										});
									}, 1000);
								}
							}
							else{
								setTimeout(() => {
									this.setState({
										isLoadingSetting: false
									});
								}, 1000);
							}
						}

					})
					.catch((error) => {
						this.setState({
							networkError: true
						})
						NotificationHelper.Notify('Vui lòng bật kết nối mạng');
					});	

		});
	}

	onCloseNotification(){
		if(this.state.Notification.CanClose== true){
			this.props.navigation.navigate('Home');
		}		
	}

	render() {
		if(this.state.isLoadingSetting){
			return (
				<Container style={{backgroundColor:'#34B089'}}> 
					<StatusBar barStyle="light-content" />
					<View style={{flex: 1, flexDirection:'column'}}>
						<View style={styles.logoContainer}>
							<Image source={launchscreenLogo} style={styles.logo} />
						</View>
						{this.state.isLoadingSetting && !this.state.networkError && 
							<View style={ styles.info }>
								
								<Spinner color='#FFF' />
								<Text style={{color:'#FFF'}}>Đang kiểm tra kết nối internet</Text>
							</View>}
							{this.state.networkError &&
							<View style={ styles.info }>
								<Text style={{color:'#FFF', paddingVertical:10}}>Bạn đã bật kết nối internet?</Text>
								<View style={{flex:1, flexDirection:'column'}}>
								<Button rounded bordered warning onPress={()=>{ this.setState({networkError:false}); this.loadingServerSettings()}}>
									<Text>Thử lại</Text>
								</Button>
								</View>
							</View>}
					</View>
					
					<Modal 
					animationType="slide"
					transparent={false}
					visible={this.state.isShowPopup}
					onRequestClose={() => {this.onCloseNotification()}}
					>
				   <View style={{ flex:1,backgroundColor: '#09aa77', flexDirection:'column'}}>
						<View style={{ width:deviceWidth, height:40, backgroundColor: '#09aa77', flexDirection: 'row', alignItems:'flex-end' }}>
							
							<View style={{ width:deviceWidth-40, height:40, backgroundColor: 'black', opacity:0.5, flexDirection: 'column', alignContent:'flex-end' }}>
								<Text style={{textAlign:'center',color:'#FFF', alignSelf:'center', paddingTop:10,fontWeight: '400',fontFamily: 'Avenir'}}>THÔNG BÁO</Text>
							</View>
							<View style={{ width:40, height:40, backgroundColor: 'black', opacity:0.7, alignContent:'center', alignItems:'center' }}>
								{this.state.isShowPopup && this.state.Notification!=null && this.state.Notification.CanClose==true && <TouchableOpacity onPress={() => this.onCloseNotification()}>
								<Icon name='md-close'  style={{alignSelf:'center', paddingTop:5, color:'#FFF' }} />
							</TouchableOpacity>}
							
							</View>
							
						</View>
						<View style={{ width:deviceWidth, height:deviceHeight-40, flexDirection: 'column' }}>
							{this.state.isShowPopup && this.state.Notification.Type=='web' && (<WebView source={{ uri: this.state.Notification.Source  }} domStorageEnabled={true}
									style={{ padding: 10 }}
									automaticallyAdjustContentInsets={false}
									renderLoading={() => {
										return (<View style={{ flex: 1 }}>
											<Spinner style={{ paddingTop: 200 }} color='green' />
										</View>)
									}} />)}
							{this.state.isShowPopup && this.state.Notification.Type=='image' && 
								(<TouchableOpacity style={{ flex:1, width:deviceWidth, height:deviceHeight-40}} onPress={
									() => 
										{
											if(this.state.Notification.HasNavigate)
											{
												this.props.navigation.navigate(this.state.Notification.Navigation.RouteName,this.state.Notification.Navigation.Data);	
											}
										}
									}>
									<Image style={{ flex:1, width:deviceWidth, height:deviceHeight-40, resizeMode:'cover'}} source={{ uri:this.state.Notification.Source}} />
								</TouchableOpacity>)
							}
							{this.state.isShowPopup 
							&& this.state.Notification.Type=='deeplink'
							&& (<TouchableOpacity style={{ flex:1, width:deviceWidth, height:deviceHeight-40}} onPress={
									() => 
										{
										Linking.canOpenURL(this.state.Notification.url).then(supported => {
											if (!supported) {
												return;
											} else {
												return Linking.openURL(NotificationHelper.Notify('Code:3'));
											}
										}).catch(err => {return;});
											
										}
									}>
									<Image style={{ flex:1, width:deviceWidth, height:deviceHeight-40, resizeMode:'cover'}} source={{ uri:this.state.Notification.Source}} />
								</TouchableOpacity>)
							}	
						</View>
				   </View>
				  </Modal>
				</Container>
			);
		}
		else{
			return (<Home navigation={this.props.navigation} />);
			
		}
		
	}
}

function mapStateToProps(state) {
    return { 
	   FavoritedPosts: state.Storage.FavoritedPosts,
	   Settings: state.Settings
    };
}

export default connect(mapStateToProps,{ loadingDataStorage, saveSettings })(SplashScreen);
