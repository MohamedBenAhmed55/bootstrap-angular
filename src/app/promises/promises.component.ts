import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css',
})
export class PromisesComponent implements OnInit {
  apple() {
    return true;
  }
  others() {
    return false;
  }

  promisesValue: any;

  ngOnInit(): void {
    let BuyApple = new Promise((resolve, reject) => {
      // resolve('Promises Resolve')
      // reject('Promises Resolve')
      if (this.apple()) {
        return setTimeout(() => {
          resolve('Apple is purchased');
        }, 3000);
      } else if (this.others()) {
        return setTimeout(() => {
          resolve('others fruits is Purchased');
        }, 3000);
      } else {
        return setTimeout(() => {
          reject('No fruits');
        }, 3000);
      }
    });

    BuyApple.then((res) => {
      console.log('then code =>', res);
      this.promisesValue = res;
    }).catch((error) => {
      console.log('then code =>', error);
      this.promisesValue = error;
    });
  }
}
