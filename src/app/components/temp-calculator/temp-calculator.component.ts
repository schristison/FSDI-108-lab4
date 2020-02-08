import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-calculator',
  templateUrl: './temp-calculator.component.html',
  styleUrls: ['./temp-calculator.component.scss']
})
export class TempCalculatorComponent implements OnInit {


  // GLOBAL  VARIABLES
  celcius = '';
  fahrenheit = '';

  constructor() { }

  ngOnInit() {
  }

  convertCtoF() {
    // to change a String to numbers in JavaScript, use +
    var res = +this.celcius * (9 / 5) + 32; // eg (42°C × 9/5) + 32 = 107.6°F
    this.fahrenheit = res.toFixed(2);
  }

  convertFtoC(){
    var res = ( +this.fahrenheit - 32) * (5 / 9)
    this.celcius = res.toFixed(2);
  }

}
