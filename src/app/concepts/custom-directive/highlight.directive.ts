import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private rederer: Renderer2) { }

  ngOnInit(){
    // this.elementRef.nativeElement.style.backgroundColor = 'blue';
    // this could give error during change

    // this.rederer.setStyle(this.elementRef, 'background-color', 'blue');
  }

  @HostListener('moveenter') mouseover(eventData: Event){
    this.rederer.setStyle(this.elementRef, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.rederer.setStyle(this.elementRef, 'background-color', 'transparent');
  }
}
