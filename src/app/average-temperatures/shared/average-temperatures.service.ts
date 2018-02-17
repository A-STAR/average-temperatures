import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AverageTemperaturesService {

  constructor(private http: HttpClient) { }

  get temperature$(): Observable<number> {
    return this.http.get<number>(`https://www.random.org/integers/?num=1&min=0&max=100&col=1&base=10&format=plain&rnd=new`);
  }

}
