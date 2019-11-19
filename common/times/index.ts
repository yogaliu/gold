/**
 * @description 时间类工具
 */

/**
 * @method formatDate
 * @author 01376337
 * @description  日期格式化
 * @param {Date} [date] 格式化的时间对象，默认当前时间
 * @param {string} [formatter] 转换格式,默认'YY-MM-DD'(年-月-日)
 * @returns {string} 返回日期格式化后的字符串
 */
export const formatDate:(date: Date, formatter: string)=>string = (date: Date = new Date(), formatter: string = 'YY-MM-DD'):string => {
  let ret;
  let opt: any = {
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

/**
 * 获取一个月的最大天数
 * @method monthLastDay
 * @param {Date} date 格式化的时间对象
 * @returns {number} 返回参数月份对应的最大天数
 */
export const monthLastDay = (date: Date): number => {
  //  天数
  let num: number = 0;

  if (typeof date !== 'object') {
    return num;
  }

  //  获取参数对应的年份
  let curYear: number = date.getFullYear();
  //  获取参数对应的月份
  let curMonth: number = date.getMonth();
  //  当月最后一天
  let lastDate: Date = new Date(curYear, curMonth + 1, 0);
  //  获取天数
  num = lastDate.getDate();

  return num;
};

/**
 * @method yearWeek
 * @author liushudong
 * @description  获取指定日期是一年中的第几周
 * @param {Date} [date] 格式化的时间对象，默认当前时间
 * @returns {number} 返回对应第几周的数字 默认是第一周是1
 */
export const yearWeek = (date: Date = new Date()): number => {
  const milliseconds = 24 * 3600000;
  let start = new Date(date.getFullYear() + '/01/01');
  let offset = start.getDay() > 0 ? (8 - start.getDay()) : 1;
  return Math.abs(Math.ceil((date.getTime() - start.getTime() - offset * milliseconds) / milliseconds / 7)) + 1;
};

/**
 * @method monthWeek
 * @author liushudong
 * @description  获取指定日期是一个月中的第几周
 * @param {Date} [date] 格式化的时间对象，默认当前时间
 * @returns {number} 返回对应第几周的数字
 */
export const monthWeek = (date: Date = new Date()): number => {
  return Math.ceil(
    (date.getDate() + 6 - date.getDay()) / 7
  );
};

/**
 * @method afterDay
 * @author liushudong
 * @description  获取指定时间的后几天日期
 * @param {Date} [date] 格式化的时间对象，默认当前时间
 * @param {number} [afterDayNum] 指定时间向后几天的具体天数,默认7
 * @param {string} [formatter] 是否格式化返回的时间对象为字符串,默认空,参数见formatDate函数
 * @returns {Array<any>} 返回指定时间的后几天日期的数组
 */
export const afterDay = (date: Date = new Date(), afterDayNum: number = 7, formatter: string): Array<any> => {
  let dateArray = [];
  let dateTemp;
  for (let i = 1; i <= afterDayNum; i++) {
    let dateArg = new Date(date.valueOf());
    dateTemp = new Date(dateArg.setDate(dateArg.getDate() + i));
    if (formatter) {
      dateTemp = formatDate(dateTemp, formatter);
    }
    dateArray.push(dateTemp);
  }
  return dateArray;
};

/**
 * @method beforeDay
 * @author liushudong
 * @description  获取指定时间的前几天日期
 * @param {Date} [date] 格式化的时间对象，默认当前时间
 * @param {number} [afterDayNum] 指定时间向前几天的具体天数,默认7
 * @param {string} [formatter] 是否格式化返回的时间对象为字符串,默认空,参数见formatDate函数
 * @returns {Array<any>} 返回指定时间的前几天日期的数组
 */
export const beforeDay = (date: Date = new Date(), afterDayNum: number = 7, formatter: string): Array<any> => {
  let dateArray = [];
  let dateTemp;
  for (let i = afterDayNum; i >= 1; i--) {
    let dateArg = new Date(date.valueOf());
    dateTemp = new Date(dateArg.setDate(dateArg.getDate() - i));
    if (formatter) {
      dateTemp = formatDate(dateTemp, formatter);
    }
    dateArray.push(dateTemp);
  }
  return dateArray;
};

/**
 * @method beforeMonth
 * @author liushudong
 * @description  获取指定时间的前几月日期
 * @param {Date} [date] 格式化的时间对象，默认当前时间
 * @param {number} [monthNum] 指定时间向前几月的具体天数,默认1
 * @param {string} [formatter] 是否格式化返回的时间对象为字符串,默认空,参数见formatDate函数
 * @returns {any} 未指定formatter参数则传出来Date对象,指定formatter传出字符串
 */
export const beforeMonth = (date: Date = new Date(), monthNum: number = 1, formatter: string): any => {
  let offset = Math.abs(monthNum);
  let year = date.getFullYear(); // 获取当前日期的年份
  let month = date.getMonth(); // 获取当前日期的月份
  let day = date.getDate(); // 获取当前日期的日
  let year2 = year;
  let month2 = month - offset;
  if (month2 <= 0) {
    year2 = Math.floor((year2 - (month2 / 12 === 0 ? 1 : Math.abs(month2) / 12)));
    month2 = 12 - (Math.abs(month2) % 12);
  }
  let day2 = day;
  let days2 = new Date(year2, month2 + 1, 0).getDate();
  if (day2 > days2) {
    day2 = days2;
  }
  let outDate = new Date(year2, month2, day2);
  if (formatter) {
    return formatDate(outDate, formatter);
  }
  return outDate;
};

/**
 * @method afterMonth
 * @author liushudong
 * @description  获取指定时间的后几月日期
 * @param {Date} [date] 格式化的时间对象，默认当前时间
 * @param {number} [monthNum] 指定时间向后几月的具体天数,默认1
 * @param {string} [formatter] 是否格式化返回的时间对象为字符串,默认空,参数见formatDate函数
 * @returns {any} 未指定formatter参数则返回Date对象,指定formatter返回格式化好的字符串
 */
export const afterMonth = (date: Date = new Date(), monthNum: number = 1, formatter: string): any => {
  let offset = Math.abs(monthNum);
  let year = date.getFullYear(); // 获取当前日期的年份
  let month = date.getMonth(); // 获取当前日期的月份
  let day = date.getDate(); // 获取当前日期的日
  let year2 = year;
  let month2 = month + offset;
  if (month2 > 12) {
    year2 = Math.floor(year2 + (month2 / 12 === 0 ? 1 : month2 / 12));
    month2 = month2 % 12;
  }
  let day2 = day;
  let days2 = new Date(year2, month2 + 1, 0).getDate();
  if (day2 > days2) {
    day2 = days2;
  }
  let outDate = new Date(year2, month2, day2);
  if (formatter) {
    return formatDate(outDate, formatter);
  }
  return outDate;
};

/**
 * @method beforeYear
 * @author liushudong
 * @description  获取指定时间的前几年日期
 * @param {Date} [date] 格式化的时间对象，默认当前时间
 * @param {number} [monthNum] 指定时间向前几年的具体天数,默认1
 * @param {string} [formatter] 是否格式化返回的时间对象为字符串,默认空,参数见formatDate函数
 * @returns {any} 未指定formatter参数则返回Date对象,指定formatter返回格式化好的字符串
 */
export const beforeYear = (date: Date = new Date(), yearNum: number = 1, formatter: string): any => {
  return beforeMonth(date, yearNum * 12, formatter);
};

/**
 * @method afterYear
 * @author liushudong
 * @description  获取指定时间的后几年日期
 * @param {Date} [date] 格式化的时间对象，默认当前时间
 * @param {number} [monthNum] 指定时间向后几年的具体天数,默认1
 * @param {string} [formatter] 是否格式化返回的时间对象为字符串,默认空,参数见formatDate函数
 * @returns {any} 未指定formatter参数则返回Date对象,指定formatter返回格式化好的字符串
 */
export const afterYear = (date: Date = new Date(), yearNum: number = 1, formatter: string): any => {
  return afterMonth(date, yearNum * 12, formatter);
};
export default {
  formatDate,
  monthLastDay,
  yearWeek,
  monthWeek,
  afterDay,
  beforeDay,
  afterMonth,
  beforeMonth,
  afterYear,
  beforeYear
};
