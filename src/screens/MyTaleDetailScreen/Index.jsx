import { View, Text, SafeAreaView, StyleSheet, Button, Image } from "react-native";
import React from "react";

import { useState, useEffect } from "react";
//IMPORTAMOS EL MODELO
import { Tale } from "../../models/tale";

//IMPORTAMOS DE LA DATABASE
import { insertTale } from "../../database/database";

//SPINNER
import { ActivityIndicator } from "react-native-paper";

function MyTaleDetailScreen({ route, navigation }) {
  const [loadingSpinner, setLoadingSpinner] = useState(true);
  
  const { title, taleImage, race, environment, power } = route.params;
  const [outputMessage, setOutputMessage] = useState("");
  const [content, setContent] = useState("");

  const insertRace = JSON.stringify(race);
  const insertEnvironment = JSON.stringify(environment);
  const insertPower = JSON.stringify(power);

  const newTale = `crear un cuento de ${insertRace}, ${insertEnvironment}, ${insertPower}`;


  useEffect(() => {
    setLoadingSpinner(true);
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: newTale }],
        model: "gpt-3.5-turbo",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.choices[0].message.content);
        setOutputMessage(data.choices[0].message.content.trim());
        setContent(outputMessage);
         setLoadingSpinner(false);
      });
  }, []);

  // API LLAMANDO A LA DATABASE PARA GUARDAR EL CUENTO

  function saveTaleHandler() {
    console.log(insertRace);
    console.log(insertEnvironment);
    console.log(insertPower);
    const taleData = new Tale(
      (this.title = title),
      (this.imageUri = taleImage),
      (this.content = content)
    );

    insertTale(taleData);
  }

  return (
    <SafeAreaView style={styles.container}>
      {loadingSpinner ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator animating={false} color={"red"} size="large" />
          <Image
            style={styles.activityIndicatorImage}
            source={require("../../assets/gif/clock.gif")}
          />
          <Text style={styles.activityIndicatorText}>
            ¡ESTAMOS PREPARANDO TU CUENTO!
          </Text>
        </View>
      ) : (
        <View>
          <Text>{outputMessage}</Text>
          <Button title="Guardar Cuento" onPress={saveTaleHandler} />
        </View>
      )}
    </SafeAreaView>
  );
}

export default MyTaleDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
