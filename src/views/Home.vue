<template>
  <div class="home">
    <div class="container">
      <Carousel />
      <div class="col-12 d-flex">
      <div class="col-3" v-for="p in products" :key="p.id">
        <listItem :product="p" />
      </div>
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
    };
  },
  components: {
    Carousel,
    listItem,
  },
  methods: {
    getProducts() {
      fetch("https://fakestoreapi.com/products?limit=4")
        .then((res) => res.json())
        .then((json) => {
          this.products = json;
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
