export default {
  state: {
    show: false,
    task: {
      id: 0,
      description: '',
      status: '',
    }
  },
  mutations: {
    openDialogTask(state) {
      state.show = true
    },
    openDialogTask(state, task) {
      state.show = true
      state.task = task
    },
    closeDialogTask(state) {
      state.show = false
      state.task = {
        id: 0,
        description: '',
        status: '',
      }  
    }
  }
}