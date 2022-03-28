import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string = '';
  @Input('searchVisible') searchVisible = false;

  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
  }

  searchText(text: string) {
    this.coreService.setSearch(text);
  }
}
