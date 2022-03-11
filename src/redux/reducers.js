import { combineReducers } from 'redux';
import card from './addCard/reducer';

const reducers = combineReducers({
    // ...,
    // ...,
    card,
});

export default reducers;