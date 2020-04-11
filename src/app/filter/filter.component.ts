import { Component, OnInit } from '@angular/core';
import { StatesService } from '../states.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  
  constructor(private statesService : StatesService) { }

  ngOnInit(): void {
  }

  get statesList() : string[] {
    return this.statesService.getAllStates();
  }
}




