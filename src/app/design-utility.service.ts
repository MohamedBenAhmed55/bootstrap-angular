import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  newOffer = new Subject<boolean>();
  user = new Subject<any>();
  blog = new ReplaySubject<string>();

  constructor() {}
  printValue(val: any) {
    let element = document.createElement('li');
    element.innerText = val;
    document.getElementById('appendelement')?.appendChild(element);
  }

  setUserName(name: string) {
    this.user.next(name);
  }

  setAddBlog(blog: string) {
    this.blog.next(blog);
  }
}
