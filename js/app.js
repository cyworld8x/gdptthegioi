import React from "react";

import { Platform,StatusBar, Navigator } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import Drawer from "./Drawer";
import SplashScreen from "./screens/splash";
import Home from "./screens/home/index";
import Detail from "./screens/home/Detail";
const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
        SplashScreen:{screen: SplashScreen},
        Detail:{screen: Detail},
        Home:{ screen: Home },
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    });

    
export default () =>
<Root>
    <AppNavigator />
</Root>;