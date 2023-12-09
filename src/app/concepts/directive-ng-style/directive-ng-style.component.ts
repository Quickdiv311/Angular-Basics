import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ng-style',
  templateUrl: './directive-ng-style.component.html',
  styleUrls: ['./directive-ng-style.component.css']
})
export class DirectiveNgStyleComponent {
   isValid: boolean = true;

   onClick()
   {
      this.isValid = !this.isValid;
   }

   getValid()
   {
      return this.isValid ? 'green' : 'red';
   }
}
