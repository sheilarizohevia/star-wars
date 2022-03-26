import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input('search') search = '';
@Input('routes') routes: Array<string> = [];
@Input('searchVisible') searchVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

}
