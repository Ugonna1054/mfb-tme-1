<template>
  <div class="dashboard">
    <Loader :loading="loading" loading-text="please wait..." />
    <main class="page-content">
      <div class="dashboard">
        <!-- header -->
        <header class="welcome-text mb-3">
          User Management
          <span class="welcome-name ml-2"></span>
        </header>

        <!-- main Card -->
        <div class="middle-container">
          <div
            class="box"
            @click="
              createUser = true;
              manageUser = false;
            "
          >
            <div class="card-icon">
              <i class="fa fa-user fa-2x mb-2"></i>
              <div class="transaction-title">Create User</div>
            </div>
          </div>
          <div
            class="box"
            @click="
              createUser = false;
              manageUser = true;
            "
          >
            <div class="card-icon">
              <i class="fa fa-user-cog fa-2x mb-2"></i>
              <div class="transaction-title">Manage User</div>
            </div>
            <!-- <p class="top transaction-title">Total Deposit</p>
            <p class="middle">&#8358;170,000</p>
            <div class="card-icon">
              <img
                src="../../../assets/images/invest.svg"
                class="img-fluid box-img"
                alt="loan-icon"
                width="30px"
            />-->
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div class="account-container mt-5">
          <!-- Create User Tab start -->
          <b-tabs pills :active-nav-item-class="current" v-if="createUser">
            <!-- Agent Tab -->
            <b-tab title-link-class title="Agent">
              <!-- <div class="line mb-3 mt-2"></div> -->
              <div class="mt-5">
                <ValidationObserver v-slot="{ passes }">
                  <form @submit.prevent="passes(createAccount)">
                    <div class="containe tab-con">
                      <div class="row">
                        <div class="col-md-8">
                          <div class="row">
                            <!-- Firstname -->
                            <div class="col-md-6 mb-3">
                              <ValidationProvider
                                name="firstname"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <label for="v">
                                  First Name
                                  <span class="text-danger">*</span>
                                </label>
                                <div class="input-group">
                                  <input
                                    type="text"
                                    v-model="firstname"
                                    class="form-control"
                                    placeholder
                                    name="firstname"
                                  />
                                </div>
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>

                            <!-- Midlename -->
                            <div class="div3i col-md-6 mb-3">
                              <ValidationProvider
                                name="middlename"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <label for="v">
                                  Middle Name
                                  <span class="text-danger">*</span>
                                </label>
                                <div class="input-group">
                                  <input
                                    type="text"
                                    v-model="middlename"
                                    class="form-control"
                                    placeholder
                                    name="middlename"
                                  />
                                </div>
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>
                          </div>
                          <div class="row">
                            <!-- Last Name -->
                            <div class="col-md-6 mb-3">
                              <ValidationProvider
                                name="lastname"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <label for="v">
                                  Last Name
                                  <span class="text-danger">*</span>
                                </label>
                                <div class="input-group">
                                  <input
                                    type="text"
                                    v-model="lastname"
                                    class="form-control"
                                    placeholder
                                    name="lastname"
                                  />
                                </div>
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>
                            <!-- Phone Number -->
                            <div class="div3i col-md-6 mb-3">
                              <ValidationProvider
                                name="phone"
                                rules="required|min:11"
                                v-slot="{ errors }"
                              >
                                <label for="v">
                                  Phone Number
                                  <span class="text-danger">*</span>
                                </label>
                                <div class="input-group">
                                  <input
                                    type="number"
                                    v-model="phone"
                                    class="form-control"
                                    placeholder
                                    name="phone"
                                  />
                                </div>
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>
                          </div>
                          <!-- Email -->
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <ValidationProvider
                                name="email"
                                rules="required|email"
                                v-slot="{ errors }"
                              >
                                <label for="v">
                                  Email
                                  <span class="text-danger">*</span>
                                </label>
                                <div class="input-group">
                                  <input
                                    type="email"
                                    v-model="email"
                                    class="form-control"
                                    placeholder
                                    name="email"
                                  />
                                </div>
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>
                            <!-- password -->
                            <div class="form-group col-md-6 col-sm-12">
                              <ValidationProvider
                                name="password"
                                rules="required|min:6"
                                ref="password"
                                v-slot="{ errors }"
                              >
                                <label for="password">Password</label>
                                <input
                                  v-model="password"
                                  type="password"
                                  name="password"
                                  class="form-control"
                                  id="password"
                                />
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>
                            <div class="form-group col-md-6 col-sm-12">
                              <ValidationProvider
                                name="password confirmation"
                                rules="required|confirmed:password"
                                v-slot="{ errors }"
                              >
                                <label for="password">Confirm Password</label>
                                <input
                                  v-model="password1"
                                  name="password confirmation"
                                  type="password"
                                  class="form-control"
                                  id="password1"
                                />
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>
                            <div class="form-group col-md-6 col-sm-12">
                              <ValidationProvider
                                name="role"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <label for="password">Designation</label>
                                <select
                                  name="role"
                                  class="form-control"
                                  v-model="role"
                                  id
                                >
                                  <option value>--Select--</option>
                                  <option value="cso"
                                    >Customer Service Officer (CSO)</option
                                  >
                                  <option value="supervisor">Supervisor</option>
                                </select>
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>

                            <div class="form-group col-md-6 col-sm-12">
                              <ValidationProvider
                                name="role"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                <label for="password">Gender</label>
                                <select
                                  name="role"
                                  class="form-control"
                                  v-model="gender"
                                  id
                                >
                                  <option value>--Select--</option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                </select>
                                <span style="font-size:13px; color:red">
                                  <span v-if="errors[0]">
                                    <i class="fas fa-ban"></i>
                                  </span>
                                  {{ errors[0] }}
                                </span>
                              </ValidationProvider>
                            </div>
                          </div>

                          <!-- Address -->
                          <!-- <div class="row">
                            <div class="col-12">
                              <div class="div1i mb-3">
                                <ValidationProvider
                                  name="address"
                                  rules="required"
                                  v-slot="{ errors }"
                                >
                                  <label for="v">
                                    Current Address
                                    <span class="text-danger">*</span>
                                  </label>
                                  <div class="input-group">
                                    <textarea
                                      type="text"
                                      v-model="address"
                                      class="form-control"
                                      placeholder
                                      rows="3"
                                      name="address"
                                    ></textarea>
                                  </div>
                                  <span style="font-size:13px; color:red">
                                    <span v-if="errors[0]">
                                      <i class="fas fa-ban"></i>
                                    </span>
                                    {{ errors[0] }}
                                  </span>
                                </ValidationProvider>
                              </div>
                            </div>
                          </div>-->
                          <!-- <div class="btn btn-info float-right">submit</div> -->
                        </div>

                        <!-- Image uploads -->
                        <div class="col-md-4">
                          <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-7">
                              <div class="div1 mb-3">
                                <span class="mt-md-n4 mb-md-3">
                                  ID Attachment
                                  <span class="text-danger">*</span>
                                </span>
                                <div
                                  class="mb-2 mb-md-0 uploads"
                                  style="height:130px"
                                >
                                  <img class="img-fluid" :src="idCard_" alt />
                                </div>
                                <span style="font-size:13px; color:red"
                                  >maximum file size : 2mb</span
                                >

                                <div class="input-group mt-2">
                                  <ValidationProvider
                                    name="idCard"
                                    rules="required|image|size:2000"
                                    v-slot="{ validate, errors }"
                                  >
                                    <vuebase64
                                      @size-exceeded="onSizeExceeded"
                                      @load="idCard_ = $event"
                                      @file="
                                        idCard = $event;
                                        validate($event);
                                      "
                                      name="idCard"
                                    />
                                    <br />
                                    <span style="font-size:13px; color:red">
                                      <span v-if="errors[0]">
                                        <i class="fas fa-ban"></i>
                                      </span>
                                      {{ errors[0] }}
                                    </span>
                                  </ValidationProvider>
                                </div>
                              </div>
                              <div class="div2">
                                <span class="mt-md-n4 mb-md-3">
                                  Passport
                                  <span class="text-danger">*</span>
                                </span>
                                <div
                                  class="mb-2 mb-md-0 uploads"
                                  style="height:130px"
                                >
                                  <img
                                    class="img-fluid"
                                    :src="displayPicture_"
                                    alt
                                  />
                                </div>
                                <span style="font-size:13px; color:red"
                                  >maximum file size : 2mb</span
                                >

                                <div class="input-group mr-2 mt-2">
                                  <ValidationProvider
                                    name="displayPicture"
                                    rules="required|image|size:2000"
                                    v-slot="{ validate, errors }"
                                  >
                                    <vuebase64
                                      @size-exceeded="onSizeExceeded"
                                      @load="displayPicture_ = $event"
                                      @file="
                                        displayPicture = $event;
                                        validate($event);
                                      "
                                      name="displayPicture"
                                    />
                                    <br />
                                    <span style="font-size:13px; color:red">
                                      <span v-if="errors[0]">
                                        <i class="fas fa-ban"></i>
                                      </span>
                                      {{ errors[0] }}
                                    </span>
                                  </ValidationProvider>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="submit-btn">
                          <b-button
                            type="submit"
                            class="btn mt-3 text-center mr-1 btn-primary"
                            >Create Agent</b-button
                          >
                        </div>
                      </div>
                    </div>
                  </form>
                </ValidationObserver>
              </div>
            </b-tab>
          </b-tabs>
          <!-- Create User tab end -->

          <!-- Manage User Tab start -->

          <b-tabs
            pills
            no-body
            :active-nav-item-class="current"
            v-if="manageUser"
          >
            <!-- Agent Tab -->
            <b-tab title-link-class title="Admin">
              <div class="line mb-3 mt-2"></div>
              <div class>
                <div class="mb-0">
                  <div class="col-12">
                    <div class="top mb-2">
                      <div class="mb-3">Admin</div>
                      <div>
                        <div class="input-group float-right">
                          <input
                            type="search"
                            placeholder="Search Agent"
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
                    <div class="table-responsive mt-3">
                      <table>
                        <tr style="color:#333" class>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>Designation</th>
                          <th>Account Created</th>
                          <!-- <th>Account Created Target</th> -->
                          <th>Delete</th>
                        </tr>

                        <tr v-for="(admin, index) in Admins" :key="index">
                          <td>{{ index + 1 }}</td>
                          <td>{{ admin.firstname }} {{ admin.lastname }}</td>
                          <td>{{ admin.email }}</td>
                          <td>{{ admin.phone }}</td>
                          <td>
                            {{ admin.role.toUpperCase() }}
                          </td>
                          <td>0</td>
                          <!-- <td>300</td> -->
                          <td class="text-danger action">Delete</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>

            <!-- Customer Tab -->
            <b-tab :title-link-class="active1" title="Customer">
              <div class="line mb-3 mt-2"></div>
              <div class="tab-c">
                <div class="mb-0">
                  <div class="col-12">
                    <div class="top mb-2">
                      <div class="mb-3">Customer</div>
                      <div>
                        <div class="input-group float-right">
                          <input
                            type="search"
                            placeholder="Search Customer"
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
                        <tr style="color:#333" class>
                          <th>Name</th>
                          <th>Email Address</th>
                          <th>Phone Number</th>
                          <th>Acount Number</th>
                          <th>Home Address</th>
                          <th>DOB</th>
                          <th>Account Balance</th>
                          <th>Delete</th>
                        </tr>

                        <tr v-for="(customer, index) in Customers" :key="index">
                          <td>
                            {{ customer.firstname }} {{ customer.lastname }}
                          </td>
                          <td>{{ customer.email }}</td>
                          <td>{{ customer.phone }}</td>
                          <td>{{ customer.account.accounts[0].balance }}</td>
                          <td>{{ customer.address }}</td>
                          <td>{{ customer.dob }}</td>
                          <td>
                            &#8358;
                            {{
                              formatAmount(customer.account.accounts[0].balance)
                            }}
                          </td>
                          <td class="text-danger action">Delete</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
          <!-- Manage User Tab end -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { adminService } from "../../../services/AdminServices/admin.services";
import vuebase64 from "../../../components/vue-base64/vue-base64.vue";
import Loader from "../../../utils/vue-loader/loader.vue";

export default {
  name: "User",
  components: {
    ValidationObserver,
    ValidationProvider,
    vuebase64,
    Loader
  },
  data() {
    return {
      createUser: true,
      manageUser: false,
      loading: false,
      firstname: "",
      lastname: "",
      middlename: "",
      gender: "",
      email: "",
      phone: "",
      password: "",
      password1: "",
      idCard: {},
      idCard_: "",
      displayPicture: {},
      displayPicture_: "",
      role: "",
      Admins: [],
      Customers: []
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
    account() {
      this.$store.dispatch("account");
    },
    utility() {
      this.$store.dispatch("utility");
    },
    formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this function automatically adds commas to the value where necessary
    },
    createAccount() {
      this.loading = true;
      adminService
        .createAdmin({
          firstname: this.firstname,
          lastname: this.lastname,
          middlename: this.middlename,
          gender: this.gender,
          email: this.email,
          phone: this.phone,
          password: this.password,
          idCard: this.idCard,
          displayPicture: this.displayPicture,
          role: this.role
        })
        .then(res => {
          this.$toastr.s(res.message, "Successful");
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getAdmins() {
      adminService
        .getAdmins()
        .then(res => {
          this.Admins = res;
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getUsers() {
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
    onSizeExceeded() {
      return;
    }
  },
  mounted() {
    this.$store.dispatch("home");
    this.getAdmins();
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
</style>
