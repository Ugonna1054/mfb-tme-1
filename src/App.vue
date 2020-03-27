<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { ApiService } from "./services/api.services";
export default {
  name: "App",
  components: {
    //Loader
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState({
      IS_AUTHENTICATED: state => state.User.IS_AUTHENTICATED,
      AUTH_TOKEN: state => state.User.AUTH_TOKEN
    })
  },
  methods: {
    setHeader() {
      if (this.IS_AUTHENTICATED) return ApiService.setHeader(this.AUTH_TOKEN);
    }
  },
  mounted() {
    this.setHeader();
  }
};
</script>

<style lang="scss">
@import url("./assets/fontawesome/css/all.css");
#app {
  background: whitesmoke;
}
</style>
