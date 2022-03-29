import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Action, Store } from '@ngrx/store';
import { PeopleModel } from 'src/app/models/people.model';
import { RouteModel } from 'src/app/models/route.model';
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
  routes: Array<RouteModel> = [];
  
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService,
    private startShipsService: StarshipsService,
    private coreService: CoreService,
    private detailsService: DetailsService) {
  }

  ngOnInit(): void {
    this.routes = this.coreService.getRoutes();

    this.coreService.lastSearch.subscribe((lastSearch: RouteModel) => {
      this.resource = lastSearch.resource;
      this.search = lastSearch.search;
      this.router.navigate([this.resource]);
      this.getResources();
    })

    this.coreService.search.subscribe((text: string) => {
      this.search = text;
      const action: Action = {
        type: this.search
      };
      this.store.dispatch(action);
      this.getResources();
    });

    this.coreService.resetSearch.subscribe(() => this.search = '')

    this.store.subscribe((state: any) => {
      if (state.routes && state.routes != '') {
        this.routes.push({
          search: state.routes,
          resource: this.resource
        });
        if (this.routes.length == 5) {
          this.routes.splice(0, 1);
        }
        this.coreService.saveRoutes(this.routes);
      }
    });

    this.coreService.resource.subscribe((resource: string) => {
      this.resource = resource;
      this.detailMode = false;
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
        this.router.navigate(['maintenance'], );
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
