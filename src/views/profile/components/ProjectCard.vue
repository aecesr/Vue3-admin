<template>
  <div class="">
    <my-avatar :image="$store.getters.userInfo.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
      <div>Hello</div>
      {{ $store.getters.userInfo.title }}
    </my-avatar>
  </div>
</template>

<script setup>
import MyAvatar from '@/components/MyAvatar'
</script>

<style lang="scss" scoped></style>
