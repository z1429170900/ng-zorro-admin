import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface menuListObj {
  name: string,
  icon: string,
  url?: string,
  hasNext: boolean,
  isOpen?: boolean,
  selected?: boolean,
  children?:Array<any>
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  /**
   * 侧边栏展开收回控制
   * true收回状态 false展开状态
   */
  isCollapsed:boolean = false;
  /**
   * 侧边栏动态列表数据
   * 
   */
  sideMenuData:Array<any> = [];
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.sideMenuData = this.getSideData();
  }
  /**
   * 切换侧边栏状态
   * @param isCollapsed 
   */
  toggleCollapsed(isCollapsed:boolean):void {
    this.isCollapsed = !isCollapsed
  }
  /**
   * 获取侧边栏动态数据
   * name: 标签名
   * icon: 标签的图标
   * hasNext: 是否有下一级 true必须有childrenn参数
   * isOpen: 是否打开状态
   * selected: 是否默认选中
   * children: 子菜单 子菜单不需要icon和级数 但最后一级必须要url
   */
  getSideData():Array<menuListObj> 
  {
    let menuList:Array<menuListObj> = [
      {
        name: "人口",
        icon: "team",
        url: "/admin/population",
        hasNext: false,
        selected: false
      },
      {
        name: "建筑",
        icon: "bank",
        hasNext: true,
        children: [
          {
            name: "建筑首页",
            url: "/",
            hasNext: false
          },
          {
            name: "Option2",
            url: "/",
            hasNext: false
          },
          {
            name: "Option3",
            url: "/",
            hasNext: false
          }
        ]
      },
      {
        name: "事件",
        icon: "snippets",
        hasNext: true,
        children: [
          {
            name: "Option1",
            url: "/",
            hasNext: false
          },
          {
            name: "Option2",
            url: "/",
            hasNext: false
          },
          {
            name: "Submneu3",
            hasNext: true,
            children: [
              {
                name: "测试",
                url: "/admin/build",
                hasNext: false
              }
            ]
          }
        ]
      }
    ]
    this.menuListMachining(menuList);
    console.log(menuList, this.router.url )
    return menuList;
  }
  /**
   * 对侧边栏数据加工 
   * 对应当前路由修改选中状态
   * 及同上条件修改展开状态
   */
  menuListMachining(data: Array<menuListObj>):boolean {
    let index = 0;
    for (let i=0,length=data.length; i<length; i++) {
      if (data[i].hasNext) {
        let flag = this.menuListMachining(data[i].children);
        console.log(flag)
        if (flag) {
          data[i].isOpen = true;
          return true;
        }
      } else {
        if (this.router.url == data[i].url) {
          data[i].selected = true;
          return true;
        }
      }
    }
  }
}
