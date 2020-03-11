import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare const echarts: any;

@Component({
  selector: 'app-industrial-economy',
  templateUrl: './industrial-economy.component.html',
  styleUrls: ['./industrial-economy.component.scss']
})
export class IndustrialEconomyComponent implements OnInit {

  title: string = "产业经济";

  options: any = {
    title: {
      text: "企业总量增长趋势",
      right: 0,
      textStyle: {
        color: "#ffffff",
        fontSize: 14,
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
      right: 0
    },
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
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
        data: [300, 200, 250, 400, 700, 100, 210],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: {
          color: "#FFCB09"
        },
        areaStyle: {
          normal: {
              color: "rgba(255,246,232,0.2)",
              shadowColor: 'rgba(108,80,243, 0.9)',
              shadowBlur: 20
          }
      },
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
    this.router.navigate(["/economics"])
  }
}
