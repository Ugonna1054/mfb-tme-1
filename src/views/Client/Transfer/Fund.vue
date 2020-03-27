<template>
  <div class="dashboard">
    <main class="page-content">
      <header class="welcome-text mb-3 ml-2 ml-lg-0">Fund Account</header>
      <div class="account-container">
        <div class="own-account">
          <div class="line d-none d-md-block"></div>
          <div>
            <div class="tabs-container">
              <b-tabs pills :active-nav-item-class="current">
                <!-- From tab -->
                <b-tab
                  title="Choose Account"
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
                          @click="next1()"
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

                <!-- Amount tab -->
                <b-tab
                  title="Amount"
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

                        <div class="mx-4">
                          <button class="btn btn-primary px-3" type="submit">
                            Proceed
                          </button>
                        </div>
                      </div>
                    </form>
                  </ValidationObserver>
                </b-tab>

                <!-- Details tab -->
                <b-tab
                  title="Details"
                  :active="reviewTab"
                  :title-link-class="active1"
                  @click="review_"
                >
                  <div class="mx-4 mt-3 mt-sm-0">
                    <div class="form-row">
                      <div class="col-md-4">
                        <label class="text-1">Card Type</label>
                        <div class="mb-2">
                          <b-form-select
                            v-model="cardType"
                            :options="options"
                            class
                          ></b-form-select>
                        </div>
                      </div>
                    </div>
                    <div class="form-row mb-2">
                      <div class="col-md-4">
                        <label class="text-1">Card Number</label>
                        <input
                          v-model="cardNumber"
                          class="form-control"
                          name="Loan Amount"
                          placeholder="#### #### #### #### ####"
                          v-mask="'#### #### #### ####'"
                        />
                      </div>
                    </div>
                    <div class="form-row mb-2">
                      <div class="col-md-4">
                        <div class="form-row">
                          <div class="col-6">
                            <label class="text-1">Expiry Date</label>
                            <input
                              v-model="cardExpiry"
                              class="form-control"
                              name="Loan Amount"
                              placeholder="MM/YY"
                              v-mask="'##/##'"
                            />
                          </div>
                          <div class="col-6">
                            <label class="text-1">CVV</label>
                            <input
                              v-model="cardCvv"
                              class="form-control"
                              name="Loan Amount"
                              v-mask="'###'"
                              placeholder="###"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class="text-1">Transaction Pin</label>
                      <div class="form-row">
                        <div class="col-md-4 mb-3">
                          <input
                            v-model="pin"
                            v-mask="'######'"
                            class="form-control"
                            placeholder="######"
                          />
                        </div>
                        <div class="col-md-6"></div>
                        <div class="col-md-6">
                          By clicking pay, I agree to the service's
                          <span
                            @click="terms = true"
                            class="text-primary"
                            style="cursor:pointer"
                            >Terms and Conditions</span
                          >
                        </div>
                        <div class="col-md-6"></div>
                        <div class="col-lg-4 col-md-6">
                          <button
                            :disabled="disabledValue"
                            class="btn btn-primary mt-3 px-3"
                            @click="submit"
                          >
                            Pay
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

                <!-- terms  and conditions modal -->
                <b-modal hide-footer v-model="terms">
                  <div class="modal-container text-center">
                    <p class="welcome-text">Terms and Conditions</p>

                    <div>
                      <button
                        class="btn btn-primary px-4 mt-4"
                        @click="terms = false"
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
  name: "Fund",
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
      cardType: null,
      cardNumber: "",
      cardExpiry: "",
      cardCvv: "",
      disabledValue: true,
      disabledValue1: true,
      modalShow: false,
      terms: false,
      account: "",
      status: "",
      options: [],
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
          account: "Master",
          name: "Master  Card"
        },
        {
          account: "Visa",
          name: "Visa Card"
        },
        {
          account: "Verve",
          name: "Verve Card"
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
      if (
        newval.length == 6 &&
        this.cardExpiry &&
        this.cardCvv &&
        this.cardType &&
        this.cardNumber
      ) {
        this.disabledValue = false;
        return;
      }
      this.disabledValue = true;
    }
  },
  methods: {
    setSavedBeneficiary() {
      let optionsApi = this.optionsApi;
      let options = this.options;
      optionsApi.unshift({
        account: null,
        name: "Select Card"
      });
      optionsApi.forEach(item => {
        options.push({
          value: item.account,
          text: item.name
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
