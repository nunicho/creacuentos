import { View, Text, SafeAreaView, StyleSheet, Button, Image } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { ActivityIndicator } from "react-native-paper";

function MyTaleInputScreen() {
  const [race, setRace] = useState("Caballero");
  const [environment, setEnvironment] = useState(" Espacio");
  const [power, setPower] = useState("superfuerza");

  const [loadingSpinner, setLoadingSpinner] = useState(true);


  const [outputMessage, setOutputMessage] = useState("");

  const newTale =
    "Generar un cuento" + " " + race + " " + environment + " " + power;

  function generateTaleHandler() {
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
        console.lgog(outputMessage);
         setLoadingSpinner(false);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      {!outputMessage ? (
        <>
          <View>
            <Text>Elige tu personaje</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setRace}
              value={race}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setEnvironment}
              value={environment}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setPower}
              value={power}
            />
          </View>
          <Button title="Generar Cuento" onPress={generateTaleHandler} />
        </>
      ) : (
        <View>
          
              <Text>{outputMessage}</Text>
          
       
        </View>
      )}
    </SafeAreaView>
  );
}

export default MyTaleInputScreen;

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

/*


*/
