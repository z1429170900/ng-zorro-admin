import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';

declare const echarts: any;

@Component({
  selector: 'app-house-hold',
  templateUrl: './house-hold.component.html',
  styleUrls: ['./house-hold.component.scss']
})
export class HouseHoldComponent implements OnInit {
  title: string = "人口户籍统计";
  rankingList: Array<any> = [{
    count: "3146",
    name: "浙江省",
    xAxis: ["杭州", "绍兴", "嵊州", "台州", "嘉兴", "温州"],
    yAxis: [190, 146, 200, 374, 211, 119]
  }, {
    count: "1146",
    name: "河南省",
    xAxis: ["洛阳", "郑州", "许昌", "南阳", "周口", "商丘"],
    yAxis: [200, 300, 100, 125, 369, 144]
  }, {
    count: "1046",
    name: "安徽省",
    xAxis: ["泵阳", "合肥", "马鞍山", "芜湖", "黄山", "池州"],
    yAxis: [100, 125, 100, 200, 238, 219]
  }, {
    count: "1046",
    name: "甘肃省",
    xAxis: ["酒泉", "张掖", "武威", "兰州", "庆阳", "天水"],
    yAxis: [520, 439, 625, 626, 403, 209]
  }, {
    count: "1046",
    name: "湖北省",
    xAxis: ["襄阳", "随州", "荆州", "黄冈", "咸宁", "孝感"],
    yAxis: [200, 150, 489, 289, 322, 122]
  }];
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
      top: '18%',
      left: "10%",
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
            color: "#2b355b"
          }
        }
    },
    series: [{
        data: [300, 200, 250, 400, 700, 100],
        type: 'line',
        smooth: true,
        symbol: 'diamond',
        itemStyle: {
          color: "#0190fe",

        },
        lineStyle: {
          width: 3
        },
        label: {
          show: true,
          color: "#fff"
        }
    }]
  };
  echarts: any = null;
  checkedTop: any = {};
  constructor(public el: ElementRef) { }

  ngOnInit(): void {
    this.checkedTop = this.rankingList[0];
    this.echarts = echarts.init(this.el.nativeElement.querySelector("#echarts"));
    this.echarts.setOption(this.options);
    window.addEventListener("resize", () => {
      this.echarts.resize();
    })
  }
  // 选择地区
  changeCheckTop(item: any) {
    this.checkedTop = item;
    this.options.series[0].data = item.yAxis;
    this.options.xAxis.data = item.xAxis;
    this.echarts.setOption(this.options, true);
  }

}
