import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './section-star-wars/resources/resources.component';
import { HeaderComponent } from './section-star-wars/header/header.component';
import { SearchComponent } from './section-star-wars/header/search/search.component';
import { LastSearchComponent } from './section-star-wars/header/last-search/last-search.component';
import { ResultComponent } from './section-star-wars/result/result.component';
import { CoreComponent } from './core.component';
import { SectionStarWarsComponent } from './section-star-wars/section-star-wars.component';
import {CoreRoutingModule} from "./core-routing.module";
import { SharedModule } from '../shared/shared.module';
import { PeopleService } from '../services/people.service';
import { HttpClientModule } from '@angular/common/http';
import {PeopleAdapter} from '../utils/adapters/people.adapter';
import { StartshipsAdapter } from '../utils/adapters/startships.adapter';
import { StarshipsService } from '../services/starships.service';
import { DetailsService } from '../services/details.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResourcesComponent,
    HeaderComponent,
    SearchComponent,
    LastSearchComponent,
    ResultComponent,
    CoreComponent,
    SectionStarWarsComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    PeopleService,
    PeopleAdapter,
    StarshipsService,
    DetailsService,
    StartshipsAdapter
  ]
})
export class CoreModule { }
