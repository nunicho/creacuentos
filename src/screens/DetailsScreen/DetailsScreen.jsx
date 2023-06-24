import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ActivityIndicator, Colors } from "react-native-paper";
import watch from '../../assets/gif/clock.gif'

// import * as Speech from 'expo-speech'

import styles from "./Styles";

import React from "react";
import { useSelector } from "react-redux";

const DetailsScreen = () => {
  const [loadingSpinner, setLoadingSpinner] = useState(true);
  const [outputMessage, setOutputMessage] = useState("");
  const tale = useSelector((state) => state.products.selected);

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
        messages: [{ role: "user", content: tale.chatGPTOrder }],
        model: "gpt-3.5-turbo",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.choices[0].message.content);
        setOutputMessage(data.choices[0].message.content.trim());
        setLoadingSpinner(false);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.taleContainer}>
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
          <Text style={styles.taleName}>{tale.name}</Text>
          <Text>{outputMessage}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default DetailsScreen;

// CODIGO ANTERIOR(sin usar API ChatGPT)
/*
import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { useSelector } from "react-redux";

const DetailsScreen = () => {
    const tale = useSelector((state) => state.products.selected);

  return (
    <View>
      <Text>{tale.name}</Text>
      <Text>{tale.description}</Text>
      <Text>${tale.price}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
*/

// PRUEBA DE LECTURA POR EXPO SPEECH

// En la función
/*

const listAllVoiceOptions = async () => {
  let voices = await Speech.getAvailableVoicesAsync
  console.log(voices)
}


  /*
  const readTale = () =>{
    const textToRead = outputMessage
    options={}
    Speech.speak(textToRead, options)
  }

  // const readTaleStop = () => {
  //   const textToRead = outputMessage;
  //   options = {};
  //   Speech.speak(textToRead, options);
  //   Speech.stop(outputMessage, options);
  // };
*/

// En el return
/*  
<TouchableOpacity onPress={readTale()}>
        <View
          style={{
            backgroundColor: "green",
            padding: 5,
            marginRight: 10,
            marginBottom: 20,
            borderRadius: 9999,
            width: 60,
            height: 60,
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons
            name="play-circle"
            size={30}
            color="white"
            style={{ marginLeft: 10 }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={listAllVoiceOptions}>
        <View
          style={{
            backgroundColor: "red",
            padding: 5,
            marginRight: 10,
            marginBottom: 20,
            borderRadius: 9999,
            width: 60,
            height: 60,
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons
            name="stop"
            size={30}
            color="white"
            style={{ marginLeft: 10 }}
          />
        </View>
      </TouchableOpacity>


*/

/*
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ActivityIndicator } from "react-native-paper";
// import * as Speech from 'expo-speech'

import styles from "./Styles";


import React from "react";
import { useSelector } from "react-redux";


const listAllVoiceOptions = async () => {
  let voices = await Speech.getAvailableVoicesAsync
  console.log(voices)
}

const DetailsScreen = () => {
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [outputMessage, setOutputMessage] = useState("");
  const tale = useSelector((state) => state.products.selected);

  useEffect(() => {
    setloadingSpinner(true);
    generateTale();
  }, []);

  const generateTale = () => {
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: tale.chatGPTOrder }],
        model: "gpt-3.5-turbo",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.choices[0].message.content);
        setOutputMessage(data.choices[0].message.content.trim());
      });
  };
 
  return (
    
    <ScrollView contentContainerStyle={styles.taleContainer}>
      <ActivityIndicator
        animating={true}
      />
      <Text style={styles.taleName}>{tale.name}</Text>
      <Text>{outputMessage}</Text>
    </ScrollView>
  );
};

export default DetailsScreen;

*/
