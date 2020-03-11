import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ElementRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {
  @Input() title: string;
  nowTime: any = new Date().getTime();
  nowWeek: string = null;
  timer: any;

  constructor(public common: CommonService, public el: ElementRef) {
    this.nowWeek = common.weekDay(new Date());
  }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      console.log(1)
      this.nowTime += 1000
    }, 1000)
  }

  ngOnDestroy(): void {
    window.clearInterval(this.timer);
  }

}
