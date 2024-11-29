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
        let operator = ref<string | null>(null)
        let previusInput = ref<string | null>(null) 
        
        const handleButtonClick = (btn:string)=>
    {
        if(btn ==='=')
        {
            if (previusInput.value && operator.value)
            {
                dispplayValue.value = String(calculate(previusInput.value,currentInput.value,operator.value));
                resetCalculator();
            } 
        }
        else if (['+','-','*','/'].includes(btn))
        {
            if (currentInput.value)
            {
                if (previusInput.value)
            {
                previusInput.value = String(calculate(previusInput.value,currentInput.value,operator.value))
            }
            else
            {
                previusInput.value = currentInput.value
            }
        }
        else
        {
            operator.value = btn;
            dispplayValue.value = currentInput.value
        }
    }
};
const resetCalculator = () =>
{
    currentInput.value = '';
    operator.value = null;
};
const calculate = (a: string, b: string, op: string) =>
{
    const numA = parseFloat(a);
    const numB = parseFloat(b)
    switch (op)
    {
        case '+' :
            return numA+numB;
        case '-' :
            return numA-numB;
        case '*' :
            return numA*numB;
        case '/' :
            return numA/numB;
    }
}  
