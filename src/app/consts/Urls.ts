
const HOST = "http://localhost:3001/api/";







const ACTIONS = {

    login: {
        url: `${HOST}login`,

    },
    sign: {
        url: `${HOST}sign`,

    },
    user: {
        getOne: {
            url: `${HOST}user`
        }
    },
    code: {
        url: `${HOST}code`,
    },
    produtos: {
        getAll: {
            url: `${HOST}produtos?name=`,
        },
        getOne: {
            url: `${HOST}produto`,
        }

    },
    cart: {
        getAll: {
            url: `${HOST}user/:userId/cart/`,
            userId: (userId: string) => `${HOST}user/${userId}/cart`,
        },
        addProduct: {
            url: `${HOST}user/:userId/cart/:produtoId`,
            userAndProduct: (userId: string, productId: string) => `${HOST}user/${userId}/cart/${productId}`,
        },
        deleteProduct: {
            url: `${HOST}user/:userId/cart/:produtoId`,
            userAndProduct: (userId: string, productId: string) => `${HOST}user/${userId}/cart/${productId}`,
        }
    }
}

export default ACTIONS