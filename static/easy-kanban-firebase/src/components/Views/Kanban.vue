<template>
  <div class="kanban-container">
    <auth :logged_in="logged_in"></auth>
    <div class="kanban-wrapper">
      <filters :filter.sync="filter"></filters>
      <draggable class="boards-container">
        <board v-if="logged_in" :filter="filter"></board>
        <board v-if="logged_in" :filter="filter"></board>
      </draggable>
    </div>
  </div>
</template>

<script>
import auth from './Kanban/auth'
import filters from './Kanban/filters'
import board from './Kanban/board'
import draggable from 'vuedraggable'
export default {
  components: {
    auth,
    board,
    filters,
    draggable
  },
  data () {
    return {
      logged_in: true,
      filter: ''
    }
  }
}
</script>


<style>
.kanban-container {
  height: calc(100vh - 56px);
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #eeeeee;
}
.kanban-wrapper {
  width: calc(100% - 60px);
}
.boards-container {
  width: 100%;
  height: calc(100% - 64px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
</style>
