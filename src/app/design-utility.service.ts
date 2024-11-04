import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  constructor() {}
  printValue(val: any) {
    let element = document.createElement('li');
    element.innerText = val;
    document.getElementById('appendelement')?.appendChild(element);
  }
}
