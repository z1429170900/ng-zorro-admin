import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ElementRef} from '@angular/core';
import { CommonService } from '../../../services/common.service'

declare const echarts: any;

@Component({
  selector: 'app-typelist',
  templateUrl: './typelist.component.html',
  styleUrls: ['./typelist.component.scss']
})
export class TypelistComponent implements OnInit,AfterViewInit {
  title: string = "人口类型列表";
  echarts: any = null;
  data: Array<any> = [
    {
      name: "残疾人",
      value: 321
    },
    {
      name: "援助对象",
      value: 536
    },
    {
      name: "类型",
      value: 76
    },
    {
      name: "精神病",
      value: 76
    },
    {
      name: "留守儿童",
      value: 140
    }
  ];
  datalist = [{
      offset: [56, 48],
      symbolSize: 120,
      opacity: .95,
      color: '#f53602'
  }, {
      offset: [35, 80],
      symbolSize: 95,
      opacity: .88,
      color: '#f59703'
  }, {
      offset: [20, 43],
      symbolSize: 90,
      opacity: .84,
      color: '#01c353'
  }, {
      offset: [83, 30],
      symbolSize: 90,
      opacity: .8,
      color: '#0089fd'
  }, {
      offset: [36, 20],
      symbolSize: 65,
      opacity: .75,
      color: '#0089fd'
  }, {
      offset: [64, 10],
      symbolSize: 70,
      opacity: .7,
      color: '#6b3442'
  }, {
      offset: [75, 75],
      symbolSize: 60,
      opacity: .68,
      color: '#0089fd'
  }, {
      offset: [88, 62],
      symbolSize: 50,
      opacity: .6,
      color: '#0089fd'
  }];
  options = {
      grid: {
          show: false,
          top: 10,
          bottom: 10
      },
      xAxis: [{
          gridIndex: 0,
          type: 'value',
          show: false,
          min: 0,
          max: 100,
          nameLocation: 'middle',
          nameGap: 5
      }],
      yAxis: [{
          gridIndex: 0,
          min: 0,
          show: false,
          max: 100,
          nameLocation: 'middle',
          nameGap: 30
      }],
      series: [{
          type: 'scatter',
          symbol: 'circle',
          symbolSize: 120,
          label: {
              normal: {
                  show: true,
                  formatter: '{b}',
                  color: '#fff',
                  textStyle: {
                      fontSize: '20'
                  }
              },
          },
          itemStyle: {
              normal: {
                  color: '#00acea'
              }
          },
          data: []
      }]
  };
  
  color: Array<string> = ["#f53602", "#f59703", "#01c353", "#0089fd", "#0089fd", "#0089fd"]
  constructor(public el: ElementRef, public common: CommonService) {
    
  }

  ngOnInit(): void {
    let plantCap = this.data, datalist=this.datalist,datas=[];
    for (var i = 0; i < plantCap.length; i++) {
        var item = plantCap[i];
        var itemToStyle = datalist[i];
        datas.push({
            name: item.value + '\n' + item.name,
            value: itemToStyle.offset,
            symbolSize: itemToStyle.symbolSize,
            label: {
                normal: {
                    textStyle: {
                        fontSize: 11
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: itemToStyle.color,
                    opacity: itemToStyle.opacity
                }
            },
        })
    }
    this.options.series[0].data = datas
    // this.echarts = this.el.nativeElement.querySelector("#echarts");
    this.echarts = echarts.init(this.el.nativeElement.querySelector("#echarts"));
    this.echarts.setOption(this.options);
    window.addEventListener("resize", () => {
      this.echarts.resize();
    })
    
    
  }
  ngAfterViewInit(): void {
  }

  

}
