import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import {SharedComponent} from "./shared.component";
import { RouterModule } from '@angular/router';
import { MaintenanceComponent } from './maintenance/maintenance/maintenance.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    SharedComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    ListComponent
  ]
})
export class SharedModule { }
