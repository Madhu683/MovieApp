import * as React from 'react';
import { Text, View,LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/Screens/SplashScreen'
import HomeScreen from './src/Screens/HomeScreen'
import LoginScreen from './src/Screens/LoginScreen'
import MovieDetails from './src/Components/MovieDetails';

const Stack = createNativeStackNavigator();






export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        
        <Stack.Screen name="moviedetails" component={MovieDetails} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}