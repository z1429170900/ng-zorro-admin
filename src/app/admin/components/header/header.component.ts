import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare const window: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isCollapsed:boolean;
  @Output('toggle') toggleCollapsed = new EventEmitter<boolean>();
  /**
   * 是否放大(页面放大缩小)
   * true缩小的icon    false放大的icon
   */
  zoomFlag: boolean = false;
  /**
   * 全屏icon的气泡标题
   * 
   */
  enlargeTitle: string = "放大";
  constructor() {
  }
  /**
   * 初始化方法
   */
  ngOnInit(): void {
  }
  /**
   * 该子组件向父组件传值
   * 修改侧边栏状态
   */
  swidchOpen():void {
    this.toggleCollapsed.emit(this.isCollapsed);
  }
  /**
   * 
   */
  toggleFullScreen():void {
    let element:any = window.document.documentElement;
    let document = window.document;
    if (this.zoomFlag) { // 缩小
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      }
    } else { // 放大
      if (element.requestFullscreen) {
          element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
      }
    }
    this.zoomFlag = !this.zoomFlag
  }
}
