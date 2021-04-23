import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import task from "@/store/task"

export default new Vuex.Store({
  modules: {task: task}
})
