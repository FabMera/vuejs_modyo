
import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
const lenguajesStore = {
    namespaced: true,
    state,
    mutations,
    actions
}

export default lenguajesStore;