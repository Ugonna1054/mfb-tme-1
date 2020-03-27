import { mutations } from "./mutations";
import { actions } from "./actions";

const state = {
  isHome: false,
  isAccount: false,
  isTransfer: false,
  isFund: false,
  isUtility: false,
  isLoan: false,
  isInvestment: false
};

export default { state, mutations, actions };
