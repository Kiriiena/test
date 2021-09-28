<template>
  <div class="home">
    <div class="container">
      <Carousel />
      <div class="col-12 d-flex" v-if="!loading">
         <div class="col-3" v-for="p in products" :key="p.id">
        <listItem :product="p" />
      </div>

      </div>
      <div class="text-center "  v-if="loading">
        <b-spinner variant="warning" style="width: 4rem; height: 4rem;" ></b-spinner>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/vue-carousel.vue";
import listItem from "@/components/item.vue";

export default {
  data() {
    return {
      products: [],
      loading: false,
    };
  },
  components: {
    Carousel,
    listItem,
  },
  methods: {
    getProducts() {
      this.loading = true;
      fetch("https://fakestoreapi.com/products?limit=4")
        .then((res) => res.json())
        .then((json) => {
          this.products = json;
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style lang="scss" scoped>
.text-center{
  margin-bottom: 30px;
  margin-top: 30px;
}
</style>
