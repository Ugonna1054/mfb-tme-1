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
        <div class="create-user">
          <div>
            <b-tabs
              class="ml-n3"
              pills
              no-body
              :active-nav-item-class="current"
            >
              <!-- Account approvals tab -->
              <b-tab
                :active="account"
                class="ml-3 mb-5"
                :title-link-class="active1"
                title="Account Approval"
              >
                <div class="mt-5 account-container">
                  <div class="col-12">
                    <div class="mb-2">
                      <div class="mb-3">Account Request Details</div>
                    </div>
                    <div class="table-responsive">
                      <table class="">
                        <tr class="row">
                          <td class="col-6 col-md-2">Name</td>
                          <td class="col-6 col-md-4">
                            John Doe
                          </td>
                          <td class="col-6 col-md-2">Email Address</td>
                          <td class="col-6 col-md-4">johndoe@yahoo.com</td>
                        </tr>
                        <tr class="row">
                          <td class="col-md-2 col-6">Phone Number</td>
                          <td class="col-md-4 col-6">0908181881818</td>
                          <td class="col-md-2 col-6">Account Number</td>
                          <td class="col-md-4 col-6">
                            002020202020
                          </td>
                        </tr>
                        <tr class="row">
                          <td class="col-md-2 col-6">Gender</td>
                          <td class="col-md-4 col-6">Male</td>
                          <td class="col-md-2 col-6">Home Address</td>
                          <td class="col-md-4 col-6">1, amechi street</td>
                        </tr>
                        <tr class="row">
                          <td class="col-md-2 col-6">Date of Birth</td>
                          <td class="col-md-4 col-6">09/06/1999</td>
                          <td class="col-md-2 col-6">Date Applied</td>
                          <td class="col-md-4 col-6">
                            09/09/2000
                          </td>
                        </tr>
                      </table>
                    </div>
                    <!-- Button -->
                    <div class="mt-3 d-flex justify-content-between">
                      <div style="flex-grow:5"></div>
                      <div
                        class="d-flex justify-content-around"
                        style="flex-grow:1"
                      >
                        <div
                          class="btn btn-outline-success"
                          @click="updateApprove"
                        >
                          Approve
                        </div>
                        <div
                          class="btn btn-outline-danger mr-md-2"
                          @click="updateDecline"
                        >
                          Decline
                        </div>
                        <div></div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </b-tab>

              <!-- Transactions approvals tab -->
              <b-tab
                :active="transaction"
                class="ml-3 mb-5"
                :title-link-class="active1"
                title="Transactions Approval"
              >
                <div class="account-container mt-5">
                  <div class="col-12">
                    <div class="top mb-2">
                      <div class="mb-3">Transaction Details</div>
                    </div>
                    <div class="table-responsive">
                      <table>
                        <tr class="row">
                          <td class="col-6 col-md-2">Account Name</td>
                          <td class="col-6 col-md-4">
                            John Doe
                          </td>
                          <td class="col-6 col-md-2">Account Number</td>
                          <td class="col-6 col-md-4">
                            002220202020
                          </td>
                        </tr>
                        <!-- <tr class="row" v-if="transactions.agent">
                          <td class="col-md-2 col-6">Agent</td>
                          <td class="col-md-4 col-6">
                            {{ transactions.agent.firstname }}
                            {{ transactions.agent.lastname }}
                          </td>
                          <td class="col-md-2 col-6">Amount</td>
                          <td class="col-md-4 col-6">
                            &#8358; {{ formatAmount(transactions.amount) }}
                          </td>
                        </tr> -->
                        <tr class="row">
                          <td class="col-md-2 col-6">Date</td>
                          <td class="col-md-4 col-6">
                            09/09/2009
                          </td>
                          <td class="col-md-2 col-6">Reference</td>
                          <td class="col-md-4 col-6">
                            123456
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="mt-3 d-flex justify-content-between">
                      <div style="flex-grow:5"></div>
                      <div
                        class="d-flex justify-content-around"
                        style="flex-grow:1"
                      >
                        <div
                          class="btn btn-outline-success"
                          @click="updateApproveT"
                        >
                          Approve
                        </div>
                        <div
                          class="btn btn-outline-danger mr-md-2"
                          @click="updateDeclineT"
                        >
                          Decline
                        </div>
                        <div></div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </b-tab>

              <!-- Loan Approval Tab -->
              <b-tab
                class="ml-3"
                :active="loan"
                :title-link-class="active1"
                title="Loan Approval"
              >
                <div class="account-container mt-5">
                  <div class="col-12">
                    <div class="top mb-2">
                      <div class="mb-3">Loan Request Details</div>
                    </div>
                    <div class="table-responsive">
                      <table>
                        <tr class="row">
                          <td class="col-6 col-md-2">Name</td>
                          <td class="col-6 col-md-4">
                            John Doe
                          </td>
                          <td class="col-6 col-md-2">Email Address</td>
                          <td class="col-6 col-md-4">john doe@yahoo.com</td>
                        </tr>
                        <tr class="row">
                          <td class="col-md-2 col-6">Phone Number</td>
                          <td class="col-md-4 col-6">09018181818</td>
                          <td class="col-md-2 col-6">Account Number</td>
                          <td class="col-md-4 col-6">002020202020</td>
                        </tr>
                        <tr class="row">
                          <td class="col-md-2 col-6">Loan Amount</td>
                          <td class="col-md-4 col-6">
                            &#8358; {{ formatAmount(50000) }}
                          </td>
                          <td class="col-md-2 col-6">Tenor</td>
                          <td class="col-md-4 col-6">5</td>
                        </tr>
                        <tr class="row">
                          <td class="col-md-2 col-6">Loan Purpose</td>
                          <td class="col-md-4 col-6">to flex</td>
                          <td class="col-md-2 col-6">Agent</td>
                          <td class="col-md-4 col-6">
                            Agent X Black
                          </td>
                          <!-- <td v-else>Nil</td> -->
                        </tr>
                        <tr class="row">
                          <td class="col-md-2 col-6">Date Applied</td>
                          <td class="col-md-4 col-6">
                            08/09/2002
                          </td>
                          <td class="col-md-2 col-6">Status</td>
                          <td class="col-md-4 col-6">Pending</td>
                        </tr>
                      </table>
                    </div>
                    <div class="mt-3 d-flex justify-content-between">
                      <div style="flex-grow:5"></div>
                      <div
                        class="d-flex justify-content-around"
                        style="flex-grow:1"
                      >
                        <div
                          class="btn btn-outline-success"
                          @click="updateApproveL"
                        >
                          Approve
                        </div>
                        <div
                          class="btn btn-outline-danger mr-md-2"
                          @click="updateDeclineL"
                        >
                          Decline
                        </div>
                        <div></div>
                      </div>
                      <div></div>
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
                <div class="account-container mt-5">
                  <div class="col-12">
                    <div class="top mb-2">
                      <div class="mb-3">Investment Request Details</div>
                      <div></div>
                    </div>
                    <div class="recent-transactions table-responsive">
                      <table class="table1">
                        <tr class="row">
                          <td class="col-6 col-md-2">Name</td>
                          <td class="col-6 col-md-4">Ugonna Ubaks</td>
                          <td class="col-6 col-md-2">Email Address</td>
                          <td class="col-6 col-md-4">
                            Transgehhhnnr@gmail.com
                          </td>
                        </tr>
                        <tr class="row">
                          <td class="col-md-2 col-6">Phone Number</td>
                          <td class="col-md-4 col-6">09093939333</td>
                          <td class="col-md-2 col-6">Account Number</td>
                          <td class="col-md-4 col-6">636363636</td>
                        </tr>
                        <tr class="row">
                          <td class="col-md-2 col-6">Gender</td>
                          <td class="col-md-4 col-6">Ugonna Ubaks</td>
                          <td class="col-md-2 col-6">Home Address</td>
                          <td class="col-md-4 col-6">1, Amechi street</td>
                        </tr>
                        <tr class="row">
                          <td class="col-md-2 col-6">Date of Birth</td>
                          <td class="col-md-4 col-6">July, 13 2020</td>
                          <td class="col-md-2 col-6">Date Applied</td>
                          <td class="col-md-4 col-6">Sept, 20, 2019</td>
                        </tr>
                      </table>
                    </div>
                    <div class="mt-3 d-flex justify-content-between">
                      <div style="flex-grow:5"></div>
                      <div
                        class="d-flex justify-content-around"
                        style="flex-grow:1"
                      >
                        <div class="btn btn-outline-success">Approve</div>
                        <div class="btn btn-outline-danger mr-md-2">
                          Decline
                        </div>
                        <div></div>
                      </div>
                      <div></div>
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
  name: "Details",
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
    },
    active1() {
      return "disabled";
    },
    routeQuery() {
      return this.$route.query.p;
    }
  },
  methods: {
    transfer() {
      this.$store.dispatch("transfer");
    },
    utility() {
      this.$store.dispatch("utility");
    },
    formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
    createAccount() {},
    Account() {
      //let customer = this.Customers[index];
      //this.$store.commit("SET_USER_DETAILS", customer);
      this.$router.push("/Admin/Approvals/Details");
    },
    Transaction() {
      // let transaction = this.Transactions[index];
      // this.$store.commit("SET_TRANSACTION_DETAILS", transaction);
      this.$router.push("/Admin/Approvals/Details?p=1");
    },
    Loan() {
      //let loan = this.Loans[index];
      //this.$store.commit("SET_LOAN_DETAILS", loan);
      this.$router.push("/Admin/Approvals/Details?p=2");
    },
    Investment() {
      this.$router.push("/Admin/Approvals/Details?p=3");
    },

    updateApprove() {},
    updateDecline() {},
    updateApproveT() {},
    updateDeclineT() {},
    updateApproveL() {},
    updateDeclineL() {},
    updateApproveI() {},
    updateDeclineI() {}
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

.table-responsive {
  padding: 0px 15px !important;
  //overflow: hidden;
}
</style>
