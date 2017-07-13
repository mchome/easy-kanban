<template>
  <div class="board-container">
    <div class="board-wrapper">
      <div class="board-header">
        <p>{{ board.header }}</p>
        <i class="material-icons">more_vert</i>
      </div>
    </div>
    <div class="margin"></div>
    <!-- <colorpicker></colorpicker> -->
  </div>
</template>

<script>
import colorpicker from '@/components/Common/colorpicker.vue'

export default {
  components: {
    colorpicker
  },
  props: ['filter', 'board'],
  data () {
    return {
    }
  }
}
</script>

<style>
.board-container {
  max-width: 100%;
  display: flex;
  flex-direction: row;
}
.margin {
  width: 1rem;
  height: 1px;
}
.board-wrapper {
  min-width: 16rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  margin: 1rem 0;
  background-color: #47ACA3;
}
.board-header {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
}
.board-header p {
  cursor: pointer;
  margin-left: 1.5rem;
  width: calc(100% - 24px);
}
.board-header i {
  cursor: pointer;
  margin-right: 1rem;
  width: 24px;
}
</style>
