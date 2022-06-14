import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constants from '../Constants';
import WatchList from '../Components/WatchList';
import Favourite from '../Components/Favourite';
import Account from '../Components/Account';
import DashBoard from './DashBoard';

const Tab = createBottomTabNavigator();


export default function Home({navigation})
{
  return(
   <Tab.Navigator
   screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'dashboard') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'watchlist') {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            }
            else if (route.name === 'favourite') {
              iconName = focused ? 'heart-sharp' : 'heart-outline';
            }
            else if (route.name === 'account') {
              iconName = focused ? 'person-sharp' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Constants.textColor,
          tabBarInactiveTintColor: Constants.textColor,
          tabBarStyle: { backgroundColor:Constants.baseColor },
        })}
        
    
   >
      <Tab.Screen name="dashboard" component={DashBoard} options={{ headerShown: false }}/>
      <Tab.Screen name="watchlist" component={WatchList} options={{ headerShown: false }}/>
      <Tab.Screen name="favourite" component={Favourite} options={{ headerShown: false }}/>
      <Tab.Screen name="account" component={Account} options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}