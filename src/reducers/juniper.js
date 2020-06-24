import {A} from "../constants/action";

import _ from 'lodash';

const initialState = {
    maxValue : 100,
    playerChoice: '',
    computerChoice : '',
    computerChoices : '',
    playerChoices : '',
    possibleValues : [],

};

const stateInit = _.cloneDeep(initialState);

export default (state = stateInit, action = {}) => {

    switch (action.type)
    {
        case A:
            console.log('A');
            return {...state};
        default:
            return state;
    }

}

