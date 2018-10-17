
/**
 * 扩展Date对象，实现Format方法
 * @method Format
 * @param {Date} currentDate 当前时间
 * @param {String} formatStr 日期格式
 * @example
 *     > var d=new Date(2020,2-1,3);
 *     >> d.Format("yyyy-MM-dd")="2020-02-03"
 *     >> d.Format("yyyy:MM-dd")="2020:02-03"
 */
function formatDate(currentDate,formatStr) {

    // 时间转换失败直接返回原数据
    if(!(currentDate instanceof Date)){

        try {
            currentDate = new Date(currentDate.replace(/-/g, "/")); // 解决 safari 下转换出错的问题
        } catch (e) {
            console.warn('utils.time.formatDate::',e);
            return currentDate;
        }
    }

    var o = {
        "M+": currentDate.getMonth() + 1,                 //月份
        "d+": currentDate.getDate(),                    //日
        "h+": currentDate.getHours(),                   //小时
        "m+": currentDate.getMinutes(),                 //分
        "s+": currentDate.getSeconds(),                 //秒
        "q+": Math.floor((currentDate.getMonth() + 3) / 3), //季度
        "S": currentDate.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(formatStr))
        formatStr = formatStr.replace(RegExp.$1, (currentDate.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(formatStr)) {
            formatStr = formatStr.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return formatStr;
};

export {formatDate}