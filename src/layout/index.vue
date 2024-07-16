<template>
  <div class="app-wrapper">
    <el-container>

      <!-- 左侧导航 -->
      <VueSidebar />

      <el-container>
        <!-- 头部 -->
        <el-header>
          <VueHeader />
        </el-header>
        <!-- 主体部分 -->
        <el-main>
          <VueMain />
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>
import { VueSidebar, VueHeader, VueMain } from "@/layout/components"

export default {
  // name: 'Home',
  components: {
    VueSidebar,
    VueHeader,
    VueMain
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