<template>
  <div class="board-container">
    <div class="board-wrapper">
      <div class="board-header">
        <p>{{ board.header }}</p>
        <i class="material-icons more-btn">more_vert</i>
      </div>
      <draggable :list="board.content" class="board-list" :options="{ group: 'kanban', draggable:'.data-container' }">
        <div class="data-container" v-for="(data, id) in filteredData" :key="id" @click="taskEdit(data, id)">
          <div class="data-tag" v-for="tag in data.tag" :key="tag.id" v-if="tag">{{ tag }}</div>
          <span class="data-title">{{ data.title }}</span>
        </div>
      </draggable>
      <div class="board-add-btn" @click="taskAdd">add a task</div>
    </div>
    <div class="margin"></div>
    <transition name="fade">
      <detail v-if="detail_open.switch"
              :open.sync="detail_open.switch"
              :type="detail_open.type"
              :data="detail_open.data"></detail>
      <colorpicker v-if="colorpicker_open" :open.sync="colorpicker_open"></colorpicker>
    </transition>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import colorpicker from '@/components/Common/colorpicker.vue'
import detail from './detail'

export default {
  components: {
    draggable,
    colorpicker,
    detail
  },
  props: ['filter', 'board', 'kanban'],
  data () {
    return {
      detail_open: {
        switch: false,
        type: 'add',
        data: {}
      },
      colorpicker_open: false
    }
  },
  watch: {

  },
  methods: {
    taskAdd: function () {
      this.detail_open = {switch: true, type: 'add', data: {}}
    },
    taskEdit: function (data, id) {
      console.log(id)
      this.detail_open = {switch: true, type: 'edit', data: data}
    }
  },
  computed: {
    filteredData: function () {
      let filter = this.filter.toLowerCase()
      let filted = []
      if (!filter.length) {
        return this.board.content
      } else {
        for (let data of this.board.content) {
          if (data.title.toLowerCase().includes(filter) || data.detail.toLowerCase().includes(filter)) {
            filted.push(data)
          }
        }
        return filted
      }
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
  user-select: none;
}
.board-header > p:hover, .board-header > i:hover {
  color: rgba(255, 255, 255, 0.7);
}
.board-list {
  width: 93%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  border-radius: 3px;
  min-height: 1.5rem;
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
.data-container:last-child {
  margin-bottom: 0;
}
.data-tag {
  background-color: #80D5DB;
  color: white;
  border-radius: 5px;
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
  background-color: transparent;
  margin: 5px 0;
  padding: 5px 0;
  cursor: pointer;
  transition: 0.5s all;
  width: 50%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  min-height: 1rem;
  user-select: none;
}
.board-add-btn:hover {
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.2);
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
