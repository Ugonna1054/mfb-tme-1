<template>
  <div class="dashboard">
    <main class="page-content">
      <div class="dashboard">
        <!-- header -->
        <header class="welcome-text mb-3">
          Account Transactions
          <span class="welcome-name ml-2"></span>
        </header>

        <!-- main Card -->
        <div class="mainest-container account-container">
          <div class="form-row two mt-3">
            <div class="col-lg-6">
              <div>
                <span class="select-label">Account</span>
                <b-form-select v-model="account" :options="options" class="mt-2"></b-form-select>
              </div>
            </div>
            <div class="col-lg-6 mt-3 mt-lg-0">
              <span class="select-label">Date Range</span>
              <div class="row">
                <div class="col-lg-6">
                  <b-form-datepicker v-model="from" class="mb-2 mt-2" placeholder="--From Date--"></b-form-datepicker>
                </div>
                <div class="col-lg-6">
                  <b-form-datepicker v-model="to" class="mb-2 mt-2" placeholder="--To Date --"></b-form-datepicker>
                </div>
              </div>
              <!-- <p class="mb-3">March 10, 2020, to April 10, 2020</p> -->
            </div>
             
          </div>

         

          <div class="account-containe mt-5">
            <div class="dashboard-title row mb-0">
              <div class="col-12">
                <p class="mb-3 transaction-title">Transaction Details</p>
                <div class="recent-transactions table-responsive">
                  <table>
                    <tr class>
                      <th>Date</th>
                      <th>Account</th>
                      <th>Description</th>
                      <th>Debit</th>
                      <th>Credit</th>
                      <th>Balance</th>
                    </tr>

                    <tr v-for="(transaction, index) in 10" :key="index">
                      <td>09/09/2020</td>
                      <td>0000000223</td>
                      <td>Purchase equipment from store</td>
                      <td class="text-danger">&#8358; {{ formatAmount(500000) }}</td>
                      <td class="text-success">&#8358; {{ formatAmount(500000) }}</td>
                      <td>John Doe</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="account-containe mt-5">
            <!-- Download button -->
            <div class="d-flex justify-content-start">
              <div class="btn btn-primary mt-3">
                Download
                <span>
                  <i class="fal fa-download"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Expenses details -->
        <b-modal hide-footer v-model="details">
          <div class="modal-container text-center">
            <p class="welcome-text">Expenses Details</p>

            <div>
              <button class="btn btn-primary px-4 mt-4" @click="details = false">Done</button>
            </div>
          </div>
        </b-modal>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "BalanceSheet",
  components: {},
  data() {
    return {
      details: false,
      account: null,
      from: "",
      to: "",
      options: [
        { value: null, text: "Select Account" },
        { value: "a", text: "This is First option" }
      ]
    };
  },
  methods: {
    formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    }
  },
  mounted() {
    //this.$store.dispatch("home");
  }
};
</script>

<style scoped lang="scss">
.box-2 {
  padding: 24px 20px !important;
}
.box-3 {
  padding: 23px 20px !important;
}
.box-4,
.box-5 {
  padding: 25px 20px !important;
}
.box {
  cursor: pointer;
}
.link {
  text-decoration: none;
}
.middle-container {
  font-family: $SourceSansPro-Light;
  margin-right: 40px;
}
.lines {
  border: 1px solid grey;
  width: 70%;
  margin: 0px auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.details:hover {
  text-decoration: underline;
}
.btn-primary {
  background: $main-color;
  border: 1px solid $main-color;
  font-family: $SourceSansPro-Regular;
}
</style>
