<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <img class="logo d-none d-lg-block" :src="logovue" />
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul
                    class="navbar-nav d-flex justify-content-around flex-grow-1"
                >
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/musica"
                            >Musica y Artistas</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/lenguajes"
                            >Lenguajes de Programacion</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            logovue: require("@/assets/logo.png"),
        };
    },
};
</script>

<style scoped>
.router-link-exact-active,
.router-link-active {
    color: #fff;
    background-color: #4d8ff2;
    transition: background-color 0.1s ease;
}

.router-link-exact-active:hover,
.router-link-active:hover {
    background-color: #3768c2;
}

.logo {
    height: 50px;
    width: 50px;
    position: absolute;
    top: 10px;
    left: 10px;
}

</style>
