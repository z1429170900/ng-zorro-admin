declare const echarts: any;

export interface M4R2Data {

}

export function getOption2 (m3R2Data:Array<M4R2Data>):any {
    return {
        title: {
            text: '堆叠区域图'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        color: ['#f69846', '#00ffb4', '#44aff0', '#f6d54a', '#45dbf7',
            '#ad46f3', '#f845f1', '#ff4343', '#ffa800', '#39E7FB',
            '#FAC901',
        ],
        legend: {
            left: 'center',
            icon: "circle", // 这个字段控制形状 类型包括 circle，rect
            // ，roundRect，triangle，diamond，pin，arrow，none
            data: ['进流量', '出流量']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            axisTick: {
                show: false
                // 删除超出正坐标线段
            },
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
                // 删除超出正坐标线段
            },
            splitLine: { // 坐标轴以外的横线颜色
                lineStyle: {
                    type: 'dashed', // 虚线
                    color: 'black'
                }
            }
        }],
        // var endPercent = (7 / time.length) * 100;
        dataZoom: [ //给x轴设置滚动条  
            {
                start: 0, //默认为0  
                end: 50, // 这两个用来调整显示多少数据
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                handleSize: 0, //滑动条的 左右2个滑动条的大小  
                height: 8, //组件高度  
                left: '21%',
                right: '3%',
                top: '25',
                handleColor: '#ddd', //h滑动图标的颜色  
                handleStyle: {
                    borderColor: "#cacaca",
                    borderWidth: "1",
                    shadowBlur: 2,
                    background: "#ddd",
                    shadowColor: "#ddd",
                },
                fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变  
                    //给第一个设置0，第四个设置1，就是垂直渐变  
                    offset: 0,
                    color: '#1eb5e5'
                }, {
                    offset: 1,
                    color: '#5ccbb1'
                }]),
                backgroundColor: '#ddd', //两边未选中的滑动条区域的颜色  
                showDataShadow: false, //是否显示数据阴影 默认auto  
                showDetail: false, //即拖拽时候是否显示详细数值信息 默认true  
                handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                filterMode: 'filter'
            },
            //下面这个属性是里面拖到  
            {
                type: 'inside',
                show: true,
                xAxisIndex: [0],
                start: 0, //默认为1  
                end: 50
            },
        ],
        series: [{
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                smooth: true, //是否平滑曲线显示
                areaStyle: {
                    normal: {}
                }, //线条内是否填充颜色
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                smooth: true,
                areaStyle: {
                    normal: {}
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                smooth: true,
                areaStyle: {
                    normal: {}
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                smooth: true,
                areaStyle: {
                    normal: {}
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                smooth: true,
                areaStyle: {
                    normal: {}
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    
    }
}