import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Action, Store } from '@ngrx/store';
import { PeopleModel } from 'src/app/models/people.model';
import { StartshipsModel } from 'src/app/models/startships.model';
import { CoreService } from 'src/app/services/core.service';
import { DetailsService } from 'src/app/services/details.service';
import { PeopleService } from 'src/app/services/people.service';
import { StarshipsService } from 'src/app/services/starships.service';

interface AppState {
   routes: string
}
@Component({
  selector: 'app-section-star-wars',
  templateUrl: './section-star-wars.component.html',
  styleUrls: ['./section-star-wars.component.css']
})
export class SectionStarWarsComponent implements OnInit {
  resource: string = '';
  search: string = '';
  detailMode: boolean = false;
  routes: Array<string> = [];

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService,
    private startShipsService: StarshipsService,
    private coreService: CoreService,
    private detailsService: DetailsService) {

    route.queryParams.subscribe(p => {

      if (p['search']) {
        this.search = p['search'];
      } else {
        this.search = '';
      }
      if (this.resource) {
        const action: Action = {
          type: `/${this.resource}?search=${this.search}`
        };
        this.store.dispatch(action);
        this.getResources();
      }
    });
  }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.routes.push(state.routes);
      if(this.routes.length == 5) {
        this.routes.splice(0, 1);
      }
    })

    this.coreService.resource.subscribe((resource: string) => {
      this.resource = resource;
      this.detailMode = false;
      const action: Action = {
        type: `/${this.resource}`
      };
      this.store.dispatch(action);
      this.getResources();
    })

    this.detailsService.params.subscribe((params: { id: string, resource: string }) => {
      this.detailMode = true;
      this.getDetails(params.id, params.resource);
    })

  }

  getResources() {
    switch (this.resource) {
      case 'people': {
        this.getPeople();
      } break
      case 'starships': {
        this.getStarships();
      } break
      default: {
        alert('Pagina en mantenimiento')
      }
    }
  }

  getPeople() {
    this.peopleService.getPeople(this.search != '' ? this.search : null)
      .subscribe((peoples: Array<PeopleModel>) => {
        this.coreService.setList(peoples);
      })
  }

  getStarships() {
    this.startShipsService.getStarships(this.search != '' ? this.search : null)
      .subscribe((startships: Array<StartshipsModel>) => {
        this.coreService.setList(startships);
      })
  }

  getDetails(id: string, resource: string) {
    this.detailsService.getDetails(resource, id).subscribe((details: any) => {
      this.detailsService.setDetails(details);
    })
  }
}
