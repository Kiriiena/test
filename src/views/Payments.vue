<template>
  <div class="payments">
    <div class="container">
      <h1>Оплата</h1>
      <textScreen />
    </div>
  </div>
</template>

<script>
import textScreen from "@/components/text.vue";
export default {
  components: {
    textScreen,
  },
};
</script>

<style lang="scss" scoped>
h1{
    margin-top: 81px;
}
</style>