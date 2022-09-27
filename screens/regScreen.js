import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { colors } from ".././Constants/Colors";
const RegScreen = ()=>{
    return(
        <View style={styles.containerTitle}>
            <Text style={styles.text}>Registros</Text>
        </View>
    )
}
export default RegScreen
const styles = StyleSheet.create({
    text:{
      color : colors.titleColor, 
      fontSize: 40,
      fontFamily: 'Poppins-Italic'
    },
    containerTitle: {
      alignItems:'center',
      backgroundColor: colors.background
    }
  })