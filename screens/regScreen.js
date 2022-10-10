import React, {useState} from 'react';
import { StyleSheet, View, Text,FlatList, TouchableHighlight} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { colors } from ".././Constants/Colors";
import { Data } from '../Constants/Data';
import DataItem from '../components/dataItem';
import List from '../components/List';
import { selectCategory } from '../store/actions/category.action';
const RegScreen = ({navigation})=>{
  const dispatch = useDispatch()
  const categories = useSelector((state)=> state.categories.categories)
  
  const del = id => {
    setItemList(currentItems=>currentItems.filter(item=>item.id !== id))
  } 
  const onSelected = (item) =>{
    dispatch(selectCategory(item.id))
  navigation.navigate("Registros Detalle")
 }
const renderItem =({item}) => <DataItem item={item} onSelected={onSelected} />
    return(
      <View style={styles.container}>
        <View style={styles.containerTitle}>
            <Text style={styles.text}>Registros</Text>
        </View>
        <View style={{flex:0.8}}>
          <FlatList 
          data={categories}
          renderItem={renderItem}
          />
        </View>
        <View>
          <List values={Data}></List>
        </View>

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
      backgroundColor: colors.background,
      paddingHorizontal:50,
    },
    container: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal:50,
      backgroundColor: colors.background,
      flexDirection:'column'
    },

  })