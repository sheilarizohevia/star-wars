import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import {SharedComponent} from "./shared.component";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    ListComponent
  ]
})
export class SharedModule { }
