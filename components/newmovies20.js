import React, { useEffect } from 'react';

import {View,Text,FlatList,Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Add_New_Movies_Imdb_20,Add_New_Movies_20} from '../actions/movieActionCreator';
import MovieCard from './MovieCard';

const newmovies20=()=>{
  const dispatch = useDispatch();
  const data=useSelector(state=>state);
  const newmovies20=data.movie.thisyearmovies20;
  useEffect(()=>{
    dispatch(getNewMovies());
  },[])

  const ID_URL1 = 'http://47.254.174.28/movie/byYear/2021/?page_size=20';

  const getNewMovies = () => {
   try {
     return async (dispatch) => {
       const result = await fetch(ID_URL1);
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
             
 
           
          
         }
         // console.log(upcoming)
         dispatch(Add_New_Movies_20(upcoming));
         
        
       } else {
         console.log('unable to fetch');
       }
     };
   } catch (error) {
     console.log('error');
   }
 };
 
  
    return(<View style={{alignItems:'center',flex:1}}>
      <View style={{marginRight:'75%',marginTop:'5%'}}><Text style={{fontWeight:'400',fontSize:18,color:'grey'}}>Now List</Text></View><FlatList  numColumns={2}  showsVerticalScrollIndicator={false}
        data={newmovies20}
        renderItem={({item})=>(<View style={{padding:20}}><Pressable onPress={()=>{navigation.navigate('movieinfo',item)}}><MovieCard   data={item.results}/></Pressable></View>)}/></View>)
}

export default newmovies20;