import { Component, OnInit } from '@angular/core';
import { StatesService } from '../states.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  showNoStates : boolean = false;
  count : number;

  constructor(private statesService : StatesService) { }

  ngOnInit() {
  }
  
  handleInputChange(event) {
    this.statesService.setFilter(event.target.value);
    this.count = this.statesService.statesCount();

    if (this.count < 1) {
      this.showNoStates = true;
    } else {
      this.showNoStates = false;
    }
  }
}
