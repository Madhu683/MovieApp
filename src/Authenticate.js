import axios from 'axios';
import {API_KEY,BASE_URL,REQUEST_TOKEN,VALIDATE_LOGIN,CREATE_SESSION} from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Authenticate(username,password)
{
    console.log("1=>"+"Authenicate function entered with"+username+" "+password)
    const createSession=async()=>{
         console.log("2=>"+"createSession function");

         //Resquest token
         const request_Token = await axios.get(`${BASE_URL}${REQUEST_TOKEN}${API_KEY}`);
         console.log("3=>Request token response")
         console.log(request_Token.data) 

         
         //Validate token with login credintials
         const   ValidateData = JSON.stringify({
            "username": username,
            "password": password,
            "request_token": request_Token.data.request_token,
           });
           console.log("4=>Data sending to validate login")
           console.log(ValidateData)
           var config = {
               method: 'post',
               url: `${BASE_URL}${VALIDATE_LOGIN}${API_KEY}`,
               headers: { 
                    'Content-Type': 'application/json'
               },
              data : ValidateData
              };

           try
           {
             const ValidateResponse = await axios(config);
             console.log(ValidateResponse.data) 
             if(ValidateResponse.data.success)
      {
         //Create a session 
         const   RequestData = JSON.stringify({       
                "request_token": ValidateResponse.data.request_token,
          });
          var Sessionconfig = {
                method: 'post',
                url: `${BASE_URL}${CREATE_SESSION}${API_KEY}`,
                headers: { 
                   'Content-Type': 'application/json'
                },
                data : RequestData
          };

          try{
                await axios(Sessionconfig).then((response)=>{
                    console.log("5=>Session Creation")
                    console.log(response.data)
                    try{
                         AsyncStorage.setItem('@session_id',response.data.session_id);
                         console.log("6=>sesssion id stored");
                         setTimeout(async()=>{
                              try{
                              const data = await AsyncStorage.getItem('@session_id');
                              console.log("7=>retriving stored value")
                              console.log(data)
                              return true
                              }
                              catch(error){
                                   console.log(error)
                              }
                         },5000)
                    }
                    catch(error)
                    {
                         console.log(error)
                         return false
                    }
                })
                
                
                 
                
          }
          catch(error)
          {
            console.log(error)
            return false
            
          }


      }
      else{
        console.log("fail")
        return false
      }
           }
           catch(error)
           {
                   console.log(error)
           }
           


    }

           
      
      return createSession();
}
