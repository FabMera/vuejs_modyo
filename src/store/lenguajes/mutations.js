export const setLenguajes = (state, payload)=> {
    state.lenguajes = payload;
}
export const setCategoriasLenguajes= (state, payload)=> {
    const categorias = payload.map(item => item.meta.category_name);
    state.categoriasLenguajes = categorias.filter((categoria, index) => categorias.indexOf(categoria) === index);
}