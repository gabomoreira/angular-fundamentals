import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit{
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}


  handleChangeNumber(): void {
    console.log('enviadno evento para elemento pai')
    this.changeNumber.emit()
  }
}
