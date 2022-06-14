import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import Styles from '../Styles';
import Constants from '../Constants';
import DiscoverMovies from '../Components/DiscoverMovies'
import TrendingMovies from '../Components/TrendingMovies'
import TrendingSeries from '../Components/TrendingSeries'

export default function DashBoard({navigation})
{
  return(
    <ScrollView style={Styles.sectionBg}>
         <DiscoverMovies />    
         <TrendingMovies navigation={navigation}/>
         <TrendingSeries navigation={navigation}/>
         <TrendingMovies navigation={navigation}/>
         <TrendingSeries navigation={navigation}/>   
    </ScrollView>
  )
}