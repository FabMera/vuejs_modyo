import { api2 } from "@/api/api_axios";


const musicaStore = {
    namespaced: true,
    state: () => ({
        musica: [],
        categoriasMusica: [],
    }),
    mutations: {
        setMusica(state, payload) {
            state.musica = payload;
        },
        setCategoriasMusica(state, payload) {
            const categorias = payload.map(item => item.meta.category_name);
            state.categoriasMusica = categorias.filter((categoria, index) => categorias.indexOf(categoria) === index);
        },
    },
    actions: {
        async getMusica({ commit }) {
            try {
                const res = await api2.get();
                const apiModyo = await res.data.entries;
                commit('setMusica', apiModyo);
            } catch (error) {
                console.log(error);
            }
        },
        async getCategoriasMusica({ commit }) {
            try {
                const rest = await api2.get();
                const apiCatMusic = await rest.data.entries;
                commit('setCategoriasMusica', apiCatMusic);
            } catch (error) {
                console.log(error);
            }
        }
    },
}

export default musicaStore;