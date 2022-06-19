import React, { useRef } from 'react';
import 
{
 View,
 Text,
 Image   
}
from 'react-native';

import FirstSlider from './FirstSlider';
import SecondSlider from './SecondSlider';
import ThirdSlider from './ThirdSlider';
import Pagenation from './Pagenation';

import Swiper from 'react-native-swiper';



const Slider =()=>
{   const swiper = useRef(null)
    return(
     <Swiper loop={false} showsPagination={true} ref={swiper}
      activeDot={<Image style={{height:28,width:30,marginBottom:'60%',margin:5}} 
     source={require('/Users/ambin04957/Desktop/API/movieproject/Images/MicrosoftTeams-image.png')}></Image>}  
     dot={<Image style={{height:20,width:20,marginBottom:'60%',margin:5}} source={require('/Users/ambin04957/Desktop/API/movieproject/Images/MicrosoftTeams-image.png')}></Image>} >
         <FirstSlider test={swiper}/>
         <SecondSlider test={swiper}/>
         <ThirdSlider test={swiper}/>
     </Swiper>

    )
}

export default Slider;

const styles = {
    wrapper: {},
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    image: {
      
      flex: 1
    },
    paginationStyle: {
      position: 'absolute',
      bottom: 10,
      right: 10
    },
    paginationText: {
      color: 'white',
      fontSize: 20
    }
  }