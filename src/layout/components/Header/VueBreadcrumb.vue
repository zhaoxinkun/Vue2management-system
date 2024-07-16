<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <span class="el-icon-s-home">当前位置: &nbsp;</span>
            <!-- 循环遍历出来 -->
            <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
                <router-link :to="item.path">{{ item.meta.breadcrumb }}</router-link>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    name: 'VueBreadcrumb',

    data() {
        return {
            breadcrumbList: []
        };
    },
    watch: {
        $route() {
            this.getBreadcrumbList();
        }
    },
    mounted() {
        // 挂载的时候就执行
        console.log(this.$route.matched);
        this.getBreadcrumbList();
    },

    methods: {
        getBreadcrumbList() {
            const matched = this.$route.matched.filter(route => route.meta && route.meta.breadcrumb);
            this.breadcrumbList = [{ path: '/', meta: { breadcrumb: 'Home' } }, ...matched];
            console.log("其实这里的路由数据(数组)", matched);
        },

    },

};
</script>