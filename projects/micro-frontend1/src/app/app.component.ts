import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'microFrontend1';

  sendData() {
    const _customEvent = new CustomEvent('send-data', {
      detail: 'I am sending data to you',
    });
    dispatchEvent(_customEvent);
  }
}
