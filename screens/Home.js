import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Button } from '@rneui/themed';
import { colors } from ".././Constants/Colors";
const Home = ({navigation})=>{
      let content = 
        <View style= {styles.container}>
          <View style={styles.containerTitle}>
            <Text style={styles.text}>Denarios</Text>
          </View>
            <Button buttonStyle={styles.buttonIcon} title='Egresos' onPress={() => navigation.navigate("Gastos")} />
            <Button buttonStyle={styles.buttonIcon} title='Ingresos' onPress={() => navigation.navigate("Ingresos")} />
            <Button buttonStyle={styles.buttonIcon} title='Registros' onPress={() => navigation.navigate("Registros")} />
        </View>
          return (
              <View style= {styles.container}>
                {content}
              </View>
        )
      }
      
export default Home
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: colors.background
    },
    text:{
      color : colors.titleColor, 
      fontSize: 40,
      fontFamily: 'Poppins-Italic'
    },
    containerTitle: {
      alignItems:'center',
    },
    buttonIcon:{
      backgroundColor: colors.buttonColor,
      borderRadius:20,
      margin:20
    }
  })