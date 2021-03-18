import { getAllTasks, setAllTasks } from '@/service/localStorage/task'

export default {
  state: {
    tasks: [],
  },
  mutations: {
    getAllTasks(state) {
      state.tasks = getAllTasks()
    },
    addTask(state, task) {
      state.tasks.push(task);
      setAllTasks(JSON.stringify(state.tasks))
    },
    updateTask(state, task) {
      const item = state.tasks.find(item => item.id === task.id)
      Object.assign(item, task)
      setAllTasks(JSON.stringify(state.tasks))
    },
    deleteTask(state, id) {
      const index = state.tasks.map(item => item.id).indexOf(id)
      state.tasks.splice(index, 1)
      setAllTasks(JSON.stringify(state.tasks))
    }
  },
}