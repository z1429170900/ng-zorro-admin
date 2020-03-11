import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';

declare const echarts: any;

@Component({
  selector: 'app-event-over',
  templateUrl: './event-over.component.html',
  styleUrls: ['./event-over.component.scss']
})
export class EventOverComponent implements OnInit {

  options: any = {
    title: {
      text: "事件办结量",
      right: 0,
      textStyle: {
        color: "#ffffff",
        fontSize: 12,
        fontWeight: 'lighter'
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
      bottom: '15%',
      top: '18%',
      left: "14%",
      right: 0
    },
    xAxis: {
        type: 'category',
        data: ['下沙', '白杨', '义蓬', '前进', '新湾', '临江'],
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
          fontSize: 10
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
          fontSize: 10
        },
        splitLine: {
          lineStyle: {
            color: "#2b355b"
          }
        }
    },
    series: [{
        data: [300, 200, 250, 400, 700, 100],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        itemStyle: {
          color: "#00FFFF"
        },
        label: {
          show: true
        },
        areaStyle: {
          normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(22,112,235,0)'
                  },
                  {
                      offset: 1,
                      color: 'rgba(22,112,235,1)'
                  }
              ], false),
              shadowColor: 'rgba(108,80,243, 0.9)',
              shadowBlur: 20
          }
      },
    }]
  };
  echarts: any = null;
  constructor(public el: ElementRef) { }

  ngOnInit(): void {
    this.echarts = echarts.init(this.el.nativeElement.querySelector("#echartReport"));
    this.echarts.setOption(this.options);
    window.addEventListener("resize", () => {
      this.echarts.resize();
    });
  }

}
