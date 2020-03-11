import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';

declare const echarts: any;

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss']
})
export class EnterpriseComponent implements OnInit {
  title: string = "企业分析";
  options: any = {
    title: {
      show: true,
      text: "企业总量增长趋势(户)",
      left: '3%',
      textStyle: {
        color: "#D4D4D4",
        fontSize: 14
      }
    },
    "tooltip": {
      "trigger": "axis",
      "axisPointer": {
          "type": "shadow",
          textStyle: {
              color: "#fff"
          }

      },
    },
    grid: {
      bottom: '20%',
      top: '18%',
      right: '5%'
    },
    xAxis: {
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月'],
        axisLine: {
          show: false,
          lineStyle: {
            color: "#D4D4D4"
          }
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: "#D4D4D4"
          }
        },
        axisLabel: {
          color: "#D4D4D4",
          // rotate: -25,
          align: "center",
          // verticalAlign: "top",
          margin: 20,
          fontSize: 12
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: "#D4D4D4"
          }
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: "#D4D4D4"
          }
        },
        axisLabel: {
          color: "#D4D4D4",
          fontSize: 12
        },
        splitLine: {
          lineStyle: {
            color: "#707d9f"
          }
        }
    },
    series: [{
      type: 'line',
      name: '趋势',
      data: [300, 620, 400, 500, 200, 533],
      symbolSize: 0,
      smooth: true,
      itemStyle: {
          normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#9dfbc3' // 0% 处的颜色
              }, {
                  offset: 0.7,
                  color: '#3cd87f' // 100% 处的颜色
              }, {
                  offset: 1,
                  color: '#03c355' // 100% 处的颜色
              }]), //背景渐变色
              lineStyle: { // 系列级个性化折线样式
                  width: 0.5,
                  type: 'solid',
                  color: "#9dfbc3"
              }
          },
          emphasis: {
              color: '#02675f',
              lineStyle: { // 系列级个性化折线样式
                  width: 0.5,
                  type: 'dotted',
                  color: "#02675f" //折线的颜色
              }
          }
      }, //线条样式
      areaStyle: {
          normal: {
            opacity:1
          }
      }
    }]
  };
  optionsPie = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/>"
    },
    legend: {
      type: "plain",
      right: "20%",
      top: "middle",
      orient: 'vertical',
      show: true,
      icon: "rect",
      itemWidth: 4,
      itemHeight: 20,
      textStyle: {
          color: '#fff',
          fontSize: 12
      },
      formatter: '{name}',
      data: ['本地人口', '外地人口', '境外人口']
    },
    series: [{
      type: 'pie',
      radius: ['40%', '60%'],
      center: ['30%', '50%'],
      color: ['#0388ff', '#80cbf3', '#f79704', '#FFA800','#4658F6'],
      left: 'left',
      itemStyle:{
        borderWidth: 10,
        borderColor: "rgba(0, 0, 0, 0)"
      },
      data: [{
            value: 27,
            name: '本地人口'
        },
        {
            value: 30,
            name: '外地人口'
        },
        {
            value: 24,
            name: '境外人口'
        }
      ],
      labelLine: {
          normal: {
              show: false,
              length: 50,
              length2: 50,
              lineStyle: {
                  color: '#CCCCCC',
                  width: 2
              }
          }
      },
      label: {
        show: false
      }
}

]
  };
  echarts: any = null;
  echartsPie: any = null;
  constructor(public el: ElementRef) { }

  ngOnInit(): void {
    this.echarts = echarts.init(this.el.nativeElement.querySelector("#echarts"));
    this.echarts.setOption(this.options);
    this.echartsPie = echarts.init(this.el.nativeElement.querySelector("#PieCharts"));
    this.echartsPie.setOption(this.optionsPie);
    window.addEventListener("resize", () => {
      this.echarts.resize();
      this.echartsPie.resize();
    })
  }


}
