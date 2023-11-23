<template>
    <div class="my-5">
        <div class="row justify-content-center mb-4">
            <div class="col-12 col-md-8 text-center">
                <h2 class="text-dark">Conoce los Lenguajes de Programacion</h2>
                <h3 class="text-primary text-bold">
                    Mas usados..por los Programadores
                </h3>
            </div>
        </div>
    </div>
    <div>
        <Select @categoria-seleccionada="actualizarCategoria" />
    </div>
    <div class="row">
        <Cards
            v-for="lenguaje in elementosFiltrados"
            :key="lenguaje.meta.uuid"
            :lenguaje="lenguaje"
        />
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Cards from "../components/Cards.vue";
import Select from "../components/Select.vue";

export default {
    name: "LenguajesView",
    data() {
        return {
            //esta propiedad recibe el valor del select y lo envia al componente hijo
            categoriaSeleccionada: "",
        };
    },
    mounted() {
        this.getLenguajes();
    },
    components: {
        Cards,
        Select,
    },
    computed: {
        ...mapState("lenguajes", ["lenguajes"]),
        elementosFiltrados() {
            if (!this.categoriaSeleccionada) {
                return this.lenguajes;
            }
            return this.lenguajes.filter((lenguaje) => {
                return (
                    lenguaje.meta.category_name === this.categoriaSeleccionada
                );
            });
        },
    },

    methods: {
        ...mapActions("lenguajes", ["getLenguajes"]),
        actualizarCategoria(categoria) {
            this.categoriaSeleccionada = categoria;
        },
    },
};
</script>
