import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/componentes/home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SegundaTelaComponent from './src/componentes/segundaTela';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={Home} />
        <Stack.Screen name="Segunda Tela" component={SegundaTelaComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;