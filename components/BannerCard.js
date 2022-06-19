import React,{useEffect,useState} from 'react';
import {View,Text,Image, ImageBackground} from 'react-native';


const BannerCard=(props)=>{

    
    
    
  return(<View style={{alignItems:'center',shadowColor: '#171717',
  shadowOffset: {width: -2, height: 8},
  shadowOpacity: 0.4,
  shadowRadius: 3,}}>{props.data.banner!=='aa.com'?<Image style={{height: 170,
    width: 320,
    borderRadius: 10,
    //padding:10
    margin: 5,
    borderWidth:2,
    //resizeMode:'cover'
    
    alignSelf: 'center'}} source={{uri:props.data.banner}}/>:<ImageBackground
    style={{height: 150,
      width: 250,
      borderRadius: 5,
      //padding:10
      margin: 5,
      //resizeMode:'cover'
      
      alignSelf: 'center'}} source={require('/Users/ambin04957/Desktop/API/movieproject/Images/notavailaible.png')}/>}<Text style={{fontWeight:'500',padding: 10,fontSize: 14,fontWeight: "bold"}} >{props.data.title.toUpperCase()}</Text></View>)}


  export default BannerCard;