const actions = {
  home: ({ commit }) => {
    commit("SetIsHome", true);
    commit("SetIsAccount", false);
    commit("SetIsTransfer", false);
    commit("SetIsFund", false);
    commit("SetIsUtility", false);
    commit("SetIsLoan", false);
    commit("SetIsInvestment", false);
  },
  account: ({ commit }) => {
    commit("SetIsHome", false);
    commit("SetIsAccount", true);
    commit("SetIsTransfer", false);
    commit("SetIsFund", false);
    commit("SetIsUtility", false);
    commit("SetIsLoan", false);
    commit("SetIsInvestment", false);
  },
  transfer: ({ commit }) => {
    commit("SetIsHome", false);
    commit("SetIsAccount", false);
    commit("SetIsTransfer", true);
    commit("SetIsFund", false);
    commit("SetIsUtility", false);
    commit("SetIsLoan", false);
    commit("SetIsInvestment", false);
  },
  fund: ({ commit }) => {
    commit("SetIsHome", false);
    commit("SetIsAccount", false);
    commit("SetIsTransfer", false);
    commit("SetIsFund", true);
    commit("SetIsUtility", false);
    commit("SetIsLoan", false);
    commit("SetIsInvestment", false);
  },
  utility: ({ commit }) => {
    commit("SetIsHome", false);
    commit("SetIsAccount", false);
    commit("SetIsTransfer", false);
    commit("SetIsFund", false);
    commit("SetIsUtility", true);
    commit("SetIsLoan", false);
    commit("SetIsInvestment", false);
  },
  loan: ({ commit }) => {
    commit("SetIsHome", false);
    commit("SetIsAccount", false);
    commit("SetIsTransfer", false);
    commit("SetIsFund", false);
    commit("SetIsUtility", false);
    commit("SetIsLoan", true);
    commit("SetIsInvestment", false);
  },
  investment: ({ commit }) => {
    commit("SetIsHome", false);
    commit("SetIsAccount", false);
    commit("SetIsTransfer", false);
    commit("SetIsFund", false);
    commit("SetIsUtility", false);
    commit("SetIsLoan", false);
    commit("SetIsInvestment", true);
  }
};
export { actions };
