import { combineReducers } from 'redux';
import RecipeReducer from './reducer_recipes';
import ActiveRecipeReducer from './reducer_activeRecipe';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    recipes: RecipeReducer,
    activeRecipe: ActiveRecipeReducer,
})

export default rootReducer;