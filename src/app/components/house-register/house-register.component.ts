import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';

declare const echarts: any;

@Component({
  selector: 'app-house-register',
  templateUrl: './house-register.component.html',
  styleUrls: ['./house-register.component.scss']
})
export class HouseRegisterComponent implements OnInit {
  title: string = "房屋登记";
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
      data: ['自住', '出租', '空闲']
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
      bottom: '8%',
      top: '18%',
      left: "20%"
    },
    xAxis: {
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
    yAxis: {
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
        fontSize: 10,
        margin: 20
      }
    },
    series: [{
        data: [300, 200, 250, 400, 700, 100, 210],
        type: 'bar',
        stack: "总量",
        name: '自住',
        barWidth: '40%',
        legendHoverLink: true,
        itemStyle: {
          color: "#0089FD"
        }
    }, {
        data: [400, 600, 250, 300, 50, 400, 400],
        type: 'bar',
        stack: "总量",
        name: '出租',
        legendHoverLink: true,
        barWidth: '40%',
        itemStyle: {
          color: "#7ECEF4"
        }
    }, {
        data: [400, 600, 250, 300, 50, 400, 400],
        type: 'bar',
        stack: "总量",
        name: '空闲',
        legendHoverLink: true,
        barWidth: '40%',
        itemStyle: {
          color: "#F39800"
        }
    }]
  };
  echarts: any = null;
  constructor(public el: ElementRef) { }

  ngOnInit(): void {
    this.echarts = echarts.init(this.el.nativeElement.querySelector("#echartHuman"));
    this.echarts.setOption(this.options);
    window.addEventListener("resize", () => {
      this.echarts.resize();
    })
  }

}
