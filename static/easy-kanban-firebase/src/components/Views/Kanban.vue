<template>
  <div class="kanban-container">
    <auth :logged_in.sync="logged_in"></auth>
    <div class="kanban-wrapper" v-if="logged_in">
      <filters :filter.sync="filter"></filters>
      <selector></selector>
      <div class="boards-container">
        <div class="margin"></div>
        <draggable :list="kanban_data.data" class="dragscroll" ref="kanbanScroll" nochilddrag :options="{ draggable:'.board-draggable' }">
          <board class="board-draggable" v-for="board in kanban_data.data" :key="board.id" :filter="filter" :board.sync="board" :kanban="kanban_data.data"></board>
          <span slot="footer" class="boards-add-btn">
            <p v-if="!add_board.switch" @click="clickAddboard">add a board</p>
            <input type="text" slot="footer" v-if="add_board.switch" v-model="add_board.text" class="boards-add-input" ref="addboardinput" spellcheck="false">
            <i class="material-icons" v-if="add_board.switch" @click="addBoard">add_box</i>
            <i class="material-icons" v-if="add_board.switch" @click="cancelEdit">clear</i>
          </span>
          <div class="margin" slot="footer"></div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import dragscroll from 'dragscroll'
import draggable from 'vuedraggable'

import auth from './Kanban/auth'
import filters from './Kanban/filters'
import board from './Kanban/board'
import selector from './Kanban/selector'

export default {
  components: {
    auth,
    board,
    filters,
    selector,
    draggable
  },
  data () {
    return {
      logged_in: true,
      filter: '',
      kanban_data: {
        title: 'default',
        titleid: 'KS93KS72d',
        data: [
              {header: 'Todo', content: [{tag: ['没做完', '紧急'], title: '你觉得做得完吗？', detail: 'a'}, {tag: ['做完'], title: '简单到没朋友', detail: ''}, {tag: [], title: 'hhh', detail: ''}]},
              {header: 'Doing', content: [{tag: [], title: 'ccc', detail: ''}, {tag: [], title: 'ddd', detail: ''}]},
              {header: 'Done', content: [{tag: [], title: 'EEE', detail: ''}, {tag: [], title: 'fff', detail: ''}]},
              {header: 'Duplicate', content: []},
              {header: 'Backlog', content: []}]
      },
      add_board: {
        switch: false,
        text: ''
      }
    }
  },
  methods: {
    addBoard: function () {
      if (this.add_board.text.length) {
        this.kanban_data.data.push({header: this.add_board.text, content: []})
        setTimeout(() => {
          this.$refs.kanbanScroll.$el.scrollTo({'behavior': 'smooth', 'left': 9999})
          dragscroll.reset()
        }, 100)
      }
      this.cancelEdit()
    },
    cancelEdit: function () {
      this.add_board = {switch: false, text: ''}
    },
    clickAddboard: function () {
      this.add_board.switch = true
      setTimeout(function () {
        this.$refs.addboardinput.focus()
      }.bind(this), 100)
    }
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
  width: calc(100% - 1rem);
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
  min-width: 16rem;
  min-height: 3rem;
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
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}
.boards-add-btn:hover {
  background-color: rgba(143, 17, 170, 0.5);
}
.boards-add-btn:active {
  background-color: rgba(143, 17, 170, 0.7);
}
.boards-add-btn > p {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.boards-add-btn > .boards-add-input {
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
  padding: 0 1rem;
}
.boards-add-btn i {
  padding-left: 10px;
  font-size: 1.5rem;
  height: 100%;
  width: 1.5rem;
  display: flex;
  align-items: center;
}
.boards-add-btn i:last-child {
  padding-right: 10px;
  font-size: 1.5rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
