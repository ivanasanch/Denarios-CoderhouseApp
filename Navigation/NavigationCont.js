import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExpensesScreen from '../screens/expensesScreen';
import IncomeScreen from '../screens/incomeScreen';
import RegScreen from '../screens/regScreen';
import Home from "../screens/Home";
const Stack = createNativeStackNavigator();
const AppNav = () => {
    return(
        <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen name="Inicio" component={Home}/>
            <Stack.Screen name="Egresos" component={ExpensesScreen}/>
            <Stack.Screen name="Ingresos" component={IncomeScreen}/>
            <Stack.Screen name="Registros" component={RegScreen}/>
        </Stack.Navigator>
    )
}
export default AppNav