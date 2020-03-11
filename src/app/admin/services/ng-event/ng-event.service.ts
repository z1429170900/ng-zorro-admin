import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgEventService {
  /**
   * 后台首页侧边栏开关控制 true为收起状态 false为展开状态
   * 默认false
   * 通过以下事件来监听侧边栏变化
   */
  adminHomeSwidchEvent  = new EventEmitter<boolean>();
  constructor() { }
}
