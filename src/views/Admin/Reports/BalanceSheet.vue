<template>
  <div class="dashboard">
    <main class="page-content">
      <div class="dashboard">
        <!-- header -->
        <header class="welcome-text mb-3">
          Balance Sheet
          <span class="welcome-name ml-2"></span>
        </header>

        <!-- main Card -->
        <div class="mainest-container account-container">
          <div class="form-row two mt-3">
            <div class="col-lg-6">
              <span class="select-label">Date Range</span>
              <div class="row">
                <div class="col-lg-6">
                  <b-form-datepicker v-model="from" class="mb-2 mt-2" placeholder="--From Date--"></b-form-datepicker>
                </div>
                <div class="col-lg-6">
                  <b-form-datepicker v-model="to" class="mb-2 mt-2" placeholder="--To Date --"></b-form-datepicker>
                </div>
              </div>
            </div>
          </div>

          <p class="mb-3">March 10, 2020, to April 10, 2020</p>

          <div class="middle-container mt-3">
            <div class="box">
              <p class="top transaction-title">Cash at Bank</p>
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
              <p class="top transaction-title">To be received</p>
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
              <p class="top transaction-title">To be paid out</p>
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
              <p class="top transaction-title">Balance</p>
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

          <div class="account-containe mt-5">
            <div class="dashboard-title row mb-0">
              <div class="col-12">
                <p class="mb-3 transaction-title">Asset</p>
                <div class="recent-transactions table-responsive">
                  <table>
                    <tr class="">
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
                      <td>Savings</td>
                      <td class="text-danger">&#8358; {{ formatAmount(500000) }}</td>
                      <td class="text-success">&#8358; {{ formatAmount(500000) }}</td>
                      <td>John Doe</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="lines"></div>

          <div class="account-containe mt-5">
            <div class="dashboard-title row mb-0">
              <div class="col-12">
                <p class="mb-3 transaction-title">Liabilities</p>
                <div class="recent-transactions table-responsive">
                  <table>
                    <tr>
                      <th>Date</th>
                      <th>Account</th>
                      <th>Description</th>
                      <th>Debit</th>
                      <th>Credit</th>
                      <th>Balance</th>
                    </tr>

                    <tr v-for="(transaction, index) in 5" :key="index">
                      <td>09/09/2020</td>
                      <td>0000000223</td>
                      <td>Savings</td>
                      <td class="text-danger">&#8358; {{ formatAmount(500000) }}</td>
                      <td class="text-success">&#8358; {{ formatAmount(500000) }}</td>
                      <td>John Doe</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="lines"></div>

          <div class="account-containe mt-5">
            <div class="dashboard-title row mb-0">
              <div class="col-12">
                <p class="mb-3 transaction-title">Equity</p>
                <div class="recent-transactions table-responsive">
                  <table>
                    <tr>
                      <th>Date</th>
                      <th>Account</th>
                      <th>Description</th>
                      <th>Debit</th>
                      <th>Credit</th>
                      <th>Balance</th>
                    </tr>

                    <tr v-for="(transaction, index) in 5" :key="index">
                      <td>09/09/2020</td>
                      <td>0000000223</td>
                      <td>Savings</td>
                      <td class="text-danger">&#8358; {{ formatAmount(500000) }}</td>
                      <td class="text-success">&#8358; {{ formatAmount(500000) }}</td>
                      <td>John Doe</td>
                    </tr>
                  </table>
                </div>
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
  name: "BalanceSheet",
  methods: {
    formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    }
  },
  mounted() {
    this.$store.dispatch("loan");
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
</style>
