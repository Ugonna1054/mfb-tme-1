const mutations = {
  SET_USER_DATA(state, payload) {
    state.USER_DATA = payload;
  },
  SET_ROLE(state, payload) {
    state.ROLE = payload;
  },
  SET_IS_AUTHENTICATED(state, payload) {
    state.IS_AUTHENTICATED = payload;
  },
  SET_AUTH_TOKEN(state, payload) {
    state.AUTH_TOKEN = payload;
  },
  SET_USER_DETAILS(state, payload) {
    state.USER_DETAILS = payload;
  },
  SET_TRANSACTION_DETAILS(state, payload) {
    state.TRANSACTION_DETAILS = payload;
  },
  SET_LOAN_DETAILS(state, payload) {
    state.LOAN_DETAILS = payload;
  }
};

export { mutations };
