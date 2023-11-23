<template>
    <select
        class="form-select w-50 mx-auto mb-3"
        aria-label="Default select example"
        v-model="categoriaSeleccionada"
        @change="optionSelectedLenguaje"
    >
        <option value="">Selecciona una categoria</option>
        <option :key="categoria" v-for="categoria in categoriasLenguajes">
            {{ categoria }}
        </option>
    </select>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "Select",
    data() {
        //Declaracion de la propiedad categoriaSeleccionada del valor del select v-model
        return {
            categoriaSeleccionada: "",
        };
    },
    mounted() {
        //llamado a la accion getCategoriasLenguajes
        this.getCategoriasLenguajes();
    },
    computed: {
        //mapeo de la propiedad categoriasLenguajes del state
        ...mapState("lenguajes", ["categoriasLenguajes"]),
    },
    methods: {
        //mapeo de la accion getCategoriasLenguajes
        ...mapActions("lenguajes", ["getCategoriasLenguajes"]),
        //Envio de datos al padre,el evento se llama categoria-seleccionada
        //y el valor que se envia es categoriaLenguajeSeleccionado que es el valor del select.
        optionSelectedLenguaje() {
            this.$emit(
                "categoria-seleccionada",
                this.categoriaSeleccionada || null
            );
        },
    },
};
</script>
