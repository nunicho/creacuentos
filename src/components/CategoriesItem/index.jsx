import { Text, View, Pressable, Image } from "react-native";

import React from "react";
import styles from "./styles";

const CategoriesItem = ({ item, onSelected }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalText} onPress={() => onSelected(item)}>
          {item.title}
        </Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.img }} />
        </View>
      </Pressable>
    </View>
  );
};

export default CategoriesItem;
