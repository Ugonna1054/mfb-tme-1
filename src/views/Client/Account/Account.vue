<template>
  <div class="dashboard">
    <main class="page-content">
      <header class="welcome-text mb-3 ml-2 ml-lg-0">Account Summary</header>

      <div class="account-container mb-5">
        <div class="row">
          <div class="col-md-10">
            <!-- Table  start -->
            <div class="table-responsive">
              <div class="transaction-title mt-3">Account Balance</div>
              <table>
                <tr class="th-1">
                  <th>Account</th>
                  <th>Account Name</th>
                  <th>Type</th>
                  <th>Available Balance</th>
                  <th>Last Transaction</th>
                </tr>

                <tr v-for="one in 3" :key="one">
                  <td>01010101010</td>
                  <td>John Doe</td>
                  <td>Savings Account</td>
                  <td>&#8358; 40,000</td>
                  <td>&#8358; 10,000 cr</td>
                </tr>
              </table>
            </div>
            <!-- Table  End -->
          </div>
          <div class="col-md-2 table-img">
            <div class="card-icon">
              <img
                src="../../../assets/images/finance.svg"
                alt
                class="img-fluid box-img"
                width="52px"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="middle-container">
        <div class="box">
          <p class="top transaction-title">Loan</p>
          <p class="middle">&#8358;120,000</p>
          <div class="card-icon">
            <img
              src="../../../assets/images/loan.svg"
              class="img-fluid box-img"
              alt="loan-icon"
              width="50px"
            />
          </div>
        </div>
        <div class="box">
          <p class="top transaction-title">Investment</p>
          <p class="middle">&#8358;170,000</p>
          <div class="card-icon">
            <img
              src="../../../assets/images/invest.svg"
              class="img-fluid box-img"
              alt="loan-icon"
              width="50px"
            />
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <!-- Table  start -->
      <div class="last-container">
        <div class="transaction-title mt-3 mb-3 px-3">Recent Transactions</div>
        <div class="account-container account-container-second">
          <div class="table-responsive">
            <table>
              <tr class="table-head mb-3">
                <th>Reference Number</th>
                <th>Account Number</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Agent</th>
                <th>Date</th>
              </tr>

              <tr v-for="one in 10" :key="one">
                <td>3afafafafeadd</td>
                <td>0120102010</td>
                <td>Withdrawal</td>
                <td class="text-danger">&#8358; 20,000</td>
                <td>Agent Black</td>
                <td>03/03/2020</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <!-- Table  End -->

      <!-- Download button -->
      <div class="d-flex justify-content-end">
        <div class="btn btn-primary mt-3">
          Download
          <span>
            <i class="fal fa-download"></i>
          </span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Account",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.btn-primary {
  background: $main-color;
  border: 1px solid $main-color;
  font-family: $SourceSansPro-Regular;
}

.table-img {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.table-head th {
  color: white;
}
.table-head th:first-child {
  border-radius: 10px 0 0 10px !important;
  background: $main-color;
}

.table-head th:nth-child(even),
.table-head th:nth-child(odd) {
  border-radius: 0px 0px 0px 0px;
  background: $main-color;
}

.table-head th:last-child {
  border-radius: 0 10px 10px 0;
  background: $main-color;
}

tr:nth-child(even) {
  background-color: white !important;
}
tr:nth-child(odd) {
  background-color: #e5e5e5 !important;
}
</style>
