<template>
  <div class="selector-container">
    <p class="kanban-title">default</p>
    <i class="material-icons">keyboard_arrow_down</i>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.selector-container {
  height: 3.2rem;
  max-height: 3.2rem;
  width: 80%;
  display: flex;
  margin-top: 1rem;
  margin-left: 3rem;
  flex-direction: row;
  align-items: center;
  user-select: none;
}
.selector-container .kanban-title {
  font-size: 1.5rem;
  /* font-weight: lighter; */
  color: #35495E;
  cursor: default;
}
.selector-container i {
  font-size: 1.7rem;
  margin-top: 0.2rem;
  margin-left: 0.8rem;
  cursor: pointer;
}
</style>
