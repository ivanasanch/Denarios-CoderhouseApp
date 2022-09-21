import React from "react";
import { StyleSheet, TextInput, View, Text} from 'react-native';
import { Icon,Button } from '@rneui/themed';
import { colors } from ".././Constants/Colors";
const AddItem = (props) => {
  
    const { onChangeT, text, onAdd, mount, onChangeM, title  } = props
    return (
      <View>
          <View style={styles.containerTitle}>
            <Text style={styles.text}>{title}</Text>
          </View>
          <View style={styles.component}>
            <View style = {styles.componentInput}>
              <TextInput keyboardType = "numeric" style={styles.textinput} placeholder='Monto' onChangeText={onChangeM} value={mount}/>
              <TextInput multiline keyboardType = "default" style={styles.textinput} placeholder='Descripcion' onChangeText={onChangeT} value={text} />
            </View>
            <Button buttonStyle={styles.buttonIcon} onPress={onAdd}>
                <Icon name='add' color= {colors.background}/>
            </Button>
          </View>
      </View>
    )
}
export default AddItem
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 50
  },
  containerTitle: {
    alignItems:'center',
  },
  text:{
    color : colors.titleColor, 
    fontSize: 40,
    fontFamily: 'Poppins-Italic'
  },
  component:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom: 10
  },
  componentInput:{
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom: 10
  },
  textinput:{
    width: 200,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    fontSize:20,
    fontFamily: 'Poppins'
  },
  buttonIcon:{
    backgroundColor: colors.buttonColor,
    borderRadius:20,
  },
  itemListText:{
    fontSize:20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5
  },
  itemListContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: colors.buttonColor,
    borderBottomColor:colors.white,
    borderBottomWidth:2,
    borderRadius:5 
  }
  })