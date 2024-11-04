import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css',
})
export class SubjectComponent implements OnInit, OnDestroy {
  user:any = 'Peter';
  constructor(private designUtility: DesignUtilityService) {
    this.designUtility.user.subscribe(res =>{
      this.user = res
    })
  }
  ngOnInit(): void {
    this.designUtility.newOffer.next(true);
  }
  ngOnDestroy(): void {
    this.designUtility.newOffer.next(false);
  }
}
