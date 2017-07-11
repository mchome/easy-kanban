<template>
  <div class="board-container">
    <div class="board-wrapper">
      <div class="board-header">
        <p>{{ board_header }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['filter'],
  data () {
    return {
      board_header: 'aaaaa',
      board: []
    }
  }
}
</script>

<style>
.board-container {
  width: 20%;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  margin: 1rem;
}
.board-wrapper {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
