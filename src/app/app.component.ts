import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'EduardoApp';
  nome = 'Carlos Eduardo';
  nasc = 1997;
  counter = 0;
  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 1000);

  getIdade() {
    return 2022 - this.nasc;
  }

  getMinutos() {
    return Math.trunc(this.counter / 60);
  }

  getSegundos() {
    return Math.trunc(this.counter % 60);
  }

  getNumbers() {
    return [2, 5, 7, 13, 22, 69, 100, 103, 99];
  }
}
