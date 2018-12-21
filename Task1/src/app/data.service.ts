import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Claim } from './claim';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private claimsUrl = "http://www.mocky.io/v2/584869ab100000d20c4e2f87"


  constructor(private http: HttpClient) { }

  getClaims(): Observable<Claim[]> {
    return this.http.get<Claim[]>(this.claimsUrl);
  }
}
