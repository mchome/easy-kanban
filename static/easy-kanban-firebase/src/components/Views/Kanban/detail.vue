<template>
  <div class="detail-container"
      @dragenter.stop
      @dragover.stop
      @mousedown.stop
      @mousemove.stop
      @mouseup.stop
      @pointerdown.stop
      @touchmove.stop
      @touchstart.stop>
    <div class="detail-mask" @click="closeDetail"></div>
    <div class="detail-wrapper">
    </div>
  </div>
</template>

<script>
export default {
  props: ['open'],
  methods: {
    closeDetail: function () {
      this.$emit('update:open', false)
    }
  }
}
</script>


<style>
.detail-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.detail-mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 10;
}
.detail-wrapper {
  position: fixed;
  width: 30%;
  height: 40%;
  min-width: 12rem;
  min-height: 12rem;
  background-color: white;
  z-index: 20;
  box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);
  border-radius: 2px;
}
</style>
