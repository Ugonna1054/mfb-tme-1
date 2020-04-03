<template>
  <div class="dashboard">
    <Loader :loading="loading" loading-text="please wait..." />
    <main class="page-content">
      <header class="welcome-text mb-3 ml-2 ml-lg-0">
        Investment Request -
        <span class="transfer-option">Apply for Investment</span>
      </header>

      <div class="statement-container">
        <!-- back-home -->
        <div class="back-home" style="cursor:pointer" @click="$router.go(-1)">
          <span>
            <i class="fal fa-long-arrow-left icon"></i>
          </span>
          <!-- <span><i class="fal fa-arrow-left icon fa-2x"></i></span> -->
        </div>

        <!-- form start -->
        <ValidationObserver v-slot="{ passes }">
          <form @submit.prevent="passes(postLoan)">
            <div class="tab-contents">
              <div class="form-row first">
                <div class="col-md-5 mb">
                  <ValidationProvider
                    name="principal"
                    rules="required|min_value:1000|max_value:1000000"
                    v-slot="{ errors }"
                  >
                    <label for>
                      Investment Amount
                      <span class="text-danger">*</span>
                    </label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend"
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
                    <span style="font-size:13px; color:red">
                      <span v-if="errors[0]">
                        <i class="fas fa-ban"></i>
                      </span>
                      {{ errors[0] }}
                    </span>
                  </ValidationProvider>
                </div>

                <div class="col-md-2"></div>

                <div class="col-md-5 mb">
                  <label for="validationCustom02">
                    Duration
                    <span class="text-danger">*</span>
                  </label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text"
                        style="cursor:pointer"
                        v-on:click="minus"
                        id="inputGroupPrepend"
                        >-</span
                      >
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      style="background:whitesmoke"
                      disabled
                      v-model.number="tenor"
                      id="validationCustom02"
                      placeholder="Duration (months)"
                      required
                    />
                    <div class="input-group-append">
                      <span
                        class="input-group-text"
                        style="cursor:pointer"
                        v-on:click="plus"
                        id="inputGroupPrepend"
                        >+</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-row thir mb-3"></div>

              <div class="form-row">
                <div class="col-md-5 mb-3">
                  <ValidationProvider
                    name="Account_Number"
                    rules="required|numeric|min:10|max:10"
                    v-slot="{ errors }"
                  >
                    <label for class="d-inline">
                      Account Number
                      <span class="text-danger">*</span>
                    </label>
                    <input
                      disabled
                      name="Account_Number"
                      v-model="account"
                      type="text"
                      class="form-control"
                    />
                    <span style="font-size:13px; color:red">
                      <span v-if="errors[0]">
                        <i class="fas fa-ban"></i>
                      </span>
                      {{ errors[0] }}
                    </span>
                  </ValidationProvider>
                </div>

                <div class="col-md-2"></div>

                <div class="col-md-5">
                  <ValidationProvider
                    name="Bank_Name"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <label for class="d-inline">
                      Bank
                      <span class="text-danger">*</span>
                    </label>
                    <select
                      class="browser-default custom-select"
                      name="Bank_Name"
                      v-model="bank"
                    >
                      <option>Choose</option>
                      <option selected value="asset matrix"
                        >Asset Matrix</option
                      >
                    </select>
                    <span style="font-size:13px; color:red">
                      <span v-if="errors[0]">
                        <i class="fas fa-ban"></i>
                      </span>
                      {{ errors[0] }}
                    </span>
                  </ValidationProvider>
                </div>
              </div>

              <div class="form-row">
                <div class="col-md-5 mt-3 loanPurpose">
                  <ValidationProvider
                    name="loanPurpose"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <label for="exampleFormControlTextarea1">
                      Investment Purpose
                      <span class="text-danger">*</span>
                    </label>
                    <textarea
                      v-model="loanPurpose"
                      name="loanPurpose"
                      class="form-control text-area"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                    <span style="font-size:13px; color:red">
                      <span v-if="errors[0]">
                        <i class="fas fa-ban"></i>
                      </span>
                      {{ errors[0] }}
                    </span>
                  </ValidationProvider>
                </div>
              </div>
            </div>
            <div class="d-flex mt-3 justify-content-start">
              <button class="btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
        </ValidationObserver>

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
      </div>
    </main>
  </div>
</template>

<script>
import VueNumeric from "vue-numeric";
import { clientService } from "../../../services/ClientServices/client.services";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import Loader from "../../../utils/vue-loader/loader.vue";
//import { mapState } from "vuex";
export default {
  name: "Apply",
  components: {
    ValidationObserver,
    ValidationProvider,
    Loader,
    VueNumeric
  },
  data() {
    return {
      amount: 0,
      tenor: 0,
      loanPurpose: "",
      bank: "",
      loading: false
    };
  },
  methods: {
    minus() {
      if (this.tenor <= 0) return;
      this.tenor = this.tenor - 1;
    },
    plus() {
      if (this.tenor >= 6) return;
      this.tenor = this.tenor + 1;
    },
    //Post Loan
    async postLoan() {
      this.loading = true;
      await clientService
        .postLoan({
          amount: this.amount,
          tenor: this.tenor,
          account: this.account,
          purpose: this.loanPurpose,
          bank: this.bank
        })
        .then(res => {
          this.$toastr.s(res.message, "Posted Succesfully");
          this.$router.push("/Loan");
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-primary {
  background: $main-color;
  border: 1px solid $main-color;
  font-family: $SourceSansPro-Regular;
}

.back-home {
  width: 170px;
}
</style>
