<template>
  <div class="colorpicker-container">
    <div class="picker-mask"></div>
    <div class="picker-wrapper">
      <div class="picker-header">
        <p>Select a color :</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
  background-color: rgba(0, 0, 0, 0.15);
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
}
.picker-header {
}
.picker-header > p {
  margin-top: 1rem;
  margin-left: 1.5rem;
  font-size: 1.3rem;

}
</style>
