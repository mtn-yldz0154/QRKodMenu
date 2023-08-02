import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "./categoryScreen";
import FastFoodScreen from "./homeScreen";
import TatliScreen from "./Tatlilar";
import SicakIcecekScreen from "./SicakIcecek";
import SogukIcecekScreen from "./SogukIcecek";
import SalataScreen from "./Salatalar";
import AperatifScreen from "./Corbalar";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Categories"
      >
        <Stack.Screen name="Categories" component={CategoryScreen} />
        <Stack.Screen name="FastFood" component={FastFoodScreen} />
        <Stack.Screen name="Tatlılar" component={TatliScreen} />
        <Stack.Screen name="SicakIcecek" component={SicakIcecekScreen} />
        <Stack.Screen name="SogukIcecek" component={SogukIcecekScreen} />
        <Stack.Screen name="Aperatifler" component={AperatifScreen} />
        <Stack.Screen name="Salatalar" component={SalataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
