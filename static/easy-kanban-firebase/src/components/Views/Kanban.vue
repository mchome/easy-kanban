<template>
  <div class="kanban-container">
    <auth :logged_in="logged_in"></auth>
  </div>
</template>

<script>
import Auth from './Kanban/Auth'
export default {
  components: {
    Auth
  },
  data () {
    return {
      logged_in: false
    }
  }
}
</script>


<style>
.kanban-container {
  height: calc(100vh - 56px);
  width: 100%;
}
</style>
