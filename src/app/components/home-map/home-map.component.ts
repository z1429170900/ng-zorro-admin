import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ElementRef} from '@angular/core';

@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.scss']
})
export class HomeMapComponent implements OnInit {
  @Output('checked') checkedBack = new EventEmitter<any>();
  mapIndex:number = null;
  constructor(public el:ElementRef) { }

  ngOnInit(): void {
    this.selectPath(null, 7);
  }

  selectPath(e:any, index:number) {
    if (this.mapIndex) {
      let lastGroupList = this.el.nativeElement.querySelectorAll("#LineGroup" + this.mapIndex +" stop");
      let lastMap = this.el.nativeElement.querySelectorAll("#MapModule" + this.mapIndex);
      lastMap[0].style.fill = "#073787";
      for (let i=0; i<lastGroupList.length; i++) {
        if(i%2 == 0) { // 偶数
          lastGroupList[i].style.stopColor = "#021345";
        } else {
          lastGroupList[i].style.stopColor = "#1366D7";
        }
      }
    }
    let nowMap = this.el.nativeElement.querySelectorAll("#MapModule" + index);
    let LineGroupList = this.el.nativeElement.querySelectorAll("#LineGroup" + index +" stop");
    nowMap[0].style.fill = "rgb(16, 213, 255)";
    for (let i=0; i<LineGroupList.length; i++) {
      if(i%2 == 0) { // 偶数
        LineGroupList[i].style.stopColor = "rgb(21, 98, 200)";
      } else {
        LineGroupList[i].style.stopColor = "rgb(13, 204, 250)";
      }
    }
    this.mapIndex = index;
    this.checkedBack.emit(index);
  }
}
