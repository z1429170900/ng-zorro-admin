import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ahome-economics',
  templateUrl: './ahome-economics.component.html',
  styleUrls: ['./ahome-economics.component.scss']
})
export class AhomeEconomicsComponent implements OnInit {
  headerTitle: string = "钱塘新区产业经济分析";
  constructor(public el: ElementRef, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(["/home"])
  }
}
