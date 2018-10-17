import Mock from 'mockjs'

/*import example from './example'*/
import login from './login'

// articleList info tab
/*Mock.mock(/\/web\/webapi/, 'get', articleList.getArticleList)*/
//Mock.mock(/\/web\/webapi\?type=newList&count=20&nrType=45/, 'get', articleList.getArticleList)


// 登录相关
Mock.mock(/\/auth\/login/, 'post', login.login)

Mock.mock(/\/login\/getUserInfo/, 'get', login.getUserInfo)

export default Mock

