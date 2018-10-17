/*
* author:github.com/huangshuwei
* des:定义返回的数据结果
* create date:2018-7-3
* modify date:2018-7-9
*/


/*
* code 参考 https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81
* 0~1000 非业务状态
* 1000~2000 业务状态
* */
const RESPONSE_code = [
    {code: 200, codeMessage: '响应成功'},
    {code: 204, codeMessage: '服务器成功处理了请求，但没有返回任何内容'},

    {code: 401, codeMessage: '权限验证失败'},
    {code: 404, codeMessage: '请求未找到'},
    {code: 408, codeMessage: '请求超时'},

    {code: 500, codeMessage: '服务器异常'},

    {code: 0, codeMessage: '未知异常'},
]

/*
* 获取当前状态信息
* */
function getCodeInfo(code){

    const codeItem =  RESPONSE_code.find(item=>item.code === code);

    if (!codeItem){
        console.log('getCodeInfo::',`can not find response code ${code}.`)
    }
    return codeItem;
}

export default getCodeInfo;