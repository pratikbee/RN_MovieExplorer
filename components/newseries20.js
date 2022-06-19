import React, { useEffect,useState } from 'react';

import {View,Text,FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import MovieCard from './MovieCard';
import MovieCardWithTitle from './MovieCardWithTitle';
import {Add_Popular_Series_Only_Imdb_10,Add_Popular_Series_10,Add_Now_Series_20,Add_Now_Series_Only_Imdb_10} from '../actions/movieActionCreator';



const newseries20=()=>{
  const dispatch=useDispatch()
 const  data=useSelector(state=>state);
  const newseriesin2021=data.movie.thisyearseries20;

  useEffect(()=>{
    dispatch(getNewSeries())
  },[]);
  const ID_URL1 = "http://47.254.174.28/series/byYear/2021/?page=2&page_size=20";

  const getNewSeries = () => {
   try {
     return async (dispatch) => {
       const result = await fetch(ID_URL1);
       const data = await result.json();
       if (data) {
         //console.log(data);
         const upcoming = [];
         for (var index = 0; index < data.results.length; index++) {
           //const dt = [];
           const SERIES_URL =
             'http://47.254.174.28/series/id/' +
             data.results[index].imdb_id +
             '/';
           
           await fetch(SERIES_URL, {
             "method": "GET",
             "headers": {
               "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
               "x-rapidapi-key": "<your key>"
             }
           })
             .then(responseNEW => responseNEW.json())
             .then(jsonNew => {
               upcoming.push(jsonNew);
             })
             .catch(error => console.error(error));
             
 
           
          
         }
          
         dispatch(Add_Now_Series_20(upcoming));
         
        
       } else {
         console.log('unable to fetch');
       }
     };
   } catch (error) {
     console.log('error');
   }
 };
return(
<View style={{alignItems:'center',flex:1}}>
  <View style={{marginRight:'75%',marginTop:'5%'}}><Text style={{fontWeight:'400',fontSize:18,color:'grey'}}>Now List</Text></View><FlatList style={{marginTop:20}}  numColumns={2}  showsVerticalScrollIndicator={false}
        data={newseriesin2021}
        renderItem={({item})=>(<View style={{padding:20}}><MovieCard   data={item.results}/></View>)}/></View>
        )
    

}


export default newseries20;
