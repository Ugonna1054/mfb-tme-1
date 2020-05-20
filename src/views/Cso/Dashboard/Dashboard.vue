<template>
  <div class="dashboard">
    <main class="page-content">
      <div class="dashboard">
        <!-- header -->
        <header class="welcome-text mb-3">
          Welcome!
          <span class="welcome-name ml-2">CSO</span>
        </header>

        <!-- main Card -->
        <div class="middle-container">
          <div class="box">
            <p class="top transaction-title">Total Customers</p>
            <p class="middle">&#8358;120,000</p>
            <div class="card-icon">
              <img
                src="../../../assets/images/loan.svg"
                class="img-fluid box-img"
                alt="loan-icon"
                width="30px"
              />
            </div>
          </div>
          <div class="box">
            <p class="top transaction-title">Total Deposit</p>
            <p class="middle">&#8358;170,000</p>
            <div class="card-icon">
              <img
                src="../../../assets/images/invest.svg"
                class="img-fluid box-img"
                alt="loan-icon"
                width="30px"
              />
            </div>
          </div>
          <div class="box">
            <p class="top transaction-title">Total Investment</p>
            <p class="middle">&#8358;170,000</p>
            <div class="card-icon">
              <img
                src="../../../assets/images/invest.svg"
                class="img-fluid box-img"
                alt="loan-icon"
                width="30px"
              />
            </div>
          </div>
        </div>

        <div class="account-container mt-5">
          <div class="dashboard-title row mb-0">
            <div class="col-12">
              <p class="mb-3 transaction-title">Recently Created Customers</p>
              <div class="recent-transactions table-responsive">
                <table>
                  <tr>
                    <th>Status</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Account</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Date</th>
                    <!-- <th>Performance Bar</th> -->
                  </tr>

                  <tr v-for="(transaction, index) in 10" :key="index">
                    <td>123456</td>
                    <td>0000000223</td>
                    <td>Savings</td>
                    <td>Agent Black</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>09/09/2020</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- welcome image -->
        <div class="welcome-img-wrapper">
          <img
            src="../../../assets/images/welcome.png"
            class="img-fluid float-right mt-n4"
            alt="welcome"
            width="400px"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  methods: {
    transfer() {
      this.$store.dispatch("transfer");
    },
    account() {
      this.$store.dispatch("account");
    },
    utility() {
      this.$store.dispatch("utility");
    },
    formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    }
  },
  mounted() {
    this.$store.dispatch("home");
  }
};
</script>

<style scoped lang='scss'>
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
</style>
