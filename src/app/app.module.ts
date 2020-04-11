import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
