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
  width: 100%;
  height: 4rem;
  background-color: white;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
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
  color: rgba(53, 73, 94, 0.5);
}
.filters-wrapper > input {
  margin-left: 0.5rem;
  border: none;
  font-size: 1.3rem;
  color: rgba(53, 73, 94, 0.95);
  width: 70%;
}
.filters-wrapper > input:focus {
  outline: none;
}
</style>
