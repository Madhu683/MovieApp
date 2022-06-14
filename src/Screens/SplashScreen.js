import React, { useEffect}  from 'react';
import {View,Text,Image} from 'react-native';
import Styles from '../Styles';
import Constants from '../Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SplashScreen({navigation})
{

  useEffect(() => {
    setTimeout(() => {
       AsyncStorage.getItem('@session_id').then((value) =>
        navigation.replace(
          value === null ? 'Login':'Home'  
        ),
      );
     
    }, 5000);
    
  }, []);

  return(
    <View style={Styles.splashScreenBg}>
        
         <Text style={Styles.logoTitle}>Movie App</Text>
    </View>
  )
}