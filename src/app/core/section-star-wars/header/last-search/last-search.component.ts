import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-last-search',
  templateUrl: './last-search.component.html',
  styleUrls: ['./last-search.component.css'],
})
export class LastSearchComponent implements OnInit {
@Input('routes') routes: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
