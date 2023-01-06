import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatorInputComponent } from './components/calculator-input/calculator-input.component';
import { CalculatorOutputComponent } from './components/calculator-output/calculator-output.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorInputComponent,
    CalculatorOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
