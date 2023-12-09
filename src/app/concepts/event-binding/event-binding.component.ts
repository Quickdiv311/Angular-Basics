import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  myValue = "";
  displayValue = false;

  onBtnClick()
  {
    this.displayValue = true;
    if(this.myValue == "") this.myValue = "please enter a value"; 
  }

  onBtnClickDel()
  {
    this.displayValue = false;
  }

  onInput(event: Event)
  {
    if(this.myValue == "please enter a value") this.displayValue = false;
    this.myValue = (<HTMLInputElement>event.target).value;
    // We are doing this to inform ts that we are getting the value of HTMLInputElement type
  }
}
