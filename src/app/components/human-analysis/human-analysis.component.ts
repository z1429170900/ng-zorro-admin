import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare const echarts: any;

@Component({
  selector: 'app-human-analysis',
  templateUrl: './human-analysis.component.html',
  styleUrls: ['./human-analysis.component.scss']
})
export class HumanAnalysisComponent implements OnInit {

  title: string = "人口分析";
  options: any = {
    legend: {
      top: "0",
      right: "0",
      show: true,
      icon: "rect",
      itemWidth: 14,
      itemHeight: 14,
      textStyle: {
          color: '#D4D4D4',
          fontSize: 10
      },
      data: ['固定人口', '外来人口']
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
          rotate: -25,
          align: "center",
          // verticalAlign: "top",
          margin: 20,
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
        data: [300, 200, 250, 400, 700, 100, 210],
        type: 'bar',
        stack: "总量",
        name: '固定人口',
        barWidth: '30%',
        legendHoverLink: true,
        itemStyle: {
          color: "#0089FD"
        }
    }, {
        data: [400, 600, 250, 300, 50, 400, 400],
        type: 'bar',
        stack: "总量",
        name: '外来人口',
        legendHoverLink: true,
        barWidth: '30%',
        itemStyle: {
          color: "#7ECEF4"
        }
    }]
  };
  echarts: any = null;
  
  constructor(public el: ElementRef, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.echarts = echarts.init(this.el.nativeElement.querySelector("#echartHuman"));
    this.echarts.setOption(this.options);
    window.addEventListener("resize", () => {
      this.echarts.resize();
    })
  }

  goInsidePages() {
    this.router.navigate(["/population"])
  }

}
