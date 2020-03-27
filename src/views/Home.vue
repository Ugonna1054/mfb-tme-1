<template>
  <div class="home">
    <div class="page-wrapper chiller-theme toggled">
      <Sidenav1 />
      <router-view>
        <Dashboard />
      </router-view>
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
import $ from "jquery";
import Sidenav1 from "../components/Sidenav/Sidenav1.vue";
import Dashboard from "../views/Client/Dashboard/Dashboard.vue";

export default {
  name: "Home",
  components: {
    Sidenav1,
    Dashboard
  },
  mounted() {
    $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });

    //open and close sidenav
    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });
  }
};
</script>

<style scoped>
</style>
