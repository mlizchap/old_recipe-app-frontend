import { ACTIVE_RECIPE } from "../actions";

export default function(state = null, action) {
    switch (action.type) {
        case ACTIVE_RECIPE:
            return action.payload.data 
        default: 
            return state;
    }
}