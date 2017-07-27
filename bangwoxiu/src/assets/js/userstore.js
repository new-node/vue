/**
 * Created by sd on 2017/7/21.
 */
/**
 * Created by jian on 2017/3/26.
 */
// 利用sesstionstorage存储简单注册信息~
const STORAGE_KEY = 'user-id'

let Store = {
  save: function (items) {
    return window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  },
  fetch: function () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '[]')
  }
}
export default Store
