import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegScreen from "../screens/regScreen";
import RegScreenDet from "../screens/regScreenDetail";
const Stack = createNativeStackNavigator();
const DataNav = () => {
    return(
        <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen name="Registros" component={RegScreen}/>
            <Stack.Screen name="Registros Detalle" component={RegScreenDet}/>

        </Stack.Navigator>
    )
}
export default DataNav