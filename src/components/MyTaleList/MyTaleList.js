import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";

import colors from "../../constants/colors";
import MyTaleItem from "../MyTaleItem/MyTaleItem";

function MyTaleList({tales}) {

  if (!tales || tales.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No hay cuentos agregados - comienza a agregar!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={tales}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MyTaleItem tale={item} />
      )}
    />
  );
}

export default MyTaleList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: colors.menuItem
  },
});
