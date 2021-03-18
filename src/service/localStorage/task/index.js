export const getAllTasks = () => {
  if (localStorage.getItem('tasks') == null) {
    let tasks = [
      {
        id: 1,
        description: 'Save your tasks locally!',
        status: 'done',
      },
      {
        id: 2,
        description: 'You can create new tasks by clicking in the button above!',
        status: 'paused',
      },
      {
        id: 3,
        description: 'To delete a task just click in the trash!',
        status: 'in_progress',
      },
      {
        id: 4,
        description: 'To edit a task just click in the pencil!',
        status: 'done',
      },
    ]
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  return JSON.parse(localStorage.getItem('tasks'))
}

export const setAllTasks = (tasks) => {
  localStorage.setItem('tasks', tasks)
}