import React, { useEffect, useState } from 'react';

import {View,Image,Text,Pressable}  from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { Favorite, Liked ,RemoveFavorite,RemoveLike} from '../actions/movieActionCreator';


    
    


const LFC=(props)=>{
    const dispatch=useDispatch();
    const [like,setLike]=useState(false);
    
    const [favorite,setFavorite]=useState(false);
    const data=useSelector(state=>state);
    const LikedArray=data.movie.liked;
    const FavoriteArray=data.movie.favorite;
   console.log(FavoriteArray)
    
    const addLikehandler=()=>{
        var type = ''
        if(props.movietype){
            var type = "movie"

        }
        else{
            var type = "series"
        }
        dispatch(Liked({
            img:props.data.results.image_url,
            imdb_id:props.data.results.imdb_id,
            type:type
        }));
        setLike(true)

    }
    const removehandler = item => {
        let Flag = false;
       
        LikedArray.forEach(element => {
            if(element.imdb_id === item.imdb_id){
                Flag = true;
            }
            
        });
       
        if (Flag) {
        dispatch(RemoveLike(item));
        setLike(false)
        } 
        else {
        alert(`this movie is not in List`);
        }
        };
    
        
        useEffect(() => {
            if(LikedArray)
            {
                
                const IsMoviedLiked = LikedArray.forEach(element => {
                    
                    if(element.imdb_id == props.data.results.imdb_id )
                    {
                        setLike(true)
                    }
                })
            }
            if(FavoriteArray){
                const IsMoviedFavorite = FavoriteArray.forEach(element => {
                    
                    if(element.imdb_id == props.data.results.imdb_id )
                    {
                        setFavorite(true)
                    }
                })

            }
        }
        )
        const addFavoritehandler=()=>{
            var type = ''
            if(props.movietype){
                var type = "movie"
    
            }
            else{
                var type = "series"
            }
            dispatch(Favorite({
                img:props.data.results.image_url,
                imdb_id:props.data.results.imdb_id,
                type:type
            }));
            setFavorite(true)
    
        }
        const removefavoritehandler = item => {
            let Flag = false;
           
            FavoriteArray.forEach(element => {
                if(element.imdb_id === item.imdb_id){
                    Flag = true;
                }
                
            });
           
            if (Flag) {
            dispatch(RemoveFavorite(item));
            setFavorite(false)
            } 
            else {
            alert(`this movie is not in List`);
            }
            };
        
            

        
                
            

   

   


    
    
   
   
    
   

   

   
    
    return(
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>{like?
            <View style={{width:'13%'}} ><Pressable onPress={()=>{removehandler(props.data.results)}}><LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['#ff9900', '#ff751a', '#ff4d88']} style={{alignItems:'center',height:51,justifyContent:'center',borderRadius:25,width:'100%'}}>
           <Image  source={require('/Users/ambin04957/Desktop/API/movieproject/Images/ThumbsUp.png')}/></LinearGradient></Pressable></View>:
           <View style={{width:'13%'}} ><Pressable onPress={()=>{addLikehandler()}}><LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['white','white']} style={{alignItems:'center',height:51,justifyContent:'center',borderRadius:25,width:'100%',borderColor:'black',borderWidth:1}}>
           <Image  source={require('/Users/ambin04957/Desktop/API/movieproject/Images/ThumbsUpBlack.png')}/></LinearGradient></Pressable></View>}

           {favorite?<View style={{width:'13%'}} ><Pressable onPress={()=>{removefavoritehandler(props.data.results)}}><LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['#ff9900', '#ff751a', '#ff4d88']} style={{alignItems:'center',height:51,justifyContent:'center',borderRadius:25,width:'100%'}}>
           <Image  source={require('/Users/ambin04957/Desktop/API/movieproject/Images/Favorite.png')}/></LinearGradient></Pressable></View>:
           <View style={{width:'13%'}} ><Pressable onPress={()=>{addFavoritehandler()}}><LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['white','white']} style={{alignItems:'center',height:51,justifyContent:'center',borderRadius:25,width:'100%',borderColor:'black',borderWidth:1}}>
           <Image  source={require('/Users/ambin04957/Desktop/API/movieproject/Images/FavoriteBlack.png')}/></LinearGradient></Pressable></View>}

           <View style={{width:'13%'}} ><LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['#ff9900', '#ff751a', '#ff4d88']} style={{alignItems:'center',height:51,justifyContent:'center',borderRadius:25,width:'100%'}}>
           <Image  source={require('/Users/ambin04957/Desktop/API/movieproject/Images/Comment.png')}/></LinearGradient></View>
        </View>
    )

}
export default LFC;