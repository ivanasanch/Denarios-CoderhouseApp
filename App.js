import React, {useState} from 'react';
import { StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import { Icon,Button } from '@rneui/themed';
import { useFonts } from 'expo-font';
import { colors } from "./Constants/Colors";
import ExpensesScreen from './screens/expensesScreen';
import IncomeScreen from './screens/incomeScreen';
import RegScreen from './screens/regScreen';
export default function App() {
  const [expenses, setExpenses] = useState(false)
  const [income, setIncome] = useState(false)
  const [reg, setReg] = useState(false)
  const [loaded] = useFonts({
    'Poppins': require('./assets/Fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/Fonts/Poppins-Bold.ttf'),
    'Poppins-Italic': require('./assets/Fonts/Poppins-Italic.ttf')
  })
  if(!loaded) {
    return(
      <View>
        <ActivityIndicator/>
      </View>
    )
  }
  const onBack = () =>{
    setExpenses(false)
    setIncome(false)
    setReg(false)
  }
  let content 
  if(expenses){
      content = <><Button buttonStyle={styles.buttonIcon} title='Inicio' onPress={onBack}><Icon name='arrow-back' color= {colors.background}/></Button><ExpensesScreen/></>
  } else if (income){
      content = <><Button buttonStyle={styles.buttonIcon} title='Inicio' onPress={onBack}><Icon name='arrow-back' color= {colors.background}/></Button><IncomeScreen/></>
  } else if (reg) {
    content = <><Button buttonStyle={styles.buttonIcon} title='Inicio' onPress={onBack}><Icon name='arrow-back' color= {colors.background}/></Button><RegScreen/></>
  }
  else {
    content = 
    <View>
      <View style={styles.containerTitle}>
        <Text style={styles.text}>Denarios</Text>
      </View>
        <Button buttonStyle={styles.buttonIcon} title='Egresos' onPress={() => setExpenses(true)} ></Button>
        <Button buttonStyle={styles.buttonIcon} title='Ingresos' onPress={() => setIncome(true)}></Button>
        <Button buttonStyle={styles.buttonIcon} title='Registros' onPress={() => setReg(true)}></Button>
    </View>
  }
  
      return (
        <View style= {styles.container}>
          {content}
        </View>
    )
  }
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
