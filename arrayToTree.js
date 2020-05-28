// 对象数组深copy
const copy = array => {
  return array.map(item => {
    return { ...item }
  })
}
//  数组转键值对对象
const toObj = array => {
  const arr = copy(array)
  const obj = {}
  arr.forEach(item => (obj[item.id] = item))
  return obj
}
/** 数组转树
 *
 * @param {*} array 利用数组和对象的相互吸引
 * @param {*} pId
 * @param {*} pIdName
 */
export const toTree = (array, pId, pIdName) => {
  const obj = toObj(array)
  const arr = Object.values(obj)
  const tree = []
  arr.forEach(item => {
    const itemPId = item[pIdName]
    if (itemPId === pId) {
      tree.push(item)
    } else if (obj[itemPId].children) {
      obj[itemPId].children.push(item)
    } else {
      obj[itemPId].children = [item]
    }
  })
  return tree
}
/** 数组转树(JOSN)
 *
 * @param {*} array
 * @param {*} pId
 * @param {*} pIdName
 */
export const toJsonTree = (array, pId, pIdName) => {
  const obj = toObj(array)
  const json = {}
  const arr = Object.values(obj)
  arr.forEach(item => {
    const itemPId = item[pIdName]
    if (itemPId === pId) {
      json[pId] = item
    } else if (obj[itemPId].children) {
      obj[itemPId].children.push(item)
    } else {
      obj[itemPId][item.id] = item
    }
  })
  return json
}
/** 递归方案 复杂度高
 *
 * @param {*} array 数组
 * @param {*} pId 根节点
 * @param {*} pIdName 父节点字段名
 */
export const rsToTree = (array, pId, pIdName) => {
  const loop = pId => {
    const tree = []
    array.forEach(item => {
      if (item[pIdName] === pId) {
        item.children = loop(item.id)
        tree.push(item)
      }
    })
    return tree
  }
  return loop(pId)
}
