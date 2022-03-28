import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { RouteModel } from '../models/route.model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  list = new Subject<Array<any>>();
  resource = new Subject<string>();
  search = new Subject<string>();
    lastSearch = new Subject<RouteModel>();

  constructor() { }


  setList(list: Array<any>) {
    this.list.next(list);
  }

  setResource(resource: string) {
    this.resource.next(resource);
  }

  setSearch(text: string) {
    this.search.next(text)
  }

  setLastSearch(routeModel: RouteModel) {
    this.lastSearch.next(routeModel);
  }

  saveRoutes(routes: Array<RouteModel>) {
    localStorage.setItem('star-war-routes', JSON.stringify(routes));
  }

  getRoutes(): Array<RouteModel> {
    const routesString = localStorage.getItem('star-war-routes');
    return routesString? JSON.parse(routesString): []
  }
}
