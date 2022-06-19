import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';

import {View,Text,Image,Pressable } from 'react-native';


const Flatlistfooter=()=>{
    

    return (<View style={{height: 200,
        width: 130,
        borderRadius: 5,
        //padding:10
        margin: 5,
        //resizeMode:'cover'
        alignItems:'center',
        justifyContent: 'center',
    backgroundColor:'#fcba03'}}><Text style={{color:'white',fontWeight:'800',fontSize:30}}>MORE</Text></View>
    )
}


export default Flatlistfooter;