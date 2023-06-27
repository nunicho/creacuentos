import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTaleInputScreen from "../screens/MyTaleInputScreen/Index";
import TaleContentScreen from "../screens/TaleContentScreen/TaleContentScreen";
import TaleCategoryScreen from "../screens/TaleCategoryScreen/TaleCategoryScreen";

const Stack = createNativeStackNavigator();
const MyTaleNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeMyTale"
        component={MyTaleInputScreen}
        options={{
          title: "MyTaleInputScreen",
        }}
      />
      <Stack.Screen
        name="TaleCategoryScreen"
        component={TaleCategoryScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="TaleContentScreen"
        component={TaleContentScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default MyTaleNavigator;
