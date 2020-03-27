<template>
  <div class="dashboard">
    <main class="page-content">
      <header class="welcome-text mb-3 ml-2 ml-lg-0">Statement</header>
      <div class="statement-container">
        <!-- back-home -->
        <div class="back-home" style="cursor:pointer"
            @click="$router.go(-1)">
          <span>
            <i class="fal fa-long-arrow-left icon"></i>
          </span>
          <!-- <span><i class="fal fa-arrow-left icon fa-2x"></i></span> -->
          <span
            class="ml-3 back-text"
            >Back to Home</span
          >
        </div>

        <!-- form start -->
        <div class="form-row one mt-3">
          <div class="col-lg-6">
            <span class="select-label">Select Account</span>
            <b-form-select
              v-model="account"
              :options="options"
              class="mt-2"
            ></b-form-select>
          </div>
        </div>

        <div class="form-row two mt-3">
          <div class="col-lg-6">
            <span class="select-label">Posting Date</span>
            <div class="row">
              <div class="col-lg-6">
                <b-form-datepicker
                  v-model="from"
                  class="mb-2 mt-2"
                  placeholder="--From Date--"
                ></b-form-datepicker>
              </div>
              <div class="col-lg-6">
                <b-form-datepicker
                  v-model="to"
                  class="mb-2 mt-2"
                  placeholder="--To Date --"
                ></b-form-datepicker>
              </div>
            </div>
          </div>
        </div>

        <div class="form-row two mt-3">
          <div class="col-lg-6">
            <div class="last-days-wrapper">
              <div class="last-days">
                <span
                  >Last 10 days <i class="fas fa-caret-right ml-2"></i
                ></span>
              </div>
              <div class="last-days">
                <span
                  >Last 30 days <i class="fas fa-caret-right ml-2"></i
                ></span>
              </div>
              <div class="last-days">
                <span
                  >Last 60 days <i class="fas fa-caret-right ml-2"></i
                ></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit -->
        <div class="form-row one mt-3">
          <div class="col-lg-6">
            <input type="submit" value="Search" class="btn btn-primary" />
          </div>
        </div>
        <!-- Form end -->

        <!-- Table  start -->
        <div class="table-responsive mt-3">
          <table>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Reference Number</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>

            <tr v-for="one in 10" :key="one">
              <td>02/03/2020</td>
              <td>Deposit</td>
              <td>34bd123456</td>
              <td class="text-success">&#8358;75,000</td>
              <td>&#8358;105,000</td>
            </tr>
          </table>
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
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Statement",
  components: {},
  data() {
    return {
      account: null,
      from: "",
      to: "",
      options: [
        { value: null, text: "Select Account" },
        { value: "a", text: "This is First option" }
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
</style>
