import { CREATE_POST, FETCH_RECIPES, DELETE_RECIPE } from '../actions';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_RECIPES:
            return action.payload.data;
        case CREATE_POST:
            return [...state, action.payload.data]
        case DELETE_RECIPE: 
            return state.filter(i => i.id === action.payload)
        default:
            return state;
    }
}