import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent implements OnInit{

  inputValue1 = "";
  inputValue2 = "";
  constructor() {}
  ngOnInit(): void {
    
  }

  answer(): void{

    let a = parseInt(this.inputValue1);
    let b = parseInt(this.inputValue2);
    let sum = a+b;
    alert(sum);

  }

}
