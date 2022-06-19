import {ADD_THIS_YEAR_MOVIES,
    ADD_IMDB_ID_MOVIES,
    ADD_NEW_MOVIES,
    ADD_POPULAR_MOVIES_WITH_IMDB,
    ADD_POPULAR_MOVIES,
    ADD_NEW_MOVIES_IMDB_20,
    ADD_NEW_MOVIES_20,
    ADD_POPULAR_MOVIES_IMDB_20,
    ADD_POPULAR_MOVIES_20,
    ADD_POPULAR_SERIES_ONLY_IMDB_10,
    ADD_POPULAR_SERIES_10,
    ADD_NOW_SERIES_10,
    ADD_NOW_SERIES_20,
    ADD_POPULAR_SERIES_20,
    ADD_NOW_SERIES_ONLY_IMDB_10,
    ADD_MOVIE_CAST_IMDB_ID,
    MOVIE_CAST_ARRAY,CACHE} from 'movieproject/actions/actionTypes.js';
import { ADD_GENRE, FAVORITE, GENRE_ARRAY, LIKED ,PROFILE_IMAGE,REMOVE_FAVORITE,REMOVE_LIKE} from '../actions/actionTypes';
import { RemoveFavorite, RemoveLike } from '../actions/movieActionCreator';


const INITIAL_STATE={thisyearmovies:[],popularmovies10:[],thisyearseries:[],popularseries10:[],thisyearmovies20:[],popularmovies20:[],thisyearseries20:[],popularseries20:[],moviecastarray:[],liked:[],favorite:[],genrearray:[],genremovies:[],profilepath:'/Users/ambin04957/Desktop/API/movieproject/Images/notavailaible.png'}


const movieReducer=(state=INITIAL_STATE,action)=>{
    const RemoveLike=(getLike,item)=>
    {  
        const removefirst = getLike.findIndex(check => 
            (check.imdb_id === item.imdb_id))
            
            getLike.splice(removefirst , 1);
        return getLike;
    };
    const RemoveFavorite=(getFavorite,item)=>
    {  
        const removefirst = getFavorite.findIndex(check => 
            (check.imdb_id === item.imdb_id))
            
            getFavorite.splice(removefirst , 1);
        return getFavorite;
    };

    switch(action.type)
    {
        case ADD_THIS_YEAR_MOVIES:
            return {...state,thisyearmovies:action.payload}
        
       

        case ADD_POPULAR_MOVIES:
            return{...state,popularmovies10:action.payload}


        case ADD_NOW_SERIES_10:
            return{...state,thisyearseries:action.payload}


        case ADD_POPULAR_SERIES_10:
            return{...state,popularseries10:action.payload}


        case ADD_NEW_MOVIES_20:
            return {...state,thisyearmovies20:action.payload}


        case  ADD_POPULAR_MOVIES_20:
            return {...state,popularmovies20:action.payload}


        case ADD_NOW_SERIES_20:
            return {...state,thisyearseries20:action.payload}

        case ADD_POPULAR_SERIES_20:
            return {...state,popularseries20:action.payload}


        case MOVIE_CAST_ARRAY:
            return {...state,moviecastarray:action.payload}


        case LIKED:
            return {...state,liked:[...state.liked,action.payload]}


        case REMOVE_LIKE:
            return{...state,liked:RemoveLike(state.liked,action.payload)}


        case FAVORITE:
            return{...state,favorite:[...state.favorite,action.payload]}


        case REMOVE_FAVORITE:
            return{...state,favorite:RemoveFavorite(state.favorite,action.payload)}


        case GENRE_ARRAY:
            return{...state,genrearray:[...state.genrearray,action.payload]}


        case ADD_GENRE:
            return{...state,genremovies:action.payload}

        case PROFILE_IMAGE:
            return {...state,profilepath:action.payload}


        case CACHE:
            return {...state,genrearray:[],favorite:[],liked:[]}


        

       

       

      

       

        default:return state;
    }
    
}



export default movieReducer;

