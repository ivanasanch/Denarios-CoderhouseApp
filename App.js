import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Text, FlatList, TouchableHighlight } from 'react-native';
import { Icon,Button } from '@rneui/themed';
export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])
  const onHandlerChangeItem = (i) => {
    setTextItem(i)}
  const add = () => {
    setItemList(currentItems=>[...currentItems, {id: Math.random().toString(), value:textItem}])
    setTextItem('')
  }
  const del = id => { 
    setItemList(currentItems=>currentItems.filter(item=>item.id !== id))
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.text}>Notas</Text>
      </View>
      <View style={styles.component}>
        <TextInput multiline style={styles.textinput} placeholder='Escriba algo' onChangeText={onHandlerChangeItem} value={textItem} />
        <Button buttonStyle={styles.buttonIcon} onPress={add}>
          <Icon name='add' color="#F7F0F5"/>
        </Button>
      </View>
      <View>
        <FlatList 
        data={itemList}
        renderItem={data =>(
          <TouchableHighlight>
            <View style={styles.itemListContainer}>
              <Text style={styles.itemListText} key={data.item.id}>{data.item.value}</Text>
                <Button buttonStyle={{backgroundColor:'transparent'}} onPress={del.bind(this, data.item.id)}>
                  <Icon name='delete' color="#F7F0F5"/>
                </Button>
            </View>
          </TouchableHighlight>
        )}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0F5',
    padding: 50
  },
  containerTitle: {
    alignItems:'center',
  },
  text:{
    color : '#80C2AF', 
    fontWeight:'bold',
    fontSize: 40,
  },
  component:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom: 10
  },
  textinput:{
    width: 200,
    borderBottomColor: '#B0A1BA',
    borderBottomWidth: 1,
    fontSize:20
  },
  buttonIcon:{
    backgroundColor: '#305252',
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
    backgroundColor: '#80C2AF',
    borderBottomColor:'white',
    borderBottomWidth:2,
    borderRadius:5 
}
})
