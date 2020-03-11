import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';

declare const echarts: any;

@Component({
  selector: 'app-event-report',
  templateUrl: './event-report.component.html',
  styleUrls: ['./event-report.component.scss']
})
export class EventReportComponent implements OnInit {

  options: any = {
    title: {
      text: "事件上报量",
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
        data: [300, 300, 350, 170, 500, 100],
        type: 'line',
        smooth: false,
        symbol: 'circle',
        itemStyle: {
          color: "#7ECEF4"
        },
        label: {
          show: true
        }
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
