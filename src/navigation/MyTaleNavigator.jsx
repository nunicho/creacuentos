import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTaleInputScreen from "../screens/MyTaleInputScreen/Index";
import MyTaleDetailScreen from "../screens/MyTaleDetailScreen/Index";
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
        name="MyTaleInputScreen"
        component={MyTaleInputScreen}
        options={{
          title: "MyTaleInputScreen",
        }}
      />
      <Stack.Screen
        name="MyTaleDetailScreen"
        component={MyTaleDetailScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default MyTaleNavigator;
