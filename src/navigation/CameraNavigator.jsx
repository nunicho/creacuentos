import CameraScreen from "../screens/CameraScreen/CameraScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default CameraNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="CameraStackScreen" component={CameraScreen} />
    </Stack.Navigator>
  );
};
