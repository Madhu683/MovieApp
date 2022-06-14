import React,{useState,useEffect} from 'react';
import {View,Image,FlatList,Text,TouchableOpacity} from 'react-native';
import { POSTER_IMAGE } from '../config';
import { GET } from '../Services/API';
import Styles from '../Styles';
import Loader from './Loader';

const TrendingSeries=({navigation})=> {
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState();

    useEffect(()=>{
        const getMovies = async()=>{
              const data = await GET('/tv/top_rated');
              setMovies(data.results);
              
              setLoading(false);
        }; 

        getMovies();
    },[]);
  return (
    <View>
        {loading?(<Loader />):
         (<View>
             <Text style={Styles.heading}>Trending Movies</Text>
             <FlatList 
             keyExtractor={item=>item.id}
             data={movies}
             horizontal
             
             renderItem={item=>displayMovies(item,navigation)}
             />

          </View>)}
    </View>
  )
}
const displayMovies=({item},navigation)=>{
    return(
        <TouchableOpacity style={{marginHorizontal:10}} onPress={()=>{navigation.push('moviedetails',{movieId:item.id,media:"tv"})}}>
            <Image
        source={{uri: `${POSTER_IMAGE}${item.poster_path}`}}
        style={Styles.posterImage}
            />
            <Text style={Styles.movieTitle}>{item.original_name}</Text> 
        </TouchableOpacity>
        )
}
export default TrendingSeries