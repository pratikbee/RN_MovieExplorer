import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet,TextInput,TouchableOpacity,FlatList,Image,Pressable} from 'react-native'
import { Appbar } from 'react-native-paper';



import { useNavigation } from '@react-navigation/native';
import MovieCard from './MovieCard';



const SearchMovie=({route})=>{

    const navigation=useNavigation();
    
    const [status,setStatus]=useState([]);
    const [input, setInput] = useState("");
    
    async function fetchData(text) {
        if(route.params==="movie"){
            var result = await fetch("https://data-imdb1.p.rapidapi.com/movie/imdb_id/byTitle/"+text+"/", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
                    "x-rapidapi-key": "ad8e26125bmsh7f8080efbc2506ap1f606bjsndb91972d2b0d"
                }
            });
            const json = await result.json();
           
            if (json) {
                const array = [];
                for(var i=0;i<json.results.length;i++){
                         
                          const moviApiurl='http://47.254.174.28/movie/id/'+json.results[i].imdb_id+'/'
                        
                          await fetch(moviApiurl)
                          .then((responseNew) => responseNew.json())
                          .then((jsonN) => {
                            
                            array.push(jsonN)
                            
                        })
                          .catch((error) => console.error(error))
                          
                }
                setStatus(array)
                
            } else {
                console.log('Unable to fetch!');
            }

        }
        else if(route.params==="series")
        {      var result = await fetch("https://data-imdb1.p.rapidapi.com/series/idbyTitle/"+text+"/", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
                "x-rapidapi-key": "ad8e26125bmsh7f8080efbc2506ap1f606bjsndb91972d2b0d"
            }
        });
        const json = await result.json();
       
        if (json) {
            const array = [];
            for(var i=0;i<json.results.length;i++){
                     
                      const moviApiurl='http://47.254.174.28/series/id/'+json.results[i].imdb_id+'/'
                    
                      await fetch(moviApiurl)
                      .then((responseNew) => responseNew.json())
                      .then((jsonN) => {
                        
                        array.push(jsonN)
                        
                    })
                      .catch((error) => console.error(error))
                      
            }
            setStatus(array)
            
        } else {
            console.log('Unable to fetch!');
        }


        }
           
            
	}
    
    return(
        <View>
        <Appbar.Header  style={{backgroundColor:'transparent'}}>
        <TouchableOpacity onPress={()=>navigation.navigate("tab")}>
        <Image  style={styles.ImageStyle1} source={require('/Users/ambin04957/Desktop/API/movieproject/Images/ChevronLeft.png')} />

       </TouchableOpacity>
            
       <Appbar.Content   />
       
       
            <TextInput style={styles.input1}
            placeholder="Search here"
            placeholderTextColor={"black"}
            onChangeText={(text) => {
                setInput(text);
                fetchData(text);
            }}
            value={input}
           
            />
        
            
        </Appbar.Header>


            <FlatList 
            columnWrapperStyle={{justifyContent:'space-around',padding:15,marginRight:20}}
            numColumns={2}
            key={2}
            data={status}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item})=><View style={{padding:20}}><Pressable onPress={()=>{navigation.navigate('movieinfo',item)}}><MovieCard  data={item.results}/></Pressable></View>}
    // ListFooterComponent={renderFooter}
    />

       
        </View>

    )
}

const styles=StyleSheet.create({
    input1:{

        width:'70%',
        right:70,
        backgroundColor:'transparent',
        height:20,
        fontSize:20,
        color:'black',

        
        },
        ImageStyle1:{
            width:35,
            height:35,
            // right:20
        }
      
})
export default SearchMovie