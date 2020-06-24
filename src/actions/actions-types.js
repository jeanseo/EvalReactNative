import {SET_PLAYER_CHOICE, SUBMIT_CHOICE, INITIALIZE_GAME, E, F, RESET_ERROR, SUBMIT_COMPUTER_CHOICE} from "../constants/action";
import {computerStrategy} from "../utils/utils";

export const setPlayerChoice = (payload) =>{
    return{
        type: SET_PLAYER_CHOICE, payload
    }
};
export const submitChoice = () =>{
    return{
        type: SUBMIT_CHOICE
    }
};

export const resetError = () =>{
    return{
        type: RESET_ERROR
    }
};

export const initializeGame = () =>{
    return{
        type: INITIALIZE_GAME
    }
};


export const submitComputerChoice = () =>{
    return{
        type: SUBMIT_COMPUTER_CHOICE
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
};*/

export const hideMessage = (payload) =>{
    return dispatch => {
        setTimeout(() => {
            dispatch(resetError());
        }, 2000);
    };
};

export const computerPlays = () =>{
    return dispatch => {
        setTimeout(() => {
            dispatch(submitComputerChoice());
        }, 2000);
    };
};

