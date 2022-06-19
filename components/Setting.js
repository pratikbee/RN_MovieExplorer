import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddGenre, AddProfileImage, Favorite, Liked } from '../actions/movieActionCreator';
import { useDispatch } from 'react-redux';
import { Cache } from '../actions/movieActionCreator';



const Setting = ({route,navigation}) => {
    const dispatch=useDispatch();
    const logOut = async () => {

        const value = await AsyncStorage.getItem('UserData');

        if (value) {

            var user2 = { isLoggedIn: '0' }

            AsyncStorage.setItem('UserData', JSON.stringify(user2));

        }

        //console.log(value)

        navigation.navigate('login')
    }

   function clearAllData() {
        dispatch(Cache())
        alert('Cleared')
    }
    
    return (
        <View>
            <Text style={styles.myText}>{route.params}</Text>
            <Text style={{fontWeight:'bold',fontSize:23}}>Settings</Text>
            {/* <Ionicons
                name="man"
                size={20}
                color='black'
                onPress={()=> signout()}
              /> */}
               <View style={{paddingTop:20}}>
               <TouchableOpacity onPress={()=>{clearAllData()}} style={styles.text}>
                    <View style={{flex:0.5}}><Text style={styles.button}>Clear Cache</Text></View>
                    <View style={{flex:0.5,alignItems:'flex-end'}}><Image source={require('/Users/ambin04957/Desktop/API/movieproject/Images/ChevronRight.png')}/></View>
                </TouchableOpacity>
               </View>

                <View style={{paddingTop:20}}>
                <TouchableOpacity style={styles.text}>
                    <View style={{flex:0.5}}><Text style={styles.button}>Share the app</Text></View>
                    <View style={{flex:0.5,alignItems:'flex-end'}}><Image source={require('/Users/ambin04957/Desktop/API/movieproject/Images/ChevronRight.png')}/></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.text}>
                    <View style={{flex:0.5}}><Text style={styles.button}>Question</Text></View>
                    <View style={{flex:0.5,alignItems:'flex-end'}}><Image source={require('/Users/ambin04957/Desktop/API/movieproject/Images/ChevronRight.png')}/></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.text}>
                    <View style={{flex:0.5}}><Text style={styles.button}>About</Text></View>
                    <View style={{flex:0.5,alignItems:'flex-end'}}><Image source={require('/Users/ambin04957/Desktop/API/movieproject/Images/ChevronRight.png')}/></View>
                </TouchableOpacity>
                </View>
                <View style={{paddingTop:350}}>
                <TouchableOpacity onPress={()=>{logOut();}}
                    style={{backgroundColor:'#D1D0CE',borderColor:'white',borderRadius:20,height:45,justifyContent:'center',alignItems:'center',width:'80%',left:40}}>
                    <Text>Sign Out</Text>
                </TouchableOpacity >
                </View>
                {/* <TouchableOpacity style={styles.buttons}  activeOpacity={0.5} onPress={()=> signout()}>
                    <Text style={styles.buttonTextStyle}>Sign Out</Text>
                </TouchableOpacity> */}
        </View>
    )
}

export default Setting;

const styles = StyleSheet.create({
    myText:{
        color:'black',
        fontSize:25,
        textAlign:'center'
    },
    text:{
        borderColor:'black',
        height:50,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
    },
    button:{
        fontSize:20,
        justifyContent:'flex-start',
        left:15
    },
      buttonTextStyle: {
        color: 'black',
        paddingVertical: 10,
        fontSize: 16,
      },
      buttons: {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        height: 50,
        borderRadius: 50,
        marginLeft: 50,
        marginRight: 0,
        marginTop: 10,
        marginBottom: 60,
        right: 10,
        top:350,
        bottom: 50,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'gray'
    
        
      },
})