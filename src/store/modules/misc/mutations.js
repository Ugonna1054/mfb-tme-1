const mutations = {
  SetIsHome(state, payload) {
    state.isHome = payload;
  },
  SetIsAccount(state, payload) {
    state.isAccount = payload;
  },
  SetIsTransfer(state, payload) {
    state.isTransfer = payload;
  },
  SetIsFund(state, payload) {
    state.isFund = payload;
  },
  SetIsUtility(state, payload) {
    state.isUtility = payload;
  },
  SetIsLoan(state, payload) {
    state.isLoan = payload;
  },
  SetIsInvestment(state, payload) {
    state.isInvestment = payload;
  }
};

export { mutations };
