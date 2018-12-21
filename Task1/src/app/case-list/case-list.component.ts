import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Claim } from '../claim';
import { DataService } from '../data.service';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent implements OnInit {
  claims: Claim[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getClaims();
  }

  getClaims(): void {
    this.dataService.getClaims().subscribe(claims => this.claims = claims);
  }
}
