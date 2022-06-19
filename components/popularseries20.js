import React, { useEffect,useState } from 'react';

import {View,Text,FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import MovieCard from './MovieCard';
import MovieCardWithTitle from './MovieCardWithTitle';
import {Add_Popular_Series_Only_Imdb_10,Add_Popular_Series_20,Add_Now_Series_10,Add_Now_Series_Only_Imdb_10} from '../actions/movieActionCreator';
import BannerCard from './BannerCard';

const popularseries20=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{dispatch(getPopularSeries())

    },[]);

  const data=useSelector(state=>state);
  const testing=data.movie.popularseries20;

 const getPopularSeries = () => {
  try {
    return async(dispatch) => {
      const result = await fetch("https://data-imdb1.p.rapidapi.com/series/order/byRating/?page_size=20", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
          "x-rapidapi-key": "ad8e26125bmsh7f8080efbc2506ap1f606bjsndb91972d2b0d"
        }
      });
      const data = await result.json();
      if (data) {
        
        const upcoming = [];
        for (var index = 0; index < data.results.length; index++) {
          //const dt = [];
          const SERIES_URL =
            'http://47.254.174.28/series/id/' +
            data.results[index].imdb_id +
            '/';
          const mov = await fetch(SERIES_URL);
          const dt = await mov.json();
          await fetch(SERIES_URL)
            .then(responseNEW => responseNEW.json())
            .then(jsonNew => {
              upcoming.push(jsonNew);
            })
            .catch(error => console.error(error));

          dispatch(Add_Popular_Series_20(upcoming));
          
        }console.log(upcoming)
        
      } else {
        console.log('unable to fetch');
      }
    };
  } catch (error) {
    console.log('error');
  }
};

  
  
return(<View style={{alignItems:'center',flex:1}}>
  <View style={{marginRight:'70%',marginTop:'5%'}}><Text style={{fontWeight:'400',fontSize:18,color:'grey'}}>Popular List</Text></View>
  <FlatList style={{marginTop:10}}  showsVerticalScrollIndicator={false}
data={testing}
renderItem={({item})=>(<View style={{padding:20}}><BannerCard  data={item.results}/></View>)}/></View>)
 
}

export default popularseries20;