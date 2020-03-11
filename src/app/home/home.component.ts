import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';

declare var AMap: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  headerTitle: string = "钱塘新区基层治理中心";
  Map: any;
  sreetObj: any = {
    title: "临江街道",
    human_count: 2514,
    house_count: 816,
    car_count: 671
  };
  layerStyle: any = {
    top: "-5%",
    right: "14%"
  }
  // 搜索对象
  search: any = {
    type: "人员",
    icon: "icon-renyuan",
    text: ""
  }
  // 下拉框数据
  selectData:any = [
    {
      icon: "icon-gongsi",
      name: "公司"
    },
    {
      icon: "icon-renyuan",
      name: "人员"
    },
    {
      icon: "icon-shequ",
      name: "社区"
    },
    {
      icon: "icon-zuzhi",
      name: "组织"
    }
  ];
  // 搜索结果
  resultOfSearch: Array<any> = [];
  // 搜索详情
  resultDetails: any = {
    show: false
  }
  // 下拉选择框的显示开关
  selectListShow: boolean = false;
  constructor(public el: ElementRef) {
  }

  ngOnInit(): void {
    this.mapInit();
  }
  
  getSelectData(): Array<any> {
    return this.selectData.filter(res => {
      return res.name != this.search.type;
    })
  }
  // 设置搜索类型
  setTypeOfSearch(e:any, item:any): void {
    window.event? window.event.cancelBubble = true : e.stopPropagation();
    this.search.type = item.name;
    this.search.icon = item.icon;
    this.selectListShow = false;
  }
  // 下拉选择列表的控制器
  checkTheSelect(e:any): void {
    window.event? window.event.cancelBubble = true : e.stopPropagation();
    this.selectListShow = !this.selectListShow;
  }
  // 全局点击事件
  closeSomeThing(): void {
    this.selectListShow = false;
  }
  // 搜索框变化
  searchTextChange(): void {
    console.log(this.search.text)
    if (this.search.text == "陈") {
      this.resultOfSearch = [
        {
          name: "陈香",
          card: "330683199806132222",
          address: "下沙·雷昂小区",
          phone: "15167551111",
          x: 119.930008,
          y: 30.084839
        },
        {
          name: "陈店",
          card: "330683199806132222",
          address: "杭州职业技术学院",
          phone: "15167551111",
          x: 120.336653,
          y: 30.301997
        },
        {
          name: "陈皮",
          card: "330683199806132222",
          address: "白虎山",
          phone: "15167551111",
          x: 120.421394,
          y: 30.283225
        }
      ];
      // 创建点
      this.resultOfSearch.map(res => {
        this.initMarker(res.x, res.y, res.name);
      });
      this.Map.panTo([119.930008, 30.084839]);
    } else {
      this.resultOfSearch = [];
      this.resultDetails = {
        show: false
      }
    }
  }

  // 创建地图点
  initMarker(x:number, y:number, name:string) {
    let marker = new AMap.Marker({
      // 图片标记
      position: [x, y], //位置
      title: name
    });
    let markerContent = document.createElement("div");
    var markerImg = document.createElement("img");
    markerImg.className = "markerlnglat";
    markerImg.src = "assets/image/biao.png";
    markerContent.appendChild(markerImg);
    var markerSpan = document.createElement("span");
    markerSpan.className = "marker";
    markerSpan.innerHTML = name;
    markerContent.appendChild(markerSpan);
    marker.setContent(markerContent); //更新点标记内容
    this.Map.add(marker);
  }
  // 清空搜索框
  clearText(): void {
    this.search.text = "";
    this.resultDetails = {
      show: false
    };
    this.resultOfSearch = [];
  }
  // 结果详情
  checkResult(item: any): void {
    this.resultDetails = item;
    this.resultDetails.show = true;
    this.Map.panTo([item.x, item.y]);
  }
  // 地图init
  mapInit() {
    this.Map = new AMap.Map("GdMap", {
      center: [121.5273284900,29.8027413400],
      zoom: 14,
      mapStyle:"amap://styles/e250059f13d3b7f9ef63ab37584c5a2c"
    });
  }
  // 选中地图模块后的回调
  checkedBack(index) {
    if (index == 7) {
      this.layerStyle.top = "-5%";
      this.layerStyle.right = "14%";
    } else if (index == 6) {
      this.layerStyle.top = "17%";
      this.layerStyle.right = "28%";
    } else if (index == 5) {
      this.layerStyle.top = "-7%";
      this.layerStyle.right = "27%";
    } else if (index == 4) {
      this.layerStyle.top = "-8%";
      this.layerStyle.right = "36%";
    } else if (index == 3) {
      this.layerStyle.top = "-6%";
      this.layerStyle.right = "43%";
    } else if (index == 2) {
      this.layerStyle.top = "3%";
      this.layerStyle.right = "62%";
    } else if (index == 1) {
      this.layerStyle.top = "-8%";
      this.layerStyle.right = "66%";
    }
  }

  // 链接跳转
  urlGo(type) {
    if(type == 'zhianxiaoqu') {
      window.open("http://218.108.103.85/ibweb/#/login?token=c1FLVM1Mn8PrZQCmHPyY")
    } else if (type == 'sipingtai') {
      window.open("http://218.108.147.205")
    } else if (type == 'wangge') {
      window.open("http://10.54.4.130/goto/jlogin")
    }
  }
}
