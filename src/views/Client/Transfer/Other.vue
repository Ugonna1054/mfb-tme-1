<template>
  <div class="dashboard">
    <main class="page-content">
      <header class="welcome-text mb-3 ml-2 ml-lg-0">
        Transfer Options -
        <span class="transfer-option">To Other banks</span>
      </header>
      <div class="account-container">
        <div class="own-account">
          <div class="line d-none d-md-block"></div>
          <div>
            <div class="tabs-container">
              <b-tabs pills :active-nav-item-class="current">
                <!-- From tab -->
                <b-tab
                  title="From Account"
                  :active="fromTab"
                  :title-link-class="active1"
                  @click="fromAccount"
                >
                  <div class="mx-4">
                    <div class="form-row box-container">
                      <div class v-for="account in accounts" :key="account">
                        <div
                          class="box hvr-float-shado hvr-underline-from-left"
                          style="cursor:pointer"
                          @click="next1(account.number)"
                        >
                          <div
                            class="top d-flex justify-content-between px-3 py-2 mt-3"
                          >
                            <p class="text-1">{{ account.type }}</p>
                            <p class="text-1">&#8358; {{ account.amount }}</p>
                          </div>
                          <div class="bottom px-3">
                            <p class="text-2">{{ account.number }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-tab>

                <!-- To tab -->
                <b-tab
                  title="To Account"
                  :active="toTab"
                  :title-link-class="active1"
                  @click="toAccount"
                >
                  <div class="mx-4 my-2">
                    <div class="form-row">
                      <div class="col-md-5">
                        <label class="text-1">Beneficiary Account Number</label>
                        <div class="mb-2">
                          <input
                            type="text"
                            v-model="toAccount_"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-md-2"></div>
                      <div class="col-md-5">
                        <label class="text-1"
                          >Choose from saved Beneficiary</label
                        >
                        <div class="mb-2">
                          <b-form-select
                            v-model="savedBeneficiary"
                            :options="options"
                            class
                          ></b-form-select>
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-md-5">
                        <label class="text-1">Beneficiary Bank</label>
                        <div class="mb-2">
                          <b-form-select
                            v-model="bank"
                            :options="bankOptions"
                          ></b-form-select>
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-md-6">
                        <b-form-checkbox
                          id="checkbox-1"
                          v-model="status"
                          name="checkbox-1"
                          value="accepted"
                          unchecked-value="not_accepted"
                          class="mt-2"
                        >
                          <span class="text-2">Save as Beneficiary</span>
                        </b-form-checkbox>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-md-6">
                        <button
                          :disabled="disabledValue1"
                          class="btn btn-primary mt-3"
                          @click="next2"
                        >
                          Proceed
                        </button>
                      </div>
                    </div>
                  </div>
                </b-tab>

                <!-- Amount tab -->
                <b-tab
                  title="Details"
                  :active="amountTab"
                  :title-link-class="active1"
                  @click="amount_"
                >
                  <ValidationObserver v-slot="{ passes }">
                    <form @submit.prevent="passes(next3)">
                      <div class="tab-contents">
                        <div class="form-row first">
                          <div class="col-md-5 mb-3 mx-4 mt-3 mt-sm-0">
                            <ValidationProvider
                              name="amount"
                              rules="required|min_value:1000|max_value:100000"
                              v-slot="{ errors }"
                            >
                              <label>
                                <span class="text-1">Enter Amount</span>
                                <span class="text-danger">*</span>
                              </label>
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span
                                    class="input-group-text"
                                    id="inputGroupPrepend"
                                    >&#8358;</span
                                  >
                                </div>
                                <vue-numeric
                                  v-model="amount"
                                  class="form-control"
                                  name="Loan Amount"
                                  placeholder="0"
                                  separator=","
                                ></vue-numeric>
                              </div>
                              <br />
                              <span
                                style="font-size:13px; color:red"
                                class="mt-3"
                              >
                                <span v-if="errors[0]">
                                  <i class="fas fa-ban"></i>
                                </span>
                                {{ errors[0] }}
                              </span>
                            </ValidationProvider>
                          </div>
                        </div>
                        <div class="form-row second">
                          <div class="col-md-5 mb-3 mx-4 mt-3 mt-sm-0">
                            <ValidationProvider
                              name="remarks"
                              rules
                              v-slot="{ errors }"
                            >
                              <label>
                                <span class="text-1">Remarks (Optional)</span>
                              </label>
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span
                                    class="input-group-text"
                                    id="inputGroupPrepend"
                                    >&#8358;</span
                                  >
                                </div>
                                <vue-numeric
                                  v-model="remarks"
                                  class="form-control"
                                  name="Loan Amount"
                                  placeholder="0"
                                  separator=","
                                ></vue-numeric>
                              </div>
                              <br />
                              <span
                                style="font-size:13px; color:red"
                                class="mt-3"
                              >
                                <span v-if="errors[0]">
                                  <i class="fas fa-ban"></i>
                                </span>
                                {{ errors[0] }}
                              </span>
                            </ValidationProvider>
                          </div>
                        </div>
                        <div class="form-row first">
                          <div class="col-md-5 mb-3 mx-4 mt-3 mt-sm-0">
                            <ValidationProvider
                              name="principal"
                              rules
                              v-slot="{ errors }"
                            >
                              <label>
                                <span class="text-1">Beneficiary Details</span>
                                <span class="text-danger">*</span>
                              </label>
                              <div class="input-group">
                                <input
                                  v-model="beneficiaryDetails"
                                  class="form-control"
                                  name="beneficiaryDetails"
                                  placeholder
                                  disabled
                                />
                              </div>
                              <br />
                              <span
                                style="font-size:13px; color:red"
                                class="mt-3"
                              >
                                <span v-if="errors[0]">
                                  <i class="fas fa-ban"></i>
                                </span>
                                {{ errors[0] }}
                              </span>
                            </ValidationProvider>
                          </div>
                        </div>
                        <div class="mx-4">
                          <button class="btn btn-primary px-3" type="submit">
                            Proceed
                          </button>
                        </div>
                      </div>
                    </form>
                  </ValidationObserver>
                </b-tab>

                <!-- Review tab -->
                <b-tab
                  title="Review"
                  :active="reviewTab"
                  :title-link-class="active1"
                  @click="review_"
                >
                  <div class="mx-4 mt-3 mt-sm-0">
                    <div>
                      <p class="text-1">From Account</p>
                      <p class="text-2 mt-n3">012356789 - John Doe - Savings</p>
                    </div>
                    <div>
                      <p class="text-1">To Beneficiary</p>
                      <p class="text-2 mt-n3">012356789 - John Doe - Savings</p>
                    </div>
                    <div>
                      <p class="text-1">Amount</p>
                      <p class="text-2 mt-n3">&#8358; 40,000</p>
                    </div>
                    <div>
                      <p class="text-1">Remarks</p>
                      <p class="text-2 mt-n3">012356789 - John Doe - Savings</p>
                    </div>
                    <div>
                      <p class="text-1">Transaction Pin</p>
                      <div class="form-row">
                        <div class="col-lg-4 col-md-6 mb-3">
                          <input
                            type="password"
                            v-model="pin"
                            class="form-control"
                          />
                        </div>
                        <div class="col-md-6"></div>
                        <div class="col-lg-4 col-md-6">
                          <button
                            :disabled="disabledValue"
                            class="btn btn-primary mt-3"
                            @click="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-tab>

                <!-- success modal -->
                <b-modal hide-footer v-model="modalShow">
                  <div class="modal-container text-center">
                    <p class="welcome-text">Transaction Successful</p>

                    <div>
                      <img
                        src="../../../assets/images/payment-success.png"
                        class="img-fluid"
                        width="100px"
                        alt
                      />
                    </div>

                    <div>
                      <button
                        class="btn btn-primary px-4 mt-4"
                        @click="modalShow = false"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </b-modal>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
//import Loader from "../../../utils/vue-loader/loader.vue";
//import VueNumeric from "vue-numeric";
//import { clientService } from "../../../services/ClientServices/client.services";
import { ValidationObserver, ValidationProvider } from "vee-validate";
//import { mapState } from "vuex";
export default {
  name: "Other",
  components: {
    ValidationObserver,
    ValidationProvider
    // Loader,
    //VueNumeric
  },
  data() {
    return {
      fromTab: true,
      toTab: false,
      amountTab: false,
      reviewTab: false,
      fromAccount_: "",
      toAccount_: "",
      amount: "",
      pin: "",
      disabledValue: true,
      disabledValue1: true,
      modalShow: false,
      savedBeneficiary: {
        account: null,
        name: "Select Beneficiary",
        bank: null
      },
      beneficiaryDetails: "",
      remarks: "",
      account: "",
      bank: null,
      status: "",
      options: [],
      bankOptions: [],
      activeBeneficiary: {},
      accounts: [
        {
          type: "Savings",
          amount: "300,000",
          number: "0141424242"
        },
        {
          type: "Current",
          amount: "2,500,000",
          number: "0281424242"
        },
        {
          type: "Savings",
          amount: "300,000",
          number: "0141424242"
        }
      ],
      optionsApi: [
        {
          account: "0909090900",
          name: "ubaka ugonna",
          bank: {
            name: "GTB",
            code: "057"
          }
        },
        {
          account: "8909090909",
          name: "uche ubaka",
          bank: {
            name: "ZENITH",
            code: "061"
          }
        }
      ],
      bankOptionsApi: [
        {
          bank: "GTB",
          code: "057"
        },
        {
          bank: "ZENITH",
          code: "061"
        }
      ]
    };
  },
  computed: {
    current() {
      return "current";
    },
    active1() {
      return ["active1"];
    }
  },
  watch: {
    pin(newval) {
      if (newval.length == 6) {
        this.disabledValue = false;
        return;
      }

      this.disabledValue = true;
    },
    toAccount_(newval) {
      if (newval.length == 10 && this.bank) {
        this.disabledValue1 = false;
        return;
      }
      this.disabledValue1 = true;
    },
    bank(newval) {
      if (this.toAccount_.length == 10 && newval) {
        this.disabledValue1 = false;
        return;
      }
      this.disabledValue1 = true;
    },
    savedBeneficiary(newval) {
      this.toAccount_ = newval.account;
      if (newval.bank) return (this.bank = newval.bank.code);
      this.bank = null;
    }
  },
  methods: {
    setSavedBeneficiary() {
      let optionsApi = this.optionsApi;
      let options = this.options;
      optionsApi.unshift({
        account: null,
        name: "Select Beneficiary",
        bank: null
      });
      optionsApi.forEach(item => {
        options.push({
          value: item,
          text: item.name
        });
        // this.activeBeneficiary = item
      });
    },
    setBeneficiaryBank() {
      let bankOptionsApi = this.bankOptionsApi;
      let bankOptions = this.bankOptions;
      bankOptionsApi.unshift({
        code: null,
        bank: "Select Bank"
      });
      bankOptionsApi.forEach(item => {
        bankOptions.push({
          value: item.code,
          text: item.bank
        });
      });
    },
    fromAccount() {
      this.fromTab = true;
      this.toTab = false;
      this.amountTab = false;
      this.reviewTab = false;
    },
    toAccount() {
      this.fromTab = false;
      this.toTab = true;
      this.amountTab = false;
      this.reviewTab = false;
    },
    amount_() {
      this.fromTab = false;
      this.toTab = false;
      this.amountTab = true;
      this.reviewTab = false;
    },
    review_() {
      this.fromTab = false;
      this.toTab = false;
      this.amountTab = false;
      this.reviewTab = true;
    },
    next1() {
      this.toTab = true;
    },
    next2() {
      this.amountTab = true;
    },
    next3() {
      this.reviewTab = true;
    },
    submit() {
      this.modalShow = true;
    }
  },
  mounted() {
    this.setSavedBeneficiary();
    this.setBeneficiaryBank();
  }
};
</script>

<style lang="scss" scoped>
.btn-primary {
  background: $main-color;
  border: 1px solid $main-color;
  font-family: $SourceSansPro-Regular;
}

.active1 {
  background: yellow !important;
}

.account-container {
  padding: 0px !important;
}

.tabs-container {
  padding: 10px;
}

.hvr-underline-from-left {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-left:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: $main-color;
  height: 4px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-left:hover:before,
.hvr-underline-from-left:focus:before,
.hvr-underline-from-left:active:before {
  right: 0;
}

.hvr-float-shadow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-float-shadow:before {
  pointer-events: none;
  position: absolute;
  z-index: -1;
  content: "";
  top: 100%;
  left: 5%;
  height: 10px;
  width: 90%;
  opacity: 0;
  background: -webkit-radial-gradient(
    center,
    ellipse,
    $main-color,
    $main-color
  );
  background: radial-gradient(ellipse at center, $main-color, $main-color);
  /* W3C */
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform, opacity;
  transition-property: transform, opacity;
}
.hvr-float-shadow:hover,
.hvr-float-shadow:focus,
.hvr-float-shadow:active {
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  /* move the element up by 5px */
}
.hvr-float-shadow:hover:before,
.hvr-float-shadow:focus:before,
.hvr-float-shadow:active:before {
  opacity: 1;
  -webkit-transform: translateY(5px);
  transform: translateY(5px);
  /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
}
</style>
