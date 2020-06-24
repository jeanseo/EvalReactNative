import {
    INITIALIZE_GAME,
    RESET_ERROR,
    SET_PLAYER_CHOICE,
    SUBMIT_CHOICE,
    SUBMIT_COMPUTER_CHOICE
} from "../constants/action";

import _ from 'lodash';
import {calculatePossibleValues, computerStrategy} from "../utils/utils";

const initialState = {
    maxValue : 50,
    playerChoice: '',
    computerChoice : '',
    computerChoices : [],
    playerChoices : [],
    possibleValues : [],
    displayError : false,
    errorMessage : '',
    computerTurn : false,
    gameOver: false,
    winner: ''

};

const stateInit = _.cloneDeep(initialState);

export default (state = stateInit, action = {}) => {


    let errorMessage;
    let displayErrorMessage;
    let computerChoice;
    let computerChoices;
    let playerChoices;
    let possibleValues;
    let playedValues;
    let gameOver;

    switch (action.type)
    {
        case SET_PLAYER_CHOICE:
            return {...state, playerChoice: action.payload};
        case RESET_ERROR:
            return{...state, errorMessage: '',displayError: false};
        case INITIALIZE_GAME:
            const initialValue = Math.floor(Math.random() * state.maxValue)+1;
            playedValues = [initialValue];
            possibleValues = calculatePossibleValues(playedValues,initialValue, state.maxValue);
            console.log(possibleValues);


            return {...state,
                computerTurn: false,
                computerChoices : [initialValue],
                playerChoices : [],
                computerChoice: initialValue,
                possibleValues: possibleValues,
            };
        case SUBMIT_CHOICE:
            //Vérifier valeur nombre entier >0 && <=100
            if(!(state.playerChoice>0 && state.playerChoice <=100))
            {
                return {...state,
                    errorMessage: 'La valeur doit être comprise entre 0 et 100',
                    displayError: true
                };
            }
            //Vérifier que le nombre n'ait pas déjà été saisi
            if(state.playerChoices.includes(parseInt(state.playerChoice))
                || state.computerChoices.includes(parseInt(state.playerChoice))
                )
            {
                return {...state,
                    errorMessage: 'Nombre déjà joué',
                    displayError: true
                };
            }
            //TODO vérifier valeur correcte (incluse dans possibleValues
            if(!state.possibleValues.includes(parseInt(state.playerChoice))){
                return {...state,
                    errorMessage: 'Valeur incorrecte',
                    displayError: true
                };
            }
            //TODO Ajouter la valeur au tableau playersChoice + chercher les nouvelles valeurs possibles
            playerChoices = [...state.playerChoices, parseInt(state.playerChoice)];
            playedValues = playerChoices.concat(state.computerChoices);
            possibleValues = calculatePossibleValues(playedValues,state.playerChoice, state.maxValue);
            gameOver = possibleValues.length === 0;
            //Si plus de valeurs possibles, partie gagnée
            possibleValues.length === 0 ? gameOver = true : gameOver = false;

            return {...state, playerChoices: playerChoices, computerTurn: true, playerChoice: '', gameOver: gameOver,
                        possibleValues: possibleValues};

        case SUBMIT_COMPUTER_CHOICE:
            computerChoice = computerStrategy(state.possibleValues, state.maxValue, state.playerChoices.concat(state.computerChoice));
            computerChoices = state.computerChoices.concat(computerChoice);
            playedValues = computerChoices.concat(state.playerChoices);
            possibleValues = calculatePossibleValues(playedValues,computerChoice, state.maxValue);
            console.log(possibleValues);


            //Si plus de valeurs possibles, partie gagnée
            possibleValues.length === 0 ? gameOver = true : gameOver = false;
            return {...state, computerChoice:computerChoice, computerChoices: computerChoices,
                possibleValues: possibleValues, computerTurn: false, gameOver: gameOver};

        default:
            return state;
    }

}

