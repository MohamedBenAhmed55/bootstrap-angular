import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-of-opt',
  templateUrl: './of-opt.component.html',
  styleUrl: './of-opt.component.css',
})
export class OfOptComponent implements OnInit {
  constructor(private designUtility: DesignUtilityService){}
  ngOnInit(): void {
    let opt1 = of('Peter', 'Lewis', 'John');
    opt1.subscribe((res) =>{
      console.log(res)
      this.designUtility.printValue(res)
    })
  }
}
