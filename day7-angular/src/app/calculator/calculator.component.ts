import { Component,  OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit{

  inputValue1 = "";
  inputValue2 = "";

  constructor() {}
  ngOnInit(): void {
    
  }

  add(): void{

    let a = parseInt(this.inputValue1);
    let b = parseInt(this.inputValue2);
    let sum = a+b;
    alert(sum);

  }

  cut(): void{
    let a = parseInt(this.inputValue1);
    let b = parseInt(this.inputValue2);
    let sum = a-b;
    alert(sum);
  }

  multi(): void{
    let a = parseInt(this.inputValue1);
    let b = parseInt(this.inputValue2);
    let sum = a*b;
    alert(sum);
  }

  div(): void{
    let a = parseInt(this.inputValue1);
    let b = parseInt(this.inputValue2);
    let sum = a/b;
    alert(sum);
  }

}
