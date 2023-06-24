import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";
import DetailsScreen from "../screens/DetailsScreen/DetailsScreen";
import ProductsScreen from "../screens/ProductsScreen/ProductsScreen";

  const Stack = createNativeStackNavigator();
const ShopNavigator = () => {
  

    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={CategoriesScreen}
          options={{
            title: "Categories",
          }}
        />
        <Stack.Screen
          name="ProductsScreen"
          component={ProductsScreen}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    );
}

export default ShopNavigator



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