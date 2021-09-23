<template>
  <div id="app">
    <div id="nav">
      <Header/>
      
      
    </div>
    <router-view/>
    <Footer/>
    <cartModal/>
  </div>
</template>
<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import cartModal from "@/components/modal.vue";
export default ({
  components: {
    Header,
    Footer,
    cartModal
  }

})
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
</style>
