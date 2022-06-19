import React,{useState,useEffect} from 'react'
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Button, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch,useSelector } from 'react-redux';
import { Add_New_Movies, Add_This_Year ,Add_Popular_Movies_With_Imdb,Add_Popular_Movies} from '../actions/movieActionCreator';



const Login = (props) =>{
    
const navigation=useNavigation();

    useEffect( () =>{
        AsyncStorage.getItem("UserData").then(valuen => {
                        
            if (valuen !== null ) {
                try{
                    var value= JSON.parse(valuen);
                     console.log(value)
                    if(value.isLoggedIn === '1'){
                        props.navigation.navigate("tab")
                        // alert("already loged in")
                    }
                }catch(error){
                    console.log(error)
                }
                
                }
        },[])
      });
        
        
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const setData = async() => {
            if((email === '' && password === '') || email === '' || password === ''){
                alert('email password required')
                return;
            }else{

           await AsyncStorage.getItem("UserDatadb").then(value => {
            
            if (value !== null && email !== '' && password !== '') {
                try{
                    var updatedData = JSON.parse(value)
                    var userD =  updatedData.find(key =>  key.email === email && key.password === password )
                    if (userD) {
                        var user={
                            email: userD.email,
                            password: userD.password,
                            token : userD.token,
                            isLoggedIn:'1',
                            image:userD.image,
                            id:userD.id
                        }
                        AsyncStorage.setItem('UserData',JSON.stringify(user));
                        //AsyncStorage.setItem("isLoggedIn",'1')
                        alert("Login successfull");
                        navigation.navigate('tab')
                    }
                    else{
                        alert("Username Password Incorrect")
                         AsyncStorage.setItem("isLoggedIn",'0')

                        navigation.navigate('login')
                    }
                // });

                }catch(error){
                    console.log(error)
                }
                
              }else{
                  alert("No Data available")
              }
            })
        }
        
          

        }

        const logOut = async () => {

            const value = await AsyncStorage.getItem('UserData');
    
            if (value) {
    
                var user2 = { isLoggedIn: '0' }
    
                AsyncStorage.setItem('UserData', JSON.stringify(user2));
    
            }
    
            //console.log(value)
    
            // props.navigation.navigate('login')
        }

        
    return(<LinearGradient locations={[0.3, 0.6, 1]} colors={['#ff9900', '#ff751a', '#ff4d88']} style={styles.inputcontainer}>
        
            
            <TextInput
                style={styles.input}
                value={email}
                placeholder={"Email"}
                placeholderTextColor = "black"
                onChangeText={(text) => setEmail(text)}
                autoCapitalize={"none"}
                keyboardType='email-address'
            />
            
            <TextInput
                style={styles.input}
                value={password}
                placeholder={"Password"}
                placeholderTextColor = "black"
                keyboardType="default"
                secureTextEntry
                
                onChangeText={(text) => setPassword(text)}
            />
           
            <View style={{width:'120%',}}><TouchableOpacity 
            
            onPress = {setData}
            >
                <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} locations={[0.3, 0.6, 1]} colors={['#ff9900', '#ff751a', '#ff4d88']} style={styles.buttonContainer}>
                <Text style={{color:'#ffff'}}>Login</Text>
                </LinearGradient>

            </TouchableOpacity>
            </View>
            
            <View style={{flex:1,
                    flexDirection:'row',
                   justifyContent:'space-evenly',
                   paddingTop:20
                    
            }}>
            
            <TouchableOpacity >
                <Text style={{color:'white'}}>Forgot password</Text>
            </TouchableOpacity>

            <Text style={{color:"#ffff",paddingLeft:20}}>|</Text>

            <TouchableOpacity onPress={()=> navigation.navigate('register')}>
                <Text style={{color:'white',paddingLeft:20}}>Register</Text>
            </TouchableOpacity>

            </View>

        </LinearGradient>
        
    )
}



const styles = StyleSheet.create({
    inputcontainer:{ 
        backgroundColor:"#FDCFB3",
        flex:1,
        alignItems:'center',
        padding:100,
        paddingTop:'50%',  
    },
    input:{
        
        borderColor: 'pink',
        borderWidth: 1,
        color:'black',  
        backgroundColor:'#FFFEF2',
        width:'120%',
        padding:15,
        borderRadius:15,
        marginVertical:10
       
    },
    buttonContainer:{
        
        paddingVertical:15,
        padding:15,
        width:'100%',
        borderColor: '#dadae8',
        borderWidth: 1,
        borderRadius:15,
        marginVertical:10,
        alignItems:'center',
        
    }
})

export default Login;