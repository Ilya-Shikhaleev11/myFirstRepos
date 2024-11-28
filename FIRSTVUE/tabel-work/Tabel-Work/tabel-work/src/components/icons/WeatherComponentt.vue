<template>
    <div v-if="weather.name">
        <h1>Погода в {{ weather.name }}</h1>
        <p>Температура: {{ weather.main.temp }} Цельсия </p>
    </div>
</template>