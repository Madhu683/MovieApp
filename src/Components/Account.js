import React from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native';
import Styles from '../Styles'
import Ionicons from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Account({navigation})
{  const logOut=async()=>{
      navigation.navigate('Login');
      try{
             await AsyncStorage.removeItem('@session_id');
      }
      catch(error)
      {
        console.log(error)
      }
      
    }
  return(
    <View style={Styles.sectionBg}>
        <View style={{width:'100%',height:400,justifyContent:'center',alignItems:'center'}}>
           
           <Text style={{color:'white',fontSize:30,margin:10}} >Madhu Kandukuri</Text>
        </View>
       <Text style={{color:'white',fontSize:18,margin:10}}>Watch List</Text>
       <Text style={{color:'white',fontSize:18,margin:10}}>Favourites</Text>
       <Text style={{color:'white',fontSize:18,margin:10}}>Settings</Text>
       <TouchableOpacity onPress={logOut}><Text style={{color:'white',fontSize:18,margin:10}}>Log out</Text></TouchableOpacity>
    </View>
  )
}