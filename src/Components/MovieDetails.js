import  React,{useEffect,useState} from 'react';
import {View,Text,ScrollView,Image,Dimensions, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IMAGE_POSTER_URL,POSTER_IMAGE} from '../config';
import {GET} from '../Services/API';
import Styles from '../Styles';
import Loader from './Loader';
import Constants from '../Constants';
import SimilarMovies from './SimilarMovies';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;


export default function MovieDetails({route,navigation})
{

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      const data = await GET(`/${route.params.media}/${route.params.movieId}`);
      console.log(data)
      setDetails(data);
      setLoading(false);
    };

    getDetails();
  }, []);
  const getGenre=()=>{
  
    return(details.genres.map(genre=>(
     <View style={{marginHorizontal:10}}><Text style={{color:Constants.fadedColor}}>{genre.name}</Text></View>
    )))
  };
  const getRRR=()=>
  {
    const rate = details.vote_average;
    
    const year = details.release_date.slice(0,4);
    let runtime = details.runtime;
    let minutes = runtime%60;
    runtime = Math.trunc(runtime/60);
    let duration = "";
    if(runtime!==0)
    {  duration=duration+String(runtime)+"h"
      if(minutes!==0)
      {
          duration=duration+" "+String(minutes)+"m";
      }
    }
    else
    {
      duration=duration+String(minutes)+"m";
    }

    console.log(duration)
    return(
      <View style={{justifyContent:'center',width:deviceWidth,flexDirection:'row'}}>
        <Text style={{color:Constants.fadedColor,marginHorizontal:10,marginTop:5}} >{year}</Text>
        <Text style={{color:Constants.fadedColor,marginHorizontal:10,marginTop:5}} >{rate}</Text>
        <Text style={{color:Constants.fadedColor,marginHorizontal:10,marginTop:5}} >{duration}</Text>
      </View>
    )
  }
  
  return(
    <ScrollView style={Styles.sectionBg} >
       {loading ? (
        <Loader />
      ) : (
         <View>
            <View style={styles.imageContainer}>
            <Image  source={{uri: `${IMAGE_POSTER_URL}${details.poster_path}`}} 
            style={styles.imageBg}/>
            </View>
            
            
            <Text style={styles.imageTitle}>{details.original_title}</Text>
            <View style={{flexDirection:'row',width:deviceWidth,justifyContent:'center'}}>{getGenre()}</View>
            {getRRR()}
            <View style={styles.detailsBox}>
                <View style={styles.detailsContainer}>
                <Ionicons name={"bookmark-outline"} size={25} color={"gold"} />
                <Text style={{color:Constants.textColor}}>My List</Text>
                </View>
                <View style={styles.detailsContainer}>
                <Ionicons name={"heart-outline"} size={25} color={"gold"} />
                <Text style={{color:Constants.textColor}}>Lik</Text>
                </View>
                <View style={styles.detailsContainer}>
                <Ionicons name={"star-outline"} size={25} color={"gold"} />
                <Text style={{color:Constants.textColor}}>Rate</Text>
                </View>
                <View style={styles.detailsContainer}>
                <Ionicons name={"share-social"} size={25} color={"gold"} />
                <Text style={{color:Constants.textColor}}>Share</Text>
                </View>
            </View>
            <Text style={styles.detailsStyle}>{details.overview}</Text>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:Constants.textColor,fontSize:18}}>More Like This</Text>
              <View style={{backgroundColor:Constants.textColor,width:250,height:3,marginLeft:10}}></View>
            </View>
            <SimilarMovies url={details.id} navigation={navigation}/>
        </View>
       )
       }
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  imageContainer:{
    width:deviceWidth,
    height:deviceHeight/(1.5),
    
  },

  imageBg:{
     width:undefined,
     height:undefined,
     flex:1,
     borderBottomLeftRadius:50,
     borderBottomRightRadius:50,
     
  },
  imageTitle:{
       fontSize: 23,
       color: Constants.textColor,
       textAlign: 'center',
       marginTop:5,
       marginBottom:3,
       },
   
    detailsStyle:{
      color:Constants.textColor,
      fontSize:13,
      textAlign:'justify',
      margin:10,
    },
    detailsHeading:{
      fontSize:28,
      color:Constants.textColor,
    },
    detailsBox:{
      width:deviceWidth,
      flexDirection:'row',
     
    },
    detailHead:{
      color:Constants.textColor,
      fontStyle:'normal',
      fontSize:18,
    },
    
    detailsContainer:{
      width:deviceWidth/4,
      height:45,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:10,
      marginTop:10,
    }    
  
})