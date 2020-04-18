const actions = {
  home: ({ commit }) => {
    commit("SetIsHome", true);
    commit("SetIsAccount", false);
    commit("SetIsTransfer", false);
    commit("SetIsFund", false);
    commit("SetIsUtility", false);
    commit("SetIsLoan", false);
    commit("SetIsInvestment", false);
    commit("SetIsMisc1", false);
    commit("SetIsMisc2", false);
  },
  account: ({ commit }) => {
    commit("SetIsHome", false);
    commit("SetIsAccount", true);
    commit("SetIsTransfer", false);
    commit("SetIsFund", false);
    commit("SetIsUtility", false);
    commit("SetIsLoan", false);
    commit("SetIsInvestment", false);
    commit("SetIsMisc1", false);
    commit("SetIsMisc2", false);
  },
  transfer: ({ commit }) => {
    commit("SetIsHome", false);
    commit("SetIsAccount", false);
    commit("SetIsTransfer", true);
    commit("SetIsFund", false);
    commit("SetIsUtility", false);
    commit("SetIsLoan", false);
    commit("SetIsInvestment", false);
    commit("SetIsMisc1", false);
    commit("SetIsMisc2", false);
  },
  fund: ({ commit }) => {
    commit("SetIsHome", false);
    commit("SetIsAccount", false);
    commit("SetIsTransfer", false);
    commit("SetIsFund", true);
    commit("SetIsUtility", false);
    commit("SetIsLoan", false);
    commit("SetIsInvestment", false);
    commit("SetIsMisc1", false);
    commit("SetIsMisc2", false);
  },
  utility: ({ commit }) => {
    commit("SetIsHome", false);
    commit("SetIsAccount", false);
    commit("SetIsTransfer", false);
    commit("SetIsFund", false);
    commit("SetIsUtility", true);
    commit("SetIsLoan", false);
    commit("SetIsInvestment", false);
    commit("SetIsMisc1", false);
    commit("SetIsMisc2", false);
  },
  loan: ({ commit }) => {
    commit("SetIsHome", false);
    commit("SetIsAccount", false);
    commit("SetIsTransfer", false);
    commit("SetIsFund", false);
    commit("SetIsUtility", false);
    commit("SetIsLoan", true);
    commit("SetIsInvestment", false);
    commit("SetIsMisc1", false);
    commit("SetIsMisc2", false);
  },
  investment: ({ commit }) => {
    commit("SetIsHome", false);
    commit("SetIsAccount", false);
    commit("SetIsTransfer", false);
    commit("SetIsFund", false);
    commit("SetIsUtility", false);
    commit("SetIsLoan", false);
    commit("SetIsInvestment", true);
    commit("SetIsMisc1", false);
    commit("SetIsMisc2", false);
  },
  misc1: ({ commit }) => {
    commit("SetIsHome", false);
    commit("SetIsAccount", false);
    commit("SetIsTransfer", false);
    commit("SetIsFund", false);
    commit("SetIsUtility", false);
    commit("SetIsLoan", false);
    commit("SetIsInvestment", false);
    commit("SetIsMisc1", true);
    commit("SetIsMisc2", false);
  },
  misc2: ({ commit }) => {
    commit("SetIsHome", false);
    commit("SetIsAccount", false);
    commit("SetIsTransfer", false);
    commit("SetIsFund", false);
    commit("SetIsUtility", false);
    commit("SetIsLoan", false);
    commit("SetIsInvestment", false);
    commit("SetIsMisc1", false);
    commit("SetIsMisc2", true);
  }
};
export { actions };
