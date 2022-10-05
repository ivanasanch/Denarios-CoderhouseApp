import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpensesScreen from '../screens/ExpensesScreen';
import IncomeScreen from '../screens/incomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../screens/Home";
import { colors } from "../Constants/Colors";
import RegScreen from "../screens/regScreen";
const Tab = createBottomTabNavigator();

const TabNav = () => {
    debugger
    return(
        
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarShowLabel:true,
            tabBarLabelStyle: {
                fontFamily: 'Poppins',
                color: colors.primary,
            }
        }} initialRouteName="Inicio">
            <Tab.Screen 
            name = "Inicio" 
            component={Home} 
            options={{
                title:'Inicio',
                tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        name={focused ? 'home' : "home-outline"}
                        size={22}
                        color={colors.textColor}
                    />
                ),
            }}
            />
            <Tab.Screen name = 'Gastos' component={ExpensesScreen} options={{
                title:'Gastos',
                tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        name='remove'
                        size={22}
                        color={colors.textColor}
                    />
                ),
            }}/>
            <Tab.Screen name = 'Ingresos' component={IncomeScreen} options={{
                title:'Ingresos',
                tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        name='add'
                        size={22}
                        color={colors.textColor}
                    />
                ),
            }}/>
             <Tab.Screen name = 'Registros' component={RegScreen} options={{
                title:'Registros',
                tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        name='list'
                        size={22}
                        color={colors.primary}
                    />
                ),
            }}/>
        </Tab.Navigator>
        )
}
export default TabNav
/* const styles = StyleSheet.create({
    tabBar:{
        shadowColor:"#333",
        shadowOffset:{width:0, height:10},
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5,
        position:'absolute',
        bottom:15,
        left:20,
        right:20,
        borderRadius:15,
        height:90,
        backgroundColor: colors.borderColor
        },
    item:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:colors.backgroundColor
    }
}) */