import { useState, useEffect } from "react";

import { StyleSheet, View } from "react-native";
import Welcome from "./src/screens/Welcome/Index";
import BackgroundAnimation from "./src/components/imgBackground/Index";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";

//REDUX
import { Provider } from "react-redux";
import store from "./src/store";

// DATABASE
import { init } from "./src/database/database";
import AppLoading from "expo-app-loading";

export default function App() {
  // DATABASE
  const [dbInitialized, setDbInitialized] = useState(false);

  const [ingresar, setIngresar] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!dbInitialized) {
    return <AppLoading />;
  }

  function handleStart() {
    setIngresar(true);
  }

  // function handleBack() {
  //   setIngresar(false);
  // }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <BackgroundAnimation />
        {!ingresar ? (
          <Welcome handleStart={handleStart} />
        ) : (
          <NavigationContainer>
            <BottomTabNavigator />
          </NavigationContainer>
        )}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

/*
import { useState, useEffect } from "react";

import { StyleSheet, View, Dimensions } from "react-native";
import Bienvenido from "./src/screens/Bienvenido/Index";
import BackgroundAnimation from "./src/components/imgBackground/Index";
import ShopNavigator from "./src/navigation/Index";

export default function App() {
  const [ingresar, setIngresar] = useState(false);

  const [isPortrait, setIsPotrait] = useState(true);
  const statePortrait = () => setIsPotrait(onPortrait);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height > dim.width;
  };

  console.log(isPortrait);

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait);
    return () => {
      Dimensions.removeEventListener("change", statePortrait);
    };
  }, []);

  function handleStart() {
    setIngresar(true);
  }

  // function handleBack() {
  //   setIngresar(false);
  // }

  return (
    <View style={styles.container}>
      <BackgroundAnimation />
      {!ingresar ? <Bienvenido handleStart={handleStart} /> : <ShopNavigator />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

*/
