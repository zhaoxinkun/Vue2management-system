<template>
    <div ref="chatsBox" class="charts"></div>
</template>

<script>
import * as Echarts from 'echarts';
// 引入中国行政区域
import chinaMap from "@/assets/100000_full.json";
import { getMap } from "@/api/api"

export default {
    name: 'VueMap',

    data() {
        return {
            mapData: []
        };
    },

    mounted() {
        this.getData();
    },

    methods: {
        init() {
            // 基于准备好的dom，初始化echarts实例
            let myCharts = Echarts.init(this.$refs.chatsBox);
            Echarts.registerMap('china', chinaMap); // 注册可用的地图

            myCharts.setOption({
                color: "#f60",
                zoom: 1.8,  //控制地图缩放
                title: {
                    text: "企业员工分布图", //标题
                    left: "center",  //居中
                    top: "5%", //上间距
                    textStyle: {
                        color: "#333"
                    }
                },
                // 提示信息
                tooltip: {
                    trigger: "item",
                    formatter: "城市名:{b}<br/> 学员数:{c}"
                },
                series: [{
                    type: "map",
                    mapType: "china",
                    // 文字显示
                    label: {
                        show: true, //是否显示标签
                        color: '#000', //文字颜色
                        fontSize: 10 //文字大小
                    },
                    data: this.mapData,
                    //高亮状态下的多边形和标签样式
                    emphasis: {
                        label: {
                            color: '#fff', //移入后显示颜色
                            fontSize: 12,
                        },
                        itemStyle: { //移入后颜色及边框
                            areaColor: '#1bc1ad',  //区域颜色
                            borderColor: '#ccc'  //边框颜色
                        },
                    },

                }],

                visualMap: [{  //数据分段
                    type: 'piecewise', // 定义为分段型 visualMap
                    show: true,
                    pieces: [
                        { min: 600, max: 10000 },
                        { min: 300, max: 599 },
                        { min: 100, max: 299 },
                        { min: 10, max: 99 },
                        { min: 1, max: 9 },
                        { value: 0 },
                    ],
                    inRange: { //定义 在选中范围中 的视觉元素。
                        color: [
                            '#fff',
                            '#b3ffff',
                            '#c0f478',
                            '#f2d872',
                            '#f3bbff',
                            '#fea78a'
                        ] //颜色可以在实时地图上取
                    },
                    itemWidth: 10,  //显示框的宽高
                    itemHeight: 10,
                }],
            });
        },
        getData() {
            getMap().then(respones => {
                console.log(respones);
                const { code, data } = respones.data;
                console.log("@data", data);
                if (code === 20000) {
                    this.mapData = data;
                    this.init();
                }
            })
        }
    },
};
</script>
