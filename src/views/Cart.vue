<template>
  <div class="cart">
    <div class="container">
      <h1>Кошик замовлень</h1>
      <div class="row d-flex align-items-center justify-content-center">
        <div class="cartHasItems" v-if="cartHasItem">
          <div
            class="
              cart_product
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <div
              class="
                image
                col-2
                d-flex
                align-items-center
                justify-content-center
              "
            >
              <img :src="product.image" alt="" />
            </div>
            <div class="col-8 title">{{ product.title }}</div>
            <div class="col-2 price">{{ product.price }} USD</div>
          </div>
          <div class="d-flex justify-content-center">
            <b-button>Оформити замовлення</b-button>
          </div>
          <h2>Вас також можуть зацікавити</h2>
          <div class="row">
            <div class="col-3" v-for="p in product_by_category" :key="p.id">
              <listItem :product="p" />
            </div>
          </div>
          <div
            class="cart_empty d-flex align-items-center justify-content-center"
            v-if="!cartHasItem"
          >
            <div class="empty_text">
              На жаль, Ви ще нічого не додали до кошика
            </div>
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
      product_id: null,
      product: {},
      cartHasItem: false,
    };
  },
  components: {
    listItem,
  },
  methods: {
    checkCartItems() {
      var item = window.localStorage.getItem("cart");

      if (item) {
        item = JSON.parse(item);
        this.cartHasItem = true;
        this.product_id = item.id;
        this.getProduct();
      }
    },
    getProduct() {
      fetch("https://fakestoreapi.com/products/" + this.product_id)
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
  },
  mounted() {
    this.checkCartItems();
  },
};
</script>

<style lang="scss" scoped>
.cart {
  margin-bottom: 70px;
  h1 {
    margin-top: 41px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #000000;
  }
  .cartHasItems {
    margin-top: 39px;

    .cart_product {
      background: #f5f5f5;
      border-radius: 6px;
      height: 193px;
      min-width: 100%;
      .image {
        height: 164px;

        margin-left: 10px;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      .title {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #000000;
        margin-left: 23px;
      }
      .price {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        color: #009d35;
      }
    }
    button {
      width: 372px;
      height: 56px;
      margin-top: 31px;
      background: #ff842c;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
      border-radius: 6px;
      border: none;
    }
    h2 {
      margin-top: 100px;
      text-align: left;
    }
  }
  .cart_empty {
    width: 542px;
    height: 54px;

    background: rgba(255, 168, 0, 0.21);
    border-radius: 6px;
    margin-top: 35px;
    .empty_text {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 26px;

      text-align: center;
      color: #ff842c;
    }
  }
}
</style>