import React,{useState} from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Image, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AddProfileImage } from '../actions/movieActionCreator';
import LinearGradient from 'react-native-linear-gradient';


const validator = require('validator');

const Register = (props) => {
    const dispatch=useDispatch();
    const data=useSelector(state=>state);
    const profile=data.movie.profilepath;
    const navigation=useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Id, setId] = useState('');
    const [Phone, setPhone] = useState('');
    const [pin, setPin] = useState('');
    const [Address, setAddress] = useState('');
    const[image,setImage]=useState('/Users/ambin04957/Desktop/API/movieproject/Images/notavailaible.png')
    const [userPassword, setUserPassword] = useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const [passwordValidError, setPasswordValidError] = useState('');

    const [phoneValidError, setPhoneValidError] = useState('');
    
    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (val.length === 0) {
        setEmailValidError('* email address must be enter');
        } else if (reg.test(val) === false) {
        setEmailValidError('* enter valid email address i.e  abc@gmail.com');
        } else if (reg.test(val) === true) {
        setEmailValidError('');
        }
    };


    const handleValidPassword = val => {
        let reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (val.length === 0) {
        setPasswordValidError('* password must be enter');
        } else if (reg.test(val) === false) {
        setPasswordValidError('* enter valid password');
        } else if (reg.test(val) === true) {
        setPasswordValidError('');
        }
    };

    const handleValidNumber = val => {
        let reg = /^[0]?[789]\d{9}$/;
        if (val.length === 0) {
        setPhoneValidError('* phone number must be enter');
        } else if (reg.test(val) === false) {
        setPhoneValidError('* enter valid number');
        } else if (reg.test(val) === true) {
        setPhoneValidError('');
        }
    };

    const takePhotoLibrary = () => {
        ImagePicker.openPicker({
            width: 200,
            height: 300,
            cropping: true
        }).then(image => {

            dispatch(AddProfileImage(image.path))
            setImage(image.path)
        });

    }

    const register = async() => {
        if(email !== '' && password !== '' && Id !== '' && Phone !=='' && pin !=='' && Address!=='' ){
            if(emailValidError === '' && phoneValidError===''){


            const arrayData = [];
            
            const userDetails = {
            
            image:image,
            email : email,
            password : password,
            id: Id,
            phone:Phone ,
            pin : pin,
            address : Address,
            token : Math.random()
        }
        
        arrayData.push(userDetails);
        try{
            AsyncStorage.getItem("UserDatadb").then(value => {
            if (value !== null) {
                const d = JSON.parse(value);
                d.push(userDetails);
                
                AsyncStorage.setItem("UserDatadb", JSON.stringify(d)).then(
                () => {
                    navigation.navigate('login');
                    alert("Registered Successfully")
                }
                );
            } else {
                AsyncStorage.setItem(
                    "UserDatadb",
                    JSON.stringify(arrayData)
                ).then(() => {
                    navigation.navigate('login')
                    alert("Registered Successfully")
                });
            }
            });
        }catch(error){
            console.log(error);

        }
        }else{
            alert('invalid data entered');
            return;
        }
    }else{  
            alert("Please enter data");
            return;
            }

        }

    return(<LinearGradient locations={[0.3, 0.6, 1]} colors={['#ff9900', '#ff751a', '#ff4d88']} style={styles.inputcontainer}>

        
        
            <Pressable onPress={()=>takePhotoLibrary()}><Image style={{borderColor: '#dadae8',
        borderWidth: 1,
        backgroundColor:'#FFFEF2',
        height:120,
        width:120,
        padding:15,
        borderRadius:70,
        marginTop:20,}} source={{uri:image}}></Image></Pressable>

            
            
            <TextInput
                style={styles.input}
                value={Id}
                textAlign="center"
                placeholder={"User Id"}
                placeholderTextColor = "black"
                onChangeText={(text) => setId(text)}
                autoCapitalize={"none"}
            />
            <TextInput
                style={styles.input}
                value={password}
                textAlign="center"
                placeholder={"Password"}
                //maxLength={5}
                placeholderTextColor = "black"
                secureTextEntry
                onChangeText={value => {setPassword(value);handleValidPassword(value);}}
                //onChangeText={(text) => setPassword(text)}
                />

               {passwordValidError ? <Text style={{color:"red"}}>{passwordValidError}</Text> : null}

            <TextInput
                style={styles.input}
                value={email}
                textAlign="center"
                placeholder={"Email Id"}
                keyboardType='email-address'
                returnKeyType='next'
                placeholderTextColor = "black"
                onChangeText={value => {setEmail(value);handleValidEmail(value); }}
                autoCapitalize={"none"}
            />
            {emailValidError ? <Text style={{color:"red"}}>{emailValidError}</Text> : null}

            

            <TextInput
                style={styles.input}
                value={Phone}
                textAlign="center"
                placeholder={"Phone number"}
                keyboardType= "numeric"
                //validators={['required', 'isNumber','maxNumber:11']}
                maxLength={10}
                placeholderTextColor = "black"
                // onChangeText={(text) => setPhone(text)}
                onChangeText={value => {setPhone(value);handleValidNumber(value);}}
                autoCapitalize={"none"}

            />
            {phoneValidError ? <Text style={{color:"red"}}>{phoneValidError}</Text> : null}


            <TextInput
                style={styles.input}
                value={Address}
                textAlign="center"
                placeholder={"Address"}
                placeholderTextColor = "black"
                
                onChangeText={(text) => setAddress(text)}/>

            <TextInput
                style={styles.input}
                value={pin}
                textAlign="center"
                placeholder={"Pin Code"}
                placeholderTextColor = "black"
                
                onChangeText={(text) => setPin(text)}/>

            <TouchableOpacity style={styles.buttonContainer} onPress={register}  >
                <Text style={{color:'#ffff',fontSize:18}}>Register</Text>

            </TouchableOpacity>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    inputcontainer:{ 
        backgroundColor:"#FDCFB3",
        flex:1,
        alignItems:'center',
        padding:0,
        
        
    },
    input:{
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor:'#FFFEF2',
        width:'70%',
        padding:15,
        borderRadius:15,
        marginTop:20,
        
        fontSize:18
    },
    buttonContainer:{
        backgroundColor:'#ff8080',
        paddingVertical:15,
        padding:15,
        width:'70%',
        borderColor: 'pink',
        borderWidth: 1,
        borderRadius:15,
        marginVertical:10,
        alignItems:'center'
    }
})


export default Register;