import { Component, OnInit } from '@angular/core';
import { from, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  //   this.myObserver.subscribe((val) => {
  //     console.log(val);
  //   });
  //   this.transform.subscribe((value) => {
  //     console.log(value)
  //   },
  // (error) =>{
  //   alert(error.message)
  // }, () =>{
  //   alert('Observable has completed emitting all values from array')
  // })
  }

  title = 'bootstrap-angular';
  array = [1, 2, 3, 4, 5];
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
  transform = this.myObservable.pipe(map((value) =>{
    return value * 5
  }))
}
