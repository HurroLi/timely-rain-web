<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <img
          style="width: 50px;height: 50px;"
          src="../images/公益.png"
          alt="Element logo"
        />
      </el-menu-item>
      <div class="flex-grow" />
      <el-sub-menu index="1">
        <template #title>项目中心</template>
        <el-menu-item index="2-1">新建项目</el-menu-item>
        <el-menu-item index="2-2">项目维护</el-menu-item>
        <el-menu-item index="2-3">项目查询</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2">个人中心</el-menu-item>

    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .flex-grow {
    flex-grow: 1;
  }
  </style>
  