import { Component } from '@angular/core';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrl: './sub1.component.css'
})
export class Sub1Component {
  constructor(){}
  onChange(userid:any){
    console.log(userid.value)
  }
}
