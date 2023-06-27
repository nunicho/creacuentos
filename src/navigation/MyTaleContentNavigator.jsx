import MyTaleContentScreen from "../screens/MyTaleContentScreen/Index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default MyTaleContentNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="MyTaleContentScreen" component={MyTaleContentScreen} />
    </Stack.Navigator>
  );
};
