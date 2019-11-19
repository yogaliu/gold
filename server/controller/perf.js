const axios = require('axios')

// 获取首页左边列表
const getIndexLeftList = async (ctx) => {
    return axios.post("https://extension-ms.juejin.im/resources/gold",ctx.request.body).then(res=>{
     return ctx.response.body = res.data
 })
}

// 获取首页右边的列表
const getIndexRightList = async (ctx) => {
    return axios.post("https://extension-ms.juejin.im/resources/github",ctx.request.body).then(res=>{
     return ctx.response.body = res.data
 })
}

module.exports = {
    getIndexLeftList,
    getIndexRightList,
}