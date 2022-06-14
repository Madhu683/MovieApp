import {Dimensions, StyleSheet} from 'react-native';
import Constants from './Constants';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const Styles = StyleSheet.create({
  sectionBg:{
    backgroundColor:Constants.baseColor,
    width:deviceWidth,
    height:deviceHeight,
  },
  splashScreenBg:{
    backgroundColor:Constants.baseColor,
    width:deviceWidth,
    height:deviceHeight,
    justifyContent:'center',
    alignItems:'center',
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


  heading:{
    color:Constants.fadedColor,
    fontSize:19,
    margin:10,
  },
  wposterImage:{
    height:200,
    width:deviceWidth/3,        
  },


  posterImage:{
    height:250,
    width:150,
    borderRadius:10,
  },
  movieTitle:{
    color:Constants.textColor,
    width:150,
    textAlign:'center',
    marginTop:5,
    fontSize:16,        
  },
   
  

  imageBg:{
    width:deviceWidth,
    height:250,
  }
});

export default Styles;