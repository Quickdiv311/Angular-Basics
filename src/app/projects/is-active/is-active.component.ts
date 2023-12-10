import { Component } from '@angular/core';

@Component({
  selector: 'app-is-active',
  templateUrl: './is-active.component.html',
  styleUrls: ['./is-active.component.css']
})
export class IsActiveComponent {
  numbers: number[] =  [1,2,3,4];
  current: number = 0;

  changeActive(i : number)
  {
      this.current = i;
  }
}
