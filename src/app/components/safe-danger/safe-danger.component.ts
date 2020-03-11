import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safe-danger',
  templateUrl: './safe-danger.component.html',
  styleUrls: ['./safe-danger.component.scss']
})
export class SafeDangerComponent implements OnInit {

  title: string = "安全隐患";

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
    [
      {
        color: "#FF5656",
        name: "新湾·群欢村"
      },
      {
        color: "#FF5656",
        name: "这里是事件描述"
      },
      {
        color: "#FF5656",
        name: "未处理"
      },
      {
        color: "#FF5656",
        name: "2/23"
      }
    ],
    [
      {
        color: "#FF5656",
        name: "新湾·群欢村"
      },
      {
        color: "#FF5656",
        name: "这里是事件描述"
      },
      {
        color: "#FF5656",
        name: "未处理"
      },
      {
        color: "#FF5656",
        name: "2/23"
      }
    ],
    [
      {
        color: "#97FF7B",
        name: "新湾·群欢村"
      },
      {
        color: "#97FF7B",
        name: "这里是事件描述"
      },
      {
        color: "#97FF7B",
        name: "未处理"
      },
      {
        color: "#97FF7B",
        name: "2/23"
      }
    ],
    [
      {
        color: "#FF5656",
        name: "新湾·群欢村"
      },
      {
        color: "#FF5656",
        name: "这里是事件描述"
      },
      {
        color: "#FF5656",
        name: "未处理"
      },
      {
        color: "#FF5656",
        name: "2/23"
      }
    ],
    [
      {
        color: "#FF5656",
        name: "新湾·群欢村"
      },
      {
        color: "#FF5656",
        name: "这里是事件描述"
      },
      {
        color: "#FF5656",
        name: "未处理"
      },
      {
        color: "#FF5656",
        name: "2/23"
      }
    ],
    [
      {
        color: "#97FF7B",
        name: "新湾·群欢村"
      },
      {
        color: "#97FF7B",
        name: "这里是事件描述"
      },
      {
        color: "#97FF7B",
        name: "未处理"
      },
      {
        color: "#97FF7B",
        name: "2/23"
      }
    ],
    [
      {
        color: "#FF5656",
        name: "新湾·群欢村"
      },
      {
        color: "#FF5656",
        name: "这里是事件描述"
      },
      {
        color: "#FF5656",
        name: "未处理"
      },
      {
        color: "#FF5656",
        name: "2/23"
      }
    ],
    [
      {
        color: "#FF5656",
        name: "新湾·群欢村"
      },
      {
        color: "#FF5656",
        name: "这里是事件描述"
      },
      {
        color: "#FF5656",
        name: "未处理"
      },
      {
        color: "#FF5656",
        name: "2/23"
      }
    ],
    [
      {
        color: "#97FF7B",
        name: "新湾·群欢村"
      },
      {
        color: "#97FF7B",
        name: "这里是事件描述"
      },
      {
        color: "#97FF7B",
        name: "未处理"
      },
      {
        color: "#97FF7B",
        name: "2/23"
      }
    ]
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
