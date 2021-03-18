<template>
  <v-layout wrap>
    <v-row justify="center" class="body">
      <!-- Add Task -->
      <v-btn block large elevation="2" color="primary" style="margin-bottom: 30px" @click="addTask">
        <v-icon left large>
          mdi-plus
        </v-icon>
        Add Task
      </v-btn>
      <!-- Data Table -->
      <v-data-table v-if="tasks.length > 0" :headers="headers" :items="tasks" 
        hide-default-footer class="elevation-1" style="min-width: 100%">
        <template v-slot:body="{ items }">
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>{{ item.description }}</td>
              <td>{{ getStatusText(item.status) }}</td>
              <td class="text-center">
                <v-btn icon color="error" @click="deleteTask(item.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
                <v-btn icon color="primary" @click="editTask(item)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-row>
  </v-layout>
</template>

<script>
import status from '@/utils/task/status'

export default {
  name: 'Home',
  data() {
    return {
      headers: [
        { text: 'Task Description', value: 'description', sortable: false, width: '60%' },
        { text: 'Status', value: 'status', width: '20%' },
        { text: 'Actions', value: 'id', align: 'center', sortable: false, width: '20%' },
      ]      
    }
  },
  computed: {
    tasks() {
      return this.$store.state.GlobalModules.tasks.tasks
    }
  },
  methods: {
    getStatusText(data) {
      return status.data.find(item => item.value === data).text
    },
    addTask() {
      this.$store.commit('openDialogTask')
    },
    editTask(task) {
      this.$store.commit('openDialogTask', task)
    },
    deleteTask(id) {
      this.$store.commit('deleteTask', id)
      this.$store.commit('openSnackbar', {message: 'Task deleted successfully!', timeout: 6000})
    }
  }
}
</script>