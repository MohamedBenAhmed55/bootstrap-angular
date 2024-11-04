import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  newOffer = new Subject<boolean>();
  user = new Subject<any>()
  constructor() {}
  printValue(val: any) {
    let element = document.createElement('li');
    element.innerText = val;
    document.getElementById('appendelement')?.appendChild(element);
  }

}
