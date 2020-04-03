<template>
  <div class="main-container">
    <Loader :loading="loading" loading-text="please wait..." />
    <Headernav johndoe="Client" />
    <Sidenav />
    <div class="create-user">
      <div class="user-title mb-3 px-3">Loan Request</div>
      <div class="user-title">
        <div class="recent-transactions table-responsive tab-contents">
          <div class="d-flex justify-content-between flex-wrap mb-3">
            <div>
              <div class="input-group mb-3 mb-md-0">
                <input
                  type="search"
                  placeholder="Search Loan Requests"
                  class="form-control"
                />
                <div class="input-group-append" style="cursor:pointer">
                  <span class="input-group-text">
                    <i class="fa fa-search"></i
                  ></span>
                </div>
              </div>
            </div>
            <!-- </div> -->
            <div
              class="btn btn-info py-2 mt-3 mt-md-0"
              @click="$router.push('/Loan/Precheck')"
            >
              Apply for Loan
            </div>
          </div>

          <table>
            <tr style="color:whitesmoke" class="bg-secondary">
              <th>Amount</th>
              <th>Tenor</th>
              <th>Account</th>
              <th>Agent</th>
              <th>Date Applied</th>
              <th>Status</th>
            </tr>

            <tr v-for="(loan, index) in Loans" :key="index">
              <td>&#8358; {{ formatAmount(loan.amount) }}</td>
              <td>{{ loan.tenor }} Month(s)</td>
              <td>{{ loan.account }}</td>
              <td v-if="loan.agent">
                {{ loan.agent.firstname }} {{ loan.agent.lastname }}
              </td>
              <td v-else>Nil</td>
              <td>{{ truncString(moment(loan.createdAt)) }}</td>
              <td>{{ loan.status }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "../../../components/SideNav/SideNav2.vue";
import Headernav from "../../../components/HeaderNav/HeaderNav1.vue";
import Loader from "../../../utils/vue-loader/loader.vue";
import { clientService } from "../../../services/ClientServices/client.services";
import moment from "moment";

export default {
  name: "Loan",
  components: {
    Sidenav,
    Headernav,
    Loader
  },
  data() {
    return {
      loading: true,
      Loans: []
    };
  },
  methods: {
    //format amount
    formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
    //moment
    moment(date) {
      return moment(date);
    },
    //truncate string
    truncString(str) {
      return str.toString().substring(0, 25);
    },
    //get all loan  requests
    async getLoan() {
      this.loading = true;
      await clientService
        .getLoan()
        .then(res => {
          this.Loans = res;
          this.$toastr.s("Fetched Succesfully");
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  mounted() {
    this.getLoan();
  }
};
</script>

<style lang="scss" scoped>
.tab-contents {
  max-height: 470px;
}

.btn-info {
  background: $background-color;
  border-color: $background-color;
}
</style>
