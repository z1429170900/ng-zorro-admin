import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgServiceService {
  /**
   * 后台首页侧边栏开关控制 true为收起状态 false为展开状态
   * 默认false展开
   * 逻辑： 该状态给ng-event这个服务使用，头部按钮点击触发并发布服务事件，将该状态切换,后侧边栏收到订阅改变状态
   */
  adminHomeSwidch: boolean = false;

  constructor() { }

  /**
   * 改变
   */
}
