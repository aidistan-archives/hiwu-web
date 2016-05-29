/* eslint-disable no-extend-native */

Object.defineProperty(Object.prototype, 'is_a', {
  value: function (type) {
    return !!type && ('[object ' + type + ']' === Object.prototype.toString.call(this))
  }
})

Object.defineProperty(Array.prototype, 'intersect', {
  value: function (arr) {
    let res = []
    for (let i in arr) {
      if (this.indexOf(arr[i]) > -1) res.push(arr[i])
    }
    return res
  }
})
