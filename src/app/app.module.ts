import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import { StoreModule } from '@ngrx/store';
import { routerReducer } from './core/routes.reducer';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      routes: routerReducer
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
