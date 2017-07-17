<template>
  <div id="app">
    <header>
      <span>Easy Kanban</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

* {
  font-family: 'Avenir', Roboto, Helvetica, "Segoe UI", "Microsoft YaHei", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*::-webkit-scrollbar-thumb {
	background-color: rgba(53, 73, 94, 0.95);
  border-radius: 5px;
}
*::-webkit-scrollbar-track {
	background-color: #F5F5F5;
  margin: 8px;
}
*::-webkit-scrollbar {
	width: 10px;
  height: 10px;
	background-color: #F5F5F5;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
  user-select: none;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
  cursor: default;
}
</style>
