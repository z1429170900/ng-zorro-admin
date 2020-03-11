import { Component, OnInit, Input } from '@angular/core';
import { ElementRef} from '@angular/core';

@Component({
  selector: 'app-canvas-circle',
  templateUrl: './canvas-circle.component.html',
  styleUrls: ['./canvas-circle.component.scss']
})
export class CanvasCircleComponent implements OnInit {
  @Input() value:number;
  @Input() type: string;
  canvas: any;
  image: any;
  constructor(public el: ElementRef) { }

  ngOnInit(): void {
    this.canvas = this.el.nativeElement.querySelector("#CircleCanvas");
    this.image = new Image();
    this.image.src = this.type == "up" ? "assets/image/ups.png" : "assets/image/downs.png";
    this.image.onload = () => {
      this.initCircle();
      window.addEventListener("resize", () => {
        this.initCircle();
      });
    }
    
  }

  initCircle() {
    let canvas = this.canvas;
    let ctx = canvas.getContext("2d");
    let width = this.el.nativeElement.querySelector(".canvas_circle").clientWidth;
    let height = this.el.nativeElement.querySelector(".canvas_circle").clientHeight;
    canvas.width = width;
    canvas.height = height;
    let radio = width > height ? this.getRadio(width, height, 0.6) : this.getRadio(height, width, 0.6);
    console.log(width, height,radio)
    // 外圆环
    ctx.beginPath();
    ctx.arc(width/2, height/2, radio/2, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(255,255,255,0.2)";
    ctx.fill();
    // 内填充
    ctx.beginPath();
    ctx.arc(width/2, height/2, radio/2*0.8, 0, 2*Math.PI);
    ctx.fillStyle = "#041e58";
    ctx.fill();
    // 内圆环
    ctx.beginPath();
    let cha = radio/2 - radio/2*0.8;
    ctx.arc( width/2, height/2, radio/2 - cha/2, -Math.PI / 2, -Math.PI / 2 + this.value * (Math.PI * 2), false);
    ctx.lineWidth = cha - 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = this.type == "up" ? "#34d67d" : "#f54212";
    ctx.stroke();
    // 图片
    ctx.beginPath();
    console.log()
    ctx.drawImage(this.image, width/2-this.image.width/2, height/2-this.image.height/2, this.image.width, this.image.height);
  }

  getRadio(first: number, second: number, scale: number) {
    if(typeof first != "number" || typeof second != "number" || typeof scale != "number") {
      return false;
    } else {
      // 确认数据无误开始执行
      if (first*scale > second) {
        scale -= 0.1;
        return this.getRadio(first, second, scale);
      } else {
        return first*scale;
      }
    }
   
  }
}
