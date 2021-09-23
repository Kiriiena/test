<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div class="title">Товари за категоріями</div>
          <ul class="catalog_catagories">
            <li>
              <router-link
                :to="{ name: 'Catalog', params: { catagory: 'all' } }"
                >Всі товари</router-link
              >
            </li>
            <li v-for="(c, i) in categories" :key="c + i">
              <router-link :to="{ name: 'Catalog', params: { catagory: c } }">{{
                c
              }}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-9 ">
          <div class="title-left">
              <span v-if="currentCategory == 'all'">Всі товари </span>
              <span v-else> {{currentCategory}}</span>
          </div>
          <div class="products  d-flex flex-wrap" >
            <div class="col-4" v-for="p in products" :key="p.id">
        <listItem :product="p" />
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
      categories: [],
      products: [],
    };
  },
  components:{
      listItem,
  },
  computed:{
      currentCategory(){
          return this.$route.params.catagory
      }
  },
  watch:{
      currentCategory:{
          handler(){
                  if (this.currentCategory == 'all'){
        this.getProducts();
    } else {
        this. getProductByCatagory();
    }
          }
      }
  },
  methods: {
    getCategories() {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => {
          this.categories = json;
          
        });
    },
        getProducts() {
      fetch("https://fakestoreapi.com/products?limit=9")
        .then((res) => res.json())
        .then((json) => {
          this.products = json;
        });
    },
        getProductByCatagory() {
      fetch("https://fakestoreapi.com/products/category/" + this.currentCategory)
        .then((res) => res.json())
        .then((json) => (this.products = json));
    },

  },
  mounted() {
    this.getCategories();
    if (this.currentCategory == 'all'){
        this.getProducts();
    } else {
        this. getProductByCatagory();
    }
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  border-bottom: 1px solid #000000;
  margin-top: 80px;
  margin-bottom: 15px;
  padding-bottom: 5px;
}
.catalog_catagories {
  list-style: none;
  padding: 0;
  li {
    padding-bottom: 15px;
    a {
      text-decoration: none;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #000000;
      &.router-link-exact-active {
        font-weight: 900;
      }
    }
  }
}
.title-left {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  margin-top: 70px;
  color: #000000;
}
</style>