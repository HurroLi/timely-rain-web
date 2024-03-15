<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="data">Fetched Data: {{ data }}</div>
  </div>

  <div class="projectData">
    <el-table
      :data="data"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="projectName" label="项目名称" width="180" />
      <el-table-column prop="startPerson" label="发起人" width="180" />
      <el-table-column prop="startTime" label="发起时间" />
      <el-table-column prop="endFlag" label="结束标识" />
      <el-table-column prop="remark" label="备注" />

      
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("/api/project/list");
        this.data = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
