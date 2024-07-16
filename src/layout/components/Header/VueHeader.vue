<template>
    <div class="app-breadcrumb">
        <!-- 面包屑 -->
        <VueBreadcrumb></VueBreadcrumb>
        <!-- 右侧按钮 -->
        <div class="right-menu">
            <el-button class="el-button-mini" type="warning" round size="mini" icon="el-icon-share"
                @click="getOut">退出</el-button>
        </div>
    </div>
</template>

<script>
// 导入退出api
import { logout } from "@/api/api";
// 导入移除token
import { removeToken } from "@/common/token";
import VueBreadcrumb from "./VueBreadcrumb.vue"
export default {
    name: 'VueHeader',
    components: {
        VueBreadcrumb
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        // 退出逻辑
        getOut() {
            // 发送请求
            logout().then(response => {
                // 解构状态码
                let { code } = response.data;
                if (code === 20000) {
                    // 清除token
                    removeToken();
                    // 跳回到登录页
                    this.$router.push("/login");
                }
                return response;
            })
        },
    },
};
</script>