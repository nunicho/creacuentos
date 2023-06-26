import { StyleSheet, View } from "react-native";
import CameraNavigator from "./CameraNavigator";
import ProfileNavigator from "./ProfileNavigator";
import FavoritesNavigator from "./FavoritesNavigator";
import TaleNavigator from "./TaleNavigator";
import MyTaleNavigator from "./MyTaleNavigator";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MaterialBottomTabs = createMaterialBottomTabNavigator();

export default MaterialBottomTabNavigator = () => {
  return (
    <MaterialBottomTabs.Navigator
      activeColor="#3e2465"
      inactiveColor="#f0edf6"
      shifting={true}
      sceneAnimationEnabled={true}
      barStyle={{ paddingBottom: 15 }}
    >
      <MaterialBottomTabs.Screen
        name="TaleNavigator"
        component={TaleNavigator}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: () => (
            <View>
              <MaterialCommunityIcons name="home" color="blue" size={26} />
            </View>
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="MyTaleNavigator"
        component={MyTaleNavigator}
        options={{
          tabBarLabel: "Mi Cuento",
          tabBarIcon: () => (
            <View>
              <MaterialCommunityIcons name="pencil" color="purple" size={26} />
            </View>
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarLabel: "Mi Perfil",
          tabBarIcon: () => (
            <View>
              <MaterialCommunityIcons
                name="emoticon"
                color="orange"
                size={26}
              />
            </View>
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: () => (
            <View>
              <MaterialCommunityIcons name="heart" color="red" size={26} />
            </View>
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Camera"
        component={CameraNavigator}
        options={{
          tabBarLabel: "Cámara",
          tabBarIcon: () => (
            <View>
              <MaterialCommunityIcons name="camera" color="green" size={26} />
            </View>
          ),
        }}
      />
    </MaterialBottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    paddingTop: 15,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    height: 85,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});
