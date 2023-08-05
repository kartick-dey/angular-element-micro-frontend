import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'microFrontend2';
  message = '';
  subscription = new Subscription();

  ngOnInit() {
    this.subscription.add(
      fromEvent(window, 'send-data').subscribe((event: any) => {
        console.log(event);
        this.message = event?.detail || '';
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
