<template>
    <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
            <img
                :src="lenguaje.fields.imagen"
                class="card-img-top"
                :alt="lenguaje.fields.alt - imagen"
            />
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">{{ lenguaje.fields.nombre }}</h5>
                <p class="card-text">{{ lenguaje.fields.descripcion }}</p>
                <a
                    :href="lenguaje.fields.documentacion"
                    target="_blank"
                    class="btn btn-primary"
                    >Ver mas</a
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cards",
    props: {
        lenguaje: {
            type: Object,
            required: true,
        },
    },
};
</script>
