<script setup lang="ts">

import { ref } from 'vue'
import Header from './Header.vue';
</script>

<template>

<div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
