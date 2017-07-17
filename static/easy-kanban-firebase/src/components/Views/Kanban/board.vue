<template>
  <div class="board-container">
    <div class="board-wrapper">
      <div class="board-header">
        <p>{{ board.header }}</p>
        <i class="material-icons">more_vert</i>
      </div>
      <draggable :list="board.data" class="board-list" :options="{ group: 'kanban' }">
        <div class="data-container" v-for="data in board.data" :key="data.id">
          <div class="data-tag" v-if="data.tag.length">{{ data.tag }}</div>
          <span class="data-title">{{ data.title }}</span>
        </div>
      </draggable>
      <div class="board-add-btn">add a task</div>
      <div class="board-add-textarea" v-if="add_task"></div>
    </div>
    <div class="margin"></div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  props: ['filter', 'board', 'kanban'],
  data () {
    return {
      add_task: false
    }
  },
  methods: {
    click_addbtn: function () {

    }
  }
}
</script>

<style>
.board-container {
  max-width: 100%;
  max-height: 100%;
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
  background-color: #8AACFA;
  border-radius: 5px;
}
.board-header {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  max-height: 2.7rem;
  min-height: 2.7rem;
}
.board-header p {
  cursor: pointer;
  margin-left: 1.5rem;
  width: calc(100% - 24px);
  transition: 0.3s all;
}
.board-header i {
  cursor: pointer;
  margin-right: 1rem;
  width: 24px;
  transition: 0.3s all;
}
.board-header > p:hover, .board-header > i:hover {
  color: rgba(255, 255, 255, 0.7);
}
.board-list {
  width: 90%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.board-list > .data-container {
  background-color: white;
  margin-bottom: 0.8rem;
  cursor: pointer;
  transition: 0.3s all;
}
.data-container:hover {
  background-color: #eeeeee;
}
.data-tag {
  background-color: #80D5DB;
  color: white;
  border-radius: 5px;
  /* width: 3rem; */
  display: inline-block;
  margin: 5px;
  text-align: center;
  font-size: 0.7rem;
  /* font-weight: lighter; */
  padding: 1px 6px;
}
.data-title {
  display: block;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  height: 3rem;
}
.board-add-btn {
  color: white;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.3s all;
}
.board-add-btn:hover {
  color: rgba(255, 255, 255, 0.7);
}

.board-list > .sortable-ghost {
  background: repeating-linear-gradient(
    45deg,
    white,
    white 6px,
    #eeeeee 6px,
    #eeeeee 12px
    ) !important;
}
.sortable-ghost > .data-tag, .sortable-ghost > .data-title {
  opacity: 0;
}
</style>
