export default {
    // login
    login: config => {

        const {account, password} = JSON.parse(config.body);

        console.log(config.body)

        return {account, password};

    },

    // logout
    logout: config => {

    },

    //getUserInfo
    getUserInfo: config => {


    }
}
