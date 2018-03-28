const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

const deviceWidth = Dimensions.get("window").width;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    //position: "absolute",
    left: Platform.OS === "android" ? ((deviceHeight > deviceWidth) ? deviceWidth / 2 - 120 /2 :deviceWidth / 2 - 120/2):deviceWidth / 2 - 120/2,
    top:  deviceHeight / 2-160,
    width: 120,
    height: 142
  },
  info: {
    alignSelf:'center',
    alignItems:'center',
    flex:1, flexDirection:'column',
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },
  
};
