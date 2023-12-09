import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
   numbers: number[] = [];
   num: number = 1;
   isDisplayed = true;

   onClick(){
      this.isDisplayed = !this.isDisplayed;
      this.numbers.push(this.num);
      this.num = this.num + 1;
   }
}
