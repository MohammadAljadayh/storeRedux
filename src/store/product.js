
import axios from 'axios';
import { addToCart, removeFromCart } from './cart';
const api = 'https://run.mocky.io/v3/23fae1fb-8696-4dd8-850a-ea1bcab19d2d';
// const api = 'https://run.mocky.io/v3/0cd516da-382a-4ad5-bc18-d9db39fa1454';

let initialState = {
    products: [],
}
const prodReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {

        case 'GET_PRODS':
            return { products: payload };
        default:
            return state;
    }
}
export const getRemoteData = () => async dispatch => {
    let response = await axios.get(api);
    dispatch(getAction(response.data))
}

export const putRemoteData = (product, incrementor) => async dispatch => {
    let inventory = (await axios.get(`${api}/${product._id}`)).data.inventory;
    const update = { ...product, inventory: incrementor ? inventory - 1 : inventory + 1 }
    let response = await axios.put(`${api}/${product._id}`, update)
    console.log('inventory: ', response.data.inventory);
    if (response.status) {
        incrementor ? dispatch(addToCart(response.data)) : dispatch(removeFromCart(product));
        dispatch(getRemoteData());
    }
}

export const getAction = (data) => {
    return {
        type: 'GET_PRODS',
        payload: data
    }
}

export default prodReducer;