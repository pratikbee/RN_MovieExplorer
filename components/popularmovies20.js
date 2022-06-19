import React, { useEffect } from 'react';

import {View,Text,FlatList,Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Add_Popular_Movies_Imdb_20,Add_Popular_Movies_20} from '../actions/movieActionCreator';
import MovieCardWithTitle from './MovieCardWithTitle';

const popularmovies20=()=>{
useEffect(()=>{dispatch(getPopularMovies())},[])
dispatch=useDispatch();
data=useSelector(state=>state);
const popularmovie20=data.movie.popularmovies20;

  const ID_URL2 = 'http://47.254.174.28/movie/order/byPopularity/?page=2&page_size=20';

 const getPopularMovies = () => {
  try {
    return async(dispatch) => {
      const result = await fetch(ID_URL2);
      const data = await result.json();
      if (data) {
        //console.log(data);
        const upcoming = [];
        for (var index = 0; index < data.results.length; index++) {
          //const dt = [];
          const MOVI_URL =
            'http://47.254.174.28/movie/id/' +
            data.results[index].imdb_id +
            '/';
          const mov = await fetch(MOVI_URL);
          const dt = await mov.json();
          await fetch(MOVI_URL)
            .then(responseNEW => responseNEW.json())
            .then(jsonNew => {
              upcoming.push(jsonNew);
            })
            .catch(error => console.error(error));

          dispatch(Add_Popular_Movies_20(upcoming));
          //console.log(upcoming);
        }
      } else {
        console.log('unable to fetch');
      }
    };
  } catch (error) {
    console.log('error');
  }
};

  

    return(<View style={{alignItems:'center',flex:1}}>
      <View style={{marginRight:'70%',marginTop:'5%'}}><Text style={{fontWeight:'400',fontSize:18,color:'grey'}}>Popular List</Text></View><FlatList style={{marginTop:'2%'}} numColumns={2}  showsVerticalScrollIndicator={false}
        data={popularmovie20}
        renderItem={({item})=>(<View style={{padding:20}}><Pressable onPress={()=>{navigation.navigate('movieinfo',item)}}><MovieCardWithTitle   data={item.results}/></Pressable></View>)}/></View>)
}

export default popularmovies20;