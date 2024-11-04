import { Component } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrl: './sub1.component.css',
})
export class Sub1Component {
  constructor(private designUtility:DesignUtilityService) {}
  onChange(userid: any) {
    console.log(userid.value);
    this.designUtility.setUserName(userid.value)
  }
}
