import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";

const TaleItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onSelected(item)}
    >
      <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
      
    </TouchableOpacity>
  );
};

export default TaleItem;
