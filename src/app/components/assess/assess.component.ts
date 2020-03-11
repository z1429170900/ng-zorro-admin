import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assess',
  templateUrl: './assess.component.html',
  styleUrls: ['./assess.component.scss']
})
export class AssessComponent implements OnInit {
  title: string = "街道考核";
  constructor() { }

  ngOnInit(): void {
  }

}
