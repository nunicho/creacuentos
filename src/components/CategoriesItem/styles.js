import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  goalItem: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 6,
    backgroundColor: colors.menuItem,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});

export default styles;
