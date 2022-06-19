import React,{useEffect} from 'react';
import {Image} from 'react-native'
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {Add_Popular_Series_Only_Imdb_10,Add_Popular_Series_10,Add_Now_Series_10,Add_Now_Series_Only_Imdb_10, Add_New_Movies, Add_This_Year ,Add_Popular_Movies_With_Imdb,Add_Popular_Movies} from '../actions/movieActionCreator';

const tab=createBottomTabNavigator();

const Tab=()=>{

    

    return(<tab.Navigator >
        <tab.Screen name='MOVIE' component={Screen1} options={{headerShown:false , tabBarIcon:({size})=>(<Image source={require('/Users/ambin04957/Desktop/API/movieproject/Images/outline_movie_black_24dp.png')} style={{width:30,height:30}}></Image>)}}/>
        <tab.Screen name='TV'  component={Screen2} options={{headerShown:false, tabBarIcon:({size})=>(<Image source={require('/Users/ambin04957/Desktop/API/movieproject/Images/outline_live_tv_black_24dp.png')} style={{width:30,height:30}}></Image>)}}/>
        <tab.Screen name='PROFILE' component={Screen3} options={{headerShown:false, tabBarIcon:({size})=>(<Image source={require('/Users/ambin04957/Desktop/API/movieproject/Images/outline_account_circle_black_24dp.png')} style={{width:30,height:30}}></Image>)}}/>
        </tab.Navigator>)
}

export default Tab;