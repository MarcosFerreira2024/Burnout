const HOST = "http://localhost:3001/api/";

const ACTIONS = {

    login: {
        url: `${HOST}login`,

    },
    sign: {
        url: `${HOST}sign`,

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

    }
}

export default ACTIONS