import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const SplashScreen = (props) => {
  const navigation=useNavigation();
  useEffect(() => {

    AsyncStorage.getItem('UserData').then(input => {
    
    if (input !== null) {
    
    try {
    
    var value = JSON.parse(input);
    
    
    
    if (value.isLoggedin === '1') {
    
    navigation.navigate('tab')
    
    }
    
    else {
    
    setTimeout(() => {
    
    navigation.navigate('firstpage');
    
    }, 1000);
    
    }
    
    } catch (error) {
    
    console.log(error)
    
    
    }
  }
    
    else {
    
    setTimeout(() => {
    
    navigation.replace('tab');
    
    }, 1000);
    
    }})}, [])

   


  return (
    <LinearGradient locations={[0.3, 0.6, 1]} colors={['#ff9900', '#ff751a', '#ff4d88']} style={{ flex: 1 }}>
      <View style={styles.view}>
        <Image style={{ height: '13%', width: '27%' }} source={require('/Users/ambin04957/Desktop/API/movieproject/Images/MicrosoftTeams-image.png')} />
        <Text style={styles.text}>MAO TRAILER</Text>
      </View>
    </LinearGradient>)
}

const styles = StyleSheet.create({


  view:
  {
    flex: 1, alignItems: 'center', justifyContent: 'center'

  },
  text: {
    color: 'white', fontSize: 15, fontWeight: '600', marginTop:'2%'

  }
});


export default SplashScreen;