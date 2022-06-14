import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';
import Authenticate  from '../Authenticate'
import AsyncStorage from '@react-native-async-storage/async-storage';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

 

const Constants = {
  textColor: '#FFFFFE',
  baseColor: '#232946',
  fadedColor: '#B8C1EC',
  secondaryColor: '#EEBBC3',
};
const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');
 
  const passwordInputRef = createRef();
 
  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    
    let dataToSend = {email: userEmail, password: userPassword};
    
      if(Authenticate(userEmail,userPassword))
      {
      setTimeout(async()=>{
        try{
        const data = await AsyncStorage.getItem('@session_id');
        console.log("8=>retriving stored value")
        console.log(data)
        navigation.navigate('Home')
        
        }
        catch(error){
             console.log(error)
        }
   },5000)
  }
    
  };
 
  return (
    <View style={Styles.sectionBg}>
      
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
         <Text style={Styles.logoTitle}>Movie App</Text>
            </View>
            <View style={Styles.SectionStyle}>
              <TextInput
                style={Styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            
            <View style={Styles.SectionStyle}>
              <TextInput
                style={Styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={Styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={Styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={Styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={Styles.registerTextStyle}
              >
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const Styles = StyleSheet.create({
  sectionBg:{
    backgroundColor:Constants.baseColor,
    width:deviceWidth,
    height:deviceHeight,
  },
 
  logo:{
      width:150,
      height:150,        
  },
  logoTitle:{
    fontSize:20,
    color:Constants.textColor,
    margin:10,
  },

  //LoginScreen Styles
   buttonStyle: {
    backgroundColor: Constants.secondaryColor,
    borderWidth: 0,
    color: Constants.baseColor,
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: Constants.baseColor,
    paddingVertical: 10,
    fontSize: 16,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
 
  
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },


});
