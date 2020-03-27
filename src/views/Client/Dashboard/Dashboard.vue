<template>
  <div class="dashboard">
    <main class="page-content">
      <div class="dashboard">
        <!-- header -->
        <header class="welcome-text mb-3">
          Welcome!
          <span class="welcome-name ml-2">Smith O.Brian</span>
        </header>

        <!-- main Card -->
        <div class="container">
          <router-link class="link" to="statement">
            <div class="box box-1 hvr-shrink">
              <img
                src="../../../assets/images/clipboard.png"
                class="img-fluid box-img"
                alt="statement"
              />
              <span class="box-img-text">Statement</span>
            </div>
          </router-link>

          <router-link class="link" to="beneficiary">
            <div class="box box-2 hvr-shrink">
              <img
                src="../../../assets/images/add-user.svg"
                class="img-fluid box-img"
                alt="statement"
              />
              <span class="box-img-text add">Beneficiary</span>
            </div>
          </router-link>

          <router-link class="link" to="transfer">
            <div class="box box-3 hvr-shrink" @click="transfer">
              <img src="../../../assets/images/send.svg" class="img-fluid box-img" alt="transfer" />
              <span class="box-img-text">Transfer</span>
            </div>
          </router-link>

          <router-link class="link" to="#">
            <div class="box box-4 hvr-shrink">
              <img src="../../../assets/images/monitor.svg" class="img-fluid box-img" alt="utility" />
              <span class="box-img-text">Utility</span>
            </div>
          </router-link>

          <router-link class="link" to="account">
            <div class="box box-5 hvr-shrink" @click="account">
              <img src="../../../assets/images/users.png" class="img-fluid box-img" alt="accounts" />
              <span class="box-img-text">Accounts</span>
            </div>
          </router-link>
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
export default {
  name: "dashboard",
  methods: {
    transfer() {
      this.$store.dispatch("transfer");
    },
    account() {
      this.$store.dispatch("account");
    }
  },
  mounted() {
    this.$store.dispatch("home");
  }
};
</script>

<style scoped>
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
</style>
