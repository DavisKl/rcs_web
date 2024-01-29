import { Injectable } from '@angular/core';
import { Animals } from './animal-listing/animal-listing.component';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  lst:Animals[] = [
  {
    animalName:"Žubīte",
    animalAge: 5,
    animalType: "Kaķis",
    imageLink: "https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_640.jpg"
  },
  {
    animalName:"Žurcis",
    animalAge: 10,
    animalType: "Suns",
    imageLink: "https://viktoriajean.files.wordpress.com/2013/02/pugly.jpg"
  },
  {
    animalName:"Duksis",
    animalAge: 1,
    animalType: "Vārna",
    imageLink: "https://www.allaboutbirds.org/guide/assets/photo/63739491-480px.jpg" 
  }
]

  constructor() { }

  getAnimals() : Animals[]{
    return this.lst;
  }
}
