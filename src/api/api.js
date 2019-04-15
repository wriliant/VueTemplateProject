/*
 * @Author: wriliant 
 * @Date: 2019-04-11 11:26:44 
 * @Description:  api接口统一管理
 * @Last Modified by: wriliant
 * @Last Modified time: 2019-04-11 14:09:19
 */



import { get,post } from './http.js';


// xxx请求接口
const getPersonInfoAPI = param => post('/xxx/xxx', param);

 export { 
     getPersonInfoAPI
 }