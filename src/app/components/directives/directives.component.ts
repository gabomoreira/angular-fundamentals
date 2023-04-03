import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  size: number = 32
  admin: boolean = false
  role: string = this.admin ? 'admin' : 'emplyee'

  classes = ['green-title', 'small-title']
}
