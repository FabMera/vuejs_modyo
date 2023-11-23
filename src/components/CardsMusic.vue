<template>
    <hr />
    <div class="card mb-3 p-0 shadow" style="max-width: 540px">
        <div class="row g-0">
            <div class="col-md-4">
                <img
                    :src="item.fields.portada"
                    class="img-fluid rounded-start h-100"
                    alt="..."
                />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ item.Artista }}</h5>
                    <p class="card-text">Album :{{ item.fields.Album }}</p>
                    <p class="card-text">
                        Cancion : <strong>{{ item.fields.Cancion }}</strong>
                    </p>
                    <p class="card-text">Año : {{ item.fields.año }}</p>
                    <p class="card-text">
                        Categoria : {{ item.meta.category }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardsMusic",
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
};
</script>
