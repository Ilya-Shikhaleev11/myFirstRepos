<template>
    <div>
        <h1>Периодическая таблица элементов</h1>
    
            <div>
                <tr v-for="(task, index) in tasks" :key="index">{{ task.text }}</tr>
             </div>
            
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent(
    {
        name: "Tabel",
        components:
        {
       
         return {

            tasks:
                [
                    {text:"текст"},
                    {text:"текст1"},
                ]
            };
        },       
    }
    );
</script>