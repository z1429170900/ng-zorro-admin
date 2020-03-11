import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';

declare const echarts: any;

@Component({
  selector: 'app-build-up',
  templateUrl: './build-up.component.html',
  styleUrls: ['./build-up.component.scss']
})
export class BuildUpComponent implements OnInit {
  title: string = "楼宇分析";
  options: any = {
    title: {
      show: true,
      text: "今年写字楼增长趋势(户)",
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
      data: [300, 220, 400, 330, 700, 233],
      symbolSize: 0,
      smooth: true,
      itemStyle: {
          normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#16b5eb' // 0% 处的颜色
              }, {
                  offset: 0.7,
                  color: '#158be8' // 100% 处的颜色
              }, {
                  offset: 1,
                  color: '#1673ea' // 100% 处的颜色
              }]), //背景渐变色
              lineStyle: { // 系列级个性化折线样式
                  width: 0.5,
                  type: 'solid',
                  color: "#158be8"
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
  echarts: any = null;
  constructor(public el: ElementRef) { }

  ngOnInit(): void {
    this.echarts = echarts.init(this.el.nativeElement.querySelector("#echarts"));
    this.echarts.setOption(this.options);
    window.addEventListener("resize", () => {
      this.echarts.resize();
    })
  }

}
