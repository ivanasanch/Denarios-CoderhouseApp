import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IncomeScreen from '../screens/incomeScreen';
import RegScreen from '../screens/regScreen';
import Home from "../screens/Home";
import ExpensesScreen from "../screens/ExpensesScreen";
const Stack = createNativeStackNavigator();
const AppNav = () => {
    return(
        <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen name="Inicio" component={Home}/>
            <Stack.Screen name="Gastos" component={ExpensesScreen}/>
            <Stack.Screen name="Ingresos" component={IncomeScreen}/>
            <Stack.Screen name="Datos" component={RegScreen}/>
        </Stack.Navigator>
    )
}
export default AppNav