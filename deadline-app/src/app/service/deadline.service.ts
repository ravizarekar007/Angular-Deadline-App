import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface DeadlineResponse {
  secondsLeft: number;
}

@Injectable({
  providedIn: 'root',
})
export class DeadlineService {

  constructor(private http: HttpClient){}

  getDeadline():Observable<DeadlineResponse>{
    //return this.http.get<DeadlineResponse>("/api/deadline");

    return of({ secondsLeft: 120 });
  }
}
