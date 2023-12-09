import { Component } from '@angular/core';

@Component({
  selector: 'app-onlyshowodd',
  templateUrl: './onlyshowodd.component.html',
  styleUrls: ['./onlyshowodd.component.css']
})
export class OnlyshowoddComponent {
  numbers: number[] =  [1,2,3,4,5];
  even: number[] = [2,4];
  odd: number[] = [1,3,5];
  isOdd : boolean = true;
}
