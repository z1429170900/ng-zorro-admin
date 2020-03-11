import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';

declare const echarts: any;

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  options = {
    series: [
        // 内圆
          {
              type: 'pie',
              radius: ['0', '56%'],
              center: ['50%', '50%'],
              z: 0,
              itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0,
                              color: '#0089fd'
                          },
                          {
                              offset: 0.5,
                              color: '#0089fe'
                          },
                          {
                              offset: 1,
                              color: '#0089fc'
                          }
                      ]),
                      label: {
                          show: false
                      },
                      labelLine: {
                          show: false
                      }
                  },
              },
              label: {
                  normal: {
                      position: "center",
  
                  }
              },
              data: [100],
          },
        {
      name: '刻度',
      type: 'gauge',
      radius: '88%',
      min:0,//最小刻度
      max:16,//最大刻度
      splitNumber: 8, //刻度数量
      startAngle: 225,
      endAngle: -45,
      axisLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: [[1,'rgba(0,0,0,0)']]
        }
      },//仪表盘轴线
      axisLabel: {
        show: true,
        color:'#0089fd',
        distance:25,
        formatter:function(v){
              switch (v + '') {
                  case '0' : return '0';
                  case '2' : return '1W';
                  case '4' : return '2W';
                  case '6' : return '3W';
                  case '8' : return '4W';
                  case '10' : return '5W';
                  case '12' : return '6W';
                  case '14' : return '7W';
                  case '16' : return '8W';
              }
          }
      },//刻度标签。
      axisTick: {
        show: true,
         splitNumber: 7,
        lineStyle: {
          color: '#0089fd',
          width: 4,
        },
        length: -8
      },//刻度样式
      splitLine: {
        show: true,
        length: -20,
        lineStyle: {
          color: '#0089fd',
          width: 4
        }
      },//分隔线样式
      detail: {
        show: false
      },
      pointer: {
        show: false
      }
    },
      {
  
  
        type: 'gauge',
        radius: '74%',
        center: ['50%', '50%'],
  
        splitNumber: 0, //刻度数量
        startAngle: 225,
        endAngle: -45,
        axisLine: {
          show: true,
          lineStyle: {
            width: 20,
            color: [
              [
                0.69, new echarts.graphic.LinearGradient(
                0, 0, 1, 0, [{
                offset: 0,
                color: '#5c53de'
              },
                {
                  offset: 1,
                  color: '#18c8ff'
                }
              ]
                )
              ],
              [
                1, '#413e54'
              ]
            ]
          }
        },
        //分隔线样式。
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        pointer: {
          show: false
        },
        title: {
          show: true,
          offsetCenter: [0, '-26%'], // x, y，单位px
          textStyle: {
            color: '#fff',
            fontSize: 20
          }
        },
        //仪表盘详情，用于显示数据。
        detail: {
          show: true,
          offsetCenter: [0, '16%'],
          color: '#ffffff',
          formatter: function(params) {
        return params
      },
      textStyle: {
        fontSize: 44
      }
      },
      data: [{
      name: "当前入住企业",
      value: 55876
      }]
    }
    ]
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
