import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  details = new Subject<any>();
  params = new Subject<{id: string, resource: string}>();
  url = environment;

  constructor(private http: HttpClient) { }

  getDetails(resource: string, id: string): Observable<any> {
      return this.http.get(`${this.url.base}/${resource}/${id}`)
      .pipe(map((response: any) => {
        return response;
      }))
  }

  setParams(id: string, resource: string) {
    this.params.next({id, resource});
  }

  setDetails(details: any) {
    this.details.next(details);
  }
}
