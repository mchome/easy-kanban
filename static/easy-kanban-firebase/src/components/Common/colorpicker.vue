<template>
  <div class="colorpicker-container"
      @dragenter.stop
      @dragover.stop
      @mousedown.stop
      @mousemove.stop
      @mouseup.stop
      @pointerdown.stop
      @touchmove.stop
      @touchstart.stop>
    <div class="picker-mask"></div>
    <div class="picker-wrapper">
      <div class="picker-header">
        <p>Select a color:</p>
      </div>
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
.colorpicker-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.picker-mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 10;
}
.picker-wrapper {
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
.picker-header {
}
.picker-header > p {
  margin-top: 1rem;
  margin-left: 1.5rem;
  font-size: 1.3rem;

}
</style>
