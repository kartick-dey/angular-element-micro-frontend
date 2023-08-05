import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'baseApplication';

  public mfe1Url = 'http://localhost:8080/microFrontend1.js';
  public mfe2Url = 'http://localhost:8000/microFrontend2.js';
}
