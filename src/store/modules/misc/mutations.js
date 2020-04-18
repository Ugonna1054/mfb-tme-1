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
  },
  SetIsMisc1(state, payload) {
    state.isMisc1 = payload;
  },
  SetIsMisc2(state, payload) {
    state.isMisc2 = payload;
  }
};

export { mutations };
