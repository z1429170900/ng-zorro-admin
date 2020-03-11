import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ElementRef} from '@angular/core';

@Component({
  selector: 'app-text-banner',
  templateUrl: './text-banner.component.html',
  styleUrls: ['./text-banner.component.scss']
})
export class TextBannerComponent implements OnInit, AfterViewInit  {
  
  @Input() header: Array<any>;
  @Input() data: Array<any>;

  computerDate: Array<any> = [];
  tranlateY:number = 0;
  timer: any;
  mouseFlag: boolean = true;
  
  constructor(public el: ElementRef) { }

  ngOnInit(): void {
    this.computerDate = this.initData();
    window.addEventListener("resize", () => {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.startAnimation()
    })
  }

  ngAfterViewInit(): void {
    this.startAnimation()
  }
  initData(): Array<any> {
    return this.data.map(res => {
      return res.map((res1, index) => {
        if (typeof res1 == "object") {
          if (res1.color) {
            return {
              name: res1.name,
              width: this.header[index].width,
              color: res1.color,
              align: this.header[index].align
            }
          }
        } else {
          return {
            name: res1,
            width: this.header[index].width,
            color: "#fff",
            align: this.header[index].align
          }
        }
        
      })
    });
  }

  startAnimation() {
    let OverBox = this.el.nativeElement.querySelector("#OverBox");
    OverBox.style.maxHeight = "";
    let MoveUl = this.el.nativeElement.querySelector("#MoveUl");
    let Moveli = this.el.nativeElement.querySelectorAll("#MoveUl li");
    // 计算
    let liH= Moveli[0].clientHeight;
    let OverH = OverBox.clientHeight;

    let long = liH * Moveli.length;
    if (long <= OverH) {
      return false;
    } else {
      let needNum = Math.floor(OverH / liH);
      OverBox.style.maxHeight = needNum * liH + "px";
      let isMoveLong = long - needNum * liH;
      // console.log(OverH, OverBox.clientHeight, needNum * liH)
      let flag = true;
      this.timer = setInterval(() => {
        if (!this.mouseFlag) {
          return false;
        }
        if (flag) {
          this.tranlateY -= liH;
        } else {
          this.tranlateY += liH;
        }
        MoveUl.style.transform = "translateY(" + this.tranlateY + "px)";
        if (this.tranlateY <= isMoveLong * -1) {
          flag = false
        } else if(this.tranlateY >= 0) {
          flag = true
        }
        
      }, 2000)
    }
  }

  // 移入文本 停止动画
  mouseOverOfText() {
    this.mouseFlag = false;
  }
  // 移除文本 开始动画
  mouseLeaveOfText() {
    this.mouseFlag = true;
  }
}
