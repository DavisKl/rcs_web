import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-listing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './animal-listing.component.html',
  styleUrl: './animal-listing.component.css'
})
export class AnimalListingComponent implements OnInit{
  
    inputValue1 = "";
    inputValue2 = "";

  lst: Animals[] = [];



  newName(): void{
    let a = parseInt(this.inputValue1) - 1;
    let b = this.inputValue2;

    if(a > 0 && a <= this.lst.length){
      this.lst[a].animalName=b;

    }else{
      alert('Nepareiza ievade!')
    }

  }
  constructor(private animalService: AnimalService) {
  }

  ngOnInit(): void { 
    this.getAnimals();
  }

  getAnimals() : void {
    this.lst = this.animalService.getAnimals();
  }
}

export interface Animals {
  animalName: string,
  animalAge: number,
  animalType: string,
  imageLink: string
}
