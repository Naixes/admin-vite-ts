<template>
  <header>header</header>
  <div class="layout">
    <a-menu class="menu" mode="inline">
      <a-menu-item>
        <router-link to="/home">首页</router-link>
      </a-menu-item>
      <a-menu-item><router-link to="/about">关于</router-link></a-menu-item>
    </a-menu>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
header {
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
.layout {
  display: flex;
}
.menu {
  width: 256px;
}
</style>
