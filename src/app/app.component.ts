import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'momments';

  userName = 'gabomoreira'

  userData = {
    email: "gabomoreira@gmail.com",
    role: "admin",
  }
}
