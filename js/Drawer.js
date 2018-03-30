import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./screens/home/index";
import SplashScreen from "./screens/splash";
const DrawerNav = DrawerNavigator(
    {
        Home: { screen: Home },
        SplashScreen: { screen: SplashScreen },
    },
    {
        initialRouteName: "SplashScreen",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        //contentComponent: props => <SideBar {...props} />
    }
);

export default DrawerNav;