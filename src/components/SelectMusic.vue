<template>
    <select
        class="form-select w-50 mx-auto mb-3"
        aria-label="Default select example"
        v-model="categoriaSeleccionada"
        @change="optionSelectedMusic"
    >
        <option value="">Selecciona una categoria</option>
        <option :key="categoria" v-for="categoria in categoriasMusica">
            {{ categoria }}
        </option>
    </select>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "SelectMusic",
    data() {
        //Declaracion de la propiedad categoriaSeleccionada del valor del select v-model
        return {
            categoriaSeleccionada: "",
        };
    },
    mounted() {
        //llamado a la accion getCategoriasMusica
        this.getCategoriasMusica();
    },
    computed: {
        //mapeo de la propiedad categoriasMusica del state
        ...mapState('musica',["categoriasMusica"]),
    },
    methods: {
        //mapeo de la accion getCategoriasMusica
        ...mapActions('musica',["getCategoriasMusica"]),
        //Envio de datos al padre,el evento se llama categoria-seleccionada
        //y el valor que se envia es categoriaMusicSeleccionada que es el valor del select.
        optionSelectedMusic() {
            this.$emit(
                "categoria-seleccionada",
                this.categoriaSeleccionada || null
            );
        },
    },
};
</script>

<style lang="scss" scoped></style>
