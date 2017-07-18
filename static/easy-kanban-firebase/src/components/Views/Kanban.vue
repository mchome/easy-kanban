<template>
  <div class="kanban-container">
    <auth :logged_in.sync="logged_in"></auth>
    <div class="kanban-wrapper" v-if="logged_in">
      <filters :filter.sync="filter"></filters>
      <div class="boards-container">
        <div class="margin"></div>
        <draggable :list="kanban_data" class="dragscroll" nochilddrag :options="{draggable:'.draggable'}">
          <board class="draggable" v-for="board in kanban_data" :key="board.id" :filter="filter" :board="board" :kanban="kanban_data"></board>
          <span slot="footer" class="boards-add-btn">add a board</span>
          <div slot="footer" class="boards-add-textarea"></div>
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
import dragscroll from 'dragscroll'

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
        {header: 'Todo', data: [{tag: ['没做完', '紧急'], title: '你觉得做得完吗？', detail: 'a'}, {tag: ['做完'], title: '简单到没朋友', detail: ''}, {tag: [], title: 'hhh', detail: ''}]},
        // {header: 'Doing', data: [{tag: [], title: 'ccc', detail: ''}, {tag: [], title: 'ddd', detail: ''}]},
        {header: 'Done', data: [{tag: [], title: 'eee', detail: ''}, {tag: [], title: 'fff', detail: ''}]},
        // {header: 'Duplicate', data: []},
        {header: 'Backlog', data: []}
      ],
      add_board: false
    }
  },
  methods: {

  },
  watch: {
    logged_in: () => {
      setTimeout(() => {
        dragscroll.reset()
      }, 500)
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
body::-webkit-scrollbar {
	width: 0;
  height: 0;
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
.boards-add-btn {
  width: 16rem;
  height: 3rem;
  background-color: rgba(143, 17, 170, 0.35);
  color: white;
  margin: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;
}
.boards-add-btn:hover {
  background-color: rgba(143, 17, 170, 0.5);
}
.boards-add-btn:active {
  background-color: rgba(143, 17, 170, 0.7);
}
</style>
