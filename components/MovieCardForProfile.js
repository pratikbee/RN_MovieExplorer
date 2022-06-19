import React,{useEffect,useState} from 'react';
import {View,Text,Image} from 'react-native';


const MovieCardForProfile=(props)=>{

    
    
    
  return(<View ><Image style={{height: 200,
    width: 130,
    borderRadius: 5,
    //padding:10
    margin: 5,
    //resizeMode:'cover'
    flexWrap: 'wrap',
    alignSelf: 'center'}} source={{uri:props.img}}/>
    </View>)}


  export default MovieCardForProfile;