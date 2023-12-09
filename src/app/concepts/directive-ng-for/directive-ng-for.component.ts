import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ng-for',
  templateUrl: './directive-ng-for.component.html',
  styleUrls: ['./directive-ng-for.component.css']
})
export class DirectiveNgForComponent {
   numbers: number[] = [1,2,3];
   num: string = "";

   onInput(event:Event)
   {
      this.num  = (<HTMLInputElement>event.target).value;
   }

   onClick()
   {
      this.numbers.push(Number(this.num));
      this.num = "";
   }
}
