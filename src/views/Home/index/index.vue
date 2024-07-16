<template>
  <div class="content">

    <div class="content-row">
      <!-- 第一行 -->
      <el-row :gutter="20">

        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
          <div>
            <!-- 第一个组件 -->
            <VuePanelProup></VuePanelProup>
          </div>
        </el-col>

        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="grid-content">
            <!-- 第二个图表 -->
            <VueCharts1></VueCharts1>
          </div>
        </el-col>

      </el-row>
    </div>

    <div class="content-row">
      <!-- 第二行 -->
      <el-row :gutter="20">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <!-- 图表 -->
          <VueCharts2></VueCharts2>
        </el-col>

        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <!-- 图表 -->
          <VueCharts3></VueCharts3>
        </el-col>

        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <!-- 图表 -->
          <VueCharts3></VueCharts3>
        </el-col>

      </el-row>
    </div>

    <div class="content-row">
      <!-- 第三行 -->
      <el-row :gutter="20">

        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <!-- 第一个图表 -->
          <VueCharts4></VueCharts4>
        </el-col>

        <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">

          <!-- 第二个组件 -->
          <VueMap />

        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
// 导入所有的图表
import { VuePanelProup, VueCharts1, VueCharts2, VueCharts3, VueCharts4, VueMap } from './components';
export default {
  name: 'Home',
  components: {
    VuePanelProup,
    VueCharts1,
    VueCharts2,
    VueCharts3,
    VueCharts4,
    VueMap
  },
  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {
  }
};
</script>

<style scoped></style>