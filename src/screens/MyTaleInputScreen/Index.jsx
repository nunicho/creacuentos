import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { useState } from "react";

//IMPORTAMOS EL MODELO
import { Tale } from "../../models/tale";

//IMPORTAMOS DE LA DATABASE
import { insertTale } from "../../database/database";

function MyTaleInputScreen() {
  const [race, setRace] = useState("Caballero");
  const [environment, setEnvironment] = useState(" Espacio");
  const [power, setPower] = useState("superfuerza");
  const [outputMessage, setOutputMessage] = useState("");

  const [title, setTitle] = useState("Mi título");
  const [content, setContent] = useState("");
  const [taleImage, setTaleImage] = useState("NO IMAGE");

  // IMAGEN

  //AGREGAR MECANICA DE IMAGEN

  const newTale =
    "Generar un cuento" + " " + race + " " + environment + " " + power;

  function generateTaleHandler() {
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
        console.log(title);
        console.log(content);
      });
  }

  // API LLAMANDO A LA DATABASE PARA GUARDAR EL CUENTO
  function saveTaleHandler() {
    const taleData = new Tale(
      (this.title = title),
      (this.imageUri = taleImage),
      (this.content = content)

    )
    
    insertTale(taleData);
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
              onChangeText={setTitle}
              value={title}
            />
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
          <Text>{content}</Text>
          <Button title="Guardar Cuento" onPress={saveTaleHandler} />
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
import { View, Text, SafeAreaView, StyleSheet, Button, Image } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { useState } from "react";



//IMPORTAMOS EL MODELO
import { Tale } from "../../models/tale";


//IMPORTAMOS DE LA DATABASE
import { insertTale } from "../../database/database";




function MyTaleInputScreen() {
  const [race, setRace] = useState("Caballero");
  const [environment, setEnvironment] = useState(" Espacio");
  const [power, setPower] = useState("superfuerza");
  const [outputMessage, setOutputMessage] = useState("");

  const [title, setTitle] = useState("Mi título");
  const [content, setContent] = useState("");
  const [taleImage, setTaleImage] =useState("NO IMAGE")


  // IMAGEN

  //AGREGAR MECANICA DE IMAGEN


  const newTale =
    "Generar un cuento" + " " + race + " " + environment + " " + power;

  function generateTaleHandler() {
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
        console.log(title)
        console.log(content);
      });
  }

  // API LLAMANDO A LA DATABASE PARA GUARDAR EL CUENTO
function saveTaleHandler() {  
     const taleData = new Tale('Pepe', 'blablabla', 'taleImage');
     insertTale(taleData);
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
              onChangeText={setTitle}
              value={title}
            />
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
          <Text>{content}</Text>
          <Button title="Guardar Cuento" onPress={saveTaleHandler} />
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

*/
