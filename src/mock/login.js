// loginInfo
const loginInfo = [
    {
        status: 1,
        msg: '',
        data: {
            token: 'abcdefghijklmn'
        }
    },
    {
        status: 0, // 错误
        msg: '用户名或密码错误',
        data: null
    }
];

// userInfo
const userInfo = [
    {
        status: 1,
        msg: '',
        data: {
            userName: 'admin',
            token: 'abcdefghijklmn',
            avatar: '', // 头像
            roles: []
        }
    },
    {
        status: 0, // 错误
        msg: '认证失败，请重新登录', // 可能是认证失败或者是过期
        data: null
    }
];

export default {
    // login
    login: config => {

        let {userName, password} = JSON.parse(config.body);

        console.log(config.body);

        userName = userName && userName.trim();

        if (userName === 'admin') {

            return loginInfo[0];
        }

        return loginInfo[1];
    },

    // logout
    logout: config => {

    },

    //getUserInfo
    getUserInfo: config => {

        console.log(config.body)

        let {token} = Utils.url.parseQueryString(config.url);

        if (token === 'abcdefghijklmn'){

            return userInfo[0];
        }
        return userInfo[1];
    }
}
