import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  getResources(): Observable<any> {
    return this.http.get("./assets/resources.json").pipe(
      map(rsc => rsc['headers'])
    );
  }
}