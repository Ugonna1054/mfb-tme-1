module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/css/_variables.scss";
        @import "@/assets/css/_mixins.scss";
        @import "@/assets/css/matrix.scss";
        @import "@/assets/css/responsive.scss";
        @import "@/assets/css/animations.scss";
        @import "@/assets/css/sidebar.scss";
        `
      }
    }
  }
};
