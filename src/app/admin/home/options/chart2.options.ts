
export interface M3R2Data {

}

export function getOption1 (m3R2Data:Array<M3R2Data>):any {
    return {
        title: {
            //text: '检查企业信息分析'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                //magicType: {show: true, type: ['stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data: ['检查企业数', '完成整改企业数', '违法违规企业数']
        },
        
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
             data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }],
        yAxis: [{
            type: 'value',
            //name: '投诉举报数',
            axisLabel: {
                formatter: '{value}'
            }
        }],
        series: [{
            name: '检查企业数',
            type: 'bar',
            itemStyle:{
                normal:{color:'#01949B'},
            },
            markPoint : {
                    data : [
                        {type : 'max', name : '最大值'},
                         {type : 'min', name : '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                },
            data: [2031, 1793, 3640, 2593, 4377,3201, 2275, 3289, 3356,2859,4244,3945]
        }, {
            name: '完成整改企业数',
            type: 'bar',
            itemStyle:{
                normal:{color:'#EBA954'},
            },
            markPoint : {
                    data : [
                        {type : 'max', name : '最大值'},
                         {type : 'min', name : '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                },
            data: [1043, 1456, 1900, 1200, 2100,1870, 980, 1569, 1130, 1490,2300, 2210]
        }, {
            name: '违法违规企业数',
            type: 'bar',
            itemStyle:{
                normal:{color:'#C23531'},
            },
            markPoint : {
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            },
            data: [787, 571, 999, 341, 231,812, 735, 231,322,712,1230, 870]
        }]
    }
}