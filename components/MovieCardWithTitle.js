import React from 'react';
import {View,Image,Text, ImageBackground} from 'react-native';


const MovieCardWithTitle=(props)=>{
    return(

    <View style={{borderRadius:40}} style={{shadowColor: '#171717',
    shadowOffset: {width: -2, height: 8},
    shadowOpacity: 0.4,
    shadowRadius: 3,}}>
        {props.data.image_url!='aa.com'?
        <ImageBackground style={{height: 200,
        width: 130,
        borderRadius: 30,
        //padding:10
        margin: 5,
        //resizeMode:'cover'
        flexWrap: 'wrap',
        alignSelf: 'center'}} source={{uri:props.data.image_url}}><View style={{top:'60%',backgroundColor:'black',width:'100%',alignItems:'center'}}><Text  style={{color:'white',fontWeight:'800'}}>{props.data.title}</Text></View></ImageBackground>:
        <ImageBackground style={{height: 200,
            width: 130,
            borderRadius: 20,
            //padding:10
            margin: 5,
            //resizeMode:'cover'
            flexWrap: 'wrap',
            alignSelf: 'center'}} source={require('/Users/ambin04957/Desktop/API/movieproject/Images/notavailaible.png')}><View style={{top:'80%',backgroundColor:'black',width:'100%',alignItems:'center'}}><Text  style={{color:'white',fontWeight:'800'}}>{props.data.title}</Text></View></ImageBackground>}</View>)
}

export default MovieCardWithTitle;