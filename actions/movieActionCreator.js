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
    ADD_POPULAR_SERIES_20,
    ADD_NOW_SERIES_10,
    ADD_NOW_SERIES_ONLY_IMDB_10,
    ADD_MOVIE_CAST_IMDB_ID,
    MOVIE_CAST_ARRAY} from 'movieproject/actions/actionTypes.js';
import { ADD_GENRE, ADD_NOW_SERIES_20, CACHE, FAVORITE, GENRE_ARRAY, LIKED, PROFILE_IMAGE, REMOVE_FAVORITE, REMOVE_LIKE } from './actionTypes';


export const Add_This_Year=(payload)=>{
    return({type:ADD_THIS_YEAR_MOVIES,payload})
};

export const Add_Imdb_Id=(payload)=>{
    return({type:ADD_IMDB_ID_MOVIES,payload})

};

export const Add_New_Movies=(payload)=>{
    return({type:ADD_NEW_MOVIES,payload})
};

export const Add_Popular_Movies_With_Imdb=(payload)=>{
    return({type:ADD_POPULAR_MOVIES_WITH_IMDB,payload})
};


export const Add_Popular_Movies=(payload)=>{
    return({type:ADD_POPULAR_MOVIES,payload})
};


export const Add_New_Movies_Imdb_20=(payload)=>{
    return({type:ADD_NEW_MOVIES_IMDB_20,payload})
};

export const Add_New_Movies_20=(payload)=>{
    return ({type:ADD_NEW_MOVIES_20,payload})
};
export const Add_Popular_Movies_Imdb_20=(payload)=>{
    return ({type:ADD_POPULAR_MOVIES_IMDB_20,payload})
};

export const Add_Popular_Movies_20=(payload)=>{
    return ({type:ADD_POPULAR_MOVIES_20,payload})
};

export const Add_Popular_Series_Only_Imdb_10=(payload)=>{
    return ({type:ADD_POPULAR_SERIES_ONLY_IMDB_10,payload})
}

export const Add_Popular_Series_10=(payload)=>{
    return ({type:ADD_POPULAR_SERIES_10,payload})
}

export const Add_Now_Series_10=(payload)=>{
    return ({type:ADD_NOW_SERIES_10,payload})}

export const Add_Now_Series_20=(payload)=>{
    return({type:ADD_NOW_SERIES_20,payload})
}

export const Add_Popular_Series_20=(payload)=>{
    return ({type:ADD_POPULAR_SERIES_20,payload})
}

export const Add_Now_Series_Only_Imdb_10=(payload)=>{
    return ({type:ADD_NOW_SERIES_ONLY_IMDB_10,payload})
}
export const Add_Movie_Cast_Imdb_Id=(payload)=>{
    return({type:ADD_MOVIE_CAST_IMDB_ID,payload})

}
export const Movie_Cast_Array=(payload)=>{
    return ({type:MOVIE_CAST_ARRAY,payload})
}

export const Liked=(payload)=>{
    return ({type:LIKED,payload})
}

export const RemoveLike=(payload)=>{
    return({type:REMOVE_LIKE,payload})
}

export const Favorite=(payload)=>{
    return({type:FAVORITE,payload})
}

export const RemoveFavorite=(payload)=>{
    return({type:REMOVE_FAVORITE,payload})
}


export const AddGenre=(payload)=>{
    return({type:GENRE_ARRAY,payload})
}

export const AddGenreMovies=(payload)=>{
    return({type:ADD_GENRE,payload})
}

export const AddProfileImage=(payload)=>{
    return ({type:PROFILE_IMAGE,payload})
}

export const Cache=(payload)=>{
    return ({type:CACHE,payload})
}



