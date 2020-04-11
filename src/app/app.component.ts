import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
