import { Component } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrl: './sub2.component.css'
})
export class Sub2Component {
  userName:any = 'Peter';
  constructor(private designUtility: DesignUtilityService) {
    this.designUtility.user.subscribe(res =>{
      this.userName = res
    })
  }
}
