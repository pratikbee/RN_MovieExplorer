import React,{useEffect,useState} from 'react';
import {View,Text,Image} from 'react-native';


const MovieCard=(props)=>{

    
    
    
  return(<View style={{shadowColor: '#171717',
  shadowOffset: {width: -2, height: 10},
  shadowOpacity: 0.5,
  shadowRadius: 3,}} >{props.data.image_url!='aa.com'?<Image style={{height: 200,
    width: 130,
    borderRadius: 5,
    //padding:10
    margin: 5,
    //resizeMode:'cover'
    flexWrap: 'wrap',
    alignSelf: 'center'}} source={{uri:props.data.image_url}}/>:
    <Image style={{height: 200,
      width: 130,
      borderRadius: 5,
      //padding:10
      margin: 5,
      //resizeMode:'cover'
      flexWrap: 'wrap',
      alignSelf: 'center'}} source={require('/Users/ambin04957/Desktop/API/movieproject/Images/notavailaible.png')}/>
    }<Text style={{fontWeight:'500',padding: 10,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: "bold",
    
    left: 5,
    width: 130,}}>{props.data.title}</Text></View>)}


  export default MovieCard;