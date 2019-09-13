import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubcription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSubcription = interval(1000).subscribe(
    // (count) => {
    //   console.log({count});
    // });
    const cutomIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('count is greater than 3'));

        }
        count++;
      }, 1000);
    });

    this.firstObsSubcription = cutomIntervalObservable.subscribe((data) => {
      console.log({ data });
    }, (error) => {
      alert(error.message);
    }, () => {
      console.log('completed!!');
    });
  }
  ngOnDestroy(): void {
    this.firstObsSubcription.unsubscribe();
  }

}
