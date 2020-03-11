import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ahome-population',
  templateUrl: './ahome-population.component.html',
  styleUrls: ['./ahome-population.component.scss']
})
export class AhomePopulationComponent implements OnInit {
  headerTitle: string = "钱塘新区人口分析";
  constructor(public el: ElementRef, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(["/home"])
  }
  
}
