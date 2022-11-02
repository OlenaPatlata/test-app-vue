

// eslint-disable-next-line vue/multi-word-component-names
<template>
  <header>
    <h1>{{title}}</h1>
    <Button 
      @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'Close': 'Add task'"  
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from './Button'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  components: {
    Button
  },
  props: {
    title: String,
    showAddTask: Boolean
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: rgb(218, 247, 247);
}
</style>