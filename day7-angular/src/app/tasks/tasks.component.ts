import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  inputValue: string = "";

  constructor() {}

  ngOnInit(): void {
    
  }

  demoOut(): void{
    console.log("Sveiki " + this.inputValue + "!");
  }

}
