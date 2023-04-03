import { Component } from '@angular/core';
import { Animal } from 'src/app/types/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Turca", type: 'Dog', age: 10},
    {name: "Tom", type: 'Cat', age: 11},
    {name: "Frida", type: 'Dog', age: 19},
    {name: "Karlo", type: 'Horse', age: 23},
  ]

  animal: Animal = {
    name: 'Teste',
    type: 'Tipo teste',
    age: 12
  }

  animalDetails = ''

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }
}
