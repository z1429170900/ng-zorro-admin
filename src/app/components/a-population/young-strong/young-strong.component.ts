import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';

declare const echarts: any;

@Component({
  selector: 'app-young-strong',
  templateUrl: './young-strong.component.html',
  styleUrls: ['./young-strong.component.scss']
})
export class YoungStrongComponent implements OnInit {
  title: string = "人口青壮占比";
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
      top: '0',
      bottom: '8%',
      left: "14%"
    },
    xAxis: {
      type: 'value',
      show: false,
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
        show: false,
        lineStyle: {
          color: "#2b355b"
        }
      }
    },
    yAxis: {
      type: 'category',
      data: ['少年', '青年', '老年'],
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
        fontSize: 14,
        margin: 20
      }
    },
    series: [ {
      data: [100, 100, 100],
      type: 'bar',
      barWidth: '50%',
      barGap: '-100%', // Make series be overlap
      itemStyle: {
        color: "rgba(255,255,255, 0.2)"
      }
    },{
      data: [60, 40, 80],
      type: 'bar',
      name: '自住',
      barWidth: '50%',
      legendHoverLink: true,
      label: {
        show: true,
        position: "right",
        color: "#fff",
        formatter: '{c}%'
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#7cc9f5'
          },
          {
              offset: 1,
              color: '#0789fe'
          }
        ], false),
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
