<template>
    <div>
        <h1>форма обратной связи</h1>
        <form @submit.prevent="submitForm">
    
            <div>
                <label for="name">Имя:</label>
                <input type="text" v-model="user.name" required />
            </div>
            <div>
                <label for="email">Электронная почта:</label>
                <input type="email" v-model="user.email" required />
            </div>
            <div>
                <label for="age">Возраст:</label>
                <input type="number" v-model="user.age" required />
            </div>
            <div>
                <label for="text">Номер телефона:</label>
                <input type="number" v-model="user.text" required />
            </div>
            <button tupe="submit">Подтвердить</button>
        </form>
        <div v-if="submitted">
            <h2>Полученная информация:</h2>
            <p>Иия: {{ user.name }}</p>
            <p>Эл. почта:  {{ user.email }}</p>
            <p>Возраст: {{ user.age }}</p>
            <p>Номер телефона:{{ user.text }} </p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent(
    {
        name: "userform",
        setup()
        {
            const user = ref
            ({
                name:'',
                email: '',
                age: null as number | null,
                text:'',
            });
            const submitted = ref(false)
            const submitForm = () =>
            {
                submitted.value =true;
            };
            return {
                user,
                submitted,
                submitForm,
            };
        },       
    }
    );
</script>



