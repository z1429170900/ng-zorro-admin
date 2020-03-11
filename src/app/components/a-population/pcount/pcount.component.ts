import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';

declare const echarts: any;

@Component({
  selector: 'app-pcount',
  templateUrl: './pcount.component.html',
  styleUrls: ['./pcount.component.scss']
})
export class PcountComponent implements OnInit {
  echarts: any = null;
  options: any = {
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
      bottom: '15%',
      top: '18%'
    },
    xAxis: {
        type: 'category',
        data: ['下沙街道', '白杨街道', '何庄街道', '义蓬街道', '前进街道', '新湾街道', '临江街道'],
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
        data: [300, 200, 250, 400, 700, 100, 210],
        type: 'bar',
        stack: "总量",
        name: '固定人口',
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

  constructor(public el: ElementRef) {
    
  }

  ngOnInit(): void {
    this.echarts = echarts.init(this.el.nativeElement.querySelector("#echart"));
    this.echarts.setOption(this.options);
    window.addEventListener("resize", () => {
      this.echarts.resize();
    })
  }

}
