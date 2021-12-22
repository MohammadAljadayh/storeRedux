let initialState = {
    categories: [
    
        {
            name: 'electronics',
            display_name: 'Electronics',
            description: 'Electronics Collection ',
        },
        {
            name: 'food',
            display_name: 'PC and Mobile',
            description: 'PC and Mobile Coleection',
        },
    ],
    activeCategories: {},
};

const categories = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            let activeCategories = initialState.categories.find((category) => category.name === payload);
            return { categories: initialState.categories, activeCategories };
        default:
            return state;
    }
};

export default categories;