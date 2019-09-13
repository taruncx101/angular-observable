import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubcription: Subscription;

  constructor() { }

  ngOnInit() {
    this.firstObsSubcription = interval(1000).subscribe(
    (count) => {
      console.log({count});
    });
  }
  ngOnDestroy(): void {
    this.firstObsSubcription.unsubscribe();
  }

}
