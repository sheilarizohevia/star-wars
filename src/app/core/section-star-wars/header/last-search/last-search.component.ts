import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { RouteModel } from 'src/app/models/route.model';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-last-search',
  templateUrl: './last-search.component.html',
  styleUrls: ['./last-search.component.css'],
})
export class LastSearchComponent implements OnInit {
@Input('routes') routes: Array<RouteModel> = [];
  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
  }

  getLink(item: RouteModel): string {
   return `${item.resource}?search=${item.search}`;
  }

  search(route: RouteModel) {
    this.coreService.setLastSearch(route);
  }
 }
