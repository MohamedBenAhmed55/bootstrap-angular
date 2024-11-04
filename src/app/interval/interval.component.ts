import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css',
})
export class IntervalComponent implements OnInit {
  msg: any;
  ngOnInit(): void {
    // let titles = interval(1000)
    // titles.subscribe((res) =>{
    //   console.log(res)
    //   this.msg =('Title ' + res)
    // })
  }
}
