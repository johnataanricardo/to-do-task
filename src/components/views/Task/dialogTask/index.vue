<template>
  <v-dialog v-model="dialog.show" max-width="600">
    <v-card>
      <!-- Dialog Title -->
      <v-card-title class="headline">
        Add Task
      </v-card-title>
      <!-- Task -->
      <div class="dialog-task">
        <v-form ref="form" v-model="valid" lazy-validation>
          <!-- Status Task -->
          <v-select v-model="task.status" :items="items.data" item-text="text" 
            item-value="value" label="Status" outlined :rules="rules.status"/>
          <!-- Description -->
          <v-text-field v-model="task.description" label="Description" 
            outlined :rules="rules.description" counter="100"/>
        </v-form>
      </div>
      <!-- Dialog Actions -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="closeDialog">
          Cancel
        </v-btn>
        <v-btn color="primary" @click="saveTask">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import status from '@/utils/task/status'

export default {
  name: 'DialogFilters',
  data() {
    return {
      valid: false,
      text: '',
      items: status,
      task: {},
      rules: {
        status: [
          v => !!v || 'Status is required!'
        ],
        description: [
           v => {
            if (v) {
              return v.length <= 100 || 'Description must be less than 100 characters!'
            } else {
              return 'Description is required!'
            }
          }
        ],
      }
    }
  },
  computed: {
    dialog() {
      this.task = {...this.$store.state.GlobalModules.dialogTask.task}
      return this.$store.state.GlobalModules.dialogTask
    }
  },
  methods: {
    closeDialog() {
      this.$store.commit('closeDialogTask')
      this.$refs.form.reset()
    },
    saveTask() {      
      if (this.$refs.form.validate()) {
        if (this.task.id > 0) {          
          this.$store.commit('updateTask', {...this.task})
        } else {
          this.task.id = new Date().getTime()
          this.$store.commit('addTask', {...this.task})
        }
        this.$store.commit('openSnackbar', {message: 'Task saved successfully!', timeout: 6000})
        this.closeDialog()
      }
    },
  }
}
</script>

<style scoped src='./style/index.css'/>