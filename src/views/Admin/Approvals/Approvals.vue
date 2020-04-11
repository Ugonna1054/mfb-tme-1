<template>
  <div class="dashboard">
    <main class="page-content">
      <div class="dashboard">
        <!-- header -->
        <header class="welcome-text mb-3">
          All Items
          <span class="welcome-name ml-2"></span>
        </header>
        <!-- main Card -->
        <div class="account-container px-5">
          <div class="mx-3">
            <b-tabs
              class="ml-n3"
              pills
              no-body
              :active-nav-item-class="current"
            >
              <!-- Accounts approval tab-->
              <b-tab
                class="ml-3 mb-5"
                :title-link-class="active1"
                title="Account Approval"
              >
                <div class="line mt-3"></div>
                <div class="mt-3">
                  <div class="col-12">
                    <div class="top mb-2">
                      <div class="mb-3">Account Request</div>
                      <div>
                        <div class="input-group float-right">
                          <input
                            type="search"
                            placeholder="Search Account"
                            class="form-control"
                          />
                          <div class="input-group-append">
                            <div class="input-group-text">
                              <i class="fa fa-search"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="table-responsive">
                      <table>
                        <tr style="color:whitesmoke" class="table-head">
                          <th>Name</th>
                          <th>Phone Number</th>
                          <th>Email Address</th>
                          <th>Status</th>
                          <th>Details</th>
                        </tr>

                        <tr v-for="(customer, index) in 7" :key="index">
                          <td>
                            John Doe
                          </td>
                          <td>0901119191919</td>
                          <td>jd@yahoo.com</td>
                          <td>Pending</td>
                          <td
                            class="text-primary action"
                            @click="Account(index)"
                          >
                            View
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </b-tab>

              <!-- Transactions approval tab-->
              <b-tab
                class="ml-3 mb-5"
                :title-link-class="active1"
                title="Transactions Approval"
                :active="transaction"
              >
                <div class="line mt-3"></div>
                <div class="mt-3">
                  <div class="col-12">
                    <div class="top mb-2">
                      <div class="mb-3">Transactions</div>
                      <div>
                        <div class="input-group float-right">
                          <input
                            type="search"
                            placeholder="Search Account"
                            class="form-control"
                          />
                          <div class="input-group-append">
                            <div class="input-group-text">
                              <i class="fa fa-search"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="table-responsive">
                      <table>
                        <tr style="color:whitesmoke" class="table-head">
                          <th>Reference</th>
                          <th>Account</th>
                          <th>Amount</th>
                          <th>Agent</th>
                          <th>Status</th>
                          <th>Date</th>
                          <th>Details</th>
                        </tr>

                        <tr v-for="(transaction, index) in 7" :key="index">
                          <td>123456</td>
                          <td>0902929292992</td>
                          <td>&#8358; {{ formatAmount(50000) }}</td>
                          <td>
                            Agent X Black
                          </td>
                          <td>Confirmed</td>
                          <td>09/09/1990</td>
                          <td
                            class="text-primary action"
                            @click="Transaction(index)"
                          >
                            View
                          </td>
                          <!-- <td>
                        <b-progress
                          :value="value"
                          :max="max"
                          show-progress
                          variant="info"
                          animated="true"
                        ></b-progress>
                      </td> -->
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </b-tab>

              <!-- Loan Approval Tab -->
              <b-tab
                class="ml-3"
                :title-link-class="active1"
                title="Loan Approval"
                :active="loan"
              >
                <div class="line mt-3"></div>
                <div class="mt-3">
                  <div class="col-12">
                    <div class="top mb-2">
                      <div class="mb-3">Loan Request</div>
                      <div>
                        <div class="input-group float-right">
                          <input
                            type="search"
                            placeholder="Search Loan"
                            class="form-control"
                          />
                          <div class="input-group-append">
                            <div class="input-group-text">
                              <i class="fa fa-search"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="table-responsive">
                      <table>
                        <tr style="color:whitesmoke" class="table-head">
                          <th>Name</th>
                          <th>Amount</th>
                          <th>Tenor</th>
                          <th>Account</th>
                          <th>Agent</th>
                          <th>Status</th>
                          <th>Date Applied</th>
                          <th>Details</th>
                        </tr>

                        <tr v-for="(loan, index) in 7" :key="index">
                          <td>
                            Jane Doe
                          </td>
                          <td>&#8358; {{ formatAmount(30000) }}</td>
                          <td>3 Month(s)</td>
                          <td>0303030303030</td>
                          <td>
                            Agent L White
                          </td>
                          <!-- <td v-else>Nil</td> -->
                          <td>Declined</td>
                          <td>08/08/2008</td>
                          <td class="text-primary action" @click="Loan(index)">
                            View
                          </td>
                          <!-- <td class="text-danger  action">Delete</td> -->
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </b-tab>

              <!-- Investment Approval Tab -->
              <b-tab
                class="ml-3"
                :title-link-class="active1"
                title="Investment Approval"
                :active="investment"
              >
                <div class="line mt-3 mb-0"></div>
                <div class="mt-3">
                  <div class="col-12">
                    <div class="top mb-2">
                      <div class="mb-3">Investment Request</div>
                      <div>
                        <div class="input-group float-right">
                          <input
                            type="search"
                            placeholder="Search Investment"
                            class="form-control"
                          />
                          <div class="input-group-append">
                            <div class="input-group-text">
                              <i class="fa fa-search"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="recent-transactions table-responsive">
                      <table>
                        <tr style="color:whitesmoke" class="table-head">
                          <th>Name</th>
                          <th>Amount</th>
                          <th>Duration</th>
                          <th>Status</th>
                          <th>Date Applied</th>
                          <th>View</th>
                          <th>Delete</th>
                        </tr>

                        <tr v-for="(one, index) in 9" :key="index">
                          <td>Ubaka Ugonna</td>
                          <td>N 3,000</td>
                          <td>6 Months</td>
                          <td>Pending</td>
                          <td>Something</td>
                          <td class="text-primary action" @click="Investment">
                            View
                          </td>
                          <td class="text-danger  action">Delete</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
//import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "Approvals",
  components: {
    //ValidationObserver,
    //ValidationProvider
  },
  data() {
    return {
      createUser: true,
      manageUser: false,
      loading: false,
      Customers: [],
      Transactions: [],
      Loans: [],
      account: true,
      loan: false,
      transaction: false,
      investment: false
    };
  },
  computed: {
    current() {
      return "current";
    }
  },
  methods: {
    transfer() {
      this.$store.dispatch("transfer");
    },
    formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
    createAccount() {},
    Account(index) {
      let customer = this.Customers[index];
      this.$store.commit("SET_USER_DETAILS", customer);
      this.$router.push("/Admin/Approvals/Details");
    },
    Transaction(index) {
      let transaction = this.Transactions[index];
      this.$store.commit("SET_TRANSACTION_DETAILS", transaction);
      this.$router.push("/Admin/Approvals/Details?p=1");
    },
    Loan(index) {
      let loan = this.Loans[index];
      this.$store.commit("SET_LOAN_DETAILS", loan);
      this.$router.push("/Admin/Approvals/Details?p=2");
    },
    Investment() {
      this.$router.push("/Admin/Approvals/Details?p=3");
    }
  },
  mounted() {
    if (this.routeQuery == 1) return (this.transaction = true);
    if (this.routeQuery == 2) return (this.loan = true);
    if (this.routeQuery == 3) return (this.investment = true);
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
  //justify-content: flex-start;
}
.card-icon {
  margin: 50px 35px;
  width: 100px;
  text-align: center;
  .fa {
    color: $main-color;
  }
}

.submit-btn {
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn-primary {
  background: $main-color;
  border: 1px solid $main-color;
  font-family: $SourceSansPro-Regular;
}

.uploads {
  border: 1px solid rgb(78, 78, 78);
}

.current {
  background: $main-color;
}

.top {
  display: flex;
  justify-content: space-between;
}

.action:hover {
  text-decoration: underline;
  cursor: pointer;
}

.table-head {
  color: #333 !important;
}
</style>
