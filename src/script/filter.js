/*
 * @Author: kenter.zheng
 * @Date: 2019-08-01 14:20:57
 * @Last Modified by: kenter.zheng
 * @Last Modified time: 2019-08-01 16:32:19
 */
import moment from 'moment'

/**
 * 日期格式化
 * @param {date} date --日期格式
 * @param {string} format --格式化格式，默认YYYY-MM-DD'
 */
const date = function (date, format) {
  format = format || 'YYYY-MM-DD'
  return date ? moment(date).format(format) : ''
}

const addressTag = function (tag) {
  let result = ''
  switch (tag) {
    case 1:
      result = '公司'
      break
    case 2:
      result = '家'
      break
    case 3:
      result = '学校'
      break
    default:
      break
  }
  return result
}

export default {
  date,
  addressTag
}
