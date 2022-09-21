import React from "react";
import { StyleSheet,View, Text, FlatList, TouchableHighlight} from 'react-native';
import { Icon,Button } from '@rneui/themed';
import { colors } from ".././Constants/Colors";

const List = (props)=> {
    const {values, del} = props
    return(
        <View>
            <FlatList 
            data={values}
            renderItem={data =>(
            <TouchableHighlight>
              <View style={styles.itemListContainer}>
                <View>
                  <Text style={styles.itemListText}>Descripcion: {data.item.text}</Text>
                  <Text style={styles.itemListText}>Monto: ${data.item.mount}</Text>
                </View>
                <Button buttonStyle={{backgroundColor:'transparent'}} onPress={del.bind(this, data.item.id)}>
                  <Icon name='delete' color="#F7F0F5"/>
                </Button>
              </View>
            </TouchableHighlight>
            )}
            />
        </View>
        )
    }
export default List;
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
          borderBottomColor: colors.borderColor,
          borderBottomWidth: 1,
          fontSize:20
        },
        buttonIcon:{
          backgroundColor: colors.buttonColor,
          borderRadius:20,
        },
        itemListText:{
          fontSize:18,
          paddingTop: 5,
          paddingLeft: 5,
          fontFamily:'Poppins'
        },
        itemListContainer:{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          backgroundColor: colors.titleColor,
          borderBottomColor:colors.white,
          borderBottomWidth:2,
          borderRadius:5 
      }
      })