import axios from 'axios';

export const ACTIVE_RECIPE = 'ACTIVE_RECIPE';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://localhost:3050/api';


export function fetchRecipes() {
    const request = axios.get(ROOT_URL)
    return {
        type: FETCH_RECIPES,
        payload: request
    }
}

export function getActiveRecipe(id) {
    const request = axios.get(`${ROOT_URL}/${id}`) 
    return {
        type: ACTIVE_RECIPE,
        payload: request
    }
}

export function createRecipe(values) {
    const request = axios.post(`${ROOT_URL}/new`, values)

    return {
        type: CREATE_POST,
        payload: request
    }
}