import  React from 'react' ;
import { colors } from '../Constants/Colors';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native' ;

const DataItem = ({ item, onSelected }) => {
    return (
        <View style={styles.entityContainerLabel}>
            <TouchableHighlight 
                onPress={() => onSelected(item)}>
                    <View>
                        <Text style={styles.itemListText}>{item.title}</Text>
                    </View>
            </TouchableHighlight>
        </View>
    )
}
export default DataItem;
const styles = StyleSheet.create({
    entityContainerLabel: {
        flexDirection:'row',
        justifyContent:'center',
        minWidth: 80,
        padding: 8,
        borderRadius: 4,
        marginTop: 8,
        backgroundColor:colors.entityColor
      },
        itemListText:{
          fontSize:16,
          paddingTop: 5,
          paddingLeft: 5,
          fontFamily:'Poppins'
      },
})