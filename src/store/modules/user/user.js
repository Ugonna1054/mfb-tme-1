import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state = {
  USER_DATA: {},
  AUTH_TOKEN: "",
  ROLE:"",
  IS_AUTHENTICATED: false,
  USER_DETAILS: {},
  TRANSACTION_DETAILS: {},
  LOAN_DETAILS:{}
};

export default { state, getters, mutations, actions };
