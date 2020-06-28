import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MenuScreen from './components/MenuScreen';
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  var navigationOptions = {
    title: 'Product List',
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Cafe Jalsa"
          component={HomeScreen}
          // options={{title: 'Welcome Jalsa Cafe !'}}
        />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
