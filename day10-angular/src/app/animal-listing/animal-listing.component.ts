import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { link } from 'fs';
import { Address } from 'cluster';
import { HttpRequest } from '@angular/common/http';
import path from 'path';
import { Url } from 'url';
import { RouterLink, UrlMatchResult, defaultUrlMatcher } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

  newName(): void{
    let a = parseInt(this.inputValue1) - 1;
    let b = this.inputValue2;

    if(a <= this.lst.length){
      this.lst[a].animalName=b;

    }else{
      alert('Nepareiza ievade!')
    }


  }
  
  
  lst: Animals[] = [
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

  constructor() {
  }

  ngOnInit(): void {
    
  }

}

export interface Animals {
  animalName: string,
  animalAge: number,
  animalType: string,
  imageLink: string
}
