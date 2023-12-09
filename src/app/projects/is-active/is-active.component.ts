import { Component } from '@angular/core';

@Component({
  selector: 'app-is-active',
  templateUrl: './is-active.component.html',
  styleUrls: ['./is-active.component.css']
})
export class IsActiveComponent {
  numbers: number[] =  [1,2,3,4];
  active: boolean[] = [true,false,false,false];

  changeActive(a: boolean[],i : number)
  {
    for(let j=0;j<a.length;j++)
    {
      if(a[j] == true)
      {
        a[j] = false;
        break;
      }
    }
    a[i] = true;
  }
}
