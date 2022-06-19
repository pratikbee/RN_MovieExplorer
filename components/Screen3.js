import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View, Text, Image, Pressable, FlatList
} from 'react-native';
import { useSelector } from 'react-redux';
import MovieCardForProfile from './MovieCardForProfile';
import { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Screen3 = () => {
  useEffect( () =>{
    AsyncStorage.getItem("UserData").then(valuen => {
                    
        if (valuen !== null ) {
            try{
                var value= JSON.parse(valuen);
                 console.log(value)
                if(value.isLoggedIn === '1'){
                    setImage(value.image)
                    setId(value.id)
                    
                }
            }catch(error){
                console.log(error)
            }
            
            }
    },[])
  });
 const  navigation = useNavigation();
  const data=useSelector(state=>state);
  const countlike=data.movie.liked.length;
  const array=data.movie.favorite;
  const countfavorite=array.length;
  const profile=data.movie.profilepath;
  const [image,setImage]=useState('/Users/ambin04957/Desktop/API/movieproject/Images/notavailaible.png');
  const [id,setId]=useState('')
  console.log(id)


  return (
    <View style={{backgroundColor:' #e6e6e6'}}>
      <View style={{ flexDirection: 'row', marginTop: '15%' }}>
        <View style={{ flex: 0.5, marginLeft: '5%' }}>
          <Text style={{ fontSize: 25, fontWeight: '700' }}>Profile</Text>
        </View >
        <View style={{ flex: 0.5, justifyContent: 'flex-end', flexDirection: 'row', marginRight: '5%' }}>
          <Pressable onPress={() => { navigation.navigate('setting') }}>
            <Image source={require('/Users/ambin04957/Desktop/API/movieproject/Images/Setting.png')} />
          </Pressable>
        </View>
      </View >
      <View style={{justifyContent:'center',alignItems:'center',height:'30%'}}><Image style={{borderColor: 'black',
        borderWidth: 1,
        backgroundColor:'black',
        height:120,
        width:120,
        padding:15,
        borderRadius:70,
        marginTop:20,
        marginBottom:20}} source={{uri:image}}></Image>
        <Text style={{fontSize:25,fontWeight:'700'}}>{id}</Text></View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:'5%',backgroundColor:' #e6e6e6',shadowColor: '#171717',
  shadowOffset: {width: -2, height: 5},
  shadowOpacity: 0.5,
  shadowRadius: 3,}}>
        <View style={{alignItems:'center',width:'25%',borderColor:'black',borderRadius:10}}><Text style={{fontWeight:'bold',fontSize:30,color:'#ff0066'}}>{countlike}</Text><Text style={{marginTop:10,fontWeight:'200',fontSize:15}}>Liked</Text></View>
        <View style={{alignItems:'center',width:'25%',borderColor:'black',borderRadius:10}}><Text style={{fontWeight:'bold',fontSize:30}}>{countfavorite}</Text><Text style={{marginTop:10,fontWeight:'200'}}>Favourites</Text></View>
        <View style={{alignItems:'center',width:'25%',borderColor:'black',borderRadius:10}}><Text style={{fontWeight:'bold',fontSize:30}}>0</Text><Text style={{marginTop:10,fontWeight:'200'}}>Comments</Text></View>
        </View>
        <View style={{height:'50%'}}  >
          <FlatList numColumns={4} showsVerticalScrollIndicator={false}
          data={array}
          renderItem={({item})=>(<View style={{width:'25%',padding:5}}><View ><Image style={{height: 150,
            width: '100%',
            borderRadius: 5,
            //padding:10
            margin: 5,
            //resizeMode:'cover'
            flexWrap: 'wrap',
            alignSelf: 'center'}} source={{uri:item.img}}/>
            </View></View>)}/>
        </View>
    </View>)
}
export default Screen3;
