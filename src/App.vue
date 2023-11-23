<template>
    <NavBar />
    <h1 class="text-center">Desafios con Modyo CLI!</h1>
    <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
    name: "App",
    components: {
        NavBar,
    },
};
</script>

<style lang="scss" scoped></style>
