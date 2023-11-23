import { createStore } from 'vuex'
import musicaStore from './musica';
import lenguajesStore from './lenguajes';


export default createStore({
    //nombre modulos musica y lenguajes segun el nombre de los archivos (carpetas)
    modules: {
        musica: musicaStore,
        lenguajes: lenguajesStore,
    }
})
