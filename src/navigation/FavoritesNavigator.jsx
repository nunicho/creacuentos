import FavoritesScreen from "../screens/FavoritesScreen/FavoritesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default FavoritesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="FavoritesStackScreen" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};
