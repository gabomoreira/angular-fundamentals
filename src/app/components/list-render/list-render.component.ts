import { Component } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Animal } from 'src/app/types/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = []

  animal: Animal = {
    id: 7,
    name: 'Turca',
    type: 'Tipo teste',
    age: 12
  }

  animalDetails = ''

  constructor(
    private listService: ListService,
  ) {
    this.getAnimals();
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter(ani => ani.id !== animal.id)
    this.listService.remove(animal.id).subscribe()
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  getAnimals(): void {
    this.listService.getAll().subscribe(animals => this.animals = animals);
  }
}
