export const setMusica = (state, payload) => {
    state.musica = payload;
}
export const setCategoriasMusica = (state, payload) => {
    const categorias = payload.map(item => item.meta.category_name);
    state.categoriasMusica = categorias.filter((categoria, index) => categorias.indexOf(categoria) === index);
}