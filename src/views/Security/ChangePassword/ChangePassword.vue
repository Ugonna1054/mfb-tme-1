<template>
  <div class="login-pag">
    <Loader :loading="loading" loading-text="please wait..." />
    <div class="login-page">
      <div>
        <b-card
          title="Change Password!"
          sub-title="Kindly change your password to continue"
          class="mb-2  card-width"
        >
          <b-card-text>
            <ValidationObserver v-slot="{ passes }">
              <form action="" @submit.prevent="passes(changePassword)">
                <div class="form-group mt-3">
                  <ValidationProvider
                    name="password_"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <label for="password" class="login-label"
                      >Current Password</label
                    >
                    <div class="input-group">
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="fa fa-lock"></i>
                        </div>
                      </div>
                      <input
                        id="password"
                        name="password"
                        v-model="password"
                        placeholder="password"
                        type="password"
                        class="form-control"
                      />
                    </div>
                    <span style="font-size:13px; color:red">
                      <span v-if="errors[0]"><i class="fas fa-ban"></i></span>
                      {{ errors[0] }}</span
                    >
                  </ValidationProvider>
                </div>
                <!-- password -->
                <div class="form-group ">
                  <ValidationProvider
                    name="password"
                    rules="required|min:6"
                    ref="password"
                    v-slot="{ errors }"
                  >
                    <label for="password">New Password</label>
                    <div class="input-group">
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="fa fa-lock"></i>
                        </div>
                      </div>
                      <input
                        v-model="newPassword"
                        type="password"
                        name="password"
                        class="form-control"
                        id="password"
                      />
                    </div>
                    <span style="font-size:13px; color:red">
                      <span v-if="errors[0]"><i class="fas fa-ban"></i></span>
                      {{ errors[0] }}</span
                    >
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <ValidationProvider
                    name="password confirmation"
                    rules="required|confirmed:password"
                    v-slot="{ errors }"
                  >
                    <label for="password">Confirm New Password</label>
                    <div class="input-group">
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="fa fa-lock"></i>
                        </div>
                      </div>
                      <input
                        v-model="password1"
                        name="password confirmation"
                        type="password"
                        class="form-control"
                        id="password1"
                      />
                    </div>
                    <span style="font-size:13px; color:red">
                      <span v-if="errors[0]"><i class="fas fa-ban"></i></span>
                      {{ errors[0] }}</span
                    >
                  </ValidationProvider>
                </div>
                <b-button type="submit" class="login-btn">Change</b-button>
              </form>
            </ValidationObserver>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../utils/vue-loader/loader.vue";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { securityService } from "../../../services/security.services";

export default {
  name: "ChangePassword",
  components: {
    ValidationObserver,
    ValidationProvider,
    Loader
  },
  data() {
    return {
      loading: false,
      password: "",
      newPassword: ""
    };
  },
  methods: {
    async changePassword() {
      this.loading = true;
      await securityService
        .ChangePassword({
          password: this.password,
          newPassword: this.newPassword
        })
        .then(() => {
          this.$toastr.s("Kindly Login", "Password Change Successful");
          this.$router.push("/?path=cp");
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Failed");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.card-width {
  width: 25rem !important;
  max-width: 25rem !important;
}
</style>
