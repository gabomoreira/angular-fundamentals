import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  isShow: boolean = false

  handleShowModal(): void {
    this.isShow = !this.isShow
  }
}
