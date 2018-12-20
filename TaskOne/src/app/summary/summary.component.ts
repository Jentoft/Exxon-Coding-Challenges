import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  bvTotal: number = 0;
  paTotal: number = 0;
  prTotal: number = 0;
  papTotal: number = 0;
  copayTotal: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
