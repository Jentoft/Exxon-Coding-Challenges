import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-cases',
  templateUrl: './current-cases.component.html',
  styleUrls: ['./current-cases.component.css']
})
export class CurrentCasesComponent implements OnInit {
  dummy = "ooooo"; /**Dummy variable to guarentee size of sample blocks of colors*/

  constructor() { }

  ngOnInit() {
  }

}
