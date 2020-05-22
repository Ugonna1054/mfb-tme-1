import { userService } from "../../../services/user.services";
import { adminService } from "../../../services/AdminServices/admin.services";
import { ApiService } from "../../../services/api.services";

const actions = {
  //Login Admin
  LOGIN: async ({ commit, dispatch }, { email, password }) => {
    // eslint-disale-next-line prettier/prettier
    return await adminService
      .Login(email, password)
      .then(async res => {
        let token = res.token;
        commit("SET_AUTH_TOKEN", res.token);
        commit("SET_IS_AUTHENTICATED", true);
        commit("SET_ROLE", res.role);
        ApiService.setHeader(token);
        let authorize = await dispatch("AUTHORISE", token);
        return Promise.resolve({
          role: res.role,
          authorize,
          requiresChange: res.requiresChange
        });
      })
      .catch(err => {
        window.console.log(err);
        return Promise.reject(err);
      });
  },

  AUTHORISE: async ({ commit }, token) => {
    return await adminService
      .Authorize(token)
      .then(res => {
        commit("SET_USER_DATA", res);
        return true;
      })
      .catch(err => {
        window.console.log(err);
        return false;
      });
  },

  //Login User/Customer
  LOGINUSER: async ({ commit, dispatch }, { email, password }) => {
    // eslint-disale-next-line prettier/prettier
    return await userService
      .Login(email, password)
      .then(async res => {
        let token = res.token;
        commit("SET_AUTH_TOKEN", res.token);
        commit("SET_IS_AUTHENTICATED", true);
        ApiService.setHeader(token);
        let authorize = await dispatch("AUTHORISE_USER", token);
        return Promise.resolve({
          authorize,
          requiresChange: res.requiresChange
        });
      })
      .catch(err => {
        window.console.log(err);
        return Promise.reject(err);
      });
  },

  AUTHORISE_USER: async ({ commit }, token) => {
    return await userService
      .Authorize(token)
      .then(res => {
        commit("SET_USER_DATA", res);
        return true;
      })
      .catch(err => {
        window.console.log(err);
        return false;
      });
  },

  LOGOUT({ commit }) {
    commit("SET_AUTH_TOKEN", "");
    commit("SET_IS_AUTHENTICATED", "");
    commit("SET_ROLE", "");
    commit("SET_USER_DATA", {});
    commit("SET_USER_DETAILS", {});
  }
};

export { actions };
