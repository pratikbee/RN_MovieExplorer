import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Text,Pressable }
from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default  NextButton=()=>

{    navigation=useNavigation()
     return (
        <View style={{width:'40%' , borderRadius:10,marginTop:'80%' }}><LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['#ff9900', '#ff751a', '#ff4d88']} style={{alignItems:'center',height:40,justifyContent:'center',borderRadius:20}}>
            <Pressable onPress={()=>{navigation.navigate('login')}}><Text style={{color:'white',fontWeight:'600'}}>Get Started</Text></Pressable></LinearGradient></View>
    )
}