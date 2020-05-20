<template>
  <div class>
    <Loader :loading="loading" loading-text="please wait..." />
    <!-- header -->
    <div class="main-wrapper-1">
      <header>
        <div>
          <b-navbar type="dark" class="main-wrapper" variant>
            <b-navbar-brand href="#">
              <img
                src="../../assets/images/logo2.png"
                class="d-inline-block align-to img-fluid-home"
                alt="logo"
                width="60px"
              />
              <!-- <span>BootstrapVue</span> -->
            </b-navbar-brand>

            <b-navbar-toggle
              class="nav-toggle"
              target="nav-collapse"
            ></b-navbar-toggle>

            <b-collapse id="nav-collapse" class is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto nav-bg">
                <b-nav-item class="nav-item" href="#">
                  <span class="text-color">About</span>
                </b-nav-item>
                <b-nav-item class="nav-item" href="#" @click="ShowLogin = true">
                  <span class="text-color">Login</span>
                </b-nav-item>
                <b-nav-item
                  class="nav-item"
                  href="#"
                  @click="ShowSignup = true"
                >
                  <span class="text-color join">
                    Join
                    <span class="d-none d-sm-inline">Platform</span>
                  </span>
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </header>

      <div class="body main-wrapper">
        <div class="about-tme row">
          <div class="col-md-6 about-wrapper1">
            <p class="about-text h5">About TME</p>

            <p class>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              nihil voluptatum, rem pariatur modi aperiam, placeat dolorum
              repudiandae adipisci quo temporibus expedita, et quaerat
              repellendus commodi accusantium asperiores dolorem debitis?
            </p>
            <p class>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              nihil voluptatum, rem pariatur modi aperiam, placeat dolorum
              repudiandae adipisci quo temporibus expedita, et quaerat
              repellendus commodi accusantium asperiores dolorem debitis?
            </p>
            <p class>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              nihil voluptatum, rem pariatur modi aperiam, placeat dolorum
              repudiandae adipisci quo temporibus expedita, et quaerat
              repellendus commodi accusantium asperiores dolorem debitis?
            </p>
            <p class>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              nihil voluptatum, rem pariatur modi aperiam, placeat dolorum
              repudiandae adipisci quo temporibus expedita, et quaerat
              repellendus commodi accusantium asperiores dolorem debitis?
            </p>
          </div>

          <div class="col-md-6 about-wrapper1">
            <p class="about-text h5">About TME</p>

            <p class>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              nihil voluptatum, rem pariatur modi aperiam, placeat dolorum
              repudiandae adipisci quo temporibus expedita, et quaerat
              repellendus commodi accusantium asperiores dolorem debitis?
            </p>
            <p class>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              nihil voluptatum, rem pariatur modi aperiam, placeat dolorum
              repudiandae adipisci quo temporibus expedita, et quaerat
              repellendus commodi accusantium asperiores dolorem debitis?
            </p>
            <p class>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              nihil voluptatum, rem pariatur modi aperiam, placeat dolorum
              repudiandae adipisci quo temporibus expedita, et quaerat
              repellendus commodi accusantium asperiores dolorem debitis?
            </p>
            <p class>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              nihil voluptatum, rem pariatur modi aperiam, placeat dolorum
              repudiandae adipisci quo temporibus expedita, et quaerat
              repellendus commodi accusantium asperiores dolorem debitis?
            </p>
          </div>
        </div>
      </div>

      <div class="middle main-wrapper">
        <div class="d-flex justify-content-end">
          <div class>
            <div class="diamond-wrapper">
              <div id="diamond"></div>
            </div>
            <p class="tme-text">
              <span class="big">
                TME
                <span class="online">Online</span>
              </span>
              <br />
              <span class="small">Microfinance Banking Solution</span>
            </p>
          </div>
          <div class>
            <div class="img-wrapper">
              <img
                src="../../assets/images/man.png"
                alt
                class="image-fluid man-img d-none d-sm-block"
              />
            </div>
          </div>
          <div class>
            <img
              src="../../assets/images/city.png"
              class="city-img image-fluid d-none d-sm-block"
              alt
            />
            <img
              src="../../assets/images/man.png"
              class="man-img-1 image-fluid d-block d-sm-none"
              alt
            />
          </div>
        </div>
      </div>

      <!-- Signin modal -->
      <b-modal hide-footer v-model="ShowLogin" size="lg">
        <div class="row">
          <div class="col-lg-6 mt-3">
            <div class="modal-container text-cente">
              <span class="welcome-text h2 px-2">Welcome Back!</span>
              <br />
              <!-- <span class="mt-3 text-center mb-3">Login</span> -->
              <div class="mt-5">
                <form action @submit.prevent="Login">
                  <input
                    type="email"
                    class="form-control mb-4"
                    placeholder="EMAIL"
                    v-model="email"
                    required
                  />
                  <input
                    type="password"
                    class="form-control mb-4"
                    placeholder="PASSWORD"
                    v-model="password"
                    required
                  />
                  <input
                    type="submit"
                    value="LET'S GO"
                    class="btn btn-primary btn-block"
                  />
                </form>
                <p class="text-center mt-5">
                  <router-link class="reset-password" to="ResetEmail"
                    >Forgot Password ?</router-link
                  >
                </p>
              </div>

              <div></div>
            </div>
          </div>
          <div class="col-lg-6 man-col">
            <div class>
              <div class="img-wrapper">
                <img
                  src="../../assets/images/man.png"
                  alt
                  class="image-fluid man-img-2 d-none d-lg-block"
                />
              </div>
            </div>
          </div>
        </div>
      </b-modal>

      <!-- Signup modal -->
      <b-modal hide-footer v-model="ShowSignup" size="lg">
        <div class="row">
          <div class="col-lg-6 mt-3">
            <div class="modal-container">
              <span class="welcome-text px-2">Join Platform!</span>
              <br />
              <!-- <span class="mt-3 text-center mb-3">Login</span> -->
              <div class="mt-5">
                <form action @submit.prevent="Signup">
                  <input
                    type="email"
                    class="form-control mb-4"
                    placeholder="Enter  your email to join"
                  />
                  <p class="transaction-title" style="font-size:13px">
                    A password will be sent to your email, change upon first
                    login!
                  </p>
                  <input
                    type="submit"
                    value="Join Now"
                    class="btn btn-primary btn-block mb-4"
                  />
                </form>
              </div>

              <div></div>
            </div>
          </div>
          <div class="col-lg-6 man-col">
            <div class>
              <div class="img-wrapper">
                <img
                  src="../../assets/images/man.png"
                  alt
                  class="image-fluid man-img-2 d-none d-lg-block"
                />
              </div>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import Loader from "../../utils/vue-loader/loader.vue";

export default {
  name: "Home",
  components: {
    Loader
  },
  data() {
    return {
      ShowLogin: false,
      ShowSignup: false,
      loading: false,
      email: "",
      password: ""
    };
  },
  methods: {
    Login() {
      this.loading = true;
      this.$store
        .dispatch("LOGINUSER", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          window.console.log(res);
          this.$toastr.s("Logged in Succesfully");
          if (res.role == "admin") return this.$router.push("/Admin");
          if (res.role == "cso") return this.$router.push("/Cso");
          if (res.requiresChange == false)
            return this.$router.push("/ChangePassword");
          this.$router.push("/Dashboard");
        })
        .catch(err => {
          this.$toastr.e(err.message || err, "Login Failed!");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    Signup() {
      this.$router.push("/admin");
    }
  },
  mounted() {
    if (this.$route.query.path == "cp") {
      this.ShowLogin = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.img-fluid-home {
  margin-left: 100px;
}
.main-wrapper {
  background: white;
}
.main-wrapper-1 {
  background: white;
  height: auto;
}
.middle {
  height: auto;
  position: relative;
  // border: 2px solid blue;
  z-index: 20;
  background: whitesmoke;
}
.body {
  background: white;
  //height: 100%;
  overflow: hidden;
  width: 100%;
  top: 680px;
  z-index: 45;
  position: absolute;
  margin-right: 100px;
}
.nav-item {
  color: red !important;
}
.nav-toggle {
  background: #333 !important;
}
.text-color {
  color: $main-color;
  font-weight: 600;
}
.join {
  background: $main-color;
  border-radius: 10px;
  padding: 8px 15px;
  color: white;
}
.nav-bg {
  padding: 10px;
}
/* large diamond shape */
.diamond-wrapper {
  position: relative;
  margin-top: 0vh;
  margin-right: -350px;
  z-index: 0;
  width: 50%;
}

#diamond {
  width: 0;
  height: 0;
  border: 500px solid transparent;
  border-bottom-color: $main-color-light;
  position: relative;
  top: -500px;
}
#diamond:after {
  content: "";
  position: absolute;
  z-index: 1;
  left: -500px;
  top: 500px;
  width: 0;
  height: 0;
  border: 500px solid transparent;
  border-top-color: $main-color-light;
}
.man-img {
  height: 70%;
  width: 480px;
  position: relative;
  margin-right: -160px;
  margin-top: -30px;
  z-index: 1;
}
.man-img-1 {
  height: 70%;
  width: 480px;
  position: relative;
  margin-right: 100px;
  margin-top: -30px;
  z-index: 1;
}
.man-img-2 {
  height: 70%;
  width: 370px;
  position: relative;
  margin-right: 100px;
  margin-top: -30px;
  z-index: 1;
}
.man-col {
  background: whitesmoke;
}
// .man-img-1::after {
//   content: "TMEEEEEEEEEEEEEEEE";
//   height: 70%;
//   width: 480px;
//   position: absolute;
//   margin-right: 100px;
//   top: -300px;
//   z-index: 1;
// }
.city-img {
  height: 350px;
  width: 500px;
  margin-right: 200px;
  position: relative;
}
.about-wrapper1 {
  padding: 50px 50px 10px 50px;
}
.about-wrapper2 {
  margin-right: 50px;
}
.about-text {
  border-bottom: 4px solid $main-color;
  width: 120px;
  padding: 0px 10px;
  border-radius: 1px;
}
input[type="submit"] {
  border-radius: 20px;
}
input[type="email"],
input[type="password"] {
  border-radius: 0px;
  border: 0px;
  border-bottom: 2px solid gainsboro !important;
  // outline: none  !important;
}
.reset-password {
  color: $main-color;
  font-size: 14px;
}
input:focus {
  outline: none;
  box-shadow: 0px 0px;
}

.welcome-text {
  font-size: 28px;
}

.tme-text {
  //border: 4px solid red;
  font-family: $SourceSansPro-SemiBold;
  position: absolute;
  width: auto;
  left: 200px;
  z-index: 200;
  top: 32vh;
}
.big {
  font-size: 50px;
  letter-spacing: 1px;
  .online {
    color: $main-color;
  }
}
.small {
  color: #333;
}
</style>
