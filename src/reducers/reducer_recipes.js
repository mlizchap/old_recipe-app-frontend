import { FETCH_RECIPES } from '../actions';
import { CREATE_POST } from '../actions';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_RECIPES:
            return action.payload.data;
        case CREATE_POST:
            return [...state, action.payload.data]
        default:
            return state;
    }
}