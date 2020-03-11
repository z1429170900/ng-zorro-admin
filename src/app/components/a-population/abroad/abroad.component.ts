import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';

declare const echarts: any;

@Component({
  selector: 'app-abroad',
  templateUrl: './abroad.component.html',
  styleUrls: ['./abroad.component.scss']
})
export class AbroadComponent implements OnInit {
  title: string = "人口境外占比";
  options = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/>"
    },
    legend: {
      type: "plain",
      right: "10%",
      top: "middle",
      orient: 'vertical',
      show: true,
      icon: "rect",
      itemWidth: 4,
      itemHeight: 30,
      textStyle: {
          color: '#fff',
          fontSize: 16,
          padding: [10, 10]
      },
      formatter: '{name}',
      data: ['本地人口', '外地人口', '境外人口']
    },
    series: [{
      type: 'pie',
      radius: ['40%', '60%'],
      center: ['30%', '50%'],
      color: ['#0388ff', '#80cbf3', '#f79704', '#FFA800','#4658F6'],
      left: 'left',
      itemStyle:{
        borderWidth: 10,
        borderColor: "rgba(0, 0, 0, 0)"
      },
      data: [{
            value: 27,
            name: '本地人口'
        },
        {
            value: 30,
            name: '外地人口'
        },
        {
            value: 24,
            name: '境外人口'
        }
      ],
      labelLine: {
          normal: {
              show: false,
              length: 50,
              length2: 50,
              lineStyle: {
                  color: '#CCCCCC',
                  width: 2
              }
          }
      },
      label: {
        show: false
      }
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
