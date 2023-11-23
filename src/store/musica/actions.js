import { api2 } from "@/api/api_axios";

export const getMusica = async ({ commit }) => {
    try {
        const res = await api2.get();
        const apiModyo = await res.data.entries;
        commit('setMusica', apiModyo);
    } catch (error) {
        console.log(error);
    }
}
export const getCategoriasMusica = async ({ commit }) => {
    try {
        const rest = await api2.get();
        const apiCatMusic = await rest.data.entries;
        commit('setCategoriasMusica', apiCatMusic);
    } catch (error) {
        console.log(error);
    }
}