import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-substraction',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './substraction.component.html',
  styleUrl: './substraction.component.css'
})
export class SubstractionComponent implements OnInit{
  inputValue1 = "";
  inputValue2 = "";

  constructor() {}
  ngOnInit(): void {
    
  }

  answer(): void{
    let a = parseInt(this.inputValue1);
    let b = parseInt(this.inputValue2);
    let sum = a-b;
    alert(sum);
  }

}
