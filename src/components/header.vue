<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <router-link to="/"><img src="@/assets/logo.png" /></router-link>
        </div>
        <div class="col-4 d-flex align-items-center">
          <div class="header__search-input">
            <img src="@/assets/search.svg" />
            <input type="text" placeholder="Пошук" />
            <button class="header__search-action">Шукати</button>
          </div>
        </div>
        <div class="col-5 d-flex align-items-center">
          <ul class="header__menu d-flex align-items-center">
            <li>
              <router-link to="/catalog/all">Каталог</router-link>
            </li>
            <li>
              <router-link to="/payments">Оплата</router-link>
            </li>
            <li>
              <router-link to="/delivery">Доставка</router-link>
            </li>
          </ul>
        </div>
        <div class="col-1 d-flex align-items-center">
          <div class="header__cart">
            <router-link to="/cart">
              <img src="@/assets/cart.svg" alt="" />
              <span v-if="cartHasItem"> 1</span></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return {
        cartHasItem: false,
    }
},
    methods:{
            checkCartItems() {
      var item = window.localStorage.getItem("cart");

      if (item) {
        item = JSON.parse(item);
        this.cartHasItem = true;
        
      }
    },
    },
        mounted(){
            setInterval(() =>{
                this.checkCartItems();
            }, 3000)
        }
};
</script>

<style lang="scss" scoped>
.header {
  background: #000000;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__search-input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 372px;
    height: 31px;
    border-radius: 6px;
    background: #ffffff;

    img {
      padding-left: 7px;
    }
    input {
      border: none;
      padding-left: 10px;
    }
    ::placeholder {
      color: #cccccc;
    }
    *:focus {
      outline: none;
    }
    button {
      border: none;
      margin: 0 0 0 auto;
      height: 31px;
      border-radius: 0 6px 6px 0;
      background: #ff842c;
      color: #ffffff;
      width: 78px;
    }
  }
  &__menu {
    list-style: none;
    margin: 0 0 0 auto;
    padding: 0;
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: #ffffff;
        padding-left: 34px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        &.router-link-exact-active {
          color: #ffffff;
          opacity: 0.5;
        }
      }
    }
  }
  &__cart {
    margin: 0 0 0 auto;

    position: relative;

    span {
      position: absolute;
      z-index: 2;
      background: #ff0000;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
      color: #ffffff;
      border-radius: 50%;
      height: 20px;
      width: 20px;
      text-align: center;
      right: -10px;
      top: -5px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }
  }
}
</style>