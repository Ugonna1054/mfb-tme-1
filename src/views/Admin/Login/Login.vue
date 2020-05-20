<template>
  <div>
    <Loader :loading="loading" loading-text="please wait..." />
    <div class="login-page">
      <div class="logo">
        <div class="logo_image_wrapper">
          <img
            class="logo-image"
            src="../../../assets/images/logo1.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <b-card
          title="Welcome Back!"
          sub-title="Login to your profile"
          class="mb-2  card-width"
        >
          <b-card-text>
            <ValidationObserver v-slot="{ passes }">
              <form action="" @submit.prevent="passes(login)">
                <div class="form-group mt-3">
                  <ValidationProvider
                    name="email"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <label for="email" class="login-label"
                      >Email or Phone</label
                    >
                    <div class="input-group">
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="fas fa-user"></i>
                        </div>
                      </div>
                      <input
                        name="email"
                        id="email"
                        v-model="email"
                        placeholder="Email or Phone Number"
                        type="text"
                        class="form-control"
                      />
                    </div>
                    <span style="font-size:13px; color:red">
                      <span v-if="errors[0]"><i class="fas fa-ban"></i></span>
                      {{ errors[0] }}</span
                    >
                  </ValidationProvider>
                </div>
                <div class="form-group mt-3">
                  <ValidationProvider
                    name="password"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <label for="password" class="login-label">Password</label>
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
                <b-button type="submit" class="login-btn">Login</b-button>
              </form>
            </ValidationObserver>
          </b-card-text>
          <div class="outer-form">
            <div class="forgot-password">
              <p class="h6">Forgot password?</p>
              <p>
                click
                <span class="here" @click="$router.push('/ResetPassword/email')"
                  >here</span
                >
                to reset
              </p>
            </div>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import Loader from "../../../utils/vue-loader/loader.vue";

export default {
  name: "Login",
  components: {
    ValidationObserver,
    ValidationProvider,
    Loader
  },
  data() {
    return {
      email: "",
      password: "",
      loading: false
    };
  },
  methods: {
    async login() {
      this.loading = true;
      await this.$store
        .dispatch("LOGIN", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          window.console.log(res);
          this.$toastr.s("Logged in Succesfully");
          if (res.role == "admin") return this.$router.push("/Admin");
          if (res.role == "cso") return this.$router.push("/Cso");
          if (res.requiresChange === "false")
            return this.$router.push("/ChangePassword");
          this.$router.push("/Dashboard");
        })
        .catch(err => {
          this.$toastr.e(err.message, "Login Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style></style>
