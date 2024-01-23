import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-string-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './string-list.component.html',
  styleUrl: './string-list.component.css'
})
export class StringListComponent implements OnInit{
  lst: Student[] = [
    {
    firstName: "Janis",
    lastName: "Zalitis"
    },
    {
      firstName: "Juris",
      lastName: "Baba"
    },
    {
      firstName: "Andris",
      lastName: "Guga"
    }
  ]
  
  constructor() {
  }

  ngOnInit(): void {
  }

}

export interface Student {
firstName: string,
lastName: string
}
