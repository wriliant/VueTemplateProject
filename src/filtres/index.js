/*
 * @Author: wriliant 
 * @Date: 2019-04-11 11:23:59 
 * @Description:  项目公共过滤器
 * @Last Modified by: wriliant
 * @Last Modified time: 2019-04-11 11:25:47
 */

import moment from 'moment'
import Vue from 'vue'

Vue.filter('formatTime', function (value, formatString = 'YYYY-MM-DD') {
    return moment(value).format(formatString);
})

export {
    formatTime
}