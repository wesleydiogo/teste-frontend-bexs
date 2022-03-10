import {
    ADD_CARD
} from '../actionTypes';

// interface StateProps {
//     numero: string,
//     nome: string,
//     validade: string,
//     cvv: number,
//     parcelas: number
// };

const INITIAL_STATE = {
    number: "1234 4567 7890 0123",
    name: "Wesley Diogo R Cruz",
    dateExpire: "00/00",
    cvv: "2445",
    parc: 0,
}

export default (state = INITIAL_STATE, action) => {
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