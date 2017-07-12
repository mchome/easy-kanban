<template>
  <div class="kanban-container">
    <auth :logged_in="logged_in"></auth>
    <div class="kanban-wrapper" v-if="logged_in">
      <filters :filter.sync="filter"></filters>
      <draggable class="boards-container dragscroll" nochilddrag>
        <div class="margin"></div>
        <board v-for="board in kanban_data" :key="board.id" :filter="filter" :board="board"></board>
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
      filter: '',
      kanban_data: [
        {header: 'Todo', data: []},
        {header: 'Doing', data: []},
        {header: 'Done', data: []},
        {header: 'Duplicate', data: []},
        {header: 'Backlog', data: []}
      ]
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
  height: calc(100% - 70px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
  margin-bottom: 6px;
}
.margin {
  min-width: 1rem;
  height: 1px;
}
</style>
