import React from 'react';
import {View,Text,ImageBackground,Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NextButton from './NextButton';


const ThirdSlider=()=>
{
    return(
        <View >
            <ImageBackground source={require('/Users/ambin04957/Desktop/API/movieproject/Images/Got.jpeg') } style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{marginTop:'10%', fontWeight:'bold',fontSize:45,color:'white',backgroundColor:'transparent'}} >Real time</Text>
            <Text style={{color:'white',fontSize:20,}}>Updates movie Trailer</Text>
                
            <LinearGradient style={{ position:'absolute',top:'30%',bottom:0,left:0,right:0}} colors={['transparent','#ffffff']}/>
                <NextButton style={{width:'100%'}} />
            </ImageBackground>
            
            
        </View>
    )
}

export default ThirdSlider;