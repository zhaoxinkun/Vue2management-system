<template>
    <div ref="chatsBox" class="charts">

    </div>
</template>

<script>

// import echarts from "echarts";
import * as echarts from 'echarts';
export default {
    name: 'VueCharts4',

    data() {
        return {

        };
    },

    mounted() {
        this.init();
    },

    methods: {
        init() {
            // 基于准备好的dom，初始化echarts实例
            let myCharts = echarts.init(this.$refs.chatsBox);
            myCharts.setOption({
                tooltip: {
                    formatter: '{a} <br/>{b} : {c}%'
                },
                series: [
                    {
                        name: 'Pressure',
                        type: 'gauge',
                        detail: {
                            formatter: '{value}'
                        },
                        data: [
                            {
                                value: 50,
                                name: 'SCORE'
                            }
                        ]
                    }
                ]
            })

        }
    },
};
</script>
