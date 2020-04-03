<template>
  <div class="dashboard">
    <main class="page-content">
      <header class="welcome-text mb-3 ml-2 ml-lg-0">
        Loan Request -
        <span class="transfer-option">Loan Calculator</span>
      </header>

      <div class="statement-container">
        <!-- back-home -->
        <div class="back-home" style="cursor:pointer" @click="$router.go(-1)">
          <span>
            <i class="fal fa-long-arrow-left icon"></i>
          </span>
          <!-- <span><i class="fal fa-arrow-left icon fa-2x"></i></span> -->
          <!-- <span class="ml-3 back-text">Back to Loan</span> -->
        </div>

        <div  class="mt-3">
          <form @submit.prevent="passes(createAccount)">
            <div class="tab-content">
              <div class="row">
                <div class="col-lg-6  col-md-9">
                  <div class="form-row">
                    <span class="m"
                      >Loan Amount (min: &#8358;100,000 max:
                      &#8358;3,000,000)</span
                    >
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">&#8358;</div>
                      </div>
                      <vue-numeric
                        class="form-control"
                        name="Amount"
                        v-model="principal"
                        separator=","
                      ></vue-numeric>
                    </div>
                  </div>

                  <div class="form-row">
                    <span class="m">Repayment Duration</span>
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div
                          @click="minus"
                          class="input-group-text"
                          style="cursor:pointer"
                        >
                          -
                        </div>
                      </div>

                      <vue-numeric
                        style="background:whitesmoke"
                        v-model.number="tenor"
                        class="form-control py-0"
                      >
                      </vue-numeric>

                      <div class="input-group-append">
                        <div
                          class="input-group-text d-none d-sm-block"
                          style="color:darkgray"
                        >
                          month(s)
                        </div>
                        <div
                          @click="plus"
                          class="input-group-text"
                          style="cursor:pointer"
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-row">
                    <span class="m">Monthly Repayment Amount</span>
                    <label class="sr-only" for="inlineFormInputGroup"></label>
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">&#8358;</div>
                      </div>
                      <vue-numeric
                        class="form-control"
                        name="Amount"
                        disabled
                        v-model="mra"
                        style="background:whitesmoke"
                        separator=","
                      ></vue-numeric>
                    </div>
                    <p
                      class="text-danger mb-2"
                      style="font-size:13.5px; width:auto"
                    >
                      Please note that the interest rate is fixed per month on
                      the principal amount.
                    </p>
                  </div>

                  <div class="ml-n1 d-flex flex-wrap justify-content-start">
                    <button
                      @click="$router.push('/Loan-Apply')"
                      class="btn btn-primary mt-3 mt-sm-0"
                    >
                      Proceed to Application
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

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

export default {
  name: "Precheck",
  components: {
      VueNumeric
  },
  data() {
    return {
      price: "",
      principal: null,
      tenor: 1,
      mra: 0
    };
  },
  watch: {
    principal() {
      this.calculate();
    },
    tenor() {
      this.calculate();
    }
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
    calculate() {
      let a = 13.5;
      let b = 16.7;
      let c = 19.96;
      let d = 23.28;
      let e = 26.66;
      let f = 30;

      let tenor = this.tenor;
      let principal = this.principal;

      if (tenor == 1) {
        let mra = (principal * (a / 100 + 1)) / tenor;
        this.mra = mra;
      }

      if (tenor == 2) {
        let mra = (principal * (b / 100 + 1)) / tenor;
        this.mra = mra;
      }

      if (tenor == 3) {
        let mra = (principal * (c / 100 + 1)) / tenor;
        this.mra = mra;
      }

      if (tenor == 4) {
        let mra = (principal * (d / 100 + 1)) / tenor;
        this.mra = Math.round(mra * 100) / 100;
      }

      if (tenor == 5) {
        let mra = (principal * (e / 100 + 1)) / tenor;
        this.mra = mra;
      }

      if (tenor == 6) {
        let mra = (principal * (f / 100 + 1)) / tenor;
        this.mra = mra;
      }
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
