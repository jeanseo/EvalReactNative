import {A} from "../constants/action";

import _ from 'lodash';

const initialState = {};

const stateInit = _.cloneDeep(initialState);

export default (state = stateInit, action = {}) => {

    switch (action.type)
    {
        case null:
            return {...state};
        default:
            return state;
    }

}

