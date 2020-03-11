import { Component, OnInit } from '@angular/core';
import { getOption, M2R2Data } from './options/chart1.options';
import { getOption1, M3R2Data } from './options/chart2.options';
import { getOption2, M4R2Data } from './options/chart3.options';
import { ElementRef} from '@angular/core';

declare const echarts: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /**
   * 首页卡片统计数据
   */
  countData: Array<any> = [
    {
      icon: "user",
      number: 803,
      name: "人口总数",
      bg: "#2d8cf0"
    },
    {
      icon: "user",
      number: 232,
      name: "房屋总数",
      bg: "#19be6b"
    },
    {
      icon: "user",
      number: 232,
      name: "组织数量",
      bg: "#ff9900"
    },
    {
      icon: "user",
      number: 232,
      name: "经济增长量",
      bg: "#ed3f14"
    },
    {
      icon: "user",
      number: 232,
      name: "事件总数",
      bg: "#e46cbb"
    },
    {
      icon: "user",
      number: 232,
      name: "隐患总数",
      bg: "#9aee64"
    }
  ];
  /**
   * 图表实例*3
   */
  echarts1: any = null;
  echarts2: any = null;
  echarts3: any = null;

  constructor(public el: ElementRef) { }

  ngOnInit(): void {
    let chart1params:Array<M2R2Data> = this.getChart1Data();
    this.echarts1 = echarts.init(this.el.nativeElement.querySelector("#HomeCharts1"));
    this.echarts1.setOption(getOption(chart1params));

    let chart2params:Array<M3R2Data> = this.getChart2Data();
    this.echarts2 = echarts.init(this.el.nativeElement.querySelector("#HomeCharts2"));
    this.echarts2.setOption(getOption1(chart2params));

    let chart3params:Array<M3R2Data> = this.getChart3Data();
    this.echarts3 = echarts.init(this.el.nativeElement.querySelector("#HomeCharts3"));
    this.echarts3.setOption(getOption2(chart3params));
    window.addEventListener("resize", () => {
      this.echarts1.resize();
      this.echarts2.resize();
      this.echarts3.resize();
    })
  }
  /**
   * 返回第一个图表的数据并处理
   */
  getChart1Data():Array<M2R2Data> {
    return [
        {value:335, legendname:'种类01',name:"种类01  335",itemStyle:{color:"#8d7fec"}},
        {value:310, legendname:'种类02',name:"种类02  310",itemStyle:{color:"#5085f2"}},
        {value:234, legendname:'种类03',name:"种类03  234",itemStyle:{color:"#e75fc3"}},
        {value:154, legendname:'种类04',name:"种类04  154",itemStyle:{color:"#f87be2"}},
        {value:335, legendname:'种类05',name:"种类05  335",itemStyle:{color:"#f2719a"}},
        {value:335, legendname:'种类06',name:"种类06  335",itemStyle:{color:"#fca4bb"}},
        {value:335, legendname:'种类07',name:"种类07  335",itemStyle:{color:"#f59a8f"}},
        {value:335, legendname:'种类08',name:"种类08  335",itemStyle:{color:"#fdb301"}},
        {value:335, legendname:'种类09',name:"种类09  335",itemStyle:{color:"#57e7ec"}},
        {value:335, legendname:'种类10',name:"种类10  335",itemStyle:{color:"#cf9ef1"}},   
        {value:335, legendname:'种类09',name:"种类11  335",itemStyle:{color:"#57e7ec"}},
        {value:335, legendname:'种类10',name:"种类12  335",itemStyle:{color:"#cf9ef1"}}, 
    ];
  }
  /**
   * 返回第二个图表的数据并处理
   */
  getChart2Data():Array<M3R2Data> {
    return [{}];
  }

  /**
   * 返回第三个图表的数据并处理
   */
  getChart3Data():Array<M4R2Data> {
    return [{}];
  }

}
