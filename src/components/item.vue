<template>
  <div class="item d-flex align-items-center flex-column justify-content-center">
    <router-link :to="{ name: 'Product', params: { id: product.id }}" class="img"
      ><img :src="product.image" alt="" />
    </router-link>
    <router-link :to="{ name: 'Product', params: { id: product.id }}"
      ><div class="title">{{ product.title }}</div>
    </router-link>
    <div class="price">{{ product.price }} USD</div>
    <button @click="addToCart(product.id)">До кошика</button>
    
  </div>
</template>

<script>
export default {
  props: ["product"],
          methods:{
            addToCart(product_id){
                var item = {
                    count:1,
                    id: product_id,
                }
                window.localStorage.setItem('cart', JSON.stringify(item));
                this.openModal()
            },
            openModal(){
                this.$bvModal.show('item-added');
            },
        }
};
</script>

<style lang="scss" scoped>
.item {
  margin-top: 50px;

  .img {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
  a {
    text-decoration: none;
    .title {
      padding-left: 20px;
      padding-right: 20px;
      text-align: center;
      margin-top: 37px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #000000;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .price {
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #009d35;
    margin-top: 15px;
  }
  button {
    width: 191px;
    height: 56px;
    background: #ff842c;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    color: #ffffff;
    border: none;
    margin-top: 15px;
    margin-bottom: 50px;
  }
}
</style>