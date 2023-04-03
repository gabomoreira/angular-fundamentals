import { Injectable } from '@angular/core';
import { Animal } from '../types/Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal) {
    console.log('Ativando o service remove')

    return animals.filter(ani => ani.name !== animal.name)
  }
}
