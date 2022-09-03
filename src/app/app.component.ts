import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'TabataApp';
  counter = 0;
  desc = 0;
  text = '-';
  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 100);

  getRound() {
    return Math.trunc(this.counter / 30);
  }

  getSegundos() {
    return Math.trunc(this.counter % 30);
  }

  getZero() {
    if (this.getRound() >= 9) {
      return (this.counter = 0);
    }
  }

  /*getNumbers() {
    return [2, 5, 7, 13, 22, 69, 100, 103, 99];
  }*/
}
