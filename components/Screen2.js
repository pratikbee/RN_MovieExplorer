import React, { useEffect,useState} from 'react';

import {View,Text,Image, FlatList, ScrollView,Pressable} from 'react-native';
import MovieCard from './MovieCard';
import {useDispatch, useSelector} from 'react-redux';
import {Add_Popular_Series_Only_Imdb_10,Add_Popular_Series_10,Add_Now_Series_10,Add_Now_Series_Only_Imdb_10} from '../actions/movieActionCreator';


import Flatlistfooter from './Flatlistfooter';
import MovieCardWithTitle from './MovieCardWithTitle';
import { useNavigation } from '@react-navigation/native';
import BannerCard from 'movieproject/components/BannerCard.js';
import LateralFlatlistfooter from './LateralFlatListFooter';














const Screen2=()=>
{
  const navigation=useNavigation();
  const dispatch = useDispatch();
  const data=useSelector(state=>state);
  const newseries=data.movie.thisyearseries;
  const popularseries=data.movie.popularseries10;
 
  
  
  
        
  
  //  console.log(newmovies)


  useEffect(() => {
      
      dispatch(getNewSeries());
      dispatch(getPopularSeries())
  }, []);

//New Movies

const ID_URL1 = "http://47.254.174.28/series/byYear/2021/?page=2&page_size=10";

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
         
        dispatch(Add_Now_Series_10(upcoming));
        
       
      } else {
        console.log('unable to fetch');
      }
    };
  } catch (error) {
    console.log('error');
  }
};

// Popular movies

const ID_URL2 = "https://data-imdb1.p.rapidapi.com/series/order/byPopularity/?page_size=20";

 const getPopularSeries = () => {
  try {
    return async(dispatch) => {
      const result = await fetch("https://data-imdb1.p.rapidapi.com/series/order/byRating/?page_size=10", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
          "x-rapidapi-key": "<your key>"
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

          dispatch(Add_Popular_Series_10(upcoming));
          
        }console.log(upcoming)
        
      } else {
        console.log('unable to fetch');
      }
    };
  } catch (error) {
    console.log('error');
  }
};



{/* <View>
       
       <View style={{marginTop:'5%'}}><Text style={{fontSize:20,fontWeight:'600'}}>Now</Text></View>
       <View style={{height:'48%' ,justifyContent:'space-between'}}>
         
         <FlatList horizontal={true} style={{backgroundColor:'red'}}
         ListFooterComponent={<Pressable onPress={()=>{navigation.navigate('newseries20')}}><Flatlistfooter></Flatlistfooter></Pressable>}
        data={newseries}
        renderItem={({item})=>(<Pressable onPress={()=>{navigation.navigate('seriesinfo',item)}}><MovieCard  data={item.results}/></Pressable>)}/>
        </View>
        <View style={{backgroundColor:'black'}} ><Text style={{fontSize:20,fontWeight:'600'}}>Popular</Text></View></View> */}
  



  


  
  

  
  
  return(<View >
        <View style={{marginTop:'10%',flexDirection:'row'}}><View style={{justifyContent:'center',flex:0.5,marginLeft:'5%'}}><Text style={{fontWeight:'800',fontSize:30}}>TV</Text></View><View style={{flex:0.5,alignItems:'flex-end',justifyContent:'center'}}><Pressable onPress={()=>{navigation.navigate('search',search="series")}}><Image source={require('/Users/ambin04957/Desktop/API/movieproject/Images/Search.png')}/></Pressable></View></View>
        
         
           <FlatList  contentContainerStyle={{marginTop:10}} showsVerticalScrollIndicator={false}
           
         ListHeaderComponent={
           <View>
       
       <View style={{marginTop:'5%',marginLeft:'5%'}}><Text style={{fontSize:20,fontWeight:'600'}}>Now</Text></View>
       <View style={{marginLeft:'5%'}}>
         
         <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
         ListFooterComponent={<Pressable onPress={()=>{navigation.navigate('newseries20')}}><Flatlistfooter></Flatlistfooter></Pressable>}
        data={newseries}
        renderItem={({item})=>(<View style={{padding:10}}><Pressable onPress={()=>{navigation.navigate('seriesinfo',item)}}><MovieCard  data={item.results}/></Pressable></View>)}/>
        </View>
        <View style={{marginBottom:10,marginLeft:'5%'}}><Text style={{fontSize:20,fontWeight:'600'}}>Popular</Text></View></View> 
  



         }
         data={popularseries}
         renderItem={({item,index})=>(index!=9?<View  ><Pressable onPress={()=>{navigation.navigate('seriesinfo',item)}}><BannerCard data={item.results} /></Pressable></View>:<View style={{alignItems:'center'}}><Pressable onPress={()=>{navigation.navigate('popularseries20')}} ><LateralFlatlistfooter/></Pressable></View>)}/>
         <View style={{height:100}}><Text>   </Text></View>
         </View>)


        }

export default Screen2;

