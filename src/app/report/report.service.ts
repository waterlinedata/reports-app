import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ReportService {
  private httpObservable;

  constructor (private http: Http) { }


  /**
   * Get Product Version Details. Load from server once and store in memory to prevent multiple API calls.
   * @returns {Observable}
   */
  public get chartData(): Observable<any> {
    return this.http.get('/assets/json/testResult.json')
      .map(res => res.json());
  }


}
