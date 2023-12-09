import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ng-if',
  templateUrl: './directive-ng-if.component.html',
  styleUrls: ['./directive-ng-if.component.css']
})
export class DirectiveNgIfComponent {
  buttonValue = "convert to false";
  isDisplayed = true;

  onClick()
  {
    this.buttonValue = `convert to ${this.isDisplayed}`;
    this.isDisplayed = !this.isDisplayed;
  }
}
