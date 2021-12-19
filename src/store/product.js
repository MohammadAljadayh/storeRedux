let initialState = {
    products: [
        {
            category: 'PC',
            name: 'HP',
            price: 650,
            image:"https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/1/x/1x6q6pa-bundle.png"

        },
        {
            category: 'PC',
            name: 'DELL',
            price: 450,
          image : "https://i5.walmartimages.com/asr/20c2da98-23b6-42c0-99ff-3719a352c2a8_1.d7738944df20f5cd082a4c5d826986b0.jpeg"
        },
        {
            category: 'PC',
            name: 'Toshipa',
            price: 550,
            image :"https://gts.jo/image/cache/catalog/products/laptops/toshiba/TECRA-X40-D-122-1-550x400.jpg"
        },
        {
            category: 'Mobile',
            name: 'Samsung',
            price: 250,
            image:"https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/01/samsung-galaxy-s21-series-2.jpg"
        },
        {
            category: 'Mobile',
            name: 'Iphone',
            price: 440,
            image:"https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg "
        },
        {
            category: 'Mobile',
            name: 'Relme',
            price: 320,
            image:" https://www.techadvisor.com/cmsdata/slideshow/3789412/best_realme_phone_2020_hero_thumb800.jpg"
        },

    ],
}

const prodReducer = (state = initialState, action) => {
    let { type } = action;

    switch (type) {
        case 'SETCATEGORY':
            let products = initialState.products;
            return { products };

        case 'RESET':
            return initialState;

        default:
            return state;
    }
}

export default prodReducer;