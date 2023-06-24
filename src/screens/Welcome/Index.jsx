import { View, Text, Button, Image } from 'react-native'
import React from 'react'
import logo from '../../assets/image/logo.png'
import styles from './Styles'
import colors from "../../constants/colors";

const Welcome= ({handleStart}) => {
  return (
    <View>
      <Image style={styles.logo} source={logo} />
      <Button
        title="Click para comenzar"
        onPress={handleStart}
        color={colors.menuButton}
      />
    </View>
  );
}

export default Welcome