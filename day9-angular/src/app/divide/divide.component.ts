import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-divide',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './divide.component.html',
  styleUrl: './divide.component.css'
})
export class DivideComponent implements OnInit{
  inputValue1 = "";
  inputValue2 = "";

  constructor() {}
  ngOnInit(): void {
    
  }

  answer(): void{
    let a = parseInt(this.inputValue1);
    let b = parseInt(this.inputValue2);
    let sum = a/b;
    alert(sum);
  }
}
