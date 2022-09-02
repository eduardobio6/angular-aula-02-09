import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'EduardoApp';
  nome = 'Carlos Eduardo'
  nasc = 1997;
  
  getIdade(){
    return 2022 - this.nasc;
  }
}
