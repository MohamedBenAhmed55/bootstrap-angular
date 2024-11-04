import { Component, OnInit } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { DesignUtilityService } from './design-utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private designUtility:DesignUtilityService) {}
  ngOnInit(): void {
    this.myObserver.subscribe((val) => {
      console.log(val);
    });
    this.transform.subscribe(
      (value) => {
        console.log(value);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        // alert('Observable has completed emitting all values from array')
      }
    );
    this.designUtility.newOffer.subscribe(res =>{
      this.newOffer=res
    })
  }
  newOffer: boolean = false;
  subscribe: boolean = false;
  title = 'bootstrap-angular';
  array = [1, 2, 3, 4, 5];
  numbers$!: Observable<number>;
  filteredNumbers: number[] = [];
  myObserver = new Observable((observer) => {
    console.log('Observer Starts');
    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 1000);
    setTimeout(() => {
      observer.next('3');
    }, 1000);
    setTimeout(() => {
      observer.next('4');
    }, 1000);
    setTimeout(() => {
      observer.next('5');
    }, 1000);
  });

  myObservable = from(this.array);
  transform = this.myObservable.pipe(
    map((value) => {
      return value * 5;
    })
  );
}
