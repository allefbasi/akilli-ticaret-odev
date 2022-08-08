//export function getProductsMock(page) {
//     return new Promise(resolve => {
//         resolve(
//             {
//                 productList: [{
//                     "key": -499,
//                     'img': 'https://cdn.evkur.com.tr/c/Product/thumbs/20263195-1_gw6i4c_500.jpg',
//                     "id": 1,
//                     "name": "TEST",
//                     "stockCode": "TEST",
//                     "stock": 200,
//                     "price": 10.00,
//                     "priceVat": null,
//                     "stockType": "ad.",
//                     "currency": "TL",
//                     "totalRow": 0,
//                     "kdv": 0.0,
//                     "listPrice": 0.0,
//                     "listPriceVat": null,
//                     "unitIncrement": 0.0,
//                     "discountRate": 0.0,
//                     "isInFavorite": 0,
//                     "maxSaleUnit": 0.0,
//                     "minSaleUnit": 0.0,
//                     "inCartQty": 0,
//                     "prodImages": null
//                 },
//                     {
//                         "key": -499,
//                         'img': 'https://cdn.cimri.io/image/1000x1000/siemenssnidtasnfprogramlbulakmakinesibeyaz_384235628.jpg',
//                         "id": 2,
//                         "name": "TEST",
//                         "stockCode": "TEST",
//                         "stock": 200,
//                         "price": 10.00,
//                         "priceVat": null,
//                         "stockType": "ad.",
//                         "currency": "TL",
//                         "totalRow": 0,
//                         "kdv": 0.0,
//                         "listPrice": 0.0,
//                         "listPriceVat": null,
//                         "unitIncrement": 0.0,
//                         "discountRate": 0.0,
//                         "isInFavorite": 0,
//                         "maxSaleUnit": 0.0,
//                         "minSaleUnit": 0.0,
//                         "inCartQty": 0,
//                         "prodImages": null
//                     },
//                     {
//                         "key": -499,
//                         "id": 3,
//                         "name": "TEST",
//                         "stockCode": "TEST",
//                         "stock": 200,
//                         "price": 10.00,
//                         "priceVat": null,
//                         "stockType": "ad.",
//                         "currency": "TL",
//                         "totalRow": 0,
//                         "kdv": 0.0,
//                         "listPrice": 0.0,
//                         "listPriceVat": null,
//                         "unitIncrement": 0.0,
//                         "discountRate": 0.0,
//                         "isInFavorite": 0,
//                         "maxSaleUnit": 0.0,
//                         "minSaleUnit": 0.0,
//                         "inCartQty": 0,
//                         "prodImages": null
//                     },
//                     {
//                         "key": -499,
//                         "id": 4,
//                         "name": "TEST",
//                         "stockCode": "TEST",
//                         "stock": 200,
//                         "price": 10.00,
//                         "priceVat": null,
//                         "stockType": "ad.",
//                         "currency": "TL",
//                         "totalRow": 0,
//                         "kdv": 0.0,
//                         "listPrice": 0.0,
//                         "listPriceVat": null,
//                         "unitIncrement": 0.0,
//                         "discountRate": 0.0,
//                         "isInFavorite": 0,
//                         "maxSaleUnit": 0.0,
//                         "minSaleUnit": 0.0,
//                         "inCartQty": 0,
//                         "prodImages": null
//                     }],
//                 listLength: 50,
//             }
//         )
//     })
// }

let token = null;

async function callGetProductApi(page) {
    if (token == null) {
        token = await signIn();
    }
    return fetch(`${process.env.REACT_APP_BASE_URL}/Product/ListProducts/${page}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                guid: '0739-E657-C4F4-98B4',
                authorization: `bearer ${token}`
            },
        }
    ).then((res) => res.json())
        .then((res) => {
            return res.data;
        })
}

let products = [];

export async function getProducts(page) {
    if (products.length === 0) {
        products = await callGetProductApi(0);
    }
    console.log({products})
    return {
        productList: products.slice(page * 4, page * 4 + 4),
        listLength: products.length,
    }
}

function signIn() {
    return fetch(`${process.env.REACT_APP_BASE_URL}/Auth/Login`,
        {
            method: 'POST',
            body: JSON.stringify({username: 'user', password: '123456'}),
            headers: {'content-type': 'application/json', guid: '0739-E657-C4F4-98B4'}
        }
    ).then((res) => res.json())
        .then((res) => {
            console.log(res)
            return res.data.token;
        })
}


