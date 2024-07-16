<template>
    <!-- 这是内容区域一 -->
    <el-row :gutter="10" class="panel-group">

        <el-col :xs="24" :sm="24" :lg="8" class="card-panel-col" v-for="(item, index) in ListData" :key="index">

            <div class="card-panel" :style="{ background: item.color }">
                <div class="card-panel-description">
                    <div class="card-panel-text"> {{ item.name }}</div>
                    <countTo :startVal='item.startVal' :endVal='item.endVal' :duration='item.duration'
                        class="card-panel-num">
                    </countTo>
                </div>



            </div>

        </el-col>

    </el-row>

</template>

<script>

// 导入数字滚动插件
import CountTo from "vue-count-to"

export default {
    data() {
        return {
            // 数字滚动的配置  开始数字,结束数字,持续时间
            ListData: [{
                startVal: 0, endVal: 8888, duration: 4000, name: "企业回报率", color: "#7ad3ff"
            },
            {
                startVal: 0, endVal: 8888, duration: 4000, name: "企业回报率", color: "#c61aff"
            },
            {
                startVal: 0, endVal: 8888, duration: 4000, name: "企业回报率", color: " #4dff4d"
            },
            {
                startVal: 0, endVal: 8888, duration: 4000, name: "企业回报率", color: " #ff9933"
            },
            {
                startVal: 0, endVal: 8888, duration: 4000, name: "企业回报率", color: "#7ad3ff"
            },
            {
                startVal: 0, endVal: 8888, duration: 4000, name: "企业回报率", color: " #ffa31a"
            }]
        };
    },
    methods: {},
    components: {
        // 使用数字滚动插件
        CountTo
    }
};
</script>
