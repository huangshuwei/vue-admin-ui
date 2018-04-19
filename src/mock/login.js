const loginInfo = [
    {
        status: 1,
        msg: '',
        data: {
            account: 'admin',
            token: 'abcdefghijklmn',
            avatar: '', // 头像
            roles: []
        }
    },
    {
        status: 0, // 错误
        msg: '用户名或密码错误',
        data: {
        }
    }
]

export default {
    // login
    login: config => {

        let {account, password} = JSON.parse(config.body);

        console.log(config.body);

        account = account && account.trim();

        if (account === 'admin') {

            return loginInfo[0];
        }

        return loginInfo[1];
    },

    // logout
    logout: config => {

    },

    //getUserInfo
    getUserInfo: config => {


    }
}
