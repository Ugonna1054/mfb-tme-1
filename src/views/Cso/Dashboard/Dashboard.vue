<template>
  <div class="dashboard">
    <Loader :loading="loading" loading-text="please wait..." />
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
            <p class="middle">
              <span v-if="Customers.length < 10">0</span>{{ Customers.length }}
            </p>
            <div class="card-icon">
              <i class="fal fa-user fa-2x mt-1 user-icon"></i>
              <!-- <img
                src="../../../assets/images/loan.svg"
                class="img-fluid box-img"
                alt="loan-icon"
                width="30px"
              /> -->
            </div>
          </div>
          <div class="box">
            <p class="top transaction-title">Total Deposit</p>
            <p class="middle">&#8358;0</p>
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
            <p class="middle">&#8358;0</p>
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
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Account</th>
                    <th>Status</th>
                    <th>Date</th>
                    <!-- <th>Performance Bar</th> -->
                  </tr>

                  <tr
                    v-for="(customer, index) in lastTenCustomers"
                    :key="index"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ customer.firstname }} {{ customer.lastname }}</td>
                    <td>{{ customer.email }}</td>
                    <td>{{ customer.phone }}</td>
                    <td>{{ customer.account.accounts[0].number }}</td>
                    <td>{{ customer.status }}</td>
                    <td>{{ customer.createdAt }}</td>
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
import Loader from "../../../utils/vue-loader/loader.vue";
import { adminService } from "../../../services/AdminServices/admin.services";

export default {
  name: "dashboard",
  components: {
    Loader
  },
  data() {
    return {
      loading: false,
      Customers: []
    };
  },
  computed: {
    //Get the most recently created customers
    lastTenCustomers() {
      let customers = this.Customers;

      if (customers.length >= 10) {
        customers = customers.slice(customers.length - 10);

        return customers.reverse();
      }

      return customers.reverse();
    }
  },
  methods: {
    //Get all users/customers
    getUsers() {
      this.loading = true;
      adminService
        .getUsers()
        .then(res => {
          this.Customers = res;
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },
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
    this.getUsers();
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
  cursor:copy;
}
.link {
  text-decoration: none;
}
.middle-container {
  font-family: $SourceSansPro-Light;
  margin-right: 40px;
}
.user-icon {
  color: $main-color;
  font-size: 25px;
}
</style>
