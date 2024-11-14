<template>
    <div>
        <h1>Калькулятор</h1>
        <div>
            {{ dispplayValue }}
        </div>
        <div>
            <button v-for="btn in buttons" :key="btn" @click="handleButtonClick(btn)">
                    {{ btn }} 
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name:'Calculator',
    setup(props, ctx) {
        const dispplayValue = ref<string>('0')
        const buttons = ref<string[]>([
            '7','8','9','/',
            '4','5','6','*',
            '1','2','3','-',
            '0','.','=','+',
        ])
        let currentInput = ref<string>('')
        let operator = 
    },)
