import React from 'react';
import { FlatList,View,Image } from 'react-native';





export const StarRatingThingy=(rating)=>{
    const index=Math.round(rating)
    const array=[0,0,0,0,0];
    
    for (var i=0;i<index;i++){
        array[i]=1;
    }
    return(<View>
        <FlatList
     data={array}
     renderItem={({item,index})=>(item===1?<View><Image style={{height:20}} source={require('/Users/ambin04957/Desktop/API/movieproject/Images/star.png')}/></View>:<View><Image source={require('/Users/ambin04957/Desktop/API/movieproject/Images/star.png')}/></View>)}/>

     </View>
        
    )


}