import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaleMainScreen from "../screens/TaleMainScreen/TaleMainScreen";
import TaleContentScreen from "../screens/TaleContentScreen/TaleContentScreen";
import TaleCategoryScreen from "../screens/TaleCategoryScreen/TaleCategoryScreen";

const Stack = createNativeStackNavigator();
const TaleNavigator = () => {
  

    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={TaleMainScreen}
          options={{
            title: "Categories",
          }}
        />
        <Stack.Screen
          name="ProductsScreen"
          component={TaleCategoryScreen}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
        <Stack.Screen
          name="Details"
          component={TaleContentScreen}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    );
}

export default TaleNavigator



/*
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuPrincipal from '../screens/MenuPrincipal/Index';
import CuentosClasicos from '../screens/CuentosClasicos/Index';

  const Stack = createNativeStackNavigator();
const ShopNavigator = () => {
  

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={MenuPrincipal} />
          <Stack.Screen name="Clasico" component={CuentosClasicos} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default ShopNavigator
*/