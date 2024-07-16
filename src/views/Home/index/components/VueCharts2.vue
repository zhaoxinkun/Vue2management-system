<template>
    <div ref="chatsBox" class="charts">

    </div>
</template>

<script>

// import echarts from "echarts";
import * as echarts from 'echarts';
export default {
    name: 'VueCharts2',

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
            myCharts.setOption(
                {
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        top: '5%',
                        left: 'center'
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                borderRadius: 10,
                                borderColor: '#fff',
                                borderWidth: 2
                            },
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: 40,
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                { value: 1048, name: 'Search Engine' },
                                { value: 735, name: 'Direct' },
                                { value: 580, name: 'Email' },
                                { value: 484, name: 'Union Ads' },
                                { value: 300, name: 'Video Ads' }
                            ]
                        }
                    ]
                }
            )

        }
    },
};
</script>
