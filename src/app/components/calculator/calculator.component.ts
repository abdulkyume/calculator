import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  buttons = [
    { id: 12, name: 'AC', value: 'AC' },
    { id: 13, name: '+/-', value: '+/-' },
    { id: 14, name: '%', value: '%' },
    { id: 15, name: '/', value: '/' },
    { id: 7, name: '7', value: '7' },
    { id: 8, name: '8', value: '8' },
    { id: 9, name: '9', value: '9' },
    { id: 16, name: 'X', value: 'X' },
    { id: 4, name: '4', value: '4' },
    { id: 5, name: '5', value: '5' },
    { id: 6, name: '6', value: '6' },
    { id: 17, name: '-', value: '-' },
    { id: 1, name: '1', value: '1' },
    { id: 2, name: '2', value: '2' },
    { id: 3, name: '3', value: '3' },
    { id: 18, name: '+', value: '+' },
    { id: 11, name: 'Reset', value: 'Reset' },
    { id: 10, name: '0', value: '0' },
    { id: 19, name: '.', value: '.' },
    { id: 20, name: '=', value: '=' },
  ];
}
