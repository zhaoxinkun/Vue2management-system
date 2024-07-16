<template>

    <el-aside class="aside" width="200px">
        <!-- Aside -->
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>

            <!-- 没有子集的 -->
            <el-menu-item index="/index">
                <i class="el-icon-menu"></i>
                <span slot="title">企业首页</span>
            </el-menu-item>

            <!-- 有子集的  申请类别-->
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>申请类别</span>
                </template>
                <!-- 分组 -->
                <el-menu-item-group>
                    <el-menu-item index="/approvalApply/officeApply">办公</el-menu-item>
                    <el-menu-item index="/approvalApply/travelApply">差旅</el-menu-item>
                    <el-menu-item index="/approvalApply/leaveApply">请假</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <!-- 有子集的 申请管理 -->
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>申请管理</span>
                </template>
                <!-- 分组 -->
                <el-menu-item-group>
                    <el-menu-item index="/approvalManage/officeManage">办公</el-menu-item>
                    <el-menu-item index="/approvalManage/travelManage">差旅</el-menu-item>
                    <el-menu-item index="/approvalManage/leaveManage">请假</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <!-- 有子集的 -->
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>审批流程</span>
                </template>
                <!-- 分组 -->
                <el-menu-item-group>
                    <el-menu-item index="/approvalProcess/firstInstance">一审</el-menu-item>
                    <el-menu-item index="/approvalProcess/secondInstance">二审</el-menu-item>
                    <el-menu-item index="/approvalProcess/lastInstance">终审</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <!-- 没有子集的 -->
            <el-menu-item index="/fileManage">
                <i class="el-icon-menu"></i>
                <span slot="title">档案管理</span>
            </el-menu-item>

        </el-menu>
    </el-aside>

</template>

<script>
export default {
    name: 'VueSidebar',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
};
</script>