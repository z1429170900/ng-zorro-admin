import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  title: string = "组织机构";
  dataOfOrigin: Array<any> = [ // 正常数据
    {
      belong: "组织名称",
      name: "张三",
      phone: "18967432011"
    },
    {
      belong: "组织名称",
      name: "张三",
      phone: "18967432011"
    },
    {
      belong: "组织名称",
      name: "张三",
      phone: "18967432011"
    }
  ];
  header: Array<any> = [{ // 需要转换数据
    name: "所属组织",
    width: "34%",
    color: "#0089FD",
    align: "left"
  }, {
    name: "名称",
    width: "20%",
    color: "#0089FD",
    align: "center"
  }, {
    name: "联系方式",
    width: "46%",
    color: "#0089FD",
    align: "right"
  }];
  data: Array<any> = [ // 需要转换数据
    ["所属组织", "张三", "15167551888"],
    ["所属组织", "张三", "15167551888"],
    ["所属组织", "张三", "15167551888"],
    ["所属组织", "张三", "15167551888"],
    ["所属组织", "张三", "15167551888"],
    ["所属组织", "张三", "15167551888"],
    ["所属组织", "最后", "15167551888"]
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
