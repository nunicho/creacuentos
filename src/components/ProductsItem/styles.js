import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  imageContainer: {
    height: "30%",
    
  },
  image: {
    resizeMode : "cover",
    borderRadius: 15,
    padding: 50
  },
  textContainer: {
    height: "50%",
    padding:15,
   justifyContent: "center"
  },
});

export default styles;
