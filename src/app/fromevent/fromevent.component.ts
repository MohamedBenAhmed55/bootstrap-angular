import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrl: './fromevent.component.css',
})
export class FromeventComponent implements OnInit, AfterViewInit {
  @ViewChild('addtitle') addtitle!: ElementRef;

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    let counter = 1;
    fromEvent(this.addtitle.nativeElement, 'click').subscribe((res) => {
      let counterVal = 'Title' + counter++;
      this.printValue(counterVal);
    });
  }
  printValue(val: any) {
    let element = document.createElement('li');
    element.innerText = val;
    document.getElementById('appendelement')?.appendChild(element);
  }
}
