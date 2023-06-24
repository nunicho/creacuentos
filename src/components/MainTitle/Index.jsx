import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";

const MainTitle = () => {
      const [loaded] = useFonts({
        "ButterflyKids-Regular": require("../../assets/fonts/ButterflyKids-Regular.ttf"),
      });
  if (!loaded) {
    return null;
  }
  return (
    <View>
      <Text style={styles.titulo}>¿Qué quieres leer hoy?</Text>
    </View>
  );
}

export default MainTitle;


const styles = StyleSheet.create({
  titulo: {
    fontFamily: "ButterflyKids-Regular",
    fontSize:55,
  },
});