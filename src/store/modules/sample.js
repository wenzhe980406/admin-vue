/**
 * 示例模块
 * @author 86
 * @date 2021/08/31 22:47
 */
const state = {
  sampleStateContent: 'Hello (From Module State)'
}
const mutations = {}
const actions = {}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
