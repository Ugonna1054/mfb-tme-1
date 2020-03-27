<template>
  <div class="dashboard">
    <main class="page-content">
      <header class="welcome-text mb-3 ml-2 ml-lg-0">Beneficiary</header>
      <div class="statement-container">
        <!-- back-home -->
        <div class="back-home" style="cursor:pointer" @click="$router.go(-1)">
          <span>
            <i class="fal fa-long-arrow-left icon"></i>
          </span>
          <!-- <span><i class="fal fa-arrow-left icon fa-2x"></i></span> -->
          <span class="ml-3 back-text">Back to Home</span>
        </div>

        <!-- form start -->
        <div class="form-row one mt-3">
          <div class="col-lg-5">
            <span class="select-label">Beneficiary Name</span>
            <b-form-input
              v-model="name"
              placeholder="Name"
              class="mt-2"
            ></b-form-input>
          </div>
          <div class="col-lg-2"></div>
          <div class="col-lg-5">
            <span class="select-label">Beneficiary Bank</span>
            <b-form-select
              v-model="bank"
              :options="options"
              class="mt-2"
            ></b-form-select>
          </div>
        </div>

        <div class="form-row one mt-3">
          <div class="col-lg-5">
            <span class="select-label">Beneficiary Account</span>
            <b-form-input
              v-model="account"
              placeholder="Account"
              class="mt-2"
            ></b-form-input>
          </div>
        </div>

        <!-- Submit -->
        <div class="form-row one mt-3">
          <div class="col-lg-6">
            <input type="submit" value="Add" class="btn btn-primary" />
          </div>
        </div>
        <!-- Form end -->

        <div class="saved-beneficiaries mt-5">
          <b-input-group>
            <span class="text">Saved Beneficiaries</span>
          </b-input-group>
          <b-input-group class="d-none d-lg-block">
            <div></div>
          </b-input-group>
          <b-input-group>
            <template v-slot:prepend>
              <b-input-group-text>
                <i class="fad fa-search"></i>
              </b-input-group-text>
            </template>
            <b-form-input placeholder="Search"></b-form-input>
          </b-input-group>
        </div>
        <!-- Table  start -->
        <div class="table-responsive mt-3">
          <table>
            <tr>
              <th>Name</th>
              <th>Account Number</th>
              <th>Bank</th>
              <th>Delete</th>
            </tr>

            <tr v-for="one in 10" :key="one">
              <td>John Doe</td>
              <td>0120102010</td>
              <td>34bd123456</td>
              <td style="color:crimson">
                <i class="fad fa-trash"></i>
              </td>
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
  name: "Beneficiary",
  components: {},
  data() {
    return {
      name: "",
      account: "",
      bank: null,
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

.saved-beneficiaries {
  display: flex;
  justify-content: space-between;
  .text {
    font-family: $SourceSansPro-Regular;
  }
}
</style>
