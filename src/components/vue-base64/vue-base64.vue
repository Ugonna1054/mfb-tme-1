<template>
  <div>
    <div class="vue-base64-file-upload">
      <!-- <img
        v-show="previewImage && !disablePreview"
        :src="previewImage"
        class="img-fluid"
      />-->
      <div :style="wrapperStyles">
        <label class="btn ml-n1 btn-primary btn-file">
          BROWSE
          <input
            type="file"
            :name="name"
            @change="onChange"
            class="mt-3 mt-md-0 mb-2 mb-md-1 small-screen-id"
            :accept="accept"
            style="display:none"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vuebase64",
  props: {
    imageClass: {
      type: String,
      default: "input-amount"
    },
    inputClass: {
      type: String,
      default: ""
    },
    accept: {
      type: String,
      default: "image/png,image/gif,image/jpeg"
    },
    maxSize: {
      type: Number,
      default: 100 // megabytes
    },
    name: {
      type: String
    },
    disablePreview: {
      type: Boolean,
      default: false
    },
    fileName: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Click here to upload image"
    },
    defaultPreview: {
      type: String,
      default: ""
    }
  },
  data: function data() {
    return {
      file: null,
      preview: null,
      visiblePreview: false
    };
  },

  computed: {
    //You can  bind styles like so
    wrapperStyles() {
      return {
        position: "relative",
        width: "100%"
      };
    },
    previewImage() {
      return this.preview || this.defaultPreview;
    }
  },

  methods: {
    onChange(e) {
      let files = e.target.files || e.dataTransfer.files;

      if (!files.length) {
        return;
      }

      let file = files[0];
      let size = file.size && file.size / Math.pow(1000, 2);

      // check file max size
      if (size > this.maxSize) {
        this.$emit("size-exceeded", size);
        return;
      }

      // update file
      this.file = file;
      this.$emit("file", file);

      //convert image to base64
      let reader = new FileReader();

      reader.onload = e => {
        let dataURI = e.target.result;

        if (dataURI) {
          this.$emit("load", dataURI);
          this.preview = dataURI;
        }
      };

      // read blob url from file data
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style lang="scss" scoped>
.vue-base64-file-upload {
  margin: 10px 5px;
}

.img-fluid {
  height: 100px !important;
  margin: 0px 8px !important;
}

.btn-primary {
  background: $main-color;
  border: 1px solid $main-color;
  font-family: $SourceSansPro-Regular;
}
</style>
