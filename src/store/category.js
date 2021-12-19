let initialState = {
    categories: [
        {
            name: 'PC',
            displayName: 'PC',
            description: 'Electronics Computers'
        },
        {
            name: 'Mobile',
            displayName: 'Mobile',
            description: 'Mobile Phone electronics'
        },
    ],
    activeCategory: null,
}

const catReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'SETCATEGORY':
            let activeCategory = payload;
            let categories = initialState.categories;
            return { activeCategory, categories };

        case 'RESET':
            return initialState;

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

export default catReducer;