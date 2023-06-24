import { View, Text } from 'react-native'
import React from 'react'
import styles from "./Styles";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>¡CREA TU CUENTO!</Text>
    </View>
  );
}

export default Header