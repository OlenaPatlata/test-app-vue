<template>
  <div :key="task.id" v-for="task in tasks" class="task">
    <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task" />
  </div>
</template>

<script>

import Task from './Task.vue';
export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tasks",
  components: {
    Task
  },
  props: {
    tasks: Array
  },
  emits: ['delete-task', 'toggle-reminder'],

  
}
</script>

<style>
.task{
  color: blue;
  cursor: pointer;
}
.task:hover{
  color: brown;
}
</style>