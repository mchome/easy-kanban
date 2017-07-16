<template>
  <div class="kanban-container">
    <auth :logged_in="logged_in"></auth>
    <div class="kanban-wrapper" v-if="logged_in">
      <filters :filter.sync="filter"></filters>
      <div class="boards-container">
        <div class="margin"></div>
        <draggable :list="kanban_data" class="dragscroll" nochilddrag>
          <board v-for="board in kanban_data" :key="board.id" :filter="filter" :board="board" :kanban="kanban_data"></board>
        </draggable>
        <!-- <colorpicker></colorpicker> -->
      </div>
    </div>
  </div>
</template>

<script>
import auth from './Kanban/auth'
import filters from './Kanban/filters'
import board from './Kanban/board'
import draggable from 'vuedraggable'
import colorpicker from '@/components/Common/colorpicker.vue'

export default {
  components: {
    auth,
    board,
    filters,
    draggable,
    colorpicker
  },
  data () {
    return {
      logged_in: true,
      filter: '',
      kanban_data: [
        {header: 'Todo', data: [{tag: '', info: 'aaa'}, {tag: '', info: 'bbb'}]},
        {header: 'Doing', data: [{tag: '', info: 'ccc'}, {tag: '', info: 'ddd'}]},
        {header: 'Done', data: [{tag: '', info: 'eee'}, {tag: '', info: 'fff'}]},
        {header: 'Duplicate', data: []},
        {header: 'Backlog', data: []}
      ]
    }
  },
  methods: {

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
}
.boards-container > .dragscroll {
  height: 100%;
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
