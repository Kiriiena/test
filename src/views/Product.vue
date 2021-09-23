<template>
  <div>
    <div class="container">
      <div class="product d-flex">
        <div
          class="
            col-4
            product_image
            d-flex
            align-items-center
            justify-content-center
          "
        >
          <img :src="product.image" alt="" />
        </div>
        <div class="col-8">
          <div class="title">{{ product.title }}</div>
          <div class="price">{{ product.price }} USD</div>
          <b-button @click="addToCart(product.id)">До кошика</b-button>
        </div>
      </div>
      <div class="same_products">
        <h2>Ще товари тієї ж категорії</h2>
        <div class="row">
          <div class="col-3" v-for="p in product_by_category" :key="p.id">
            <listItem :product="p" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import listItem from "@/components/item.vue";
export default {
  data() {
    return {
      product_by_category: [],
      product: {},
    };
  },
  components: {
    listItem,
  },

  methods: {
    getProduct() {
      var product_id = this.$route.params.id;
      fetch("https://fakestoreapi.com/products/" + product_id)
        .then((res) => res.json())
        .then((json) => {
          this.product = json;
          this.getProductByCatagory();
        });
    },
    getProductByCatagory() {
      var category = this.product.category;
      fetch("https://fakestoreapi.com/products/category/" + category)
        .then((res) => res.json())
        .then((json) => (this.product_by_category = json));
    },
    addToCart(product_id) {
      var item = {
        count: 1,
        id: product_id,
      };
      window.localStorage.setItem("cart", JSON.stringify(item));
      this.openModal();
    },
    openModal() {
      this.$bvModal.show("item-added");
    },
  },

  mounted() {
    this.getProduct();
  },
};
</script>

<style lang="scss" scoped>
.product {
  margin-top: 80px;
  .product_image {
    height: 400px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .title {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;

    color: #000000;
  }
  .price {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    color: #009d35;
    margin-top: 18px;
  }
  button {
    width: 377px;
    height: 56px;
    background: #ff842c;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    border: none;
    margin-top: 18px;
  }
}
.same_products {
  h2 {
    margin-top: 100px;
  }
}
</style>