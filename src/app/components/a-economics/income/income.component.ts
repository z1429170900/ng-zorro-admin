import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';

declare const echarts: any;

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  title: string = "收入情况分析";
  echarts: any = null;
  options: any = {
    title: {
      show: true,
      text: "产业类型收入对比(万元)",
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
      top: '20%',
      right: '5%'
    },
    xAxis: {
        type: 'category',
        data: ['批发零售', '房地产', '金融服务', '建筑工程', '产业信息', '居民服务', '法律服务'],
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
        data: [550, 700, 200, 400, 660, 500, 610],
        type: 'bar',
        name: '入住率',
        barWidth: '30%',
        legendHoverLink: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#7cc9f5'
            },
            {
                offset: 1,
                color: '#0789fe'
            }
          ], false),
          shadowColor: 'rgba(108,80,243, 0.9)',
          shadowBlur: 20
        },
        label: {
          show: true,
          position: "top",
          color: '#fff'
        }
    }]
  };
  tongbi: any = {
    value: 0.5,
    type: "down"
  }
  huanbi: any = {
    value: 0.7,
    type: "up"
  }
  constructor(public el: ElementRef) {
    
  }

  ngOnInit(): void {
    this.echarts = echarts.init(this.el.nativeElement.querySelector("#echarts"));
    this.echarts.setOption(this.options);
    window.addEventListener("resize", () => {
      this.echarts.resize();
    })
  }

}
