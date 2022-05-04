<template>
  <div>
    <div class="logo-container">
      <el-avatar :size="logoHeight" shape="square" src="http://47.96.31.161:9000/vue3/logo-small@2x.png" />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
        {{ $t('msg.test') }}
      </h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {} from 'vue'
import SidebarMenu from './SidebarMenu'
const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
