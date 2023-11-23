import { api2 } from "@/api/api_axios";
import state from "./state"
import * as mutations from "./mutations";
import * as actions from "./actions";

const musicaStore = {
    namespaced: true,
    state,
    mutations,
    actions
}

export default musicaStore;