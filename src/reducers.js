import { combineReducers } from 'redux';
import { ADD_TO_BASKET } from './actions';

function basketItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            return [
                ...state,
                {
                    text: action.text
                }
            ]
        default:
            return state
    }
}

const menuApp = combineReducers({
    basketItems
})

export default menuApp

