import { combineReducers } from 'redux';
import cardDataCurrent from './addCard/reducer';

const reducers = combineReducers({
    cardDataCurrent,
});

export default reducers;