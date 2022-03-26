import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PeopleModel } from "../models/people.model";
import { environment } from "../../environments/environment"
import { map } from "rxjs/operators";
import { firstValueFrom, Observable } from "rxjs";
import { PeopleAdapter } from "../utils/adapters/people.adapter";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  url = environment;
  constructor(private http: HttpClient,
    private peopleAdapter: PeopleAdapter) { }

  getPeople(search: string | null): Observable<Array<PeopleModel>> {
    return this.http.get(`${this.url.people}${search? `?search=${search}`: ''}`)
      .pipe(map((response: any) => {
        const list: Array<PeopleModel> = [];
        response.results.forEach(async (people: any) => {
          const peopleAux: PeopleModel = this.peopleAdapter.recivePeopleAdapter(people);
          const homeworldName = await firstValueFrom(this.getHomeWorld(peopleAux.homeworld));
          peopleAux.homeworld = homeworldName;
          list.push(peopleAux);
        });
        return list;
      }));
  }

  getHomeWorld(url: string): Observable<string> {
    return this.http.get(url).pipe(map((response: any) => {
      return response.name
    }));
  }

}
