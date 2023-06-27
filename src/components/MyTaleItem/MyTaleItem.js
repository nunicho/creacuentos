import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import colors from "../../constants/colors";

function MyTaleItem ({ tale, onSelect }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
     //onPress={onSelect.bind(this, tale.id)}
    >
      <Image style={styles.image} source={{ uri: tale.imageUri }} />
      <View style={styles.info}>
        <Text style={styles.title}>{tale.title}</Text>        
      </View>
    </Pressable>
  );
}

export default MyTaleItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: colors.menuItem,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.9,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white"
  }
});
