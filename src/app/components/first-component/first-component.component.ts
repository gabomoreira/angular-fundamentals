import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Gabo"
  age: number = 19
  job: boolean = true
  hobbies: string[] = ['andar', 'correr']
  car = {
    id: 'a',
    name: 'nome do carro'
  }

  constructor() {}

  ngOnInit(): void { }
}
