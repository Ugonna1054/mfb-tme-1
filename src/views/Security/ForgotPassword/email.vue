<template>
  <div class="login-pag">
    <Loader :loading="loading" loading-text="please wait..." />
    <div class="login-page">
      <div>
        <b-card
          title="Reset Password!"
          sub-title="Kindly enter your registered email address"
          class="mb-2  card-width"
        >
          <b-card-text>
            <ValidationObserver v-slot="{ passes }">
              <form action="" @submit.prevent="passes(ResetPassword)">
                <div class="form-group mt-3">
                  <ValidationProvider
                    name="password_"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <label for="email" class="login-label">Email</label>
                    <div class="input-group">
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="fa fa-envelope"></i>
                        </div>
                      </div>
                      <input
                        id="email"
                        name="email"
                        v-model="email"
                        placeholder="email"
                        type="email"
                        class="form-control"
                      />
                    </div>
                    <span style="font-size:13px; color:red">
                      <span v-if="errors[0]"><i class="fas fa-ban"></i></span>
                      {{ errors[0] }}</span
                    >
                  </ValidationProvider>
                </div>

                <b-button type="submit" class="login-btn">Reset</b-button>
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
      email: ""
    };
  },
  methods: {
    async ResetPassword() {
      this.loading = true;
      await securityService
        .SendResetEmail(this.email)
        .then((res) => {
          this.$toastr.s(res.message);
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
