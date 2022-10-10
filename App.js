import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import Routes from './Navigation/Navig';
import { Provider } from 'react-redux';
import store from './store/index';
export default function App() {
  const [loaded] = useFonts({
    'Poppins': require('./assets/Fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/Fonts/Poppins-Bold.ttf'),
    'Poppins-Italic': require('./assets/Fonts/Poppins-Italic.ttf')
  })
  if(!loaded) {
    return(
      
      <View>
        <ActivityIndicator/>
      </View>
    )
  }
  return(
    <Provider store={store}>
      <Routes/>
    </Provider>
      

  )
}
