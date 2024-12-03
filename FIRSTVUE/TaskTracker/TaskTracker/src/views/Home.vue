<template>
    <div>
    <h1>Планер задач</h1>
    <TaskList :tasks="tasks" @toggle="toggleTask" />
    </div>
   </template>
   <script lang="ts">
   import { defineComponent } from 'vue';
   import { Task } from '../models/Task';
   import TaskList from '../components/TaskList.vue';
   import { TaskStore } from '../services/TaskStore';
   export default defineComponent({
    components: { TaskList },
    data() {
    return {
    taskStore: new TaskStore(),
    newTaskTitle: '',
    };
    },
    computed: {
    tasks(): Task[] {
    return this.taskStore.getTasks();
    },
    },
    methods: {
    toggleTask(task: Task) {
    this.taskStore.toggleTask(task.id);
    },
    },
   });
   </script>
   