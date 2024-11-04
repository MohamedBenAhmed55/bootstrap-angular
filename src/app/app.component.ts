import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.myObserver.subscribe((val) => {
      console.log(val);
    });
  }

  title = 'bootstrap-angular';
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
}
