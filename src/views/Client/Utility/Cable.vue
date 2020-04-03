<template>
  <div class="dashboard">
    <main class="page-content">
      <header class="welcome-text mb-3 ml-2 ml-lg-0">
        Utility -
        <span class="transfer-option">Cable</span>
      </header>

      <div class="statement-container">
        <!-- back-home -->
        <div class="back-home" style="cursor:pointer" @click="$router.go(-1)">
          <span>
            <i class="fal fa-long-arrow-left icon"></i>
          </span>
          <!-- <span><i class="fal fa-arrow-left icon fa-2x"></i></span> -->
          <span class="ml-3 back-text">Back to Utilities</span>
        </div>

        <!-- form start -->
        <div class="form-row one mt-3">
          <div class="col-lg-5">
            <span class="select-label">ISP</span>
            <b-form-select
              v-model="network"
              :options="networkOptions"
              class="mt-2"
            ></b-form-select>
          </div>
          <div class="col-lg-2"></div>
          <div class="col-lg-5 mt-3 mt-lg-0">
            <span class="select-label">Package</span>
            <b-form-select
              v-model="package_"
              :options="packageOptions"
              class="mt-2"
            ></b-form-select>
          </div>
        </div>

        <div class="form-row one mt-3">
          <div class="col-lg-5">
            <span class="select-label">Account</span>
            <b-form-select
              v-model="account"
              :options="options"
              class="mt-2"
            ></b-form-select>
          </div>
          <div class="col-md-2"></div>
          <div class="col-lg-5 mt-3 mt-lg-0">
            <span class="select-label">Name of Bill</span>
            <b-form-input
              v-model="bill"
              placeholder="Amount"
              class="mt-2"
            ></b-form-input>
          </div>
        </div>

        <!-- Submit -->
        <div class="form-row one mt-3">
          <div class="col-lg-6">
            <input
              type="submit"
              value="Pay"
              @click="modalShow = true"
              class="btn btn-primary px-3"
            />
          </div>
        </div>
        <!-- Form end -->

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
export default {
  name: "Cable",
  components: {},
  data() {
    return {
      name: "",
      account: null,
      bill: null,
      network: null,
      package_:null,
      modalShow: false,
      options: [
        { value: null, text: "Select Account" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "This is Second option" }
      ],
      networkOptions: [
        { value: null, text: "Select Network" },
        { value: "MTN", text: "MTN" },
        { value: "AIRTEL", text: "AIRTEL" },
        { value: "(9MOBILE)", text: "9MOBILE" },
        { value: "GLO", text: "GLO" }
      ],
      packageOptions: [
        { value: null, text: "Select Package" },
        { value: "MTN", text: "Dstv" },
        { value: "AIRTEL", text: "Gotv" },
        { value: "(9MOBILE)", text: "Startimes" },
        { value: "GLO", text: "Strong" }
      ]
    };
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
