<template>
    <div>
    <h2>Список товаров</h2>
    <ul>
    <TaskItem
    v-for="task in tasks"
    :key="task.id"
    :task="task"
    @toggle="toggleTask"
    />
    </ul>
    </div>
   </template>
   <script lang="ts">
   import { defineComponent } from 'vue';
   import { Task } from '@/models/Task';
   import TaskItem from './TaskItem.vue';
   export default defineComponent({
    components: { TaskItem },
    props: {
    tasks: {
    type: Array as () => Task[],
    required: true,
    },
    },
    methods: {
    toggleTask(task: Task) {
    task.completed = !task.completed;
    },
    },
   });
   </script>
 