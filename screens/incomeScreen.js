import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import AddItem from '.././components/addItem';
import { colors } from ".././Constants/Colors";
const IncomeScreen = () => {
  const [textItem, setTextItem] = useState('')
  const [mountItem, setMountItem] = useState('')
  const [itemList, setItemList] = useState([])
  const onHandlerChangeItem = (i) => {
    setTextItem(i)
  }
  const onHandlerChangeMount = (i) => {
    setMountItem(i)
  }
  const add = () => {
    setItemList(currentItems=>[...currentItems, {id: Math.random().toString(), text:textItem, mount: mountItem}])
    setTextItem('')
    setMountItem('')


  }


  return (
      <View style={styles.container}>
        <AddItem title ={'Ingresos'} text = {textItem} mount = {mountItem} onChangeT={onHandlerChangeItem} onChangeM = {onHandlerChangeMount} onAdd ={add}/>
      </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal:50,
    backgroundColor: colors.background
  },
  containerScroll: {
    flex: 1,
  }
})

export default IncomeScreen