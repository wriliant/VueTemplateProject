/*
 * @Author: wriliant 
 * @Date: 2019-04-11 11:26:56 
 * @Description:  axios配置，请求拦截，及get，post封装
 * @Last Modified by: wriliant
 * @Last Modified time: 2019-04-11 11:44:51
 */



import axios from 'axios'
import store from '@/store/index'
import router from '@/router'
import {
    Message
} from 'element-ui'
// 引入qs模块，用来序列化post类型的数据
import QS from "qs";
//导入公用方法
import utils from '@/utils/utils.js'
// axios 基本配置
// 设置十秒提示请求超时
axios.defaults.timeout = 10000;
// axios发请求默认不允许携带cookie,我们需要手动设置允许携带cookie
axios.defaults.withCredentials = true;
// post请求的时候，加上一个请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//识别主机名选择axios请求地址
if (location.hostname === 'xxx.xxx.xxx.xxx') {
    axios.defaults.baseURL = process.env.API_PATH_DEV
    // axios.defaults.baseURL = process.env.API_PATH_TEST
} else if (location.hostname === 'xxx.xxx.xxx.xxx') {
    axios.defaults.baseURL = process.env.API_PATH_PROD
} else if (location.hostname === 'xxx.xxx.xxx.xxx') {
    axios.defaults.baseURL = process.env.API_PATH_DEV
} else if (location.hostname === 'localhost') {
    axios.defaults.baseURL = process.env.API_PATH_DEV
}
axios.defaults.mapurl = process.env.MAP_BASE_URL;
// export {mapurl};

// axios请求拦截器
axios.interceptors.request.use(function (config) {

    return config;
}, function (error) {

    return Promise.reject(error);
});


// axios响应拦截器
axios.interceptors.response.use(function (response) {
    console.log('------http响应结果开始------');
    console.log(response);
    console.log('------http响应结果结束-----');
    return response;
}, function (error) {
    if (error.message) {
        Message.error(error.message);
    }
    console.log('------错误响应结果开始------');
    console.log(error);
    console.log('------错误响应结果结束------');
    return Promise.reject(error);
});




/**
 * 对get方法进行封装
 * @param {string} url [请求地址]
 * @param {object} params [请求参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    })
}

/**
 * 对post方法进行封装
 * @param {string} url [请求地址]
 * @param {objec} params [请求参数] 
 */
export function post(url, params) {
    // console.log( QS.stringify(params));
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err.data);
            })
    })
}

export default axios
