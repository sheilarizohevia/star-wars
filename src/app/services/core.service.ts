import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  list = new Subject<Array<any>>();
  resource = new Subject<string>();

  constructor() { }


  setList(list: Array<any>) {
    this.list.next(list);
  }

  setResource(resource: string) {
    this.resource.next(resource);
  }
}
