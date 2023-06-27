import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTaleInputScreen from "../screens/MyTaleInputScreen/Index";
import MyTaleContentScreen from "../screens/MyTaleContentScreen/Index";


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
        name="Input"
        component={MyTaleInputScreen}
        options={{
          title: "Input",
        }}
      />
    </Stack.Navigator>
  );
};

export default MyTaleNavigator;
