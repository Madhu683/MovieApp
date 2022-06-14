import {API_KEY, BASE_URL} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const GET = async(url) =>{
    try{
        const data = await AsyncStorage.getItem('@session_id');
        console.log("8=>retriving stored value")
        console.log(data)

        const API_URL=`${BASE_URL}${url}?api_key=${API_KEY}&session_id=${data}`;

       let response = await fetch(API_URL,{method:'GET'});
       response =response.json();
       return response;
        
        }
        catch(error){
             console.log(error)
        }
    
}