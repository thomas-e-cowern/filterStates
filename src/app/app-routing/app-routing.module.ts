import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
//  { path: 'filter-component', component: FilterComponent },
//  { path: 'search-component', component: SearchComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  
  exports: [RouterModule],
  
  declarations: []
})
export class AppRoutingModule { }
