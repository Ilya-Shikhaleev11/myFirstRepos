<template>
  <div class="About">
    <h1>Шихалеев Илья Андреевич</h1>
    <h2>Родился в Белой Холунице</h2>
  </div>
  <UserForm></UserForm>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from "vue-router";
import  UserForm from "../components/UserForm.vue"
export default defineComponent(
    {
        name: 'About',
        components:{UserForm},
    },            
            
);
</script>
