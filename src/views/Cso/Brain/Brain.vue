<template>
  <div class="brain">
    <div class="page-wrapper chiller-theme toggled">
      <Sidenav2 />
      <Headernav />
      <div class="brain-children">
        <router-view></router-view>
      </div>
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
import Sidenav2 from "../../../components/Sidenav/Sidenav3.vue";
import Headernav from "../../../components/Header/Headernav.vue";

export default {
  name: "Brain",
  components: {
    Sidenav2,
    Headernav
  }
};
</script>

<style scoped></style>
