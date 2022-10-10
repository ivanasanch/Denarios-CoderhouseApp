import React, {useEffect} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { colors } from ".././Constants/Colors";
import List from '../components/List';
import { filteredData } from "../store/actions/data.action"
const RegScreenDet = ({navigation})=>{
  const dispatch= useDispatch()
  const selectedCategory = useSelector((state)=> state.categories.selected)
  const dataFiltered = useSelector((state)=> state.data.filteredData)
 useEffect(()=>{
    dispatch(filteredData(selectedCategory.id))
  }, [])
    return(
      <View style={styles.container}>
        <View style={styles.containerTitle}>
            <Text style={styles.text}>Registros</Text>
        </View>
        <View>
          <List values={dataFiltered}></List>
        </View>
      </View>
    )
}
export default RegScreenDet
const styles = StyleSheet.create({
    text:{
      color : colors.titleColor, 
      fontSize: 40,
      fontFamily: 'Poppins-Italic'
    },
    containerTitle: {
      alignItems:'center',
      backgroundColor: colors.background,
      paddingHorizontal:50,
    },
    container: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal:50,
      backgroundColor: colors.background,
      flexDirection:'column'
    }
  })