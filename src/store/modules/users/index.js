import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import state from "./state";

const users = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default users;
