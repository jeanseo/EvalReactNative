import {SET_PLAYER_CHOICE, B, C, D, E, F} from "../constants/action";

export const setPlayerChoice = (payload) =>{
    return{
        type: SET_PLAYER_CHOICE, payload
    }

};
export const B = () =>{
    return{
        type: B
    }
};

export const C = () =>{
    return{
        type: C
    }
};

export const D = () =>{
    return{
        type: D
    }
};

export const async1 = () => {

    return dispatch => {
        setTimeout(() => {
            dispatch(toggleHistoryDisplay());
        }, 2000);
    };
};

export const E = (payload) =>{
    return{
        type: E, payload
    }
};
/*
export const async2 = () => {
    console.log('etape 0');
    return dispatch => {
        fetch("https://reactnative.dev/movies.json", {
            method: "GET",
            headers: {
                Accept: "application/json",
            }
        } )
            .then(res => res.json())
            .then(
                result => {
                    dispatch(getMovies(result));
                }
            )
            .catch((err) => {
                console.log(err);
                dispatch(setError('Erreur dans le chargement des données'));
            });
    }
};

export const setError = (payload) =>{
    return{
        type: SET_ERROR, payload
    }
};*/
