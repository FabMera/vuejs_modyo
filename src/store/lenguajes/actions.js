import { api } from '@/api/api_axios';

export const getLenguajes = async ({ commit }) => {
    try {
        const res = await api.get();
        const apiModyo = await res.data.entries;
        console.log(apiModyo);
        commit('setLenguajes', apiModyo);
    } catch (error) {
        console.log(error);
    }
}
export const getCategoriasLenguajes = async ({ commit }) => {
    try {
        const rest = await api.get();
        const apiCatLeng = await rest.data.entries;
        console.log(apiCatLeng);
        commit('setCategoriasLenguajes', apiCatLeng);
    } catch (error) {
        console.log(error);
    }
}