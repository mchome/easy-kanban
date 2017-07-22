<template>
  <div class="detail-container"
      @dragenter.stop
      @dragover.stop
      @mousedown.stop
      @mousemove.stop
      @mouseup.stop
      @pointerdown.stop
      @touchmove.stop
      @touchstart.stop>
    <div class="detail-mask" @click="closeDetail"></div>
    <div class="detail-wrapper">
      <div class="detail-header">
        <p v-if="type === 'add'">Adding task</p>
        <p v-if="type === 'edit'">Editing task</p>
        <i v-if="(type === 'edit') && (pt !== false)" class="material-icons" @click="deleteTask">delete</i>
      </div>
      <div class="detail-title">
        <i class="material-icons detail-logo">short_text</i>
        <input type="text" v-model="data.title" placeholder="type the title" spellcheck="false">
      </div>
      <div class="detail-tags">
        <div class="tag-display">
          <i class="material-icons detail-logo">bookmark</i>
          <div class="data-tag" v-for="(tag, id) in data.tag" :key="id" v-if="tag" v-on:dblclick="data.tag.splice(id, 1)">{{ tag }}</div>
        </div>
        <transition name="fade">
          <div class="tag-edit" v-if="this.data.tag.length < 5">
            <input type="text" v-model="add_tag" placeholder="type a tag" spellcheck="false">
            <button @click="addTag">add tag</button>
          </div>
        </transition>
      </div>
      <div class="detail-content">
        <i class="material-icons detail-logo">note</i>
        <textarea v-model="data.detail" placeholder="type some detail" spellcheck="false"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['open', 'type', 'data', 'pt'],
  methods: {
    closeDetail: function () {
      // this.$emit('update:data', this.data)
      this.$emit('update:open', false)
    },
    addTag: function () {
      if (this.add_tag) {
        this.data.tag.push(this.add_tag)
        this.add_tag = ''
      }
    },
    deleteTask: function () {
      this.$emit('taskremove')
      this.$emit('update:pt', false)
      this.closeDetail()
    }
  },
  data () {
    return {
      add_tag: ''
    }
  }
}
</script>


<style>
.detail-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  user-select: none;
}
.detail-mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 10;
}
.detail-wrapper {
  position: fixed;
  width: 30%;
  height: 40%;
  min-width: 20rem;
  min-height: 20rem;
  background-color: white;
  z-index: 20;
  box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
}
.detail-wrapper > .detail-header {
  background-color: #35495E;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.detail-wrapper > .detail-header > p {
  font-size: 1.2rem;
  margin-left: 1.5rem;
}
.detail-wrapper > .detail-header > i {
  margin-left: 53%;
  cursor: pointer;
  padding: 0.3rem;
  background-color: #f44336;
  border-radius: 50px;
  transition: all 0.3s;
}
.detail-wrapper > .detail-header > i:hover {
  background-color: rgba(244, 67, 54, 0.8);
}
.detail-title {
  height: 3rem;
  display: flex;
  align-items: center;
  margin-left: 1rem;
}
.detail-title > input {
  border: none;
  outline: none;
  font-size: 1rem;
  width: 80%;
  margin-left: 0.5rem;
  color: #35495E;
  border-bottom: 1px #35495E solid;
  transition: all 0.3s;
}
.detail-title > input::-webkit-input-placeholder {
  color: rgba(53, 73, 94, 0.6);
}
.detail-title > input:focus {
  border-bottom: 1px dodgerblue solid;
}
.detail-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.detail-tags {
  max-height: 4rem;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-bottom: 0.8rem;
}
.detail-tags > .tag-display {
  display: flex;
  align-items: center;
}
.detail-tags i {
  margin-right: 0.25rem;
}
.detail-tags > .tag-edit {
  display: flex;
  flex-direction: row;
}
.detail-tags > .tag-display > .data-tag {
  cursor: pointer;
}
.tag-edit > input {
  border: none;
  outline: none;
  font-size: 1rem;
  width: 60%;
  margin-top: 0.5rem;
  margin-left: 2rem;
  color: #35495E;
  border-bottom: 1px #35495E solid;
  transition: all 0.3s;
}
.tag-edit > input::-webkit-input-placeholder {
  color: rgba(53, 73, 94, 0.6);
}
.tag-edit > input:focus {
  border-bottom: 1px dodgerblue solid;
}
.tag-edit > button {
  background-color: #35495E;
  color: white;
  border: none;
  outline: none;
  border-radius: 2px;
  margin-left: 1.3rem;
  cursor: pointer;
  transition: all 0.3s;
}
.tag-edit > button:hover {
  background-color: rgba(53, 73, 94, 0.8);
}
.tag-edit > button:active {
  background-color: rgba(53, 73, 94, 0.2);
  color: #35495E;
}

.detail-content {
  display: flex;
  align-items: flex-start;
  margin-left: 1rem;
}
.detail-content > textarea {
  height: 8rem;
  width: 84%;
  max-width: 19.5rem;
  margin-left: 0.5rem;
  resize: none;
  border: none;
  outline: none;
  color: #35495E;
  border-bottom: 1px #35495E solid;
  transition: all 0.3s;
}
.detail-content > textarea:focus {
  border-bottom: 1px dodgerblue solid;
}
.detail-content > textarea::-webkit-input-placeholder {
  color: rgba(53, 73, 94, 0.6);
}

.detail-logo {
  font-size: 1.5rem;
  color: #35495E;
}
</style>
