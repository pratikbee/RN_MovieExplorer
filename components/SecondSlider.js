import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View,Text,ImageBackground,Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NextButton from './NextButton';


const SecondSlider=(props)=>
{
    navigation=useNavigation()
    return (
        
        <View >
            <ImageBackground source={require('/Users/ambin04957/Desktop/API/movieproject/Images/WallE.png') } style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{marginTop:'10%', fontWeight:'bold',fontSize:45,color:'white',backgroundColor:'transparent'}} >Know the movie</Text>
            <Text style={{color:'white',fontSize:20,}}>Not worth watching</Text>
                
            <LinearGradient style={{ position:'absolute',top:'30%',bottom:0,left:0,right:0}} colors={['transparent','#ffffff']}/>
            <View style={{width:'40%' , borderRadius:10,marginTop:'80%',borderColor:'white',borderWidth:2,alignItems:'center',height:40,justifyContent:'center',borderRadius:20,flexDirection:'row' }}>
                <Pressable style={{flexDirection:'row',}} onPress={()=>{props.test.current.scrollBy(1)}} >
            <Text style={{color:'white'}}>Next</Text><Image source={require('/Users/ambin04957/Desktop/API/movieproject/Images/BackArrow.png')}/>
            </Pressable></View>
            </ImageBackground>
            
            
        </View>
    )
}

export default SecondSlider;