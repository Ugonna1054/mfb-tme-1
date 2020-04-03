<template>
  <div class="dashboard">
    <main class="page-content">
      <header class="welcome-text mb-3 ml-2 ml-lg-0">Investment Request</header>

      <div class="statement-container">
        <div class="d-flex justify-content-between flex-wrap mb-3">
          <div>
            <div class="input-group mb-3 mb-md-0">
              <input
                type="search"
                placeholder="Search Investment Requests"
                class="form-control"
              />
              <div class="input-group-append" style="cursor:pointer">
                <span class="input-group-text">
                  <i class="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
          <div
            class="btn btn-primary py-2 mt-3 mt-md-0"
            @click="$router.push('/Investment-precheck')"
          >
            Invest Now
          </div>
        </div>

        <!-- table start -->
        <table class="mt-5">
          <tr style="color:black" class="bg-secondar">
            <th>Amount</th>
            <th>Tenor</th>
            <th>Account</th>
            <th>Agent</th>
            <th>Date Applied</th>
            <th>Status</th>
          </tr>

          <tr v-for="(loan, index) in 5" :key="index">
            <td>&#8358; {{ formatAmount(50000) }}</td>
            <td>2 Month(s)</td>
            <td>0000000000</td>
            <td>
              Agent Black
            </td>
            <!-- <td v-else>Nil</td> -->
            <td>12/03/2020</td>
            <td>Approved</td>
          </tr>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Investment",
  components: {},
  data() {
    return {};
  },
  methods: {
    //format amount
    formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
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
