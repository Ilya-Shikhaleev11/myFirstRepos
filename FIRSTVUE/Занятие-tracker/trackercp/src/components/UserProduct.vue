<!-- <template>
    <div>
        <h1>Интернет магазин</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Название:</label>
                <input type="text" v-model="user.name" required/>
            </div>
            <div>
                <label for="text">Описание:</label>
                <input type="text" v-model="user.text" required/>
            </div>
            <div>
                <label for="price">Цена:</label>
                <input type="number"  v-model="user.price" required/>
            </div>
            <button tupe="submit">Подтвердить</button>  
        </form>
        <div v-if="submitted">
            <h2>Полученная информация:</h2>
            <p>Название:{{user.name}} </p>
            <p>Описание:{{user.text}}</p>
            <P>Цена:{{ user.price }}</P>
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
                text: '',
                price: null as number | null,
                
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
</script> -->
    