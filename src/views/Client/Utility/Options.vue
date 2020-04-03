/* eslint-disable prettier/prettier */
<template>
  <div class="dashboard">
    <main class="page-content">
      <header class="welcome-text mb-3 ml-2 ml-lg-0">Utility</header>
      <div class="transfer-options">
        <router-link to="utility-mobile">
          <div class="box hvr-grow">
            <div class="box-text">Mobile Top up</div>
            <div class="img-wrapper">
              <img
                src="../../../assets/images/smartphone.svg"
                class="img-fluid box-img"
                width="60px"
                alt
              />
            </div>
          </div>
        </router-link>

        <router-link to="utility-cable">
          <div class="box hvr-grow  box-utility">
            <div class="box-text">Cable Tv</div>
            <div class="img-wrapper img-wrapper-2">
              <img
                src="../../../assets/images/television.svg"
                class="img-fluid box-img box-img-2"
                width="60px"
                alt
              />
            </div>
          </div>
        </router-link>

        <router-link to="utility-ecommerce">
          <div class="box hvr-grow">
            <div class="box-text">Ecommerce</div>
            <div class="img-wrapper img-wrapper-2">
              <img
                src="../../../assets/images/shopping-cart.svg"
                class="img-fluid box-img box-img-2"
                width="60px"
                alt
              />
            </div>
          </div>
        </router-link>

        <router-link to="utility-internet">
          <div class="box hvr-grow box-utility">
            <div class="box-text">Internet Service</div>
            <div class="img-wrapper">
              <img
                src="../../../assets/images/domain.svg"
                class="img-fluid box-img"
                width="60px"
                alt
              />
            </div>
          </div>
        </router-link>

        <div class="cartoon-img-wrapper">
          <img
            src="../../../assets/images/transfer-img.svg"
            alt
            height="200px"
            class="cartoon-img"
          />
        </div>
      </div>

      <!-- <div class="circle-container">
        <div id="circle-1"></div>
        <div id="circle-2"></div>
        <div id="circle-3"></div>
        <div id="circle-4"></div>
      </div>-->
    </main>
  </div>
</template>

<script>
export default {
  name: "Options",
  components: {},
  data() {
    return {};
  },
  computed: {
    image() {
      return "../../../assets/images/circle.svg";
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-primary {
  background: $main-color;
  border: 1px solid $main-color;
  font-family: $SourceSansPro-Regular;
}

.box {
  cursor: pointer;
  .box-img {
    margin-top: 30px;
  }
  .box-img-2 {
    margin-top: 50px;
  }
}
.box-text {
  width: 120px;
  margin: 10px 15px;
  color: #333;
}

.box:hover {
  background: $main-color;
  .box-img {
    filter: invert(12%) sepia(58%) saturate(5930%) hue-rotate(1deg)
      brightness(97%) contrast(114%) !important;
  }
  .box-text {
    color: #fff;
  }
}

.img-wrapper {
  float: right;
  margin-top: 25px;
  margin-right: 20px;
}

.img-wrapper-2 {
  float: right;
  margin-top: 3px;
  margin-right: 20px;
}

// .mt-lg-5 {
//   margin-top: 100px !important;
// }
</style>
