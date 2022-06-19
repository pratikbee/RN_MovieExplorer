import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import{View,Text,Image, ImageBackground,Pressable, FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector,useDispatch } from 'react-redux';

import {Add_Movie_Cast_Imdb_Id,Movie_Cast_Array} from '../actions/movieActionCreator';
import LFC from './LFC';
import { StarRatingThingy } from './StarRating';


const SeriesInfo=(props)=>{
    
    
   const navigation=useNavigation();
    const dispatch=useDispatch();
    useEffect(()=>{dispatch(getNewMovies())},[]);
    
    const data = useSelector(state => state);
    const casttoot=data.movie.moviecastarray;
    
    
    

    

    const getNewMovies = () => {
     try {
       return async (dispatch) => {
         const castjson= await fetch("https://data-imdb1.p.rapidapi.com/series/id/"+props.route.params.results.imdb_id+"/cast/", {
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
                            "x-rapidapi-key": "ad8e26125bmsh7f8080efbc2506ap1f606bjsndb91972d2b0d"
                        }
                    });
         const cast = await castjson.json();
         
         if (cast) {
           
           const castarray = [];
           for (var index=4;index<20;index++) 
           {
             
             const URL='https://data-imdb1.p.rapidapi.com/actor/id/'+cast.results.roles[index].actor.imdb_id+'/';
             
            await fetch(URL, {
                                "method": "GET",
                                "headers": {
                                    "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
                                    "x-rapidapi-key": "ad8e26125bmsh7f8080efbc2506ap1f606bjsndb91972d2b0d"
                                }
                            }).then(responseNEW=>responseNEW.json()).then(jsonNew=>{castarray.push(jsonNew);})
                            .catch(err=>console.log(err));
               
   
             
            
           }
           
           
           dispatch(Movie_Cast_Array(castarray));
           
          
         } else {
           console.log('unable to fetch');
         }
       };
     } catch (error) {
       console.log('error');
     }
   };  
    
    
  
      

      
        

       
    
    

       
       
    
    
return(
    <View style={{height:'100%'}}>
        <ImageBackground style={{height:'56%',width:'100%'}} source={{uri:props.route.params.results.banner}} blurRadius={1}>
            <View style={{flexDirection:'row',marginTop:'15%'}}><View style={{flex:0.5,marginLeft:'3%',flexDirection:'row',alignItems:'center'}}><Pressable onPress={()=>{navigation.navigate('tab')}}><Image  source={require('/Users/ambin04957/Desktop/API/movieproject/Images/outline_arrow_back_white_24dp.png')}/></Pressable><Text style={{color:'white',fontSize:20,marginLeft:'2%'}}>Back</Text></View ><View style={{flex:0.5,alignItems:'flex-end',marginRight:'4%'}}><Image source={require('/Users/ambin04957/Desktop/API/movieproject/Images/Share.png')}/></View></View>
            
                <View style={{width:'100%' , borderRadius:10,alignItems:'center',marginTop:'10%'}}><LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['#ff9900', '#ff751a', '#ff4d88']} style={{alignItems:'center',height:40,justifyContent:'center',borderRadius:20,width:'10%'}}>
           <Image  source={require('/Users/ambin04957/Desktop/API/movieproject/Images/outline_play_circle_white_24dp.png')}/></LinearGradient></View>
           <View style={{height:'35%',width:'100%',flexDirection:'row',marginLeft:'2%',marginTop:'10%'}}><Image style={{height:'100%',width:'30%',borderRadius:10}} source={{uri:props.route.params.results.image_url}}/>
           <View style={{marginTop:'10%',marginLeft:'2%'}}>
                <Text style={{color:'white',fontSize:25,fontWeight:'800'}}>{props.route.params.results.title}</Text>
                <Text style={{marginTop:'1%'}}>{props.route.params.results.gen[0].genre}, {props.route.params.results.gen[1].genre}.</Text>
                <View><Text style={{marginTop:'2%',color:'#ff4d88',fontSize:30,fontWeight:'500'}}>{props.route.params.results.rating}*</Text><View style={{flexDirection:'row'}}>{[...Array(Math.round(props.route.params.results.rating/2))].map((elementInArray, index) =>



(<Image key={index} source={require('/Users/ambin04957/Desktop/API/movieproject/Images/PinkStar.png')}/>

))}

{Math.round(props.route.params.results.rating/2)<=5

?

[...Array(5-Math.round(props.route.params.results.rating/2))].map((elementInArray, index) => (

<Image key={index} source={require('/Users/ambin04957/Desktop/API/movieproject/Images/NormalStar.png')}/>





)





):



<View>



</View>}
</View></View>
                </View></View>
                <View></View>
                <View style={{top:'5%',marginLeft:'2%'}}>
                    <Text style={{fontWeight:'700'}}>{props.route.params.results.description.substring(0,200)+'......'}
                    </Text>
                    </View>
                    
    </ImageBackground>
    <View style={{justifyContent:'flex-start',flexDirection:'row',marginLeft:'2%',marginTop:'5%'}}><Text style={{fontWeight:'600',color:'grey'}}>Full Cast & Crew</Text></View>
    <View style={{marginTop:'2%'}}><FlatList data={casttoot} horizontal={true} showsHorizontalScrollIndicator={false}
    renderItem={({item})=>(<View style={{height:150,width:100,padding:20}}>{item.results.image_url!=null?<Image style={{height:'80%',width:'90%',borderRadius:10}} source={{uri:item.results.image_url}}/>:<Image style={{height:'80%',width:'90%'}} source={require('/Users/ambin04957/Desktop/API/movieproject/Images/notavailaible.png')}/>}<View style={{alignItems:'center'}}><Text style={{fontSize:15,fontWeight:'400',position:'absolute'}}>{item.results.name}</Text></View></View>)}></FlatList>
    </View>
   <View style={{width:'100%',marginTop:'15%'}}><LFC data={props.route.params} movietype={false}></LFC></View>
    
    </View>

    
    )

}


export default SeriesInfo;