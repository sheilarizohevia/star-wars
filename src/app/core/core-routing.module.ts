import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SectionStarWarsComponent} from "./section-star-wars/section-star-wars.component";
import {ResultComponent} from './section-star-wars/result/result.component';
import { DetailsComponent } from '../shared/details/details.component';
import { MaintenanceComponent } from '../shared/maintenance/maintenance/maintenance.component';

const routes: Routes = [
  {
    path:'', component: SectionStarWarsComponent, children: [
      {
        path: 'maintenance', component: MaintenanceComponent
      },
      {
        path: ':resource', component: ResultComponent,
      },
      {
        path:  ':resource/:id', component: DetailsComponent
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
