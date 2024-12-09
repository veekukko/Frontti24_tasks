import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display: string = ''; // Shos the current input or result
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'];

  onButtonClick(value: string): void {
    if (value === 'C') {
      this.display = ''; // Clear the display
    } else if (value === '=') {
      
      try {
        this.display = eval(this.display);
      } catch (e) {
        this.display = 'Error'; 
      }
    } else {
      // Avoid entering two operators in a row
      const lastChar = this.display[this.display.length - 1];
      if (this.isOperator(value) && this.isOperator(lastChar)) {
        return; // Ignore the button click
      }
      this.display += value; // Append the button value to the display
    }
  }

  isOperator(value: string): boolean {
    return ['+', '-', '*', '/'].includes(value);
  }
}
