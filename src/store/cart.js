let initialState = {
    cart: [],
}

const cartReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'ADDTOCART':
            let product = payload;
            return { cart: [...state.cart, product] }
        
            case 'REMOVEFROMCART':
                let removeProduct = payload;
                console.log(payload);
                return { cart: state.cart.filter(item => item !== removeProduct) }
    
            case 'CARTRESET':
            return initialState;
        default:
            return state;
    }
}

export const addToCart = (product) => {
    return {
        type: 'ADDTOCART',
        payload: product
    }
}

export const removeFromCart = (product) => {
    return {
        type: 'REMOVEFROMCART',
        payload: product
    }
}

export default cartReducer;