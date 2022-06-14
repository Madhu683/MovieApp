import React,{useState,useEffect} from 'react';
import {View,Image,FlatList,Text,TouchableOpacity} from 'react-native';
import { POSTER_IMAGE } from '../config';
import { GET } from '../Services/API';
import Styles from '../Styles';
import Loader from '../Components/Loader';

const WatchList=()=> {
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState();

    useEffect(()=>{
        const getMovies = async()=>{
              const data = await GET('/account/1/watchlist/movies');
              setMovies(data.results);
              console.log(data.results)
              setLoading(false);
        }; 

        getMovies();
    },[]);
  return (
    <View>
        {loading?(<Loader />):
         (<View>
             <Text style={Styles.heading}>Watch List</Text>
             <FlatList 
             keyExtractor={item=>item.id}
             data={movies}
             numColumns={3}
             
             renderItem={displayMovies}
             />

          </View>)}
    </View>
  )
}
const displayMovies=({item})=>{
    return(
        <TouchableOpacity  >
            <Image
        source={{uri: `${POSTER_IMAGE}${item.poster_path}`}}
        style={Styles.wposterImage}
            />
            
        </TouchableOpacity>
        )
}
export default WatchList