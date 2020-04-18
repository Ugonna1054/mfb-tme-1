import { mutations } from "./mutations";
import { actions } from "./actions";

const state = {
  isHome: false,
  isAccount: false,
  isTransfer: false,
  isFund: false,
  isUtility: false,
  isLoan: false,
  isInvestment: false,
  isMisc1: false,
  isMisc2:false
};

export default { state, mutations, actions };
