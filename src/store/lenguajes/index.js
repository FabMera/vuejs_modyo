import { api } from "@/api/api_axios";


const lenguajesStore = {
    namespaced: true,
    state: () => ({
        lenguajes: [],
        categoriasLenguajes: [],
    }),
    mutations: {
        setLenguajes(state, payload) {
            state.lenguajes = payload;
        },
        setCategoriasLenguajes(state, payload) {
            const categorias = payload.map(item => item.meta.category_name);
            state.categoriasLenguajes = categorias.filter((categoria, index) => categorias.indexOf(categoria) === index);
        },
    },
    actions: {
        async getLenguajes({ commit }) {
            try {
                const res = await api.get();
                const apiModyo = await res.data.entries;
                console.log(apiModyo);
                commit('setLenguajes', apiModyo);
            } catch (error) {
                console.log(error);
            }
        },
        async getCategoriasLenguajes({ commit }) {
            try {
                const rest = await api.get();
                const apiCatLeng = await rest.data.entries;
                console.log(apiCatLeng);
                commit('setCategoriasLenguajes', apiCatLeng);
            } catch (error) {
                console.log(error);
            }
        },
    },
}

export default lenguajesStore;