<template>
  <div class="modal_window">
    <b-modal id="item-added" size="md" hide-footer centered hide-header>
      <div class="d-flex align-items-center justify-content-center flex-column">
        <img src="@/assets/checkmark.svg" alt="" />
        <div class="message">Товар в кошику</div>
        <b-button @click="closeModal()">Закрити</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$bvModal.hide("item-added");
    },
  },
};
</script>

<style lang="scss" scoped>
img{
    margin-top: 42px;
}
.message {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
margin-top: 5px;
  color: #000000;
}
button {
    min-width: 100%;
  height: 58px;
  background: #ff842c;
  border-radius: 6px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  margin-top: 46px;
  border: none;
}
</style>