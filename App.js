/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FirstSlider from './components/FirstSlider';
import SplashScreen from './components/SplashScreen';
import SecondSlider  from './components/SecondSlider';
import ThirdSlider from './components/ThirdSlider'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Swiper from 'react-native-swiper';
import Slider from './components/Slider';
import Login from './components/Login';
import Register from './components/Register';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Tab from './components/Tab';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import newmovies20 from './components/newmovies20';
import { persistStore } from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import Setting from './components/Setting';
import popularmovies20 from './components/popularmovies20';
import newseries20 from './components/newseries20';
import popularseries20 from './components/popularseries20';
import MovieInfo from './components/MovieInfo';
import SeriesInfo from './components/SeriesInfo';
import SearchScreen from './components/SearchScreen';


const store=createStore(rootReducer,applyMiddleware(thunk));
const persistor=persistStore(store); 



const App= () => {
  

  
  const stack=createNativeStackNavigator();
  
  
  return(
    
    <Provider store={store}>
       <PersistGate persistor={persistor}>
      
    <NavigationContainer>
    <stack.Navigator initialRouteName='splash' >
      <stack.Screen name='splash' component={SplashScreen} options={{headerShown:false}}/>
      <stack.Screen name='firstpage' component={Slider} options={{headerShown:false}}/>
      <stack.Screen name='login' component={Login} options={{headerShown:false}}/>
      <stack.Screen name='register' component={Register} options={{title:''}}/>
      
      <stack.Screen name='tab' component={Tab} options={{headerShown:false}}/>
      <stack.Screen name='newmovies20' component={newmovies20} options={{title:''}}/>
      <stack.Screen name='MOVIE' component={Screen1} options={{headerShown:false}} />
      <stack.Screen name='PROFILE' component={Screen3}/>
      <stack.Screen name='setting' component={Setting} options={{title:''}}/>
      <stack.Screen name='popularmovie20' component={popularmovies20} options={{title:''}}/>
      <stack.Screen name='newseries20' component={newseries20} options={{title:''}}/>
      <stack.Screen name='popularseries20' component={popularseries20} options={{title:''}}/>
      <stack.Screen name='movieinfo' component={MovieInfo} options={{headerShown:false}}/>
      <stack.Screen name='seriesinfo' component={SeriesInfo} options={{headerShown:false}}/>
      <stack.Screen name='search' component={SearchScreen} options={{headerShown:false}}/>


      

      
      
     

    </stack.Navigator>
    
    
    
    </NavigationContainer>
    </PersistGate>
    </Provider>
    
    
    

  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
