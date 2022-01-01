import React, {Component} from 'react';
//import {NavigationContainer} from "@react-navigation/native";
//import DrawerNavigator from "./navigation/drawernavigator";
import loginscreen from "./screens/login"
export default class App extends Component{
  render(){
    return <loginscreen/>;
  }
  //return(
    //<NavigationContainer>
    //<DrawerNavigator/>
    //</NavigationContainer>
  //);
}