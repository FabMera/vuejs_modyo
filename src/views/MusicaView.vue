<template>
    <h1>Musica y Artistas!</h1>
    <SelectMusic @categoria-seleccionada="actualizarCategoria" />
    <div class="row d-flex justify-content-center align-items-center mb-4">
        <CardMusic
            v-for="item in elementosFiltrados"
            :key="item.meta.uuid"
            :item="item"
        />
    </div>
</template>

<script>
import SelectMusic from "@/components/SelectMusic.vue";
import { mapActions, mapState } from "vuex";
import CardMusic from "../components/CardsMusic.vue";

export default {
    name: "MusicaView",
    data() {
        return {
            categoriaSeleccionada: "",
        };
    },
    mounted() {
        this.getMusica();
    },
    components: {
        CardMusic,
        SelectMusic,
    },
    computed: {
        ...mapState("musica", ["musica"]),
        elementosFiltrados() {
            if (!this.categoriaSeleccionada) {
                return this.musica;
            }
            return this.musica.filter((musica) => {
                return musica.meta.category_name === this.categoriaSeleccionada;
            });
        },
    },
    methods: {
        ...mapActions("musica", ["getMusica"]),
        actualizarCategoria(categoria) {
            this.categoriaSeleccionada = categoria;
        },
    },
};
</script>

<style lang="scss" scoped></style>
