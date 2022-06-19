import React, { useEffect,useState} from 'react';

import {View,Text,Image, FlatList, ScrollView,Pressable} from 'react-native';
import MovieCard from './MovieCard';
import {useDispatch, useSelector} from 'react-redux';
import { Add_New_Movies, Add_This_Year ,Add_Popular_Movies_With_Imdb,Add_Popular_Movies, AddGenreMovies} from '../actions/movieActionCreator';


import Flatlistfooter from './Flatlistfooter';
import MovieCardWithTitle from './MovieCardWithTitle';
import {  useNavigation } from '@react-navigation/native';
import BannerCard from './BannerCard';
import MaoTrailerComponent from './MaoTrailerComponent';









const Screen1=(props)=>

{ const navigation=useNavigation();
   const dispatch = useDispatch();
  const data=useSelector(state=>state);
  const newmovies=data.movie.thisyearmovies;
  const popularmovies=data.movie.popularmovies10;
  const genres1=data.movie.genrearray;
  const genremovies=data.movie.genremovies;
  console.log(genres1)
  const test=1;
  const [array,setArray]=useState([]);
  const frequentgenre=function mode(array)
  {
      if(array.length == 0)
          return null;
      var modeMap = {};
      var maxEl = array[0], maxCount = 1;
      for(var i = 0; i < array.length; i++)
      {
          var el = array[i];
          if(modeMap[el] == null)
              modeMap[el] = 1;
          else
              modeMap[el]++;  
          if(modeMap[el] > maxCount)
          {
              maxEl = el;
              maxCount = modeMap[el];
          }
      }
      return maxEl;
  }
  
  
     
  
 


  useEffect(() => {
      
      dispatch(getNewMovies());
      dispatch(getPopularMovies());
      
      
  }, []);


  useEffect(()=>{
    dispatch(getGenreBasedMovies());
    
  },[genres1])






const getGenreBasedMovies=()=>{
  const genres=frequentgenre(genres1)
  try {
    return async (dispatch) => {
      const result = await fetch("https://data-imdb1.p.rapidapi.com/movie/byGen/"+genres+"/?page_size=5", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
          "x-rapidapi-key": "<your key>"
        }
      });
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
        setArray(upcoming)
        dispatch(AddGenreMovies(upcoming));
        
       
      } else {
        console.log('unable to fetch');
      }
    };
  } catch (error) {
    console.log('error');
  }
};






const ID_URL1 = 'http://47.254.174.28/movie/byYear/2021/?page_size=10';
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
        dispatch(Add_This_Year(upcoming));
        
       
      } else {
        console.log('unable to fetch');
      }
    };
  } catch (error) {
    console.log('error');
  }
};

// Popular movies

const ID_URL2 = 'http://47.254.174.28/movie/order/byPopularity/?page=2&page_size=10';

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

          dispatch(Add_Popular_Movies(upcoming));
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

// search movies api

  
 

 

 
  
  return(<View  >
        
        <View style={{marginTop:'10%',flexDirection:'row'}}><View style={{justifyContent:'center',flex:0.5,marginLeft:'5%'}}><Text style={{fontWeight:'800',fontSize:30}}>MOVIES</Text></View><View style={{flex:0.5,alignItems:'flex-end',justifyContent:'center'}}><Pressable onPress={()=>{navigation.navigate('search',search="movie")}}><Image source={require('/Users/ambin04957/Desktop/API/movieproject/Images/Search.png')}/></Pressable></View></View>
       <ScrollView style={{height:'100%'}} contentContainerStyle={{paddingBottom:'100%',height:'170%'}} showsVerticalScrollIndicator={false}><View>
       {test===0?<Image style={{height:'20%',width:'90%',margin:10,borderRadius:10}} source={require('/Users/ambin04957/Desktop/API/movieproject/Images/MaoTrailer.jpeg')}/>:
       <FlatList style={{height:'30%',width:'100%'}} showsHorizontalScrollIndicator={false}
       ListEmptyComponent={<View style={{padding:10}}><MaoTrailerComponent /></View>}
       horizontal={true}
       data={genremovies}
       renderItem={({item,index})=>(<View style={{padding:10}}><BannerCard data={item.results}></BannerCard></View>)}>
       </FlatList>}
        <View style={{marginLeft:'5%'}}><Text style={{fontSize:20,fontWeight:'600'}}>Now</Text></View>
        <View style={{height:'25%' ,justifyContent:'space-between'}}>
          <FlatList horizontal={true} showsHorizontalScrollIndicator={false} ListFooterComponent={<Pressable onPress={()=>{navigation.navigate('newmovies20')}}><Flatlistfooter></Flatlistfooter></Pressable>}
         data={newmovies}
         renderItem={({item})=>(<View style={{padding:20}}><Pressable onPress={()=>{navigation.navigate('movieinfo',item)}}><MovieCard  data={item.results}/></Pressable></View>)}/>
         </View>
         <View style={{marginTop:'5%',marginLeft:'5%'}}><Text style={{fontSize:20,fontWeight:'600'}}>Popular</Text></View>
         <ScrollView showsHorizontalScrollIndicator={false} style={{height:'73%',marginTop:'5%'}} horizontal={true}><View style={{height:'100%',justifyContent:'space-between'}}>
           <FlatList numColumns={5}  showsHorizontalScrollIndicator={false} scrollEnabled={false}
         data={popularmovies}
         renderItem={({item,index})=>(index!=9?<Pressable onPress={()=>{navigation.navigate('movieinfo',item)}}><View style={{padding:12}}><MovieCardWithTitle  data={item.results}/></View></Pressable>:<Pressable onPress={()=>{navigation.navigate('popularmovie20')}} ><View style={{padding:12}}><Flatlistfooter/></View></Pressable>)}/></View></ScrollView>
         
         </View><View><Text>    </Text></View></ScrollView>
         </View>)


          }  

export default Screen1;

