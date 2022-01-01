import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./tabnavigator";
import purchasescreen from "../screens/purchasescreen";
import donatedscreen from "../screens/donatedscreen";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Dashboard" component={TabNavigator} />
    <Drawer.Screen name="Purchases" component={purchasescreen} />
    <Drawer.Screen name="Donations" component={TabNavigator} />
    </Drawer.Navigator>
    );
    };
    export default DrawerNavigator;