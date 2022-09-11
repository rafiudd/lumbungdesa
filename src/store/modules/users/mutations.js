import { SET_PROFILES } from "./mutation-types";
export default {
  [SET_PROFILES](state, data) {
    state.profiles = data;
    state.role = data.role
  }
};
