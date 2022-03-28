import { Component, Input, OnInit } from '@angular/core';
import { RouteModel } from 'src/app/models/route.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input('search') search: string = '';
@Input('routes') routes: Array<RouteModel> = [];
@Input('searchVisible') searchVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

}
