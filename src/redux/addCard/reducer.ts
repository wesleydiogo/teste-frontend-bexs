import { AnyAction } from 'redux';
import {
    ADD_CARD
} from '../actionTypes';
import { CardType } from '../../types/card';

const INITIAL_STATE: CardType = {
    numero: "**** **** **** ****",
    bandeira: "None",
    nome: "Nome do titular",
    validade: "MM/AA",
    cvv: "***",
    cvvLength: 3,
    parcelas: 0,
}

export default (state = INITIAL_STATE, action: AnyAction) => {
    
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}