import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() isCollapsed:boolean;
  @Input() sideMenuData: Array<any>;
  constructor() {
  }

  ngOnInit(): void {
  }
}
