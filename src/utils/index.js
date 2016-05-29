import './native'
import { uuidFast as uuid } from './uuid'

// Methods end with "_d" are destructive ones.
let utils = { uuid,
  extend: function () {
    let res = {}

    for (let obj of arguments) {
      for (let k in obj) {
        res[k] = obj[k]
      }
    }

    return res
  },
  extend_d: function () {
    let res = Array.from(arguments).shift()

    for (let obj of arguments) {
      for (let k in obj) {
        res[k] = obj[k]
      }
    }

    return res
  },
  mkpasswd: function (length) {
    let charset = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    let maximum = charset.length
    let pwd = ''

    length = length || 32
    for (let i = 0; i < length; i++) {
      pwd += charset.charAt(Math.floor(Math.random() * maximum))
    }
    return pwd
  },
  setCookie: function (name, value, expireDate) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expireDate)
    document.cookie = name + '=' + escape(value) + ((expireDate === null) ? '' : ';expires=' + exdate.toGMTString())
  },
  getCookie: function (name) {
    if (document.cookie.length > 0) {
      var start = document.cookie.indexOf(name + '=')
      if (start !== -1) {
        start = start + name.length + 1
        var end = document.cookie.indexOf(';', start)
        if (end === -1) end = document.cookie.length
        return unescape(document.cookie.substring(start, end))
      }
    }
    return null
  }
}

export default {
  install: function (Vue) {
    Vue.utils = utils

    Object.defineProperty(Vue.prototype, '$utils', {
      value: utils
    })
  }
}
