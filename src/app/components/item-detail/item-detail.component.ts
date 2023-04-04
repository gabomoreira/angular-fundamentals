import { Component } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Animal } from 'src/app/types/Animal';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  animal?: Animal;

  constructor(
    private listService: ListService,
    private route: ActivatedRoute
  ) {
    this.getAnimal();
  }

  getAnimal(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getAnimal(id).subscribe(animal => this.animal = animal)
  }
}
