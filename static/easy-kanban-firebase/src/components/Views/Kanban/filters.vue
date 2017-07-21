<template>
  <div class="filters-container">
    <div class="filters-wrapper">
      <i class="material-icons">search</i>
      <input type="text" placeholder="Search" :value="filter" @input="$emit('update:filter', $event.target.value)" spellcheck="false">
    </div>
  </div>
</template>

<script>
export default {
  props: ['filter']
}
</script>

<style>
.filters-container {
  width: 70%;
  height: 3rem;
  background-color: transparent;
  /* box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2); */
  margin-top: -3.25rem;
  margin-left: 3.5rem;
}
.filters-wrapper {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 3rem;
}
.filters-wrapper > i {
  font-size: 1.5rem;
  /* color: rgba(53, 73, 94, 0.5); */
  color: rgba(255, 255, 255, 0.8);
  cursor: default;
}
.filters-wrapper > input {
  margin-left: 0.5rem;
  border: none;
  font-size: 1.3rem;
  /* color: rgba(53, 73, 94, 0.95); */
  color: white;
  width: 70%;
  z-index: 5;
  background-color: transparent;
}
.filters-wrapper > input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.8);
}
.filters-wrapper > input:focus {
  outline: none;
}
</style>
