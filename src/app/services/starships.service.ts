import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StartshipsModel } from '../models/startships.model';
import { StartshipsAdapter } from '../utils/adapters/startships.adapter';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  url = environment;
  constructor(private http: HttpClient,
    private startShipAdapter: StartshipsAdapter) { }

  getStarships(search: string | null): Observable<Array<StartshipsModel>> {
    return this.http.get(`${this.url.starships}${search? `?search=${search}`: ''}`)
      .pipe(map((response: any) => {
        const list: Array<StartshipsModel> = [];
        response.results.forEach(async (starship: any) => {
          list.push(this.startShipAdapter.recivePeopleAdapter(starship));
        });
        return list;
      }));
  }
}
