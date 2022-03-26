import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input('search') search: string = '';
  @Input('searchVisible') searchVisible = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(search: string) {
    this.router.navigate([], {
      queryParams: {search},
      queryParamsHandling: 'merge',
  });
  }

}
