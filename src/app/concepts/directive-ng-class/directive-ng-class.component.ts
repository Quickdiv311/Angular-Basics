import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ng-class',
  templateUrl: './directive-ng-class.component.html',
  styleUrls: ['./directive-ng-class.component.css']
})
export class DirectiveNgClassComponent {
  isValid: boolean = true;

   onClick()
   {
      this.isValid = !this.isValid;
   }
}
