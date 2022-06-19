import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View ,Image, ImageBackground,Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import NextButton from './NextButton';
import Slider from 'react-native-swiper';



const FirstSlider = (props) => {
    navigation=useNavigation()

    return (
        <View >
            <ImageBackground source={require('/Users/ambin04957/Desktop/API/movieproject/Images/MovieWatch.jpeg') } style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{marginTop:'10%', fontWeight:'bold',fontSize:45,color:'white',backgroundColor:'transparent'}} >Get the first</Text>
            <Text style={{color:'white',fontSize:20,}}>Movie and TV information</Text>
                
            <LinearGradient style={{ position:'absolute',top:'30%',bottom:0,left:0,right:0}} colors={['transparent','#ffffff']}/>
            <View style={{width:'40%' , borderRadius:10,marginTop:'80%',borderColor:'white',borderWidth:2,alignItems:'center',height:40,justifyContent:'center',borderRadius:20 }}>
            <Pressable onPress={()=>{props.test.current.scrollBy(1)}} style={{flexDirection:'row'}}><Text style={{color:'white'}}>Next</Text><Image source={require('/Users/ambin04957/Desktop/API/movieproject/Images/BackArrow.png')}/>
            </Pressable></View>
            </ImageBackground>
            
            
        </View>
    )
}

export default FirstSlider;