<template>
    <div>
        <div class="container ">
          <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
    <slide>
      <img src="@/assets/Slide.png" alt="">
    </slide>
    <slide>
      <img src="@/assets/Slide.png" alt="">
    </slide>
        <slide>
      <img src="@/assets/Slide.png" alt="">
    </slide>
  </carousel>
  </div>
  
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
    export default {
        components: {
    Carousel,
    Slide
  }
    }
</script>

<style lang="scss" scoped>
.VueCarousel{
    margin-top: 41px;
}
 img{
     width: 100%;
 }
</style>