import axios from 'axios';
const api = 'https://run.mocky.io/v3/10f0fc90-542e-4ec4-aa03-02a6c5d82313';
// const api = 'https://run.mocky.io/v3/7c97b507-ab9a-4d07-a374-a98b81ea58cf';

let initialState = {
    categories: [],
    activeCategory: null,
}


const catReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'SETCATEGORY':
            let activeCategory = payload;
            let categories = state.categories;
            return { activeCategory, categories };

        case 'GET_CATS':
            return { categories: payload, activeCategory: initialState.activeCategory };

        case 'RESET':
            return { ...state, activeCategory: initialState.activeCategory };

        default:
            return state;
    }
}

export const setActiveCategory = (category) => {
    return {
        type: 'SETCATEGORY',
        payload: category
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

export const getRemoteData = () => async dispatch => {
    let response = await axios.get(api);
    dispatch(getAction(response.data))
}

export const getAction = (data) => {
    return {
        type: 'GET_CATS',
        payload: data
    }
}

export default catReducer;