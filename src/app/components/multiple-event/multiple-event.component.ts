import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-event',
  templateUrl: './multiple-event.component.html',
  styleUrls: ['./multiple-event.component.scss']
})
export class MultipleEventComponent implements OnInit {

  title: string = "综合事件";
  header: Array<any> = [{ // 需要转换数据
    name: "位置",
    width: "30%",
    color: "#0089FD",
    align: "left"
  }, {
    name: "事件",
    width: "30%",
    color: "#0089FD",
    align: "center"
  }, {
    name: "状态",
    width: "20%",
    color: "#0089FD",
    align: "right"
  }, {
    name: "时间",
    width: "20%",
    color: "#0089FD",
    align: "right"
  }];
  data: Array<any> = [ // 需要转换数据
    ["新湾·群欢村", "这里是事件", "未处理", "2/23"],
    ["新湾·群欢村", "这里是事件", "未处理", "2/23"],
    ["新湾·群欢村", "这里是事件", "未处理", "2/23"],
    ["新湾·群欢村", "这里是事件", "未处理", "2/23"],
    ["新湾·群欢村", "这里是事件", "未处理", "2/23"],
    ["新湾·群欢村", "这里是事件", "未处理", "2/23"],
    ["新湾·群欢村", "这里是事件", "未处理", "2/23"]
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
