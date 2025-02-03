

const production = false

const HOST = production ? "http://localhost:3001/api/" : "https://burnout-back-end.vercel.app/api/";









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
        },
        update: {
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
        getAllAdmin: {
            url: `${HOST}produtos?name=Produtos`,
        },
        getOne: {
            url: `${HOST}produto`,
        },
        deleteOne: {
            url: `${HOST}produto/:id`,
            productId: (id: string) => `${HOST}produto/${id}`
        }

    },
    cart: {
        getAll: {
            url: `${HOST}user/:userId/cart`,
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