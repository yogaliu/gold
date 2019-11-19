/**
 * @method formatDate
 * @author 01376337
 * @description  日期格式化
 * @param {Date} [date] 格式化的时间对象，默认当前时间
 * @param {string} [formatter] 转换格式,默认'YY-MM-DD'(年-月-日)
 * @returns {string} 返回日期格式化后的字符串
 */
export const formatDate = (date = new Date(), formatter = 'YY-MM-DD') => {
    let ret;
    let opt = {
        'Y+': date.getFullYear().toString(),
        'M+': (date.getMonth() + 1).toString(),
        'D+': date.getDate().toString(),
        'h+': date.getHours().toString(),
        'm+': date.getMinutes().toString(),
        's+': date.getSeconds().toString()
    };
    for (let k in opt) {
        ret = new RegExp('(' + k + ')').exec(formatter);
        if (ret) {
            formatter = formatter.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')));
        }
    }
    return formatter;
};

export default {
    formatDate
}