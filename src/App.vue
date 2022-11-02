<template>
  <div class="container">
    <Header 
    @toggle-add-task="toggleAddTask" 
    title="Hi"
    :showAddTask="showAddTask"
    />
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    
    <Tasks 
    @toggle-reminder="toggleReminder" @delete-task="deleteTask" 
    :tasks="tasks"/>
  </div>
  

</template>

<script>

import AddTask from './components/AddTask.vue'
import Header from './components/Header'
import Tasks from './components/Tasks'


export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data(){
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask(){
      this.showAddTask=!this.showAddTask
    },
    addTask(task){
      this.tasks=[...this.tasks, task]
    },
    deleteTask(id){
      if(confirm('Are you sure?')){
        this.tasks = this.tasks.filter((task) => task.id!== id)
      }
    },
    toggleReminder(id){
      this.tasks = this.tasks.map((task)=>task.id===id ? {...task, reminder: !task.reminder} : task)
    }
  },
  created(){
    this.tasks=[
      {
        id: 1,
        text: 'Dor1',
        day: "12/02",
        reminder: true,
      },
      {
        id: 2,
        text: 'Dor2',
        day: "13/02",
        reminder: true,
      },
      {
        id: 3,
        text: 'Dor3',
        day: "14/02",
        reminder: false,
      },
    ]
  }
}
</script>





<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  border-radius: 10px;
  border: 1px solid red;
}
</style>
