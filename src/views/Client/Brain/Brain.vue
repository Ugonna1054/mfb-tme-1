<template>
  <div class="brain">
    <div class="page-wrapper chiller-theme toggled">
      <Sidenav1 />
      <Headernav />
      <div class="brain-children">
        <router-view></router-view>
      </div>
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
import Sidenav1 from "../../../components/Sidenav/Sidenav1.vue";
import Headernav from "../../../components/Header/Headernav.vue";

export default {
  name: "Brain",
  components: {
    Sidenav1,
    Headernav
  }
};
</script>

<style scoped></style>
