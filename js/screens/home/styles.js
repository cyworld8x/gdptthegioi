const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

const deviceWidth = Dimensions.get("window").width;

export default {
    container: {
        flex: 1,
        backgroundColor:'#34B089',
        alignSelf:'center',
    },
    videocontainer: {
        flex: 1,
        alignSelf:'center',
        backgroundColor: '#34B089' 
    },
    logoContainer: {
        flex: 1,
    },
    image_background_full: {
        
        top: 0,
        width: deviceWidth,
        height: deviceHeight-40
    },
    logo: {
        //position: "absolute",
        left: Platform.OS === "android" ? ((deviceHeight > deviceWidth) ? deviceWidth / 2 - 120 / 2 : deviceWidth / 2 - 120 / 2) : deviceWidth / 2 - 120 / 2,
        top: deviceHeight / 2 - 160,
        width: 120,
        height: 142
    },
    video_item_container: {
        width: deviceWidth,
        flex: 1,
        flexDirection: 'column',
        borderBottomColor: '#34B089',
        borderBottomWidth: 10,
        justifyContent: 'space-between',
    },
    video_item: {        
        borderRadius:5,
        
        width: deviceWidth-20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
       
    },
    share: {
       height:deviceHeight/3,
       justifyContent: 'space-between',
       flexDirection: 'row',
       backgroundColor: '#42cb5c',
        //position:'absolute'
    },
    shareContainer: {   
       height:160,       
       flexDirection: 'row',
       backgroundColor: '#42cb5c',
        //position:'absolute'
    },
    shareContainer_Content: {    
        paddingHorizontal:20, paddingVertical:10,    
        flex:1,
        flexDirection:'column', justifyContent: 'space-between',
    },
    shareContainer_Row: {
        paddingVertical:10,
        backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between'
    },
    shareContainer_Row_Text: {
         color: "#FFF", paddingHorizontal: 10, alignSelf:'center'
    },
    shareContainer_Row_Icon: {
         color: "#FFF", width:30, alignSelf:'center'
    },
    
    shareContainer_Row_Content: {
        backgroundColor: 'transparent', flex:1, flexDirection: 'column'
    },
    instructions: {
        marginTop: 20,
        marginBottom: 20,
    },
    wrapper: {
        
        backgroundColor: '#34B089',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 0,
        paddingHorizontal: 0
    },
    videowrapper: {        
        margin: 0,
        paddingVertical: 0
    },
    video_single_top:{
        
        paddingLeft:10,
        paddingRight:10,
        flexDirection: 'column',
        justifyContent:'space-between'
    },
    video_single_middle:{
        
        paddingLeft:10,
        paddingRight:10,
        flex:1,
        flexDirection: 'column',
        justifyContent:'space-between'
    },
    video_single_bottom:{
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        flex:1,
        flexDirection: 'column',
        justifyContent:'space-between'
    },
    backStyle: {
        width: 30,
        height: 30
    },
    listPostContainer: {
        backgroundColor: 'red',
        paddingHorizontal:30,
    },
    singlePostContainer: {
        width:deviceWidth,
        flex:1,
        flexDirection: 'column',
        borderTopColor: 'silver',
        borderTopWidth: 3,
        justifyContent:'space-between',
    },
    postContainer: {
        width:deviceWidth,
        paddingVertical: 10,
        paddingHorizontal:10,
        flex:1,
        backgroundColor:'#FFF',
        flexDirection: 'column',
        borderBottomColor: 'silver',
        borderBottomWidth: 10,
        justifyContent:'space-between',
    },

    double_post_column_container: {
        width:deviceWidth,
        paddingHorizontal:10,
        flex:1,
        flexDirection: 'column',
        borderBottomColor: '#34B089',
        borderBottomWidth: 10,
        justifyContent:'space-between',
    },
    
    double_post_row_container: {
        width: deviceWidth,
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#34B089',
        borderBottomWidth: 10,
        justifyContent: 'space-between',
        paddingHorizontal:10
    },
    savedPostContainer: {
        width:deviceWidth-20,
        paddingVertical: 10,
        paddingHorizontal:10,
        flex:1,
        flexDirection: 'row',
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        justifyContent:'space-around',
    },
    postContentTop: {
        backgroundColor: '#FFF',
        borderBottomColor: 'silver',
        borderBottomWidth: 2,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    double_post_column_view: {
        borderBottomColor: 'silver',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    double_post_column_view_thumb_full: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    double_post_column_view_thumb_shadow: {
        flex:1,
        position:'absolute',
        width: deviceWidth,
        height: deviceWidth/3,
        top:0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    double_post_column_view_thumb: {
        flex:1,
        position:'absolute',
        width: deviceWidth,
        height: deviceWidth/3,
        top:0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    double_post_column_view_thumb_col_2: {
        flex:2,
        height:deviceWidth
        
    },
    double_post_column_view_thumb_shadow_col_2_bottom: {
        
        position:'absolute',
        width: deviceWidth*2/3,
        height:40,
        top: deviceWidth/3-40,
        backgroundColor:'black',
        opacity:0.4
    },
    double_post_column_view_thumb_shadow_col_2_top: {
        
        position:'absolute',
        width: deviceWidth*2/3,
        height:40,
        top: 0,
        backgroundColor:'black',
        opacity:0.4
    },
    double_post_column_view_thumb_col_2_bottom: {
        
        position:'absolute',
        width: deviceWidth*2/3,
        height:40,
        top: deviceWidth/3-40
    },
    double_post_column_view_thumb_col_2_top: {
        
        position:'absolute',
        width: deviceWidth*2/3,
        height:40,
        top: 0
    },
    double_post_column_view_thumb_shadow_col_1_bottom_rowspan_2: {        
        position:'absolute',
        width: deviceWidth/3,
        height:deviceWidth/3-40,
        top: 40
    },
    double_post_column_view_thumb_shadow_col_1_bottom_rowspan_1: {        
        position:'absolute',
        width: deviceWidth/3,
        height:40,
        top: deviceWidth/3-40,
        backgroundColor:'black',
        opacity:0.6
    },
    double_post_column_view_thumb_col_1_bottom: {        
        position:'absolute',
        width: deviceWidth/3,
        height:35,
        top: deviceWidth/3-40,
        paddingTop:10,
        paddingHorizontal:10,
        alignSelf:'flex-end'
    },
    double_post_column_view_thumb_shadow_col_1_top_rowspan_2: {
        position:'absolute',
        width: deviceWidth/3,
        height:deviceWidth*2/3,
        top: 0,
    },
    double_post_column_view_thumb_shadow_col_1_top_rowspan_1: {
        position:'absolute',
        width: deviceWidth/3,
        height:40,
        top: 0,        
        backgroundColor:'black',
        opacity:0.6
    },
    double_post_column_view_thumb_col_1_top: {
        paddingTop:10,
        paddingHorizontal:10,
        alignSelf:'flex-end',
        position:'absolute',
        width: deviceWidth/3-5,
        height:35,
        top: 0
    },
    double_post_column_view_thumb_col_1: {
        flex:1,
        flexDirection:'column',
        height:deviceWidth/3
    },
    double_post_column_view_thumb_shadow_top: {
        flex:1,
        position:'absolute',
        width: deviceWidth*2/3,
        height:40,
        top: 0,
        backgroundColor:'#09aa77',
        opacity:0.4
    },
    double_post_column_view_thumb_bottom_title: {
        flex:1,
        position:'absolute',
        width: deviceWidth*2/3,
        height:40,
        top: deviceWidth/3-40
    },
    double_post_column_view_thumb_top_title: {
        flex:1,
        position:'absolute',
        width: deviceWidth*2/3,
        height:40,
        top: 0
    },
    double_post_column_view_info: {
        flex:3,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor:'#09aa77'
    },
    double_post_column_view_info_view:
    { 
        flex:1,
        flexDirection:'column', 
        justifyContent:'space-between',  
        alignItems:'center',
        backgroundColor:'black', 
        paddingTop:10,
        opacity:0.6,
        height:deviceWidth-40
    },
    double_post_column_view_info_title:
    { 
        flexDirection: 'row', 
        flex:1, 
        flexDirection:'column', 
        justifyContent:'space-between', 
        paddingVertical:5, 
        backgroundColor:'black', 
        height:40,
        opacity:0.4 
    },
    double_post_column_view_image: {
        width: deviceWidth,
        height: deviceWidth/3,
        resizeMode:'cover'
    },
    postContent: {
        
        backgroundColor: '#FFF',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    postImage: {
        width: deviceWidth/4,
        height: deviceWidth/4,
        resizeMode:'cover',
        borderRadius:5,
        

    },
   
    image: {
        width: deviceWidth/4,
        height: deviceHeight/10,

    },

    postContainerCol: {
        width: deviceWidth,
        backgroundColor:'#FFF',
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'silver',
        borderBottomWidth: 10,
        justifyContent: 'space-between',
    },
    postContentCol: {
        width: deviceWidth / 2,
        padding: 10,
        backgroundColor: '#FFF',

        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    double_post_row_view: {
        width: deviceWidth / 2-15,    
        flex:1,
        borderRadius:5,        
        flexDirection: 'column',
        justifyContent: 'space-between', 
        backgroundColor:'#09aa77'      
    },
    video_item_left: {
        width: deviceWidth / 2-15,    
        flex:1,
        borderRadius:5,        
        flexDirection: 'column',
        justifyContent: 'space-between', 
        backgroundColor:'#09aa77'      
    },
    double_post_row_view_thumb: {                
        zIndex:2,
        flex:1    
    },
    block_video: { 
        borderTopLeftRadius:5,
        borderTopRightRadius:5,               
        zIndex:2,
        flex:1    
    },
    double_post_row_view_thumb_mirror:{
        flex:1,     
        borderRadius:5,   
    },
    block_video_mirror: {
               
        flex:1,     
        borderRadius:5,       
    },
    video_column_right: {
        width: deviceWidth / 2-15,  
        flex:1, 
        borderRadius:5,
        //backgroundColor:'#09aa77',
        backgroundColor: 'blue',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    block_video_shadow: {
        flex:1,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        position:'absolute',
        width: deviceWidth / 2 - 15,
        height: deviceWidth / 2 - 15,
        backgroundColor:'black',
        opacity:0.2
    },
    double_post_row_view_shadow: {
        flex:1,
        position:'absolute',
        width: deviceWidth / 2 - 15,
        height: deviceWidth / 2 - 15,
        backgroundColor:'black',
        opacity:0.2
    },
    block_video_shadow_play: {
        flex:1,
        borderRadius:5,
        width: 60,
        height: 60,
        top: (deviceWidth / 2 - 15) / 2 - 30,
        position:'absolute',
        alignSelf:'center',
        opacity: 1,
    },
    double_post_row_view_thumb_view:{
        flex:1,
        position:'absolute',
        width: deviceWidth / 2 - 15,
        height: deviceWidth / 2 - 15,
    },
    block_video_view: {
        flex:1,
        position:'absolute',
        width: deviceWidth / 2 - 15,
        height: deviceWidth / 2 - 15,
       
    },
    double_post_row_view_thumb_mirror_bottom: {
        flex:1,
        paddingTop:5, 
        paddingBottom:10, 
        paddingHorizontal:10,      
    },
    block_video_bottom: {
        flex:1,
        paddingTop:5, 
        paddingBottom:10, 
        paddingHorizontal:10,      
    },
    single_video_bottom_info: {
        flex:1,
        padding:5,
        flexDirection:'row'      
    },
    double_post_row_view_thumb_view_counter:{
        flex:1,
        position:'absolute',
        top: (deviceWidth / 2 - 15)*4/5,
        width: deviceWidth / 2 - 15,
        height: (deviceWidth / 2 - 15)/5,
        backgroundColor:'black',
        opacity:0.2
    },
    block_video_view_counter_bottom: {
        flex:1,
        position:'absolute',
        top: (deviceWidth / 2 - 15)*4/5,
        width: deviceWidth / 2 - 15,
        height: (deviceWidth / 2 - 15)/5,
        backgroundColor:'black',
        opacity:0.2,
    },
    double_post_row_view_thumb_view_info : {
        flex:1, 
        flexDirection: 'row', 
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10, 
        alignSelf:'center'
    },
    double_post_row_view_thumb_view_counter_info: {
        flex:1,
        position:'absolute',
        flexDirection:'column',
        justifyContent:'space-between',
        top: (deviceWidth / 2 - 15)*4/5,
        width: deviceWidth / 2 - 15
    },
    block_video_view_counter_info: {
        flex:1,
        position:'absolute',
        flexDirection:'column',
        justifyContent:'space-between',
        top: (deviceWidth / 2 - 15)*4/5,
        width: deviceWidth / 2 - 15
    },
    block_video_shadow_view: {
        borderRadius:5,
        width: 60,
        height: 60,
        top: (deviceWidth / 2 - 15) / 2 - 30,
        position:'absolute',
        alignSelf:'center',
        opacity: 2,
    },
    postImageCol: {

        width: deviceWidth / 2 - 20,
        height: deviceWidth / 3,
        resizeMode: 'cover',
    },
    block_post_half_width: {

        width: deviceWidth / 2 - 20,
    },
    double_post_row_view_thumb_image: {
        width: deviceWidth / 2 - 15,
        height: deviceWidth / 2 - 15,
        resizeMode: 'cover',
    },
    block_post_half_width_image: {
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        width: deviceWidth / 2 - 15,
        height: deviceWidth / 2 - 15,
        resizeMode: 'cover',
    },
    imageCol: {
        width: deviceWidth / 2,
        height: deviceWidth / 2,

    },
    postInfoCol: {
        paddingTop:5,
        justifyContent: 'space-between',
        flexDirection:'column',
        flex: 1
    },

    postContainerFullRow: {
        width: deviceWidth,
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'silver',
        borderBottomWidth: 10,
        justifyContent: 'space-between',
    },
    single_post_container: {
        width: deviceWidth,
        flex: 1,
        flexDirection: 'column',
        borderBottomColor: '#34B089',
        borderBottomWidth: 10,
        justifyContent: 'space-between',
    },
    single_post_view: {
        width: deviceWidth,
        paddingHorizontal: 10,
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    postContentFullRow: {
        width: deviceWidth,
        padding: 10,
        backgroundColor: '#FFF',
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    postImageFullRow: {
        borderRadius:5,
        width: deviceWidth-20,
        height: deviceWidth/2,
        resizeMode: 'cover',
    },
    imageFullRow: {
        width: deviceWidth ,
        height: deviceWidth *2/ 3,

    },
    single_post_views: {
        position:'absolute',
        paddingTop:5,
        paddingHorizontal:5,
        zIndex:1,
        top: 0,
        width: deviceWidth-20,
        justifyContent: 'space-between',
        height:30,
        flex: 1,
        flexDirection:'column',
        alignSelf:'flex-end'
    },
    single_post_info: {
        position:'absolute',
        paddingTop:5,
        paddingHorizontal:5,
        zIndex:3,
        top: deviceWidth/2-40,
        width: deviceWidth-20,
        justifyContent: 'space-between',
        
        flex: 1,
        flexDirection:'row'
    },
    single_post_info_date: 
    { 
        flex: 3,
        height:50, 
        alignSelf:'center', 
        alignItems:'center'
    },
    single_post_info_title: 
    { 
        flex: 7,
        height:50 
    },
    single_post_info_shadow: {
        position:'absolute',
        zIndex:2,
        top: deviceWidth/2-40,
        width: deviceWidth-20,
        height:40,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        backgroundColor:'#09aa77',
        opacity:0.8,
        flex: 1,
        flexDirection:'row'
    },
    single_post_info_shadow_date:
    { 
        flex: 3,
        height:50, 
        backgroundColor: 'black',
        justifyContent: 'space-between',
        opacity: 0.6, 
        borderBottomLeftRadius:5 
    },
    single_post_info_shadow_title:
    {   
        flex: 7,
        height:50, 
        backgroundColor: 'black', 
        opacity: 0.4 
    },
    postInfoFullRow: {
        paddingTop:5,
        paddingHorizontal:5,
        width: deviceWidth-20,
        justifyContent: 'space-between',
        
        flex: 1,
        flexDirection:'column'
    },
    bannerFullRow: {
       
        width: deviceWidth,
        alignSelf: 'stretch',    
        flex: 1,
        flexDirection:'column'
    },
    single_post_text_view:{
        fontFamily: 'Avenir',
        fontSize:12, 
        fontStyle:'italic', 
        paddingLeft:10,
        color:'#FFF',
        fontWeight: '400',
        textShadowColor:'#636664',
        textShadowRadius:1,
        textShadowOffset:{width:1, height:1},
        alignSelf:'flex-end'
    },
    single_post_text_date:{
        fontFamily: 'Avenir',
        fontSize:12, 
        color:'#FFF',
        fontWeight: '400',
        textShadowColor:'#636664',
        textShadowRadius:1,
        textShadowOffset:{width:1, height:1},
        paddingHorizontal:5,
        paddingTop:5,
        textAlign:'center',
        alignSelf:'center'
    },
    single_post_text_title: {
        fontFamily: 'Avenir',
        fontSize: 14,
        color:'#FFF',
        fontWeight: '400',
        textShadowColor:'#636664',
        textShadowRadius:1,
        textShadowOffset:{width:1, height:1},
        paddingHorizontal:10,
        textAlign:'center',
        alignSelf:'flex-start'
    },
    double_post_column_text_title: {
        fontFamily: 'Avenir',
        fontSize: 16,
        color:'#FFF',
        fontWeight: '400',
        textShadowColor:'#636664',
        textShadowRadius:1,
        textShadowOffset:{width:1, height:1},
        paddingHorizontal:10
    },
    postDate:{
        fontSize:12, fontStyle:'italic', 
        color:'#FFF',
        fontWeight: '400',
        textShadowColor:'#636664',
        textShadowRadius:1,
        textShadowOffset:{width:1, height:1},
    },
    detail_post_text_view:{
        fontSize:12, fontStyle:'italic', 
        color:'silver',
        fontWeight: '400',
        textShadowColor:'#636664',
        textShadowRadius:1,
        textShadowOffset:{width:1, height:1},
    },
    detail_post_text_date:{
        fontFamily: 'Avenir',
        fontSize:12, fontStyle:'italic', 
        color:'silver',
        fontWeight: '400'
    },
    postMiddleDate:{
        fontSize:10, 
        color:'black',
        fontFamily: 'Avenir',
        fontWeight: '400',
        textShadowColor:'#636664',
        textShadowRadius:1,
        textShadowOffset:{width:1, height:1},
    },
    detail_post_middle_text_date:{
        fontSize:10, 
        color:'silver',
        fontFamily: 'Avenir',
        fontWeight: '400',
    },
    detail_post_featured_image_top:{
        zIndex:3, position:'absolute',
        paddingTop:5,
        paddingHorizontal:5,
        top: 0,
        width: deviceWidth-20,
        justifyContent: 'space-between',
        height:30,
        flexDirection:'column',
        alignSelf:'flex-end'
    },
    detail_post_featured_container:{
        width:deviceWidth, height:deviceWidth*3/5
    },
    detail_post_featured_image_container:{
        width:deviceWidth, height:deviceWidth*3/5
    },
    detail_post_featured_image_top_shadow:{ 
        zIndex:2, 
        position: 'absolute', 
        width:deviceWidth, 
        height:50, 
        top:deviceWidth*3/5-50, 
        flexDirection:'row' 
    },
    detail_post_featured_image_top_category_view:{
        flex:1,height:50, alignSelf:'center', alignItems:'center'
    },
    detail_post_featured_image_top_category_text_title:{ 
        fontWeight: '400', paddingTop:10, fontSize:14, color:'#FFF',fontFamily: 'Avenir'
    },
    detail_post_featured_image_bottom_view:{
        zIndex:4, position: 'absolute', width:deviceWidth, height:50, top:deviceWidth*3/5-50, flexDirection:'row'
    },
    detail_post_featured_image_bottom_date_view:{
        zIndex:3, position:'absolute',
        paddingTop:5,
        paddingHorizontal:5,
        top: 0,
        width: deviceWidth-20,
        justifyContent: 'space-between',
        height:30,
        flexDirection:'column',
        alignSelf:'flex-end'
    },
    detail_post_featured_image_top_view_title:{ 
        flex:2,height:50, paddingHorizontal:10, paddingVertical:5, alignSelf:'center', alignItems:'center', 
    },
    detail_post_featured_image_top_text_title:{ 
        color: '#FFF', fontSize: 16, 
        flex: 1,fontWeight: '400', 
        fontFamily: 'Avenir', 
        textShadowColor:'#636664', 
        alignSelf:'flex-start',
        textShadowRadius:1,
        textShadowOffset:{width:1, height:1} 
    },
    postDetailDate:{
        alignSelf:'center',
        color:'silver', fontSize:10, fontStyle:'italic', 
    },
    postDetailMiddleDate:{
        alignSelf:'center',
        color:'black', fontSize:10, 
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 20
    },
    
   
    
    postInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    savedPostInfo: {
        justifyContent: 'space-between',        
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        fontSize: 18,
        fontWeight: '400'
    },
    txtPostHeader: {
        fontFamily: 'Avenir',
        fontSize: 16,
        fontWeight: '400'
    },
    txtPostTitle: {
        fontFamily: 'Avenir',
        fontSize: 16,
        fontWeight: '400'
    },
    detail_post_text_title: {
        fontFamily: 'Avenir',
        fontSize: 16,
        fontWeight: '400'
    },
    txtMediumTitle: {
        fontFamily: 'Avenir',
        fontSize: 14,
        fontWeight: '400'
    },
    txtSinglePostTitle: {
        fontFamily: 'Avenir',
        fontSize: 16,
        color:'#09aa77',
        fontWeight: '500'
    },
    double_post_row_text_view: {
        flex:1,
        fontFamily: 'Avenir',
        fontSize: 14,
        color:'#FFF',
        fontWeight: '400',
        textShadowColor:'#636664',
        textShadowRadius:1,
        textShadowOffset:{width:1, height:1},
        alignSelf:'center'
    },
    double_post_column_text_view: {
        flex:1,
        fontStyle:'italic', 
        fontFamily: 'Avenir',
        fontSize: 12,
        color:'#FFF',
        fontWeight: '400',
        textShadowColor:'#636664',
        textShadowRadius:1,
        textShadowOffset:{width:1, height:1},
        alignSelf:'center'
    },
    txtMediumVideoTitle: {
        fontFamily: 'Avenir',
        fontSize: 14,
        color:'#FFF',
        fontWeight: '400',
        textShadowColor:'#636664',
        textShadowRadius:1,
        textShadowOffset:{width:1, height:1},
        alignSelf:'center'
    },
    txtSmallVideoTitleCenter:{
        
        fontFamily: 'Avenir',
        fontSize: 12,
        color:'#FFF',
        fontWeight: '400',
        textShadowColor:'#636664',
        textShadowRadius:1,
        textShadowOffset:{width:1, height:1},
        paddingHorizontal:10,
        alignSelf:'center'
    },
    txt_single_video_date:{
        position: 'absolute',
        paddingTop:10,
        fontFamily: 'Avenir',
        fontSize: 12,
        color:'#FFF',
        fontWeight: '400',
        textShadowColor:'#636664',
        textShadowRadius:1,
        textShadowOffset:{width:1, height:1},
        alignSelf:'flex-end',
        paddingHorizontal:10
    },
    txtSmallTitle: {
        fontFamily: 'Avenir',
        fontSize: 12,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65',
    },
    txtMaterial: {
        fontFamily: 'Avenir'
    },
    txtColor: {
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
      fontFamily: 'Avenir',
      color: '#B10D65',
      fontSize: 11
    },
    text: {
      alignSelf: "center",
      marginBottom: 7
    },
    title:{
        color: "#FFF",
        fontWeight:'lighter'
    },
    mb: {
      marginBottom: 15
    },

    search_postContainer: {
        width: deviceWidth-10,

        flex: 1,
        flexDirection: 'row',
        
        justifyContent: 'space-between',
    },
    search_content: {
        width: deviceWidth - 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        backgroundColor:'#FFF',
        flexDirection: 'row',
    },
    search_postInfo: {
        width:deviceWidth*3/4-30,
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
};


