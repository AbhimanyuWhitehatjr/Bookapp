import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {RFValue} from "react-native-responsive-fontsize";
import dashboardscreen from "../screens/dashboardscreen";
import purchasescreen from "../screens/purchasescreen";
import donatedscreen from "../screens/donatedscreen";

const Tab= createMaterialBottomTabNavigator();
const BottomTabNavigator= ()=>{
  return(
    <Tab.Navigator 
    labeled={false}
    barStyle={styles.bottomTabStyle}
    screenOptions={({route})=>({
      tabBarIcon:({focused,colour,size})=>{

      let IconName;
      if (route.name==="dashboardscreen"){
        IconName=focused?"home":"home-outline";
      }
      else if (route.name==="purchasescreen"){
        IconName=focused?"wallet":"wallet-outline";
      }
      else if (route.name==="donatedscreen"){
        IconName=focused?"heart":"heart-outline";
    }
    return(
      <Ionicons name={IconName}
      size={RFValue(25)}
      colour={colour}
      style={styles.icons}
      />
     ); } })} 
     activeColor={"#ee8249"}
      inactiveColor={"gray"} >
      <Tab.Screen name="Dashboard" component={dashboardscreen} />
      <Tab.Screen name="Purchases" component={purchasescreen} />
      <Tab.Screen name="Donations" component={donatedscreen} />
      </Tab.Navigator> ); };
      const styles = StyleSheet.create({
      bottomTabStyle: {
      backgroundColor: "#2f345d",
      height: "8%",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      overflow: "hidden",
      position: "absolute" },
      icons: {
      width: RFValue(30),
      height: RFValue(30) } });

      export default BottomTabNavigator;